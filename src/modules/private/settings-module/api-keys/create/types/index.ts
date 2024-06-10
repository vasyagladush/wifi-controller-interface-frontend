// import { ApiKeyStatus } from "@fena/toolkit-types";

export interface ApiKeyFormValues {
  name: string;
  description?: string;
  role: string;
  webhookUrl: string;
  redirectUrl: string;
  status: any;
}
