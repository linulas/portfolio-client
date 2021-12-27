import React from "react";
import { Div } from "../styled/Elements";
import { DividerHeading } from "../other/DividerHeading";
import styled from "@emotion/styled";
import { getEmSize } from "../../styles/mixins";
import { breakpoints } from "../../styles/variables";
import { hasWindow } from "../../helpers";
import { Page_strapi_portfolio_data_attributes_references_data } from "../../graphql/Page";

export interface ContactInterface extends ComponentInterface {
  references: Page_strapi_portfolio_data_attributes_references_data[];
  avatar?: UploadFile;
}

const Wrapper = styled(Div)`
  .gatsby-image-wrapper {
    width: 272px;
    height: 272px;
  }
  .paragraph {
    padding-right: 24px;
  }

  .social-icons {
    width: 100%;
    display: flex;
    margin-bottom: 16px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      padding-right: 24px;
      cursor: pointer;
      &:hover {
        filter: brightness(110%);
      }
    }
  }
  @media screen and (min-width: ${getEmSize(breakpoints.sm)}em) {
    .gatsby-image-wrapper {
      margin: auto;
    }
    ul {
      margin: auto;
    }
  }
  @media screen and (min-width: ${getEmSize(breakpoints.md)}em) {
    .gatsby-image-wrapper {
      margin-right: 16px;
      float: right;
    }
    ul {
      margin: 0;
    }
  }
`;

const Contact: React.FC<ContactInterface> = ({title, paragraph, avatar, references}) => {

  const handleClick = (url: string) => {
    hasWindow && window.open(url);
  };
  return (
    <Wrapper position="relative">
      <Div position="absolute" id={"contact"} top={-70} />
      <DividerHeading text={title || ""} highlight="me" />
      <Div display={["flex"]} direction={["column", "column", "row"]}>
        <Div width={["100%"]}>
          <p className="paragraph">{paragraph}</p>
          <div></div>
          <Div className="social-icons">
            <ul>
              {references.map((reference, index) => {
                return (
                  <li key={`contact-${index}`}>
                    {reference?.attributes?.icon && (
                      <span onClick={() => handleClick(reference.attributes?.link || "")}>
                        insert image
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </Div>
        </Div>
        <Div width={["100%", "100%", "50%"]}>
          {avatar && (
            <div>insert image</div>
          )}
        </Div>
      </Div>
    </Wrapper>
  );
};

export default Contact;
