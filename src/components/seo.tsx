import React from "react";
import { Helmet } from "react-helmet";
import { getPage_strapi_portfolio_settings, getPage_strapi_portfolio_settings_defaultSEO } from "../graphql/getPage";

export const Seo : React.FC<getPage_strapi_portfolio_settings> = ({siteName, defaultSEO}) => {
  console.log({siteName, defaultSEO})

  const getMetaTags = (seo: getPage_strapi_portfolio_settings_defaultSEO) => {
  const { title, description, image } = seo;
    const tags = [];

    if (title) {
      tags.push(
        {
          property: "og:title",
          content: title,
        },
        {
          name: "twitter:title",
          content: title,
        }
      );
    }
    if (description) {
      tags.push(
        {
          name: "description",
          content: description,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          name: "twitter:description",
          content: description,
        }
      );
    }
    if (image) {
      const imageUrl =
        (process.env.GATSBY_ROOT_URL || "http://localhost:8000") +
        image.url;
      tags.push(
        {
          name: "image",
          content: imageUrl,
        },
        {
          property: "og:image",
          content: imageUrl,
        },
        {
          name: "twitter:image",
          content: imageUrl,
        }
      );
    }
    tags.push({ name: "twitter:card", content: "summary_large_image" });

    return tags;
  };

  const metaTags = defaultSEO ? getMetaTags(defaultSEO) : [];

  return (
    <Helmet
      title={defaultSEO?.title || 'portfolio'}
      titleTemplate={`%s | ${siteName}`}
      link={[
        {
          rel: "icon",
          href: defaultSEO?.image?.url,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Staatliches",
        },
        {
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
        },
      ]}
      script={[
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
        },
        {
          src:
            "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
        },
      ]}
      meta={metaTags}
    />
  );
};

export default Seo;
