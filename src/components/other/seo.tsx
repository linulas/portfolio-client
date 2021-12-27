import React from "react";
import { Helmet } from "react-helmet";
import { Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes } from "../../graphql/Page";

interface SeoProps
  extends Page_strapi_portfolio_data_attributes_setting_data_attributes_defaultSeo_data_attributes {
  siteName: string;
}

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  image,
  siteName,
}) => {
  const getMetaTags = () => {
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
        (process.env.API_URL || "http://localhost:8000") +
        image.data?.attributes?.url;
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

  const metaTags = getMetaTags();

  return (
    <Helmet
      title={title || "portfolio"}
      titleTemplate={`%s | ${siteName}`}
      link={[
        {
          rel: "icon",
          href: image?.data?.attributes?.url,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Staatliches",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css",
        },
      ]}
      script={[
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js",
        },
        {
          src: "https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js",
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
