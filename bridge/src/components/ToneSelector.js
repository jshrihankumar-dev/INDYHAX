const tones = ["Warm", "Casual", "Formal", "Humorous"];

export default function ToneSelector({ value, onChange }) {
  return (
    <div className="tone-selector" role="radiogroup" aria-label="Message tone">
      {tones.map((tone) => {
        const selected = value === tone;

        return (
          <button
            aria-checked={selected}
            className={`tone-option${selected ? " is-selected" : ""}`}
            key={tone}
            onClick={() => onChange(tone)}
            role="radio"
            type="button"
          >
            {tone}
          </button>
        );
      })}
    </div>
  );
}
