import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const configuration = new Configuration({
  organization: "org-qXGlqrkIEo0r7Nxm68oJ3pXo",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt, size } = req.body;

  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
      response_format: "b64_json",
    });

    const imageURL = response.data.data[0].b64_json;

    res.status(200).send({
      data: imageURL,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(500).send({
      error: error.message,
    });
  }
};

const generateImageVariations = async (req, res) => {
  const { imageURL } = req.body;

  try {
    const response = await openai.createImageVariation(imageURL);

    const imgURL = response.data.data[0].url;

    console.log(imgURL);

    res.status(200).send({
      data: imgURL,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(500).send({
      error: error.message,
    });
  }
};

export { generateImage, generateImageVariations };
