import React from "react";
import InputCarga from "../../Components/InputCarga/InputCarga";
import {
  AdminTitle,
  AdminWrapper,
  CargaDatosStyled,
  Formik,
  Form,
} from "./AdminStyles";
import Submit from "../../Components/Submit/Submit";
import { loadInitialValues } from "../../Formik/initial-values";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as cargaplaniActions from "../../Redux/cargaplani/cargaplani-actions";
import Loader from "../../Components/Loader/Loader";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <AdminWrapper>
      <AdminTitle>¡Bienvenido!</AdminTitle>
      <CargaDatosStyled>
        <h2>Carga de planificacion</h2>
        <Formik
          initialValues={loadInitialValues}
          onSubmit={async (values) => {
            const orderData = {
              PlaniDetails: { ...values },
            };
            console.log({ orderData });
            try {
              await dispatch(cargaplaniActions.createOrder(orderData));
              navigate("/felicitaciones");
            } catch (error) {
              alert("Error al crear la orden");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputCarga
                name="core"
                htmlFor="core"
                type="text"
                id="core"
                placeholder="Core"
              >
                Core
              </InputCarga>
              <InputCarga
                name="weightlifting"
                htmlFor="weightlifting"
                type="text"
                id="weightlifting"
                placeholder="WeightLifting"
              >
                WeightLifting
              </InputCarga>
              <InputCarga
                name="session"
                htmlFor="session"
                type="text"
                id="session"
                placeholder="Session"
              >
                Session
              </InputCarga>
              <InputCarga
                name="wod"
                htmlFor="wod"
                type="text"
                id="wod"
                placeholder="Wod"
              >
                Wod
              </InputCarga>
              <InputCarga
                name="accesesorios"
                htmlFor="accesesorios"
                type="text"
                id="accesesorios"
                placeholder="Accesesorios"
              >
                Accesesorios
              </InputCarga>
              <Submit>{isSubmitting ? <Loader /> : "Cargar"}</Submit>
            </Form>
          )}
        </Formik>
      </CargaDatosStyled>
    </AdminWrapper>
  );
};

export default Admin;
