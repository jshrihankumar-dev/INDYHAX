# Components

## InputForm

Collects relationship context and calls `onSubmit(formData)`.

Fields:

- Name or label
- Relationship
- Closeness slider
- Why you drifted
- Time apart
- Tone selector

## ToneSelector

Four pill buttons:

- Warm
- Casual
- Formal
- Humorous

Selected state should be obvious.

## ResultCard

Displays:

- Main generated message
- Copy button
- "Why this works"
- "Be prepared for"

## BridgeVisual

Simple SVG bridge arc. The result message can visually travel across the arc when output appears.

## App

Owns the API hook and coordinates the form and result display.

