import { motion } from "framer-motion";

const tips = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "When to reach out",
    desc: "There is rarely a 'perfect' time. If someone crossed your mind, or you saw something that reminded you of them, that's already a good enough reason. Avoid waiting for major milestones like birthdays or holidays, as those can carry higher expectations.",
    points: [
      "If you randomy thought of a memory",
      "If you saw a show or song you both liked",
      "During a calm weekday evening (less busy)"
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "What to say (and what not to)",
    desc: "Keep it short, low-pressure, and specific. Don't over-explain the silence — writing a massive paragraph apologizing for not texting will make them feel obligated to match that energy. Keep the spotlight on the connection.",
    points: [
      "Acknowledge the gap briefly without excuses",
      "Reference a specific positive memory",
      "Do not ask for immediate deep catch-ups"
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Managing expectations",
    desc: "They might not reply instantly, or their reply might be short. This doesn't mean they are angry or that reaching out was a mistake. They might be busy, overwhelmed, or simply unsure of how to respond to a surprise text.",
    points: [
      "Give them space and time to process",
      "A short reply is still a win",
      "Focus on your action, not their reaction"
    ]
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Following up",
    desc: "If they do reply and show interest, keep it slow. You don't need to rebuild a lifetime friendship in one night. Suggest a low-stakes catch-up like a quick phone call, coffee, or a casual phone call.",
    points: [
      "Start with small talk before deep topics",
      "Suggest a coffee or call with a clear end time",
      "Keep the momentum casual and light"
    ]
  }
];

export default function TipsPage() {
  return (
    <div className="page" id="tips-page">
      <div className="page-container-sm">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Tips & Guides</p>
          <h1>Reconnection advice</h1>
          <p>
            Reaching out after a long time is emotionally vulnerable. Here are some simple,
            evidence-based guidelines to help make the first step easier.
          </p>
        </motion.div>

        <div className="tips-grid">
          {tips.map((tip, i) => (
            <motion.div
              className="tip-card"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="tip-card-icon">{tip.icon}</div>
              <h3>{tip.title}</h3>
              <p>{tip.desc}</p>
              <ul>
                {tip.points.map((pt, index) => (
                  <li key={index}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="tip-pullquote"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote>
            "Reconnection is not about erasing the silence; it is about building a path forward from where you are now."
          </blockquote>
          <cite>— The Before They Were Gone Team</cite>
        </motion.div>
      </div>
    </div>
  );
}
