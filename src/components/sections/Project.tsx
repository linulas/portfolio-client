import React, { useState, useEffect } from "react";
import HoverImage from "../other/HoverImage";
import { hasWindow } from "../../helpers";
import { Page_strapi_portfolio_data_attributes_projects_data_attributes } from "../../graphql/Page";

export interface ProjectInterface
  extends Page_strapi_portfolio_data_attributes_projects_data_attributes {}

export const projectText = "Hi! I would like to participate in this project.";
export const mailTo = (subject?: string, message?: string) => {
  return `mailto:contact@linusbrannstrom.dev?subject=${subject || ""}&body=${
    message || ""
  }`;
};

const Project: React.FC<ProjectInterface> = ({
  title,
  description,
  link,
  image,
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
    <div>
      {title && (
        <h3 ref={(r) => setWidth((r && r.scrollWidth) || 0)}>{title}</h3>
      )}
      {image && (
        <HoverImage
          image={image as any}
          title={image.data?.attributes?.caption || ""}
          info={link?.url || ""}
          link={link?.text || ""}
          width={width}
        />
      )}
      <p>{description}</p>
      {link && (
        <p>
          {`${image.data?.attributes?.caption} `}
          <a href={link.url}>{link.text}</a>
        </p>
      )}
    </div>
  );
};

export default Project;
