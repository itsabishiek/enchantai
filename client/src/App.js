import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./pages/home/Home";
import Chatbot from "./pages/chatbot/Chatbot";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;
