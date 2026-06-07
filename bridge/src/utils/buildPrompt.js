export function buildPrompt({
  name,
  relationship,
  closeness,
  reason,
  duration,
  tone,
}) {
  return `
You are helping someone reconnect with a person they have lost contact with.
Return JSON only. Do not include markdown, commentary, or code fences.

The JSON must match this shape exactly:
{
  "message": "the reconnection message",
  "why": "one sentence explaining why this message works psychologically",
  "warning": "one honest thing they should be prepared for"
}

Rules for the message:
- Sound human and specific, not AI-generated.
- Keep it under 5 sentences.
- Do not over-explain the silence.
- Do not pressure the other person to respond.
- Use a ${tone} tone.
- Reference the relationship dynamic without sounding scripted.

Context:
- Person: ${name}
- Relationship: ${relationship}
- Closeness: ${closeness}/10
- Why they drifted: ${reason}
- Time apart: ${duration}
`;
}
