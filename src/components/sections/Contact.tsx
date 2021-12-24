import React from "react";
import { ComponentInterface } from "../../typescript/interfaces";
import { Reference } from "../../typescript/types";
import { Div } from "../styled/Elements";
import { getIcon } from "./Skills";
import { DividerHeading } from "../other/DividerHeading";
import styled from "@emotion/styled";
import { getEmSize } from "../../styles/mixins";
import { breakpoints } from "../../styles/variables";
import { hasWindow } from "../../helpers";

export interface ContactInterface extends ComponentInterface {
  references: Reference[];
  icons: any;
  avatar: any;
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

const Contact: React.FC<ContactInterface> = (props) => {
  const { avatar } = props;
  const icons = props.icons.edges;

  const handleClick = (url: string) => {
    hasWindow && window.open(url);
  };
  return (
    <Wrapper position="relative">
      <Div position="absolute" id={"contact"} top={-70} />
      <DividerHeading text={props.title || ""} highlight="me" />
      <Div display={["flex"]} direction={["column", "column", "row"]}>
        <Div width={["100%"]}>
          <p className="paragraph">{props.paragraph}</p>
          <Div className="social-icons">
            <ul>
              {props.references.map((reference, index) => {
                const fixed = getIcon(
                  reference.icon ? reference.icon.name : "",
                  icons
                );
                return (
                  <li key={`contact-${index}`}>
                    {fixed && reference.icon && (
                      <span onClick={() => handleClick(reference.link)}>
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
