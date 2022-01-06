import * as React from 'react';

import { breakpoints } from '../../styles/variables';
import { useEffect, useState, useRef } from 'react';
import { MenuIcon, MenuOpenIcon } from '../other';
import { hasWindow } from '../../helpers';

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
    const about = document.getElementById('about');
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');
    const topOffset = document.body.getBoundingClientRect().top;
    const bottom = hasWindow && window.innerHeight + window.scrollY >= document.body.offsetHeight;
    const topTrigger = hasWindow && window.innerWidth > breakpoints.sm ? -150 : -25;
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
    hasWindow && window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      hasWindow && window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [top, active, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      className={`
        ${top ? 'h-20 bg-transparent shadow-none' : 'h-16 bg-white'} 
        ${open && 'h-40 items-start'} 
        ${!top && 'shadow-md'} 
        fixed w-screen top-0 z-10 flex flex-col sm:flex-row items-start transition-all duration-300 ease-in-out
      `}
    >
      <div className={'w-1/4 flex items-center h-full max-h-16'}>
        <a
          className={`p-4 uppercase font-bold text-blue-primary hover:text-blue-hover transition-all ${
            top ? 'text-3xl' : 'text-2xl'
          } duration-300 ease-in-out`}
          onClick={() => toggleOpen(false)}
          href="#top"
        >
          {title}
        </a>
      </div>
      <div
        className={`w-full sm:w-3/4 flex justify-center sm:justify-end items-center h-full max-h-16 sm:opacity-100 transition-opacity ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={() => toggleOpen(false)}
      >
        <div>
          <a
            className={`p-4 uppercase font-bold text-black-primary rounded-3xl ${
              active.about && 'bg-blue-300'
            }`}
            href="#about"
          >
            About
          </a>
        </div>
        <div>
          <a
            className={`p-4 uppercase font-bold text-black-primary rounded-3xl ${
              active.projects && 'bg-blue-300'
            }`}
            href="#projects"
          >
            Projects
          </a>
        </div>
        <div>
          <a
            className={`p-4 uppercase font-bold text-black-primary rounded-3xl ${
              active.contact && 'bg-blue-300'
            }`}
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
      <div onClick={() => toggleOpen(!open)} className="sm:hidden absolute right-4 top-5">
        {open ? <MenuOpenIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};

export default Header;
