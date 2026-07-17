/**
 * Design system color tokens for Storybook controls.
 * Mirrors src/styles/tokens/_variables.scss
 */
export const COLOR_TOKENS = {
  systemSlate: {
    surface: {
      primary: '#f5f7fa',
      secondary: '#e9ecf0',
      tertiary: '#d2d9e0',
      quaternary: '#b5c1cb',
    },
    background: {
      primary: '#141f2e',
      secondary: '#2a3c50',
      tertiary: '#91a2b1',
    },
    text: {
      primary: '#292929',
      secondary: '#545454',
      tertiary: '#6b6b6b',
      onPrimary: '#ffffff',
      onSecondary: '#ffffff',
      onTertiary: '#292929',
    },
  },
  systemNeutral: {
    surface: {
      primary: '#f7f7f7',
      secondary: '#ececec',
      tertiary: '#d7d7d7',
    },
    background: {
      primary: '#3e3e3e',
      secondary: '#6b6b6b',
      tertiary: '#9d9d9d',
    },
    text: {
      primary: '#292929',
      secondary: '#545454',
      tertiary: '#828282',
      onPrimary: '#ffffff',
      onSecondary: '#ffffff',
      onTertiary: '#292929',
    },
  },
  systemSuccess: {
    surface: {
      primary: '#fcfdfb',
      secondary: '#f1f3ec',
      tertiary: '#e9edd9',
    },
    background: {
      primary: '#778057',
      secondary: '#97a26b',
    },
    text: {
      primary: '#3a3c31',
      secondary: '#585d45',
      tertiary: '#778057',
      onPrimary: '#ffffff',
    },
  },
  systemWarning: {
    background: {
      primary: '#ffd57a',
    },
    text: {
      primary: '#554523',
      secondary: '#836934',
    },
  },
  systemDanger: {
    background: {
      primary: '#b61e1c',
      secondary: '#e21e1b',
    },
    text: {
      primary: '#401312',
      secondary: '#651918',
    },
  },
  brandTealBlue: {
    surface: {
      primary: '#eef4fc',
      secondary: '#dae7f7',
      tertiary: '#b9d0ed',
    },
    background: {
      primary: '#003e7e',
      secondary: '#1852a3',
      tertiary: '#4f8cd1',
    },
    text: {
      primary: '#062551',
      secondary: '#144284',
      tertiary: '#1852a3',
      onPrimary: '#ffffff',
      onTertiary: '#02112a',
    },
  },
  brandDarkTurquoise: {
    surface: {
      primary: '#f0f8fb',
      secondary: '#dbeff3',
    },
    background: {
      primary: '#246582',
      secondary: '#317d9e',
    },
    text: {
      primary: '#123951',
      secondary: '#246582',
      onPrimary: '#dbeff3',
    },
  },
  brandPaleBlue: {
    surface: {
      primary: '#f6fafb',
      secondary: '#e9f3f4',
    },
    background: {
      primary: '#43585d',
      secondary: '#6b8a8f',
    },
    text: {
      primary: '#37484d',
      secondary: '#546e73',
      onPrimary: '#ffffff',
    },
  },
} as const
