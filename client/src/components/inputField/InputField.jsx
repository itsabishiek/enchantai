import { Send } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "./InputField.css";

const InputField = ({ handleSubmit, onKeyUp, setInput, input, inputRef }) => {
  return (
    <div className="chat-input-container">
      <form className="chat-input-inner" onSubmit={handleSubmit}>
        <textarea
          ref={inputRef}
          type="text"
          autoFocus
          placeholder="Send a message"
          onKeyUp={onKeyUp}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton type="submit">
          <Send sx={{ cursor: "pointer" }} />
        </IconButton>
      </form>
    </div>
  );
};

export default InputField;
