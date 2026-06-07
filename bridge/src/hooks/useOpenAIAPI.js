import { useState } from "react";
import { buildPrompt } from "../utils/buildPrompt";
import { buildDemoResult, parseResponse } from "../utils/parseResponse";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export function useOpenAIAPI() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [usedFallback, setUsedFallback] = useState(false);

  const generate = async (formData) => {
    setLoading(true);
    setError("");
    setUsedFallback(false);

    if (!apiKey) {
      window.setTimeout(() => {
        setResult(buildDemoResult(formData));
        setUsedFallback(true);
        setLoading(false);
      }, 450);
      return;
    }

    try {
      const response = await fetch("https://api.openai.com/v1/responses", {
        body: JSON.stringify({
          input: buildPrompt(formData),
          model: "gpt-5.1-chat-latest",
        }),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(`OpenAI request failed: ${response.status}`);
      }

      const data = await response.json();
      setResult(parseResponse(data));
    } catch (err) {
      setError("The live API was unavailable, so this demo used a local backup.");
      setResult(buildDemoResult(formData));
      setUsedFallback(true);
    } finally {
      setLoading(false);
    }
  };

  return { error, generate, loading, result, usedFallback };
}
