import OpenAI from "openai";
import "dotenv/config";
import readline from "readline";

const openai = new OpenAI();

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();

userInterface.on("line", async (input) => {
  await openai.chat.completions
    .create({
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant. Try to be concise and straight to the point.",
        },
        { role: "user", content: input },
      ],
      model: "gpt-4o-mini",
    })
    .then((result) => {
      console.log(result.choices[0].message.content);
      userInterface.prompt();
    })
    .catch((error) => console.log(error));
});
