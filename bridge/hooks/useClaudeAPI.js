import { useState } from "react";
import { buildPrompt } from "../utils/buildPrompt";
import { parseResponse } from "../utils/parseResponse";

export function useClaudeAPI() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async (formData) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    if (!apiKey) {
      setError("Missing OpenAI API key. Add REACT_APP_OPENAI_API_KEY to bridge/.env and restart the dev server.");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-4o",
          max_tokens: 1000,
          messages: [
            {
              role: "system",
              content: "You are an expert at human relationships and communication. Always respond with valid JSON only. No markdown, no backticks, no preamble."
            },
            {
              role: "user",
              content: buildPrompt(formData)
            }
          ]
        })
      });
      const data = await response.json();
      const parsed = parseResponse(data);
      setResult(parsed);
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, generate };
}
