import React from 'react';

const buttonStyles = 'h-12 rounded-md p-2 text-white bg-rust-primary hover:bg-rust-hover';

export const ButtonLink: React.FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = (props) => {
  return (
    <a {...props} className={`${props.className} ${buttonStyles} flex items-center hover:text-white hover:no-underline`}>
      {props.children}
    </a>
  );
};

export const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <button {...props} className={`${props.className} ${buttonStyles}`}>
      {props.children}
    </button>
  );
};

export default Button;
