import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Nav, Seo } from "../components";
import "../assets/css/main.css";
import { getPage } from "../graphql/getPage";
import "modern-normalize";
import "../styles/normalize";

const IndexPage = () => {
  const { strapi } = useStaticQuery<getPage>(query);
  const { portfolio } = strapi;

  console.log({ portfolio });

  return portfolio && portfolio.settings ? (
    <>
      <Seo {...portfolio.settings} />
      <Nav title={portfolio.settings.siteName} />
      <main>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{portfolio.banner?.title}</h1>
          </div>
        </div>
      </main>
    </>
  ) : (
    <div>Portfolio data was null</div>
  );
};

const query = graphql`
  query getPage {
    strapi {
      portfolio {
        data {
          attributes {
            aboutHeading
            aboutParagraph
            resumeLink {
              ...Link
            }
            skills {
              data {
                attributes {
                  name
                  icon {
                    ...MediaRelRes
                  }
                }
              }
            }
            projectsHeading
            projects {
              data {
                attributes {
                  title
                  description
                  image {
                    ...MediaEntityRes
                  }
                  link {
                    ...Link
                  }
                }
              }
            }
            contactHeading
            contactParagraph
            references {
              data {
                attributes {
                  name
                  icon {
                    ...MediaEntityRes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment Link on Strapi_ComponentCommonLink {
    text
    url
  }

  fragment MediaRelRes on Strapi_UploadFileRelationResponseCollection {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }

  fragment MediaEntityRes on Strapi_UploadFileEntityResponse {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
`;

export default IndexPage;
