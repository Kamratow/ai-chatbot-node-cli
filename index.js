import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI();

openai.chat.completions
  .create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant. Try to be concise and straight to the point.",
      },
      { role: "user", content: "What is a LLM?" },
    ],
    model: "gpt-4o-mini",
  })
  .then((result) => console.log(result.choices[0].message.content));
