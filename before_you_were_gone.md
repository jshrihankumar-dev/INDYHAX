Before They Were Gone — Full 2-Hour Build Plan (2 People)
Split Responsibilities
Person	Owns
You (Shrihan)	Claude API logic, prompt engineering, state management
Teammate	UI/styling, input form, output display
Work in the same repo. You build the brain, they build the face.

Tech Stack
Frontend: React
AI: Claude API
Styling: Tailwind CSS
Extra: framer-motion for animations, react-hot-toast for notifications
No backend — direct API calls, hardcode key for hackathon
Setup (0:00 – 0:15) — Both Together
npx create-react-app bridge
cd bridge
npm install framer-motion react-hot-toast
Then immediately split into two branches:

git checkout -b shrihan/api-logic
git checkout -b teammate/ui
Merge at the 1:30 mark.

File Structure
src/
  App.js
  components/
    InputForm.js       ← teammate
    ResultCard.js      ← teammate
    ToneSelector.js    ← teammate
    BridgeVisual.js    ← teammate
  hooks/
    useClaudeAPI.js    ← you
  utils/
    buildPrompt.js     ← you
    parseResponse.js   ← you
Your Work — API & Logic (0:15 – 1:30)
Step 1: buildPrompt.js (0:15 – 0:30)

Takes form data, returns a crafted prompt:

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
Step 2: useClaudeAPI.js (0:30 – 1:00)

Custom hook that manages the full API call + state:

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
Step 3: parseResponse.js (1:00 – 1:15)

Safely extracts the JSON from Claude's response:

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
Step 4: Wire it into App.js (1:15 – 1:30)

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
Teammate's Work — UI (0:15 – 1:30)
Tell them to build these four components:

InputForm.js — 5 inputs:

Name + relationship (text)
Closeness (slider 1–10)
Why you drifted (textarea)
How long ago (dropdown)
Tone selector: Warm / Casual / Formal / Humorous
ResultCard.js — 3 sections:

Main message in a big styled card with copy-to-clipboard
"Why this works" in a subtle callout box
"Be prepared for..." warning in amber/yellow tone
ToneSelector.js — 4 pill buttons (Warm / Casual / Formal / Humorous), updates state on click

BridgeVisual.js — The wow factor. Simple SVG arc bridge that animates in when results load. Left side = you, right side = them, message floats across the arc. Framer motion fade-in. Keeps the theme visual and memorable for judges.

Merge + Polish (1:30 – 1:50)
Merge both branches, fix any prop mismatches
Add react-hot-toast notification on copy ("Message copied — now send it")
Pre-load a demo example so judges don't have to type
Add a "Try an Example" button that auto-fills the form
Demo Prep (1:50 – 2:00)
Three pre-built examples to test and pick the best demo:

Scenario	Closeness	Duration
Childhood best friend, moved away	9/10	3 years
Old teammate, season ended	7/10	8 months
Cousin, family tension	6/10	2 years
Your pitch to judges (30 seconds): "Everyone has someone they've lost contact with and never reached out to because they didn't know what to say. This builds the bridge back — one message at a time."

Want me to write out any of the components in full so your teammate can just paste and go?