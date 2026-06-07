const fallbackResult = {
  message:
    "Hey, I was thinking about you today and realized I miss having you in my life. I know it has been a while, but I would really like to catch up if you are open to it.",
  why:
    "It names the distance without over-explaining it, then gives the other person a low-pressure invitation.",
  warning:
    "They may need time, or they may not respond right away, and that does not mean reaching out was wrong.",
};

export function parseResponse(data) {
  try {
    const text =
      data.output_text ||
      data.output?.[0]?.content?.[0]?.text ||
      data.output?.[0]?.content?.find?.((item) => item.type === "output_text")
        ?.text ||
      "";
    const clean = text.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(clean);

    if (parsed.message && parsed.why && parsed.warning) {
      return parsed;
    }

    return fallbackResult;
  } catch {
    return fallbackResult;
  }
}

export function buildDemoResult(formData) {
  const person = formData.name || "you";
  const reason = formData.reason
    ? ` I know ${formData.reason.toLowerCase()} made it easy for us to lose touch.`
    : "";

  return {
    message: `Hey, I was thinking about ${person} and wanted to reach out.${reason} I miss the way things used to feel between us, and I would like to catch up sometime if you are open to it.`,
    why:
      "It acknowledges the gap without making excuses and gives them room to answer honestly.",
    warning:
      "The first reply may be slow, short, or uncertain, so treat any response as a starting point.",
  };
}
