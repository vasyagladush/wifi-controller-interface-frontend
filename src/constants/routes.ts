export namespace AppRoutes {
  export namespace Open {
    export enum Auth {
      SIGN_IN_START = "/sign-in",
    }
  }
  export namespace Private {
    export enum Inventory {
      PRODUCT_LIST = "/private/inventory/products",
      PRODUCT_LIST_STOCK = "/private/inventory/products/stock",
      PRODUCT_CREATE = "/private/inventory/products/new",
      PRODUCT_EDIT = "/private/inventory/products/edit",
      CATEGORIES = "/private/inventory/categories",
    }
    export enum Profile {
      PROFILE_SETTINGS = "/private/profile/settings",
    }
    export enum Settings {
      API_KEYS = "/private/settings/api-keys",
      API_KEYS_GENERATE = "/private/settings/api-keys/create",
    }
  }
}
