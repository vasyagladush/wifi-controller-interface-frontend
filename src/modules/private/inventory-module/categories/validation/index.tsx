import * as yup from "yup";

export const categoryCreationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("This field is required")
    .min(2, "Name should contain at least 1 character"),
  slug: yup.string(),
  description: yup.string(),
});
