import React from "react";
import styled from "@emotion/styled";
import { colors } from "../styles/variables";

export interface DividerHeadingProps {
  text: string;
  highlight?: string;
}

export const DividerHeading: React.FC<DividerHeadingProps> = ({
  text,
  highlight,
}) => {
  const DividerWrapper = styled("div")`
    line-height: 0.5;
    overflow: hidden;
    text-align: center;

    span {
      display: inline-block;
      position: relative;
    }

    .text:before,
    .text:after {
      content: "";
      position: absolute;
      height: 10px;
      border-bottom: 2px solid ${colors.silver.primary};
      border-top: 2px solid ${colors.silver.primary};
      top: 50%;
      width: 100%;
    }

    .text:before {
      right: 100%;
      margin-right: 15px;
    }

    .text:after {
      left: 100%;
      margin-left: 15px;
    }

    .highlight {
      font-weight: 900;
      color: ${colors.bronze.primary};
      padding-left: 8px;
    }
  `;

  /*   const Heading: React.FC = () => {
    switch (level) {
      case 1:
        return <h1>{Children}</h1>;
      case 2:
        return <h2>{() => Children}</h2>;
      default:
        return <h1>{Children}</h1>;
    }
  }; */

  return (
    <DividerWrapper>
      <h2>
        <span className="text">
          {text}
          {highlight && <span className="highlight">{highlight}</span>}
        </span>
      </h2>
    </DividerWrapper>
  );
};
