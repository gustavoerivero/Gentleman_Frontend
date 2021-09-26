import { createTheme } from '@material-ui/core';
import { blue, purple } from '@material-ui/core/colors';

const Theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          scrollbarColor: "#141414 #141414",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: '#3b3b3b',
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 10,
            backgroundColor: purple[500],
            minHeight: 5,
            border: '.5px solid #150022',
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#3b3b3b",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: purple[500],
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: purple[800],
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: purple[500],
          },
        },
      },
    },
    MuiAppBar: {
      colorDefault: {
        backgroundColor: '#161B22',
      },
    },
  },
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[800]
    },
    secondary: {
      light: blue[600],
      main: blue[800],
      dark: blue[900]
    },
    text: {
      primary: '#FFFFFF',
      secondary: purple['A400'],
      disabled: purple[50],
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      paper: '#161B22',
      default: '#000000'
    }
  },
});

export default Theme;