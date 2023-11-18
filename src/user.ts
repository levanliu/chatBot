import readlineSync from "readline-sync";
import colors from "colors";
import { addUserMessage } from "./message.js";

export function askQuestion() {
  const userInput = readlineSync.question(colors.rainbow("Q: "));
  addUserMessage(userInput);

  return userInput;
}
