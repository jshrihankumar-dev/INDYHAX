import { motion } from "framer-motion";

export default function BridgeVisual({ active = false }) {
  return (
    <div className={`bridge-visual${active ? " is-active" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 760 240" role="img">
        <defs>
          <linearGradient id="bridgeLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="50%" stopColor="#c4553d" />
            <stop offset="100%" stopColor="#597a58" />
          </linearGradient>
        </defs>

        <path
          d="M58 194 H702"
          fill="none"
          stroke="var(--rule)"
          strokeDasharray="7 9"
          strokeLinecap="round"
          strokeWidth="2"
        />

        <motion.path
          animate={{ pathLength: active ? 1 : 0.78, opacity: active ? 1 : 0.65 }}
          className="bridge-arc"
          d="M76 174 C224 28 536 28 684 174"
          fill="none"
          initial={false}
          stroke="url(#bridgeLine)"
          strokeLinecap="round"
          strokeWidth="9"
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <path
          className="bridge-deck"
          d="M98 182 C242 110 518 110 662 182"
          fill="none"
          stroke="#1a1a1a"
          strokeLinecap="round"
          strokeWidth="2"
        />

        {[172, 242, 312, 382, 452, 522, 592].map((x, index) => (
          <motion.line
            animate={{ opacity: active ? 0.75 : 0.32, y2: active ? 176 : 190 }}
            initial={false}
            key={x}
            stroke="#c4553d"
            strokeLinecap="round"
            strokeWidth="2"
            transition={{ delay: index * 0.04, duration: 0.35 }}
            x1={x}
            x2={x}
            y1={126 - Math.abs(382 - x) / 8}
            y2="190"
          />
        ))}

        <circle cx="76" cy="190" fill="#1a1a1a" r="12" />
        <circle cx="684" cy="190" fill="#597a58" r="12" />
        <text fill="var(--ink-3)" fontFamily="var(--mono)" fontSize="11" x="42" y="222">you</text>
        <text fill="var(--ink-3)" fontFamily="var(--mono)" fontSize="11" x="660" y="222">them</text>

        <motion.g
          animate={{
            opacity: active ? 1 : 0,
            x: active ? 498 : 148,
            y: active ? 10 : 46,
          }}
          initial={false}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <rect fill="var(--paper)" height="38" rx="2" stroke="#c4553d" strokeWidth="2" width="82" />
          <path d="M12 11h58M12 20h44M12 29h52" stroke="#c4553d" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
