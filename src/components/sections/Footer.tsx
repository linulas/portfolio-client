import React from "react";
import { hasWindow } from "../../helpers";

const Footer: React.FC<{ gitIcon: any }> = ({ gitIcon }) => {
  const date = new Date();
  const year = date.getFullYear();

  const handleClick = () => {
    hasWindow && window.open("https://github.com/linulas");
  };
  return (
    <div>
      <p>Linus Brännström {year}</p>
      <div>
        <div onClick={handleClick}>
          insert image
        </div>
      </div>
      <div>
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
    </div>
  );
};

export default Footer;
