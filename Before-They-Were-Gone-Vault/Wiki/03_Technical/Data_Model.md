# Data Model

## Form Data

```ts
type FormData = {
  name: string;
  relationship: string;
  closeness: number;
  reason: string;
  duration: string;
  tone: "Warm" | "Casual" | "Formal" | "Humorous";
};
```

## Generated Result

```ts
type GeneratedResult = {
  message: string;
  why: string;
  warning: string;
};
```

## UI State

```ts
type ClaudeState = {
  result: GeneratedResult | null;
  loading: boolean;
  error: string | null;
};
```

## Privacy Note

Do not store form data in local storage for the MVP unless the team explicitly decides that saved drafts are worth the privacy tradeoff.

