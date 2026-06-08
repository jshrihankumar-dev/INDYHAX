import { motion } from "framer-motion";
import BridgeVisual from "../BridgeVisual";
import { Link } from "../router";

const workflow = [
  {
    k: "01",
    title: "Add the emotional context",
    body: "Name the person, your connection, what caused the silence, and how close you once were.",
    time: "~20 sec",
  },
  {
    k: "02",
    title: "Choose the pressure level",
    body: "Warm, casual, formal, or humorous. The draft adapts to the relationship instead of sounding generic.",
    time: "~5 sec",
  },
  {
    k: "03",
    title: "Send a note that feels human",
    body: "Copy a short message, read why it works, and prepare for the most likely response.",
    time: "instant",
  },
];

const examples = [
  ["Childhood friend", "Moved away", "Warm", "3 years"],
  ["Old teammate", "Season ended", "Casual", "8 months"],
  ["Cousin", "Family tension", "Warm", "2 years"],
  ["Former teacher", "Wanted to say thanks", "Formal", "4 years"],
];

export default function LandingPage() {
  return (
    <div className="page landing-page">
      <section className="landing-hero">
        <div className="hero-copy">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero-badge mono"
            initial={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.45 }}
          >
            <span className="status-dot" />
            12,492 bridges drafted
          </motion.p>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="hero-heading serif"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            Stop staring at the blank message.
            <span> Write the first note back.</span>
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero-subtext"
            initial={{ opacity: 0, y: 12 }}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            Before They Were Gone turns messy relationship context into a short,
            specific, low-pressure message you can actually send.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            transition={{ delay: 0.16, duration: 0.55 }}
          >
            <Link className="btn btn-primary btn-lg" to="/create">
              Draft a message
            </Link>
            <Link className="btn btn-ghost btn-lg" to="/stories">
              Browse examples
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="hero-product"
          initial={{ opacity: 0, y: 22 }}
          transition={{ delay: 0.18, duration: 0.65 }}
        >
          <div className="browser-frame">
            <div className="browser-top">
              <span />
              <span />
              <span />
              <div>draft.beforetheyweregone.app</div>
            </div>
            <div className="mini-workspace">
              <div className="mini-form">
                <div className="mono">Context</div>
                <div className="mini-field wide">Maya</div>
                <div className="mini-field">Friend</div>
                <div className="mini-field">3 years</div>
                <div className="mini-text">
                  Moved away and stopped texting regularly
                </div>
              </div>
              <div className="mini-result">
                <div className="badge badge-accent">generated</div>
                <p>
                  Hey Maya, I was thinking about our old walks after school and
                  realized I miss having you in my life...
                </p>
              </div>
            </div>
          </div>
          <BridgeVisual active />
        </motion.div>
      </section>

      <section className="proof-strip">
        {[
          ["No account", "Runs in the browser"],
          ["No contact info", "Only relationship context"],
          ["Demo safe", "Fallback output included"],
          ["Copy ready", "One click to send"],
        ].map(([title, detail]) => (
          <div key={title}>
            <div className="serif">{title}</div>
            <p className="mono">{detail}</p>
          </div>
        ))}
      </section>

      <section className="section-band">
        <div className="section-heading">
          <p className="eyebrow">The process</p>
          <h2 className="serif">
            Three steps. <span className="serif-italic">Less panic.</span>
          </h2>
        </div>

        <div className="process-grid">
          {workflow.map((step, index) => (
            <motion.article
              className="process-card card"
              initial={{ opacity: 0, y: 18 }}
              key={step.k}
              transition={{ delay: index * 0.06, duration: 0.45 }}
              viewport={{ once: true, margin: "-60px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="card-meta">
                <span className="mono">step {step.k}</span>
                <span className="hand">{step.time}</span>
              </div>
              <h3 className="serif">{step.title}</h3>
              <p>{step.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="examples-section">
        <div className="section-heading">
          <p className="eyebrow">Demo scenarios</p>
          <h2 className="serif">
            Built for the relationships people actually lose.
          </h2>
        </div>

        <div className="scenario-table">
          <div className="scenario-row scenario-head">
            <span>Person</span>
            <span>Gap</span>
            <span>Tone</span>
            <span>Time</span>
          </div>
          {examples.map((row) => (
            <div className="scenario-row" key={row.join("-")}>
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Your turn</p>
        <h2 className="serif">
          The first message does not need to be perfect. It needs to exist.
        </h2>
        <Link className="btn btn-primary btn-lg" to="/create">
          Start drafting
        </Link>
      </section>
    </div>
  );
}
