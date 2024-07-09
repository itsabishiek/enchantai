// import { Configuration, OpenAIApi } from "openai";
import * as dotenv from "dotenv";
import { G4F } from "g4f";

dotenv.config();

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
  const client = new G4F();

  const { input } = req.body;
  try {
    const messages = [{ role: "user", content: `${input}` }];
    const options = {
      provider: client.providers.GPT,
      model: "gpt-4",
    };

    const text = await client.chatCompletion(messages, options);

    res.status(200).send({
      bot: text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

export { getModels, chatResponse };
