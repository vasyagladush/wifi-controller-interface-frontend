import * as yup from "yup";

export const signInSchema = yup.object({
  username: yup
    .string()
    .required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const emailSchema = yup.object({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
});
