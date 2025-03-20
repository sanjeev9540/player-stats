import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { fontSize } from '@mui/system';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#416aa6',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontSize: 16,

    h2: {
      fontWeight: 700,
      fontSize: '3.7rem',
      lineHeight: 1.2
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    label: {
        fontSize: 20,
    },
    topHeading: {
      width: '100%',
      display: 'block',
      backgroundColor: '#416aa6',
      color: '#fff',
      borderRadius: '5px',
      fontSize: '36px',
      fontWeight: '700',
      marginTop: '16px',
      padding: '10px',
      textAlign: 'center',
    }
  },
  components: {
    MuiModal: {
      styleOverrides: {
        border: '1px  solid black',
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {

          [`@media screen and (min-width: 1200px)`]: {
            maxWidth: '1500px',
            margin: 'auto',
          },
        }
      }
    }
  }
});