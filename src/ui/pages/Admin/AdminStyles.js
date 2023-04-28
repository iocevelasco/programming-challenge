import styled from "styled-components";

import { Formik as FormikContainer, Form as FormikForm } from "formik";
export const AdminWrapper = styled.div`
  display: flex;
  width: 99.5vw;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;
export const AdminTitle = styled.div``;

export const CargaDatosStyled = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Formik = styled(FormikContainer)`
  display: flex;

  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
`;
