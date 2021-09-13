import { dimensions, fonts, colors, breakpoints } from "./variables";
import { getEmSize } from "./mixins";

export default`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.black};
    background-color: white;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: ${colors.blue.primary};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  .card {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    img {
      padding: 8px;
      background-color: white;
    }
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.silver};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.silver.primary};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.silver.hover};
        }
        tr {
          background-color: ${colors.silver.hover};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.black};
    font-family: ${fonts.openSans};
    font-weight: 800;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 2.5rem;
    font-size: ${dimensions.headingSizes.mobile.h1}rem;
    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      font-size: ${dimensions.headingSizes.h1}rem;
    margin-bottom: 3rem;
    }
  }

  h2 {
      margin-top: 3rem;
    margin-bottom: 1.25rem;
    font-size: ${dimensions.headingSizes.mobile.h2}rem;
    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      margin-bottom: 1.5rem;
      margin-top: 4rem;
      font-size: ${dimensions.headingSizes.h2}rem;
    }
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: .75rem;
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      font-size: ${dimensions.fontSize.large}px;
      line-height: ${dimensions.lineHeight.large}em;
    }
  }

  strong {
    color: ${colors.black};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.silver};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.silver};
    color: ${colors.black.hover};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`;
