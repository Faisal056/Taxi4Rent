import { createTheme } from '@mui/material/styles';

// Brand palette
// ink   -> deep teal-navy, primary text / dark sections
// lime  -> bright citron accent, primary CTAs
// teal  -> secondary accent, links / icons
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0E2430', // ink
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#0F766E', // teal
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#D6FF3F', // lime accent, used for the primary CTA button
      contrastText: '#0E2430',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F1F5F2',
    },
    text: {
      primary: '#0E2430',
      secondary: '#57696A',
    },
    divider: '#DDE6E0',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' },
    h2: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, letterSpacing: '-0.01em' },
    h4: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 },
    button: { fontWeight: 600, textTransform: 'none' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 24,
          paddingRight: 24,
          paddingTop: 12,
          paddingBottom: 12,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1.5px solid #DDE6E0',
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
