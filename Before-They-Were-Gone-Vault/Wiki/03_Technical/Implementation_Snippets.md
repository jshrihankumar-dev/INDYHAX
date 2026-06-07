# Implementation Snippets

These snippets come from the original two-hour build plan and should be adapted during implementation.

## `buildPrompt.js`

```js
export function buildPrompt({ name, relationship, closeness, reason, duration, tone }) {
  return `
You are helping someone reconnect with a person they've lost contact with.
Generate THREE outputs, return as JSON only, no markdown:

{
  "message": "the reconnection message",
  "why": "one sentence explaining why this message works psychologically",
  "warning": "one honest thing they should be prepared for"
}

Rules for the message:
- Sound completely human, not AI-generated
- Under 5 sentences
- Don't over-explain the silence
- Tone: ${tone}
- Reference the specific relationship dynamic

Context:
- Person: ${name}, ${relationship}
- How close: ${closeness}/10
- Why they drifted: ${reason}
- Time apart: ${duration}
  `;
}
```

## `useClaudeAPI.js`

```js
import { useState } from "react";
import { buildPrompt } from "../utils/buildPrompt";
import { parseResponse } from "../utils/parseResponse";

export function useClaudeAPI() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generate = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "YOUR_KEY_HERE",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: buildPrompt(formData) }]
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
```

## `parseResponse.js`

```js
export function parseResponse(data) {
  try {
    const text = data.content[0].text;
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch {
    return {
      message: "Couldn't generate a message. Try again.",
      why: "",
      warning: ""
    };
  }
}
```

## `App.js`

```js
import { useClaudeAPI } from "./hooks/useClaudeAPI";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const { result, loading, error, generate } = useClaudeAPI();

  return (
    <div className="app">
      <h1>Before They Were Gone</h1>
      <InputForm onSubmit={generate} loading={loading} />
      {error && <p>{error}</p>}
      {result && <ResultCard result={result} />}
    </div>
  );
}
```

