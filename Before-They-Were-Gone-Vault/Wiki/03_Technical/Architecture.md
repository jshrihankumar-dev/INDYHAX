# Architecture

## Stack

- Frontend: React
- AI: Claude API
- Styling: Tailwind CSS
- Animation: framer-motion
- Notifications: react-hot-toast

## Architecture Type

Frontend-only MVP.

There is no backend for the hackathon build. The app calls the Claude API directly from the browser using the hackathon API key.

## Main Modules

- Form components collect user context
- Prompt utility builds a structured Claude prompt
- API hook sends request and tracks loading/error/result state
- Parser utility extracts JSON from Claude response
- Result card displays generated content
- Bridge visual animates the theme

## Risk

Calling the Claude API directly from the browser exposes the API key. This is acceptable only for a short hackathon demo. A production version needs a backend proxy or serverless function.

## Production Upgrade

If continuing after the hackathon:

- Move API calls to backend
- Store API key in environment variables
- Add rate limiting
- Avoid storing sensitive relationship details
- Add abuse and safety filters

