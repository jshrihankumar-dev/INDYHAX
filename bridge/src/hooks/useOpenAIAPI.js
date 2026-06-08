import { useState } from "react";
import { buildPrompt } from "../utils/buildPrompt";
import { buildDemoResult, parseResponse } from "../utils/parseResponse";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export function useOpenAIAPI() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [usedFallback, setUsedFallback] = useState(false);

  const generateMessage = async (formData) => {
    setLoading(true);
    setError("");
    setUsedFallback(false);

    if (!apiKey) {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          const fallback = buildDemoResult(formData);
          setResult(fallback);
          setUsedFallback(true);
          setLoading(false);
          resolve(fallback);
        }, 450);
      });
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
      const parsed = parseResponse(data);
      setResult(parsed);
      return parsed;
    } catch (err) {
      setError("The live API was unavailable, so this demo used a local backup.");
      const fallback = buildDemoResult(formData);
      setResult(fallback);
      setUsedFallback(true);
      return fallback;
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    generate: generateMessage,
    generateMessage,
    loading,
    result,
    usedFallback,
  };
}

export default useOpenAIAPI;
