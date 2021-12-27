import React from "react";
import { colors } from "../../styles/variables";

export interface DividerHeadingProps {
  text: string;
  highlight?: string;
}

export const DividerHeading: React.FC<DividerHeadingProps> = ({
  text,
  highlight,
}) => {
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
    <div>
      <h2>
        <span className="text">
          {text}
          {highlight && <span className="highlight">{highlight}</span>}
        </span>
      </h2>
    </div>
  );
};
