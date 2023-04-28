import styled from "styled-components";
export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2.5rem;
  height: 100%;
  position: relative;
  top: -6rem;
  & a {
    text-decoration: none;
    color: white;
  }
`;
