import { Add, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import "./ChatHeader.css";

const ChatHeader = ({ setShowNav }) => {
  return (
    <div className="chat-header-container">
      <div className="chat-header-wrapper">
        <IconButton onClick={() => setShowNav(true)}>
          <Menu />
        </IconButton>
        <div className="chat-header-title">
          <h4>New Chat</h4>
        </div>
        <Add />
      </div>
    </div>
  );
};

export default ChatHeader;
