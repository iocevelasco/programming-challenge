import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../Components/LoginInput/LoginInput";
import {
  Form,
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginPasswordStyled,
  LoginEmailStyled,
  LoginInfo,
} from "./LoginStyle";
import Submit from "../../Components/Submit/Submit";
import {
  signInUser,
  signInWithGoogle,
  createUserProfileDocument,
} from "../../Firebase/firebase-utils";
import { loginValidationSchema, loginInitialValues } from "../../Formik";
const Login = () => {
  return (
    <LoginContainerStyled>
      <h2>Iniciar Sesión</h2>
      <LoginInfo>Usa tu cuenta de gmail para acceder a tu cuenta</LoginInfo>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          try {
            const { user } = await signInUser(values.email, values.password);
            createUserProfileDocument(user);
          } catch (error) {
            if (error.code === "auth/wrong-password") {
              alert("Contraseña incorrecta");
            }
            if (error.code === "auth/user-not-found") {
              alert("Usuario no encontrado");
            }
          }
        }}
      >
        <Form>
          {/* <LoginInput name="email" type="text" placeholder="Email" />
          <LoginInput name="password" type="password" placeholder="Password" />
          <Link to="/forgot-password">
            <LoginPasswordStyled>
              ¿Olvidaste la contraseña? Reestablecela
            </LoginPasswordStyled>
          </Link>
          <Submit>Ingresar</Submit>
          <p>O podés ingresar con</p> */}
          <LoginButtonGoogleStyled type="button" onClick={signInWithGoogle}>
            <img
              src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png"
              alt="Google logo"
            />
            Google
          </LoginButtonGoogleStyled>
          {/* <Link to="/register">
            <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
          </Link> */}
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
