import React from "react";
import styled from "@emotion/styled";
import { hasWindow } from "../helpers";

const Wrapper = styled("div")`
  background-color: #c0c0c0;
  p {
    text-align: center;
    margin-top: 32px;
  }

  .git {
    display: flex;
    > div {
      margin: auto;
    }
    .gatsby-image-wrapper {
      cursor: pointer;
      &:hover {
        filter: brightness(190%);
      }
    }
  }

  .references {
    display: flex;
    margin: 16px 0 16px 0;
    ul {
      margin: auto;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      font-size: 10px;
      li {
        padding-right: 4px;
      }
    }
  }
`;

const Footer: React.FC<{ gitIcon: any }> = ({ gitIcon }) => {
  const date = new Date();
  const year = date.getFullYear();

  const handleClick = () => {
    hasWindow && window.open("https://github.com/linulas");
  };
  return (
    <Wrapper>
      <p>Linus Brännström {year}</p>
      <div className="git">
        <div onClick={handleClick}>
          insert image
        </div>
      </div>
      <div className="references">
        <ul>
          <li>Icons made by: </li>
          <li>
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect
            </a>
          </li>
          <li>
            and{" "}
            <a href="https://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
            ,
          </li>
          <li>
            <a href="https://www.erikeliasson.io/work" title="erikeliasson">
              Erik Eliasson
            </a>{" "}
            from{" "}
            <a href="https://www.iconfinder.com" title="Iconfinder">
              www.iconfinder.com
            </a>
            ,
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Footer;
