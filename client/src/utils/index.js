import { surpriseMePrompts } from "../constants/SurpriseMe";
import { v4 as uuidv4 } from "uuid";
import FileSaver from "file-saver";

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) {
    return getRandomPrompt(prompt);
  }

  return randomPrompt;
}

export async function downloadImage(imageurl) {
  FileSaver.saveAs(imageurl, `download-${uuidv4()}.jpg`);
}
