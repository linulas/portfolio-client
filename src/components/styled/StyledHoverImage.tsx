import styled from "@emotion/styled";

const animationSpeed = "0.3s";

interface StyledHoverImageProps {
  width?: number;
}

export const StyledHoverImage = styled("div")<StyledHoverImageProps>`
  .tile {
    display: inline-block;
    overflow: hidden;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    .gatsby-image-wrapper {
      transition: transform 0.2s;
      width: ${(props) => props.width}px;
    }

    &:before {
      content: "";
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
      width: 100%;
      height: 50%;
      opacity: 0;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 2;
      transition-property: top, opacity;
      transition-duration: ${animationSpeed};
      transition: transform 0.2s ease;
    }

    .details {
      width: 100%;
      font-size: 16px;
      padding: 20px;
      color: #fff;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 3;

      span {
        display: block;
        opacity: 0;
        position: relative;
        top: 100px;
        transition-property: top, opacity;
        transition-duration: ${animationSpeed};
        transition-delay: 0s;
      }

      .text {
        float: left;
        .title {
          line-height: 1;
          font-weight: 600;
          font-size: 18px;
        }

        .info {
          line-height: 1.2;
          margin-top: 5px;
          font-size: 12px;
        }
      }

      .arrow {
        float: right;
        svg {
          transform: rotate(180deg);
          fill: white;
        }
      }
    }

    &:focus,
    &:hover {
      .gatsby-image-wrapper {
        transform: scale(1.03);
        filter: brightness(90%);
      }
      &:before,
      span {
        opacity: 1;
      }

      &:before {
        top: 50%;
      }

      span {
        top: 0;
      }

      .title {
        transition-delay: 0.05s;
      }

      .info {
        transition-delay: 0.15s;
      }
    }
  }
`;
