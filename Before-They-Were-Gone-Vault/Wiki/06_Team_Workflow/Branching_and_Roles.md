# Branching and Roles

## Branches

- `shrihan/api-logic`
- `teammate/ui`

## Merge Strategy

Merge at the 1:30 mark. Do not wait until the final minutes. The likely conflict point is `App.js`.

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

