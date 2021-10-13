import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: '#fec762'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 414,
      md: 1024,
      lg: 1440,
      xl: 1536,
    },
  },
  components: {
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: "15px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
