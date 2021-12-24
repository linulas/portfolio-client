import React from "react";
import { StyledHoverImage } from "../styled";

interface HoverImageProps {
  fluidImage: any;
  link: string;
  title: string;
  info: string;
  width: number;
  imgAlt?: string;
}

const HoverImage: React.FC<HoverImageProps> = ({
  link,
  title,
  info,
  width,
}) => {
  return (
    <StyledHoverImage width={width}>
      <a className="tile" href={link}>
        insert image
        <div className="details">
          <div className="text">
            <span className="title">{title}</span>
            <span className="info">{info}</span>
          </div>
          <span className="arrow">
            <svg
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h48v48h-48z" fill="none" />
              <path d="M40 22h-24.34l11.17-11.17-2.83-2.83-16 16 16 16 2.83-2.83-11.17-11.17h24.34v-4z" />
            </svg>
          </span>
        </div>
      </a>
    </StyledHoverImage>
  );
};

export default HoverImage;
