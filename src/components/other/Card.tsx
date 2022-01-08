import React from 'react';
import { motion } from 'framer-motion';

interface CardProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  clickable?: boolean;
}

export const Card: React.FC<CardProps> = (props) => {
  const { className, clickable } = props;
  const clickableStyles = 'cursor-pointer';
  const animations = {
    whileHover: { scale: 1.02, boxShadow: '0px 3px 10px -2px rgba(0,0,0,0.20)' },
    whileTap: { scale: 0.98, boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)' },
  };
  return (
    <motion.div
      {...(props as any)}
      className={`rounded-2xl shadow-md p-6 bg-white ${className} ${clickable && clickableStyles}`}
      {...(clickable ? animations : {})}
    >
      {props.children}
    </motion.div>
  );
};

export default Card;
