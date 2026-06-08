import { motion } from "framer-motion";

const tones = ["Warm", "Casual", "Formal", "Humorous"];

export default function ToneSelector({ value, onChange }) {
  return (
    <div className="tone-selector" role="radiogroup" aria-label="Message tone">
      {tones.map((tone) => {
        const selected = value === tone;

        return (
          <button
            key={tone}
            role="radio"
            type="button"
            aria-checked={selected}
            className={`tone-option${selected ? " is-selected" : ""}`}
            onClick={() => onChange(tone)}
            style={{ position: "relative" }}
          >
            {selected && (
              <motion.div
                layoutId="active-tone"
                className="tone-indicator"
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 100,
                  zIndex: -1
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span style={{ position: "relative", zIndex: 1 }}>{tone}</span>
          </button>
        );
      })}
    </div>
  );
}
