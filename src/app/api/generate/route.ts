import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.GROQ_MODEL,
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1024,
    }),
  });

  const data = await response.json();
  const text = data.choices?.[0]?.message?.content || "";

  return NextResponse.json({ text });
}