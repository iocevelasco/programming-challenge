import styled from "styled-components";
import { motion } from "framer-motion";
export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 60%;
  gap: 1.5rem;
  & a {
    text-decoration: none;
    color: white;
  }
  @media only screen and (max-width: 624px) {
    display: none;
  }
`;
export const NavButton = styled(motion.button)`
  width: 100%;
  height: 2.8rem;
  padding: 0.5rem;
  background-color: var(--naranjasuyai);
  border: none;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow: 2px 2px 6px 1px var(--negroheader);
  cursor: pointer;
`;
export const LinkContainerStyled = styled.div`
  font-size: 1.2rem;
  color: ${(props) => (props.home ? "#ff9d01" : "#ff9300")};
`;

export const LinksContainerStyled = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  a {
    padding: 1rem 1.5rem;
  }

  a:first-child {
    background: var(--orange-bg);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;
export const UserContainerStyled = styled(LinkContainerStyled)`
  display: flex;
  align-items: center;
`;
export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const UserImageStyled = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 100px;
  cursor: pointer;
`;

export const SpanStyled = styled.span`
  font-size: 1.5rem;
  &:hover {
    text-decoration: underline;
  }
`;
