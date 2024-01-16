import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openAi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
//   organization: process.env.OPENAI_ORGANIZATION_KEY,
});

export default openAi;
