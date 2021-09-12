import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Nav, Seo } from "../components";
import "../assets/css/main.css";
import { getPage } from "../graphql/getPage";

const IndexPage = () => {
  const { strapi } = useStaticQuery<getPage>(query);
  const { portfolio } = strapi;

  return portfolio && portfolio.settings ? (
    <>
      <Seo {...portfolio.settings} />
      <Nav />
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
        settings {
          siteName
          defaultSEO {
            title
            description
            image {
              url
            }
          }
        }

        banner {
          title
          subtitle
          preamble
          background {
            url
            alternativeText
          }
        }

        about {
          heading
          resumeLink
          paragraph
          skills {
            name
            icon {
              url
              alternativeText
            }
          }
        }

        projects {
          heading
          projects {
            __typename
            title
            description
            link
            image {
              url
              alternativeText
            }
          }
        }

        contact {
          heading
          paragraph
          references {
            name
            link
            icon {
              url
              alternativeText
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
