# Two-Hour Build Plan

## Team Split

| Person | Owns |
| --- | --- |
| Shrihan | OpenAI API logic, prompt engineering, state management |
| Teammate | UI, styling, input form, output display |

## 0:00-0:15 Setup

- Create React app
- Install dependencies
- Confirm project runs
- Use a shared branch

Commands:

```bash
npx create-react-app bridge
cd bridge
npm install framer-motion react-hot-toast
```

## 0:15-1:30 Parallel Build

Shrihan:

- `buildPrompt.js`
- `useOpenAIAPI.js`
- `parseResponse.js`
- wire API into `App.js`

Teammate:

- `InputForm.js`
- `ResultCard.js`
- `ToneSelector.js`
- `BridgeVisual.js`

## 1:30-1:50 Merge and Polish

- Merge work directly into the shared branch
- Fix prop mismatches
- Add toast on copy
- Add example autofill
- Add bridge animation
- Test demo scenarios

## 1:50-2:00 Demo Prep

- Pick best scenario
- Practice pitch
- Check API key
- Prepare backup output
