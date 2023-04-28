import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components";

export const ContainerStyled = styled(motion.div)`
  position: fixed;
  top: 6rem;
  left: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  width: 470px;
  height: calc(100vh - 5.5rem);
  padding: 2rem;
  border-radius: 0rem 1rem 1rem 0rem;
  box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.3);
  background: #c02425; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f0cb35,
    #c02425
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f0cb35,
    #c02425
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  color: var(--blanco);
  opacity: 98%;
  @media only screen and (max-width: 624px) {
    width: 95%;
    margin-right: 0.5rem;
  }
`;

export const CloseButtonContainerStyled = styled.div`
  height: 32px;
  position: relative;
  top: -1.8rem;
  right: -23rem;

  & :hover {
    background-color: var(--naranja2);
    color: white;
  }
  @media only screen and (max-width: 624px) {
    right: -18rem;
  }
`;

export const CloseButtonStyled = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: var(--negroheader);
  color: white;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 0 2rem 0;

  & h1 {
    margin-top: 0;
  }
`;

export const MainContainerStyled = styled.div`
  height: 55%;
  width: 100%;
  position: relative;
  top: -4rem;
`;

export const ProductsWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 400px;
  margin: 0 auto;
  padding: 1rem;
  padding-left: 0;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }
  @media only screen and (max-width: 624px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1000px) and (min-width: 624px) {
  }
  @media (max-height: 800px) {
    height: 300px;
  }
`;

export const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 360px;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.3);
  padding: 0.8rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  & img {
    width: 60px;
    height: 60px;
    border-radius: 16px;
    object-fit: cover;
  }
  @media only screen and (max-width: 624px) {
    width: 260px;

    /* font-size: 1rem; */
    & img {
      width: 40px;
      height: 40px;
      border-radius: 16px;
      object-fit: cover;
    }
  }
`;

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 190px;
`;

export const CardTitleStyled = styled.h3`
  margin: 0;
  margin-bottom: 2px;
  font-weight: 500;
  @media only screen and (max-width: 624px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const TextStyled = styled.p`
  margin: 0;
  color: #666;
  font-size: 1rem;
`;

export const PriceStyled = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
`;

export const PriceContainerStyled = styled.div`
  z-index: 1000;
  margin-top: 2rem;
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const SubtotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EnvioStyled = styled(SubtotalStyled)``;

export const TotalStyled = styled(SubtotalStyled)``;

export const ButtonContainerStyled = styled(SubtotalStyled)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const QuantityContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;

  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;
