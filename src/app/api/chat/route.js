const { NextResponse } = require("next/server");
const { Configuration, OpenAIApi } = require("openai-edge");

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = "edge";

export async function POST(req) {
    const { messages } = await req.json();

    const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.5,
    });

    const data = await res.json();

    return NextResponse.json(data);
}
