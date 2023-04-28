import styled from "styled-components";
export const HeaderWrapper = styled.header`
  height: 7rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row-reverse;
  /* border-radius: 0 0 0.6em 0.6rem; */
  background-color: var(--negroheader);
  /* box-shadow: 2px 2px 6px 1px var(--naranjasuyai); */
  position: sticky;
  top: 0rem;
  z-index: 25;
`;
export const DisplayONOFF = styled.div`
  @media only screen and (min-width: 624px) {
    display: none;
  }
`;
export const HeeaderInfo = styled.div``;

export const Info = styled.h3`
  font-size: 0.8rem;
`;
