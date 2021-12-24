import React from "react";
import SEO from "../components/other/seo";

const NotFoundPage = () => (
  <>
    <SEO
      __typename="Strapi_Seo"
      title="404: Not found"
      description="It looks like you got lost"
      image={null}
      siteName="Portfolio"
    />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </>
);

export default NotFoundPage;
