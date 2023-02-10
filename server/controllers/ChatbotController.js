import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const configuration = new Configuration({
  organization: "org-qXGlqrkIEo0r7Nxm68oJ3pXo",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const getModels = async (req, res) => {
  try {
    const response = await openai.listEngines();
    res.status(200).send({
      models: response.data,
    });

    // console.log(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const chatResponse = async (req, res) => {
  const { input, model, temp, frequencyPenalty, presencePenalty } = req.body;
  try {
    const response = await openai.createCompletion({
      model: `${model}`,
      prompt: `${input}`,
      temperature: temp, // Higher values means the model will take more risks.
      max_tokens: 3000, // The maximum number of tokens to generate in the completion. Most models have a context length of 2048 tokens (except for the newest models, which support 4096).
      top_p: 1, // alternative to sampling with temperature, called nucleus sampling
      frequency_penalty: frequencyPenalty, // Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.
      presence_penalty: presencePenalty, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    });

    // console.log(response.data.choices[0].text);
    // console.log(temp);

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

export { getModels, chatResponse };
