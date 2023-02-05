import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/home/Home";
import Chatbot from "./pages/chatbot/Chatbot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import GenerateImage from "./pages/generateImage/GenerateImage";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#444654",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/generateImage" element={<GenerateImage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
