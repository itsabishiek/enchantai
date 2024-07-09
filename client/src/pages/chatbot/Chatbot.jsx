import { Backdrop, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import ChatContainer from "../../components/chatContainer/ChatContainer";
import ChatHeader from "../../components/chatHeader/ChatHeader";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Chatbot.css";

const Home = () => {
  const [models, setModels] = useState([]);
  const [model, setModel] = useState("text-davinci-003");
  const [temp, setTemp] = useState(0.3);
  const [frequencyPenalty, setFrequencyPenalty] = useState(0.5);
  const [presencePenalty, setPresencePenalty] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [clearChat, setClearChat] = useState(false);
  const [loading, setLoading] = useState(false);

  // const getModels = async () => {
  //   setLoading(true);
  //   const { data } = await axios.get(
  //     "https://enchantai.onrender.com/api/chatbot/models/"
  //   );
  //   // console.log(data);
  //   setModels(data.models.data);
  //   setLoading(false);
  // };

  const onClearChat = () => {
    setTimeout(function () {
      setClearChat(true);
    }, 1000);

    setClearChat(false);
  };

  // useEffect(() => {
  //   getModels();
  // }, []);

  return (
    <div style={{ position: "relative" }}>
      <ChatHeader setShowNav={setShowNav} />
      <div className="chatbot-container">
        <Sidebar
          models={models}
          model={model}
          setModel={setModel}
          temp={temp}
          setTemp={setTemp}
          frequencyPenalty={frequencyPenalty}
          setFrequencyPenalty={setFrequencyPenalty}
          presencePenalty={presencePenalty}
          setPresencePenalty={setPresencePenalty}
          showNav={showNav}
          setShowNav={setShowNav}
          onClearChat={onClearChat}
        />
        <ChatContainer
          model={model}
          temp={temp}
          frequencyPenalty={frequencyPenalty}
          presencePenalty={presencePenalty}
          showNav={showNav}
          setShowNav={setShowNav}
          clearChat={clearChat}
        />
      </div>

      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
};

export default Home;
