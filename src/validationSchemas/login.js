import * as yup from "yup";

export const longinValidationSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .min(5, "too short")
    .max(1000, "too long")
    .required("Password is required"),
});
