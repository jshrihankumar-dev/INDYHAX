export function parseResponse(data) {
  try {
    const text = data.choices[0].message.content;
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);
  } catch {
    return {
      message: "Couldn't generate a message. Try again.",
      why: "",
      warning: ""
    };
  }
}