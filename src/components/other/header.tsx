import * as React from "react";

import { breakpoints } from "../../styles/variables";
import { useEffect, useState, useRef } from "react";
import { MenuIcon, MenuOpenIcon } from "./MenuIcons";
import { hasWindow } from "../../helpers";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
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
    <div ref={wrapperRef}>
      <div className="flex">
        <a
          className="justify-end"
          onClick={() => toggleOpen(false)}
          href="#top"
        >
          {title}
        </a>
        <div className="flex justify-end" onClick={() => toggleOpen(false)}>
          <div>
            <a href="#about">About</a>
          </div>
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div onClick={() => toggleOpen(!open)}>
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};

export default Header;
