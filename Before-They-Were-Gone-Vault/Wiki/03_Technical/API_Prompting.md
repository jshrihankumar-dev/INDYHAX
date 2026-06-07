# API Prompting

## Prompt Goal

Generate a short, human reconnection message that respects the relationship context and selected tone.

## Required JSON Output

```json
{
  "message": "the reconnection message",
  "why": "one sentence explaining why this message works psychologically",
  "warning": "one honest thing they should be prepared for"
}
```

## Prompt Rules

- Return JSON only
- No markdown
- Message must be under 5 sentences
- Message should not sound AI-generated
- Do not over-explain the silence
- Match selected tone
- Reference the relationship dynamic
- Keep the message low-pressure

## Prompt Inputs

- `name`
- `relationship`
- `closeness`
- `reason`
- `duration`
- `tone`

## Error Handling

If parsing fails, return a safe fallback:

```json
{
  "message": "Couldn't generate a message. Try again.",
  "why": "",
  "warning": ""
}
```

