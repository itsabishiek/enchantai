import { Add, Close, DeleteOutline } from "@mui/icons-material";
import { Divider, FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = ({
  models,
  model,
  setModel,
  temp,
  setTemp,
  showNav,
  setShowNav,
  onClearChat,
}) => {
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

      <div className="select-options">
        <div>
          <h3>Model</h3>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue="text-davinci-003"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              {models.map((model) => (
                <MenuItem key={model.id} value={model.id}>
                  {model.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="options-helper">
            <div className="option-helper">Smart - Davinci</div>
            <div className="option-helper">Code - Crushman</div>
          </div>
        </div>

        <div>
          <h3>Temperature</h3>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={0}
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            >
              <MenuItem value={0}>0 - Logical</MenuItem>
              <MenuItem value={0.5}>0.5 - Balanced</MenuItem>
              <MenuItem value={1}>1 - Creative</MenuItem>
            </Select>
          </FormControl>

          <div className="options-helper">
            <div className="option-helper">0 - Logical</div>
            <div className="option-helper">0.5 - Balanced</div>
            <div className="option-helper">1 - Creative</div>
          </div>
        </div>
      </div>

      <div className="sidebar-options">
        <Divider />
        <div className="item-wrapper">
          <div className="item-container" onClick={onClearChat}>
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
