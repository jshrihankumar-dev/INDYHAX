# Branching and Roles

## Workflow

Work from one shared branch unless the team explicitly decides otherwise. The likely integration point is `App.js`.

## Shrihan Responsibilities

- API request logic
- Prompt generation
- JSON response parsing
- Loading and error state
- Connecting generated result to UI

## Teammate Responsibilities

- Form layout
- Input state
- Tone selector
- Result card
- Bridge animation
- Visual polish

## Integration Contract

`InputForm` should call:

```js
onSubmit(formData)
```

`ResultCard` should accept:

```js
result
```

where `result` has:

```js
{
  message: string,
  why: string,
  warning: string
}
```
