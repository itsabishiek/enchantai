import {
  Add,
  ArrowBackIos,
  Close,
  DeleteOutline,
  SettingsSuggest,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({
  models,
  model,
  setModel,
  temp,
  setTemp,
  frequencyPenalty,
  setFrequencyPenalty,
  presencePenalty,
  setPresencePenalty,
  showNav,
  setShowNav,
  onClearChat,
}) => {
  const [toggleOptions, setToggleOptions] = useState(false);

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

      {toggleOptions && (
        <div className="select-options">
          <div>
            <div className="options-header">
              <IconButton onClick={() => setToggleOptions(false)}>
                <ArrowBackIos
                  fontSize="small"
                  sx={{
                    transform: "translateX(3px)",
                  }}
                />
              </IconButton>
              <h3>Model</h3>
            </div>
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "0px 5px",
              width: "100%",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3>Temperature</h3>
              <Slider
                min={0}
                max={1}
                valueLabelDisplay="auto"
                step={0.1}
                marks
                defaultValue={0.3}
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3>Frequency Penalty</h3>
              <Slider
                min={0}
                max={2}
                valueLabelDisplay="auto"
                step={0.1}
                marks
                defaultValue={0.5}
                value={frequencyPenalty}
                onChange={(e) => setFrequencyPenalty(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h3>Presence Penalty</h3>
              <Slider
                min={0}
                max={2}
                valueLabelDisplay="auto"
                step={0.1}
                marks
                defaultValue={0}
                value={presencePenalty}
                onChange={(e) => setPresencePenalty(e.target.value)}
              />
            </Box>
          </div>
        </div>
      )}

      <div className="sidebar-options-wrapper">
        <div className="sidebar-options">
          <Divider />
          <div className="item-wrapper">
            <div
              className="item-container"
              onClick={() => setToggleOptions(!toggleOptions)}
            >
              <SettingsSuggest fontSize="small" />
              <span>Advanced Mode</span>
            </div>

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
      </div>
    </aside>
  );
};

export default Sidebar;
