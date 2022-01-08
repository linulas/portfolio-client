import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const buttonStyles = 'h-12 rounded-md p-2 text-white bg-rust-primary hover:bg-rust-hover';

export const ButtonLink: React.FC<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
> = (props) => {
  return (
    <motion.a
      {...(props as any)}
      {...animations}
      className={`${props.className} ${buttonStyles} flex items-center hover:text-white no-underline`}
    >
      {props.children}
    </motion.a>
  );
};

export const Button: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = (props) => {
  return (
    <motion.button
      {...(props as any)}
      {...animations}
      className={`${props.className} ${buttonStyles}`}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
