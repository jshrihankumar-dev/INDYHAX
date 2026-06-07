import { motion } from "framer-motion";

export default function BridgeVisual({ active = false }) {
  return (
    <div className={`bridge-visual${active ? " is-active" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 720 210" role="img">
        <defs>
          <linearGradient id="bridgeLine" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#24524a" />
            <stop offset="55%" stopColor="#d19a45" />
            <stop offset="100%" stopColor="#346d78" />
          </linearGradient>
        </defs>

        <motion.path
          animate={{ pathLength: active ? 1 : 0.78, opacity: active ? 1 : 0.65 }}
          className="bridge-arc"
          d="M72 155 C210 22 510 22 648 155"
          fill="none"
          initial={false}
          stroke="url(#bridgeLine)"
          strokeLinecap="round"
          strokeWidth="10"
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <path
          className="bridge-deck"
          d="M92 162 C230 92 490 92 628 162"
          fill="none"
          stroke="#203d39"
          strokeLinecap="round"
          strokeWidth="3"
        />

        {[164, 234, 304, 374, 444, 514, 584].map((x, index) => (
          <motion.line
            animate={{ opacity: active ? 0.75 : 0.38, y2: active ? 154 : 166 }}
            initial={false}
            key={x}
            stroke="#56736d"
            strokeLinecap="round"
            strokeWidth="3"
            transition={{ delay: index * 0.04, duration: 0.35 }}
            x1={x}
            x2={x}
            y1={112 - Math.abs(374 - x) / 8}
            y2="166"
          />
        ))}

        <circle cx="72" cy="164" fill="#24524a" r="13" />
        <circle cx="648" cy="164" fill="#346d78" r="13" />

        <motion.g
          animate={{
            opacity: active ? 1 : 0,
            x: active ? 470 : 142,
            y: active ? 4 : 24,
          }}
          initial={false}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <rect fill="#fffaf1" height="34" rx="7" stroke="#d19a45" width="74" />
          <path d="M10 9h54M10 17h42M10 25h48" stroke="#24524a" strokeLinecap="round" />
        </motion.g>
      </svg>
    </div>
  );
}
