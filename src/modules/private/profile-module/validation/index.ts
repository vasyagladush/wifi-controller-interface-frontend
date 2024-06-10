import * as yup from "yup";

export const profileSettingsSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().email().required(),
});
