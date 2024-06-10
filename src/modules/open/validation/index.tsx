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

export const passwordFormSchema = yup.object({
  password: yup
    .string()
    .required("required")
    .matches(/^.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?].*$/, "special_character")
    .matches(/^.*[0-9].*$/, "number")
    .matches(/^.*[a-z].*$/, "lowercase")
    .matches(/^.*[A-Z].*$/, "uppercase")
    .matches(/^\S*$/, "spaces")
    .matches(/^.{7,}$/, "min"),
  repeatPassword: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
