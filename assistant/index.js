import fs from "fs";
import { VertexAI } from "@langchain/google-vertexai";

const prompt = `
You're an AI assistant who it helping developers to migrate codes from Javascript to Typescript.

Consider the following instructions:
- If you found a product variable, import the type from "./product". Don't create it.
- Create type for everything.
- If there is a bug please fix it.
- Don't explain anything extra just generate the code!

Convert the code in the triple quotes to Typescript.

Output in json format like this: { "content": "CODE" }

"""
{code}
"""
`;

// Get the file path from the command line arguments
const [, , jsFile] = process.argv;

// init the VertexAI model
const chatModel = new VertexAI({
  model: "gemini-1.0-pro-001",
  temperature: 0,
  authOptions: {
    projectId: "mohamad-369510",
    keyFile: "./assistant/keys/mohamad-369510-8e89b4bacd71.json",
  },
});

// read js file
const code = fs.readFileSync(jsFile, "utf8");

// invoke prompt
const answer = await chatModel.invoke(prompt.replace("{code}", code));

const { content } = JSON.parse(answer);

const jsFileName = jsFile.replace(".js", ".ts");

fs.writeFileSync(jsFileName, content);

console.log(`"${jsFileName}" has been created successfully!`);
