import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

const tailwind = resolveConfig(tailwindConfig) as any;

const getBreakpointValue = (value: string): number =>
  parseInt(tailwind.theme.screens[value].slice(0, tailwind.theme.screens[value].indexOf('px')));

export const colors = tailwind.theme.colors;

export const breakpoints = {
  xs: getBreakpointValue('xs'),
  sm: getBreakpointValue('sm'),
  md: getBreakpointValue('md'),
  lg: getBreakpointValue('lg'),
  xl: getBreakpointValue('xl'),
};

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18,
  },
};
