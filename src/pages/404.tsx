import React from "react";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <>
    <SEO
      seo={{
        metaTitle: "404: Not found",
        metaDescription: "It looks like you got lost",
      }}
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </>
);

export default NotFoundPage;
