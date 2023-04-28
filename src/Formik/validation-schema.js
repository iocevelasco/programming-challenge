import * as Yup from "yup";
import { regEmail } from "./regExp";
export const loginValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, "Mail no válido"),
  password: Yup.string()
    .min(6, "Minimo de caracteres: 6")
    .required("Campo requerido"),
});
