import fs from "fs";
import { ChatLlamaCpp } from "@langchain/community/chat_models/llama_cpp";
import { HumanMessage } from "@langchain/core/messages";

const llamaPath = "./local-model/models/mistral-7b-openorca.Q4_K_M.gguf";
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

// read js file
const code = fs.readFileSync(jsFile, "utf8");

const model = new ChatLlamaCpp({ modelPath: llamaPath });

const answer = await model.invoke([
  new HumanMessage({ content: prompt.replace("{code}", code) }),
]);

const { content } = JSON.parse(answer.content);

const jsFileName = jsFile.replace(".js", ".ts");

fs.writeFileSync(jsFileName, content);

console.log(`"${jsFileName}" has been created successfully!`);

