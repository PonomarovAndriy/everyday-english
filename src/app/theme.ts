import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "rgba(25, 118, 210, 1)" }, // modern blue
    secondary: { main: "#1565c0" },
    background: { default: "#f8fafc", paper: "#ffffff" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Helvetica",
      "Arial",
    ].join(","),
    h1: { fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: {
      fontWeight: 400,
      fontStyle: "normal",
      letterSpacing: 0,
      fontSize: "20px",
      lineHeight: "20px",
      fontFamily: "'Source Sans Pro', sans-serif",
      color: "#1565c0",
    },
  },
  components: {
    MuiContainer: { defaultProps: { maxWidth: "lg" } },
    MuiButton: { defaultProps: { variant: "contained" } },
  },
});

export default theme;
