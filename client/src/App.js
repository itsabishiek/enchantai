import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./components/home/Home";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="app">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
