import React, { useState } from "react";
import { getRandomPrompt, downloadImage } from "../../utils";
import axios from "axios";
import {
  Backdrop,
  CircularProgress,
  FormControl,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import { Download, PrecisionManufacturing } from "@mui/icons-material";
import "./GenerateImage.css";

const GenerateImage = () => {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("medium");
  const [imageURL, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingImage, setLoadingImage] = useState(true);

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(prompt);
    setPrompt(randomPrompt);
  };

  const generateImage = async (e) => {
    e.preventDefault();

    setImageURL("");
    if (!prompt) return;

    setLoading(true);

    const { data } = await axios.post(
      "https://enchantai.onrender.com/api/generateImage/",
      {
        prompt,
        size,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setImageURL(`data:image/jpeg;base64,${data.data}`);
    setLoading(false);
  };

  const generateImageVariations = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://enchantai.onrender.com/api/generateImageVariations/",
        {
          imageURL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(data);
    } catch (error) {
      console.log("generateImageVariations Error", error);
    }
  };

  console.log(imageURL);

  return (
    <div className="generateImage-container">
      <div className="generateImage-form-wrapper">
        <div className="generateImage-form-helper">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <h5>Start with a detailed description</h5>
            <button onClick={handleSurpriseMe}>Surprise me</button>
          </div>

          <FormControl sx={{ minWidth: 120 }}>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              size="small"
            >
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="large">Large</MenuItem>
            </Select>
          </FormControl>
        </div>
        <form className="generateImage-form" onSubmit={generateImage}>
          <input
            type="An Impressionist oil painting of sunflowers in a purple vase…"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>

        <div className="generated-image">
          {imageURL && !loadingImage && (
            <div className="generated-image-options">
              <div
                className="generated-image-download"
                onClick={() => downloadImage(imageURL)}
              >
                <Download />
              </div>
              <div
                className="generated-image-variations"
                onClick={generateImageVariations}
              >
                <PrecisionManufacturing />
              </div>
            </div>
          )}
          {loadingImage && (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="450px"
              sx={{ bgcolor: "#444654", borderRadius: "10px" }}
            />
          )}
          <img
            src={imageURL}
            alt=""
            style={loadingImage ? { display: "none" } : { display: "unset" }}
            onLoad={() => setLoadingImage(false)}
          />
        </div>
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

export default GenerateImage;
