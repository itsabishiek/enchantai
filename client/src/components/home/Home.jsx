import axios from "axios";
import React, { useState, useEffect } from "react";
import ChatContainer from "../chatContainer/ChatContainer";
import ChatHeader from "../chatHeader/ChatHeader";
import Sidebar from "../sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [models, setModels] = useState([]);
  const [model, setModel] = useState("text-davinci-003");
  const [temp, setTemp] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [clearChat, setClearChat] = useState(false);

  const getModels = async () => {
    const { data } = await axios.get("https://enchantai.onrender.com/models");
    // console.log(data);
    setModels(data.models.data);
  };

  const onClearChat = () => {
    setTimeout(function () {
      setClearChat(true);
    }, 1000);

    setClearChat(false);
  };

  useEffect(() => {
    getModels();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <ChatHeader setShowNav={setShowNav} />
      <div className="home-container">
        <Sidebar
          models={models}
          model={model}
          setModel={setModel}
          temp={temp}
          setTemp={setTemp}
          showNav={showNav}
          setShowNav={setShowNav}
          onClearChat={onClearChat}
        />
        <ChatContainer
          model={model}
          temp={temp}
          showNav={showNav}
          setShowNav={setShowNav}
          clearChat={clearChat}
        />
      </div>
    </div>
  );
};

export default Home;
