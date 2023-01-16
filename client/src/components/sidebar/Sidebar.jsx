import { Add, Close, DeleteOutline } from "@mui/icons-material";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ models, model, setModel, showNav, setShowNav }) => {
  return (
    <aside className={`sidebar-container ${showNav && "show-sidebar"}`}>
      {showNav && (
        <div className="close-nav" onClick={() => setShowNav(false)}>
          <Close />
        </div>
      )}
      <div className="new-chat">
        <Add />
        <span>New Chat</span>
      </div>

      <div className="select-models">
        <h3>Model</h3>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Models</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue="text-davinci-003"
            value={model}
            label="Select Models"
            onChange={(e) => setModel(e.target.value)}
          >
            {models.map((model) => (
              <MenuItem key={model.id} value={model.id}>
                {model.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="sidebar-options">
        <Divider />
        <div className="item-wrapper">
          <div className="item-container">
            <DeleteOutline fontSize="small" />
            <span>Clear conversations</span>
          </div>
          <div className="item-container" style={{ marginLeft: 3 }}>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
