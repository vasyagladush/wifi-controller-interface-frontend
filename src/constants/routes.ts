export namespace AppRoutes {
  export namespace Open {
    export enum Auth {
      SIGN_IN_START = "/sign-in",
    }
  }
  export namespace Private {
    export enum AccessPoints {
      AP_LIST = "/private/access-points",
      AP_CREATE = "/private/access-points/new",
      AP_EDIT = "/private/access-points/edit",
    }
    export enum Monitor {
      MONITOR = "/private/monitor",
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
