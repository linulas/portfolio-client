import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Nav, Seo } from "../components";
import { Page } from "../graphql/Page";
import "modern-normalize";
import "../styles/normalize";
import Banner from "../components/other/Banner";
import { ParallaxProvider } from "react-scroll-parallax";
//import Contact from "../components/sections/Contact";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";

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
    projectsHeading,
    projects,
    contactHeading,
    contactParagraph,
    references,
  } = attributes;

  const seo = setting?.data?.attributes?.defaultSeo?.data?.attributes;

  return strapi ? (
    <ParallaxProvider>
      {seo && (
        <Seo {...seo} siteName={setting.data?.attributes?.siteName || ""} />
      )}
      <Nav title={setting?.data?.attributes?.siteName || ""} />
      {banner && <Banner {...banner} />}
      <main>
        <About title={aboutHeading} paragraph={aboutParagraph} skills={skills?.data || [] } />
        <Projects items={projects?.data || []}/>
        {/* <Contact /> */}
      </main>
    </ParallaxProvider>
  ) : (
    <div>There was an error fetching the data</div> /** Todo - Make it more fun */
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
                  link
                  linkText
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
        formats
        caption
      }
    }
  }

  fragment MediaEntityRes on Strapi_UploadFileEntityResponse {
    data {
      attributes {
        url
        alternativeText
        formats
        caption
      }
    }
  }
`;

export default IndexPage;
