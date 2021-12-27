import React, { useEffect, useState } from "react";
import VSensor from "react-visibility-sensor";
import { getEmSize } from "../../styles/mixins";
import { breakpoints } from "../../styles/variables";
import { UploadFile } from "../../typescript/types";

interface VBSensorProps {
  delayedCall: boolean;
  partialVisibility: boolean;
  once: boolean;
  children: any;
}

const getBreakPoint = (key: string) => {
  switch (key) {
    case "thumbnail":
      return breakpoints.xs;
    case "small":
      return breakpoints.sm;
    case "medium":
      return breakpoints.md;
    case "large":
      return breakpoints.lg;
    default:
      return 0;
  }
};

export const VisibilitySensor: React.FC<VBSensorProps> = ({
  once = false,
  delayedCall,
  partialVisibility,
  children,
}) => {
  const [active, setActive] = useState(true);
  return (
    <VSensor
      active={active}
      onChange={(isVisible) => once && isVisible && setActive(false)}
      delayedCall={delayedCall}
      partialVisibility={partialVisibility}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  );
};

export const Image: React.FC<UploadFile> = ({
  url,
  formats,
  alternativeText,
}) => {
  console.log({ url, formats, alternativeText });
  const imageBaseUrl = "http://localhost:1337";
  const small = `${imageBaseUrl}${formats.small.url}`;
  const [srcSet, setSrcSet] = useState("");
  const [sizes, setSizes] = useState("");

  useEffect(() => {
    let sizes = "";
    let srcSet = "";

    Object.keys(formats).map((key) => {
      const breakpoint = getBreakPoint(key);
      const width = formats[key].width;
      if (srcSet.length > 0) {
        srcSet += `, ${imageBaseUrl}${formats[key].url} ${breakpoint}w`;
        sizes += `, (min-width: ${getEmSize(breakpoint)}em) ${width}px`;
      } else {
        srcSet = `${imageBaseUrl}${formats[key].url} ${200}w`;
        sizes = `(min-width: ${getEmSize(breakpoint)}em) ${1200}px`;
      }
    });

    setSrcSet(srcSet);
    setSizes(sizes);
  }, []);

  return (
    <VisibilitySensor key={url} delayedCall partialVisibility once>
      {({ isVisible }: { isVisible: boolean }) => (
        <>
          {isVisible ? (
            <img
              src={small}
              alt={alternativeText}
              sizes={sizes}
              srcSet={srcSet}
            />
          ) : (
            <img src={small} alt={alternativeText} />
          )}
        </>
      )}
    </VisibilitySensor>
  );
};

export default Image;
