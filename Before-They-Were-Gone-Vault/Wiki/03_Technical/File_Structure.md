# File Structure

## Planned React Structure

```text
src/
  App.js
  components/
    InputForm.js
    ResultCard.js
    ToneSelector.js
    BridgeVisual.js
  hooks/
    useOpenAIAPI.js
  utils/
    buildPrompt.js
    parseResponse.js
```

## Ownership

- `InputForm.js`: teammate
- `ResultCard.js`: teammate
- `ToneSelector.js`: teammate
- `BridgeVisual.js`: teammate
- `useOpenAIAPI.js`: Shrihan
- `buildPrompt.js`: Shrihan
- `parseResponse.js`: Shrihan
- `App.js`: merge point

## Notes

Keep the files small. The fastest path is to make each component responsible for one thing and merge through props.
