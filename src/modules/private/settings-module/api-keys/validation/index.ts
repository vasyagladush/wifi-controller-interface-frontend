import * as yup from "yup";

export const createApiKeySchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Too short")
    .required("Name is required")
    .matches(/^[^\s]/, "Cannot start with a space, tab, or newline"),
  description: yup
    .string()
    .max(2000, "Description should be no longer than 2000 symbols"),
  role: yup.string().required("Role is required"),
  redirectUrl: yup
    .string()
    .required("Redirect URL is required")
    .matches(/^[^\s]/, "Cannot start with a space, tab, or newline")
    .url("This field must be a valid URL"),
  webhookUrl: yup
    .string()
    .required("Webhook URL is required")
    .matches(/^[^\s]/, "Cannot start with a space, tab, or newline")
    .url("This field must be a valid URL"),
  status: yup.string().required("Status is required"),
});
