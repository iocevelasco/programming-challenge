import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: var(--gray-bg);
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

  color: var(--negroheader);
  width: 450px;
  top: 100px;
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      opacity: 90%;
    }
  }
`;

export const LinkStyled = styled(Link)`
  color: var(--negroheader);
  &:hover {
    opacity: 90%;
  }
`;

export const UsernameStyled = styled.h2`
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
`;
