import React from "react";
import { useSelector } from "react-redux";
import {
  DivisorLine,
  DivisorWrapper,
  DivTitle,
} from "../DivisorBenchmarks/Divisor2Style";
import { SectionWrapper } from "./BenchmarksCardStyle";
import BenchCards from "./BenchCards";

const BenchmarksCard = () => {
  const justBody = useSelector((state) => state.benchmarks.justbody);
  const noBarsHere = useSelector((state) => state.benchmarks.nobarshere);
  const mixItUp = useSelector((state) => state.benchmarks.mixitup);
  const getHeavy = useSelector((state) => state.benchmarks.getheavy);
  return (
    <SectionWrapper>
      <DivisorWrapper>
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>{" "}
        <DivTitle>Just your body</DivTitle>{" "}
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>
      </DivisorWrapper>
      {justBody.map((benchmark) => (
        <BenchCards key={benchmark.number} {...benchmark} />
      ))}
      <DivisorWrapper>
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>
        <DivTitle>No bars here</DivTitle>
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>
      </DivisorWrapper>
      {noBarsHere.map((benchmark) => (
        <BenchCards key={benchmark.number} {...benchmark} />
      ))}
      <DivisorWrapper>
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>
        <DivTitle>Mix it up</DivTitle>
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>
      </DivisorWrapper>
      {mixItUp.map((benchmark) => (
        <BenchCards key={benchmark.number} {...benchmark} />
      ))}
      <DivisorWrapper>
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>
        <DivTitle>Get heavy</DivTitle>
        <DivisorLine
          style={{
            width: "25%",
            borderBottom: "1px solid var(--naranjasuyai)",
          }}
        ></DivisorLine>
      </DivisorWrapper>
      {getHeavy.map((benchmark) => (
        <BenchCards key={benchmark.number} {...benchmark} />
      ))}
    </SectionWrapper>
  );
};

export default BenchmarksCard;
