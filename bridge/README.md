# Before They Were Gone

A frontend-only hackathon demo that helps someone write a low-pressure message to reconnect with a person they have lost contact with.

## Available Scripts

Run these from the `bridge/` directory.

### `npm start`

Starts the development server at [http://localhost:3000](http://localhost:3000).

### `npm run build`

Builds the production app into the `build/` folder.

### `npm test`

Runs the Create React App test runner.

## OpenAI API Key

The app uses the OpenAI Responses API when `REACT_APP_OPENAI_API_KEY` is available.

Create a local `.env` file inside `bridge/` when you want live AI output:

```bash
REACT_APP_OPENAI_API_KEY=your_api_key_here
```

If no key is present, the app automatically uses demo backup output so the hackathon demo still works without Wi-Fi or credentials.

## Demo Flow

1. Click `Try an Example`.
2. Click `Generate Message`.
3. Review the generated message, reason, and warning.
4. Click `Copy`.

## Notes

This is intentionally frontend-only for the hackathon. Do not use it as-is for production with secret API keys, because browser environment variables are visible to users.
