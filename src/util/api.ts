// import { stringify } from "querystring";
import { appendNestedObjectToFormData } from "./data-utils";
import { useSearchParams } from "react-router-dom";
import { AppRoutes } from "../constants/routes";
import { useNavigateParams } from "../hooks/useNavigateParams";
import { UserApiType, CategoryApiType, Product } from "./types";
import { stringify } from "qs";
import { components } from "./backend-api-types";

const apiUrl = process.env.REACT_APP_PUBLIC_API_URL as string;

// TODO

class Api {
  private readonly mainUrl: string;
  private readonly defaultHeaders: Headers;

  constructor(url: string) {
    this.mainUrl = url;
    this.defaultHeaders = new Headers();
    this.defaultHeaders.set("Content-type", "application/json");
    const token = localStorage.getItem("accessToken");
    if (token) this.defaultHeaders.set("Authorization", `Bearer ${token}`);
  }

  async fetcher(url: string, init: RequestInit) {
    const result = await fetch(url, init);
    if (!result.ok) {
      if (result.status === 401) {
        const navigate = useNavigateParams();
        const [searchParams] = useSearchParams();
        navigate(AppRoutes.Open.Auth.SIGN_IN_START, searchParams);
        // await this.renewToken();
        // const retryResult = await fetch(url, init);
        // if (!retryResult.ok && retryResult.status === 401) {
        //   const error = await result.json();
        //   throw { status: result.status, error };
        // } else {
        //   return retryResult;
        // }
      }

      const error = await result.json();
      throw { status: result.status, error };
    }
    return result;
  }

  async login(data: {
    username: string;
    password: string;
  }): Promise<{ accessToken: string }> {
    const url = new URL(this.mainUrl + "users/login");
    const result = await this.fetcher(url.toString(), {
      method: "POST",
      body: JSON.stringify(data),
      headers: this.defaultHeaders,
    });
    const creds = await result.json();
    console.log("ACQUIRED TOKEN: ", creds.accessToken);
    localStorage.setItem("accessToken", creds.accessToken);
    this.updateHeadersWithToken(creds.accessToken);
    return { accessToken: creds.accessToken };
  }

  // async renewToken() {
  //   const session = await Auth.currentSession();
  //   const accessToken = session.getIdToken();
  //   const jwt = accessToken.getJwtToken();
  //   this.updateHeadersWithToken(jwt);
  // }

  updateHeadersWithToken(token: string | null | undefined) {
    if (token) this.defaultHeaders.set("Authorization", `Bearer ${token}`);
    else this.defaultHeaders.delete("Authorization");
  }

  async getUser(): Promise<UserApiType> {
    const url = new URL(this.mainUrl + "users");
    console.log("HERE: ", this.defaultHeaders.get("Authorization"));
    const result = await this.fetcher(url.toString(), {
      method: "GET",
      headers: this.defaultHeaders,
    });
    const data = await result.json();
    return data;
  }

  async postToConsole(args: Array<string>) {
    const url = new URL(this.mainUrl + "console");

    const payload: components["schemas"]["CmdSchema"] = {
      cmd: args[0],
      args: args.splice(1),
    };

    const result = await this.fetcher(url.toString(), {
      method: "POST",
      headers: this.defaultHeaders,
      body: JSON.stringify(payload),
    });

    console.log(result);

    return await result.json();
  }

  async getCategories(customFilter?: Record<string, any>): Promise<any> {
    // const queryString = stringify({
    //   ...customFilter,
    // });
    const url = new URL(`${this.mainUrl}internal/inventory/category/list`);
    const result = await this.fetcher(url.toString(), {
      method: "GET",
      headers: this.defaultHeaders,
    });
    const data = await result.json();
    return data.data;
  }

  async getCategory(id: string): Promise<any> {
    const url = new URL(
      `${this.mainUrl}internal/inventory/category/${id}/data`
    );
    const result = await this.fetcher(url.toString(), {
      method: "GET",
      headers: this.defaultHeaders,
    });
    const data = await result.json();
    return data.data;
  }

  async createCategory(data: Partial<CategoryApiType>, image?: File | null) {
    const url = new URL(this.mainUrl + "internal/inventory/category/create");
    const fd = new FormData();
    appendNestedObjectToFormData(fd, data);
    if (image) fd.append("File", image);
    const modifiedHeaders = new Headers(this.defaultHeaders);
    modifiedHeaders.delete("Content-Type");
    const result = await this.fetcher(url.toString(), {
      method: "POST",
      headers: modifiedHeaders,
      body: fd,
    });
    return await result.json();
  }

  async deleteCategory(data: { categoryId: string; newCategoryId: string }) {
    const url = new URL(this.mainUrl + "internal/inventory/category/delete");
    const result = await this.fetcher(url.toString(), {
      method: "POST",
      body: JSON.stringify(data),
      headers: this.defaultHeaders,
    });

    return await result.json();
  }

  async updateCategory(
    data: Partial<CategoryApiType>,
    id: string,
    image?: File | null
  ) {
    const url = new URL(
      this.mainUrl + `internal/inventory/category/${id}/update`
    );
    const fd = new FormData();
    appendNestedObjectToFormData(fd, data);
    if (image) fd.append("File", image);
    const modifiedHeaders = new Headers(this.defaultHeaders);
    modifiedHeaders.delete("Content-Type");
    const result = await this.fetcher(url.toString(), {
      method: "PUT",
      body: fd,
      headers: modifiedHeaders,
    });
    return await result.json();
  }

  /* Products */
  async createProduct(product: Partial<Product>) {
    const url = new URL(this.mainUrl + "internal/inventory/product/create");
    const result = await this.fetcher(url.toString(), {
      method: "POST",
      body: JSON.stringify(product),
      headers: this.defaultHeaders,
    });
    return await result.json();
  }

  async getAccessPoints(
    page: number,
    limit: number,
    filter?: Record<string, any>
  ): Promise<components["schemas"]["GetAPsSchema"]> {
    try {
      const queryString = stringify({
        limit,
        page,
        ...filter,
      });

      const url = new URL(this.mainUrl + `access-points/?${queryString}`);
      const result = await this.fetcher(url.toString(), {
        method: "GET",
        headers: this.defaultHeaders,
      });

      const data = await result.json();

      return data;
    } catch (e: any) {
      console.warn(e);
      throw e;
    }
  }

  async getProduct(id: string) {
    try {
      const url = new URL(
        `${this.mainUrl}internal/inventory/product/${id}/data`
      );
      const result = await this.fetcher(url.toString(), {
        method: "get",
        headers: this.defaultHeaders,
      });
      const data = await result.json();
      return data.data;
    } catch (e: any) {
      console.warn(e);
    }
  }

  async updateProduct(id: string, product: Partial<Product>) {
    try {
      const url = new URL(
        `${this.mainUrl}internal/inventory/product/${id}/update`
      );
      const result = await this.fetcher(url.toString(), {
        method: "PUT",
        body: JSON.stringify(product),
        headers: this.defaultHeaders,
      });

      return await result.json();
    } catch (e: any) {
      console.warn(e);
    }
  }

  async deleteProduct(id: string) {
    try {
      const url = new URL(
        `${this.mainUrl}internal/inventory/product/${id}/delete`
      );
      const result = await this.fetcher(url.toString(), {
        method: "POST",
        headers: this.defaultHeaders,
      });
      const data = await result.json();
      return data.data;
    } catch (e: any) {
      console.warn(e);
    }
  }
}

export default new Api(apiUrl);
