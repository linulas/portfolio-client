import React, { useState, useEffect } from "react";
import { Div } from "../styled/Elements";
import styled from "@emotion/styled";
import HoverImage from "../other/HoverImage";
import { hasWindow } from "../../helpers";
import { Page_strapi_portfolio_data_attributes_references_data_attributes } from "../../graphql/Page";

export interface ProjectInterface extends ComponentInterface {
  reference?: Page_strapi_portfolio_data_attributes_references_data_attributes;
  fluidImage?: any;
  hoverImageProps?: HoverImageInterface;
}

const Wrapper = styled(Div)`
  padding-right: 16px;
`;

export const projectText = "Hi! I would like to participate in this project.";
export const mailTo = (subject?: string, message?: string) => {
  return `mailto:contact@linusbrannstrom.dev?subject=${subject ||
    ""}&body=${message || ""}`;
};

const Project: React.FC<ProjectInterface> = ({
  reference,
  title,
  paragraph,
  fluidImage,
  hoverImageProps,
}) => {
  const [width, setWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const handleResize = () => {
    setScreenWidth(hasWindow ? window.innerWidth : 0);
  };
  useEffect(() => {
    hasWindow && window.addEventListener("resize", handleResize);
    return () => {
      hasWindow && window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);
  return (
    <Wrapper width={["100%", "50%"]}>
      {title && (
        <h3 ref={(r) => setWidth((r && r.scrollWidth) || 0)}>{title}</h3>
      )}
      {fluidImage && (
        <HoverImage
          fluidImage={fluidImage}
          title={(hoverImageProps && hoverImageProps.title) || ""}
          info={(hoverImageProps && hoverImageProps.info) || ""}
          link={(hoverImageProps && hoverImageProps.link) || ""}
          width={width}
        />
      )}
      <p>{paragraph}</p>
      {reference && (
        <p>
          {`${reference.name} `}
          <a href={reference.link}>{reference.linkText}</a>
        </p>
      )}
    </Wrapper>
  );
};

export default Project;
