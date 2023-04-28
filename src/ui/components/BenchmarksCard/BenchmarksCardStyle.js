import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;

  gap: 0.8rem;
  margin-bottom: 2rem;
`;

export const BenchCard = styled.div`
  width: 20rem;
  height: 20rem;
  border: solid 1px white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.5rem;
  text-align: center;
`;

export const CardTitle = styled.h2`
  color: var(--naranjasuyai);
  font-size: 2.5rem;
`;
export const CardSubTitle = styled.h3``;
export const CardInfo = styled.p`
  width: 80%;
`;
export const CardWeight = styled.p``;
