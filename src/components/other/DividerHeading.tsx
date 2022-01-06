import React from 'react';

export interface DividerHeadingProps {
  text: string;
  highlight?: string;
}

export const DividerHeading: React.FC<DividerHeadingProps> = ({ text, highlight }) => {
  return (
    <h2 className={`overflow-hidden text-center`}>
      <span className={`inline-block relative divider-lines`}>
        {text}
        {highlight && <span className="text-rust-primary font-black ml-2">{highlight}</span>}
      </span>
    </h2>
  );
};
