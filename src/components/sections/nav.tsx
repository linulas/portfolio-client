import * as React from "react";
import styled from "@emotion/styled";
import { transparentize } from "polished";

import {
  heights,
  dimensions,
  colors,
  breakpoints,
  fonts,
} from "../../styles/variables";
import Container from "../styled/Container";
import { useEffect, useState, useRef } from "react";
import { Div } from "../styled/Elements";
import { MenuIcon, MenuOpenIcon } from "../other/MenuIcons";
import { hasWindow } from "../../helpers";

interface IHeaderStyleProps {
  top?: boolean;
  open?: boolean;
}

const StyledNav = styled.nav<IHeaderStyleProps>`
  position: fixed;
  height: ${(props) =>
    props.top
      ? props.open
        ? heights.header
        : heights.header + 20
      : heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${(props) =>
    props.top ? "transparent" : colors.blue.primary};
  color: ${transparentize(0.5, colors.black.primary)};
  z-index: 100;
  width: 100%;
  box-shadow: ${(props) => (props.top ? "none" : "0px 3px 2px #27272780")};
  z-index: 999999;
  transition: height 0.3s;
  @media screen and (max-width: 37.4375em) {
    ${(props) => props.open && `height: ${heights.header + 150}px`};
    ${(props) => props.open && `background-color: ${colors.blue.primary}`};
  }
  .headerlinks {
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    left: 0;
    bottom: -150px;

    @media screen and (min-width: 37.5em) {
      display: flex;
      flex-direction: row;
      left: unset;
      bottom: unset;
      right: 0;
    }
  }
  .roundedBox {
    border-radius: 25px;
  }
  .sectionLink {
    color: ${colors.white};
  }
  .menuIcons {
    position: absolute;
    right: 0;
    padding-top: 8px;
    cursor: pointer;
    svg {
      fill: ${colors.white};
    }
    @media screen and (min-width: 37.5em) {
      display: none;
    }
  }
`;

const HeaderInner = styled(Container)<IHeaderStyleProps>`
  position: relative;
  display: flex;
  margin: 0;
  max-width: unset;
  align-items: center;
  height: auto;
  padding-top: 12px;
`;

const HomeLink = styled(({ open, top, ...props } : any) => <a {...props} />)`
  color: ${colors.bronze.primary};
  font-size: ${(props) =>
    props.top ? (props.open ? "1.5rem" : "2rem") : "1.5rem"};
  font-family: ${fonts.openSans};
  font-weight: 600;
  transition: all 0.3s;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const SectionLink = styled("a")`
  padding: 8px;
  font-size: 1.2em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 1px 1px #212121;
  font-family: ${fonts.openSans};
  font-weight: 600;
`;

interface HeaderProps {
  title: string;
}

export const Nav: React.FC<HeaderProps> = ({ title }) => {
  const [top, toggleTop] = useState(true);
  const [open, toggleOpen] = useState(false);
  const [active, setActive] = useState({
    about: false,
    projects: false,
    contact: false,
  });
  const wrapperRef = useRef<any>();

  // todo - use ref?
  const handleScroll = () => {
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    const topOffset = document.body.getBoundingClientRect().top;
    const bottom =
      hasWindow &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    const topTrigger =
      hasWindow && window.innerWidth > breakpoints.sm ? -150 : -25;
    const aboutOffset = about && about.getBoundingClientRect().top;
    const projectsOffset = projects && projects.getBoundingClientRect().top;
    const contactOffset = contact && contact.getBoundingClientRect().top;

    if (aboutOffset && projectsOffset && contactOffset) {
      const newActive = {
        about: aboutOffset <= 78 && projectsOffset > 78,
        projects: !bottom && projectsOffset <= 78 && contactOffset > 78,
        contact: contactOffset <= 78 || bottom,
      };
      if (
        active.about != newActive.about ||
        active.projects != newActive.projects ||
        active.contact != newActive.contact
      ) {
        setActive(newActive);
      }
    }

    const shouldTrigger = top
      ? topOffset < topTrigger
        ? true
        : false
      : topOffset > topTrigger
      ? true
      : false;
    shouldTrigger && toggleTop(!top);
  };

  const handleClickOutside = (event: any) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      toggleOpen(false);
    }
  };

  useEffect(() => {
    hasWindow && window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      hasWindow && window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [top, active, wrapperRef]);

  return (
    <StyledNav ref={wrapperRef} open={open} top={top}>
      <HeaderInner open={open}>
        <HomeLink
          onClick={() => toggleOpen(false)}
          open={open}
          top={top}
          href="#top"
        >
          {title}
        </HomeLink>
        <Div onClick={() => toggleOpen(false)} className="headerlinks">
          <Div
            className="roundedBox"
            padding={["8px"]}
            backgroundColor={active.about ? colors.bronze.primary : ""}
          >
            <SectionLink className="sectionLink" href="#about">
              About
            </SectionLink>
          </Div>
          <Div
            className="roundedBox"
            padding={["8px"]}
            backgroundColor={active.projects ? colors.bronze.primary : ""}
          >
            <SectionLink className="sectionLink" href="#projects">
              Projects
            </SectionLink>
          </Div>
          <Div
            className="roundedBox"
            padding={["8px"]}
            backgroundColor={active.contact ? colors.bronze.primary : ""}
          >
            <SectionLink className="sectionLink" href="#contact">
              Contact
            </SectionLink>
          </Div>
        </Div>
        <Div onClick={() => toggleOpen(!open)} className="menuIcons">
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </Div>
      </HeaderInner>
    </StyledNav>
  );
};

export default Nav;
