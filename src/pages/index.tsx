import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../assets/css/main.css";

const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{data.Portfolio.title}</h1>
        </div>
      </div>
    </>
  );
};

const query = graphql`
  query {
    
  }
`;

export default IndexPage;
