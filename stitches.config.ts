import { createStitches, CSS } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      "gray-50": "rgb(248 250 252)",
      "gray-100": "rgb(241 245 249)",
      "gray-200": "rgb(226 232 240)",
      "gray-300": "rgb(203 213 225)",
      "gray-400": "rgb(148 163 184)",
      "gray-500": "rgb(100 116 139)",
      "gray-600": "rgb(71 85 105)",
      "gray-700": "rgb(51 65 85)",
      "gray-800": "rgb(30 41 59)",
      "gray-900": "rgb(15 23 42)",

      "primary-50": "#f4f7f7",
      "primary-100": "#e1eff5",
      "primary-200": "#bfdfea",
      "primary-300": "#8ec0d0",
      "primary-400": "#569db1",
      "primary-500": "#407d92",
      "primary-600": "#356377",
      "primary-700": "#2c4b5c",
      "primary-800": "#203342",
      "primary-900": "#14202c"
    },
    space: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem"
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem"
    },
    fonts: {
      sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
      mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },
    lineHeights: {},
    letterSpacings: {
      "tracking-tighter": "-0.05em",
      "tracking-tight": "-0.025em",
      "tracking-normal": "0em",
      "tracking-wide": "0.025em",
      "tracking-wider": "0.05em",
      "tracking-widest": "0.1em"
    },
    sizes: {},
    borderWidths: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    borderStyles: {},
    radii: {
      none: "0",
      sm: "0.125rem",
      default: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px"
    },
    shadows: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "0 0 #0000"
    },
    zIndices: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      auto: "auto"
    },
    transitions: {}
  }
});

const _inlineCss = css({});
export const inlineCss = (css: CSS) => _inlineCss({ css });
