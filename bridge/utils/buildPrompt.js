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