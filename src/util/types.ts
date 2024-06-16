import { components } from "./backend-api-types";

// TODO: generate types from backend's swagger (.json to .ts)
export type UserApiType = any;
export type Product = any;
export type CategoryApiType = any;
export type ApiKeyApiType = any;
export type WithId<T> = T & { id: string };
export type ProductApiType = any;
export type ProductVariantApiType = any;
export type RestProps = any;
export type BrandApiType = any;

export type AccessPointTypeForTables = Omit<
  components["schemas"]["APSchema"],
  "networks"
> & {
  subRows: Array<
    components["schemas"]["APSchema"]["networks"][number] & {
      parent: components["schemas"]["APSchema"];
    }
  >;
};
