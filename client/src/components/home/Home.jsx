import axios from "axios";
import React, { useState, useEffect } from "react";
import ChatContainer from "../chatContainer/ChatContainer";
import Sidebar from "../sidebar/Sidebar";
import "./Home.css";

const Home = () => {
  const [models, setModels] = useState([]);
  const [model, setModel] = useState("text-davinci-003");

  const getModels = async () => {
    const { data } = await axios.get("http://localhost:5000/models");
    // console.log(data);
    setModels(data.models.data);
  };

  // console.log(model);

  useEffect(() => {
    getModels();
  }, []);

  return (
    <div className="home-container">
      <Sidebar models={models} model={model} setModel={setModel} />
      <ChatContainer model={model} />
    </div>
  );
};

export default Home;
