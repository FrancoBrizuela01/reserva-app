import { ThemeProvider, createTheme, CssBaseline, Container } from "@mui/material";
import ReservaApp from "./components/ReservaApp";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00bcd4", // Azul turquesa vibrante
    },
    secondary: {
      main: "#ff4081", // Rosa llamativo
    },
    background: {
      default: "#121212", // Fondo oscuro
      paper: "#1e1e1e", // Tarjetas con gris oscuro
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ReservaApp />
      </Container>
    </ThemeProvider>
  );
}

export default App;
