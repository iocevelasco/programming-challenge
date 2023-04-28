import styled from "styled-components";
export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1.5rem 2rem;
  color: black;
  text-align: center;
  background-color: var(--naranjasuyai);
  border-radius: 15px;
  border: ${({ isError }) => (isError ? "1px solid #fb103d " : "none")};
  outline: none;
  caret-color: white;

  ::placeholder {
    opacity: 80%;
  }
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
