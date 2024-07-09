import { G4F } from "g4f";

const client = new G4F();

async function generate() {
  const messages = [
    { role: "user", content: "Implement Selection Sort using python." },
  ];
  const options = {
    provider: client.providers.GPT,
    model: "gpt-4",
  };

  const text = await client.chatCompletion(messages, options);
  console.log(text);
}

generate();

// Reference: https://www.npmjs.com/package/g4f
