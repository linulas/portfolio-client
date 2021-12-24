import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Nav, Seo } from "../components";
import "../assets/css/main.css";
import { Page } from "../graphql/Page";
import "modern-normalize";
import "../styles/normalize";

const IndexPage = () => {
  const { strapi } = useStaticQuery<Page>(query);
  const attributes = strapi.portfolio?.data?.attributes;

  if (!attributes) {
    return null;
  }

  const {
    setting,
    banner,
    aboutHeading,
    aboutParagraph,
    skills,
    resumeLink,
    projectsHeading,
    projects,
    contactHeading,
    contactParagraph,
    references,
  } = attributes;

  const seo = setting?.data?.attributes?.defaultSeo?.data?.attributes;

  console.log({
    setting,
    banner,
    aboutHeading,
    aboutParagraph,
    skills,
    resumeLink,
    projectsHeading,
    projects,
    contactHeading,
    contactParagraph,
    references,
  });

  return setting ? (
    <>
      {seo && <Seo {...seo} siteName={setting.data?.attributes?.siteName || ""} />}
      <Nav title={setting.data?.attributes?.siteName || ''} />
      <main>
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>{banner?.data?.attributes?.title}</h1>
          </div>
        </div>
      </main>
    </>
  ) : (
    <div>Portfolio data was null</div>
  );
};

const query = graphql`
  query Page {
    strapi {
      portfolio {
        data {
          attributes {
            banner {
              data {
                attributes {
                  title
                  subtitle
                  text
                  image {
                    ...MediaEntityRes
                  }
                }
              }
            }
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
            setting {
              data {
                attributes {
                  siteName
                  defaultSeo {
                    data {
                      id
                      attributes {
                        title
                        description
                        image {
                          ...MediaEntityRes
                        }
                      }
                    }
                  }
                }
                id
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
