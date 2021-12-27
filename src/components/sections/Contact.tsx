import React from "react";
import { DividerHeading } from "../other/DividerHeading";
import { hasWindow } from "../../helpers";
import { Page_strapi_portfolio_data_attributes_references_data } from "../../graphql/Page";

export interface ContactInterface extends ComponentInterface {
  references: Page_strapi_portfolio_data_attributes_references_data[];
  avatar?: UploadFile;
}

const Contact: React.FC<ContactInterface> = ({title, paragraph, avatar, references}) => {

  const handleClick = (url: string) => {
    hasWindow && window.open(url);
  };
  return (
    <div>
      <div id={"contact"} />
      <DividerHeading text={title || ""} highlight="me" />
      <div>
        <div>
          <p>{paragraph}</p>
          <div></div>
          <div>
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
          </div>
        </div>
        <div>
          {avatar && (
            <div>insert image</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
