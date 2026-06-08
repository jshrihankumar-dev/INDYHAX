import { useState } from "react";
import { Link } from "../router";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Tell us about the person",
    desc: "Enter their name or description, your relationship (friend, cousin, teammate), how close you were on a scale of 1–10, why you drifted apart, and how long it's been. The more context you give, the more personal the message will feel.",
  },
  {
    num: "2",
    title: "Choose your tone",
    desc: "Pick from Warm, Casual, Formal, or Humorous. This controls the entire voice of the message — whether it reads like a heartfelt letter or a quick, friendly text.",
  },
  {
    num: "3",
    title: "AI crafts a human message",
    desc: "Our AI writes a message that sounds like you, not a robot. It references your specific relationship, acknowledges the gap without over-explaining, and keeps things under five sentences.",
  },
  {
    num: "4",
    title: "Copy, send, reconnect",
    desc: "Copy the message with one click. You'll also see why the message works psychologically and one honest thing to be prepared for. Send it whenever you're ready — there's no expiration on reaching out.",
  },
];

const faqs = [
  {
    q: "Is this really AI-generated? It doesn't sound like AI.",
    a: "That's the point. Our prompts are specifically designed to produce messages that sound human and personal. The AI references your specific context and avoids generic filler phrases.",
  },
  {
    q: "Will the person know I used AI to write this?",
    a: "Not unless you tell them. The messages are designed to sound like something you would naturally write — specific, personal, and in a natural conversational tone.",
  },
  {
    q: "What if they don't respond?",
    a: "That's normal. We include a 'Be prepared for' section with each message to set realistic expectations. The act of reaching out is what matters, regardless of the response.",
  },
  {
    q: "Can I edit the message before sending it?",
    a: "Absolutely. The generated message is a starting point. Copy it, tweak it, make it more you. We encourage personalization — the AI just helps you break through the blank-page paralysis.",
  },
  {
    q: "Is my data stored anywhere?",
    a: "No. Everything runs in your browser. Saved drafts are stored in your browser's local storage only. We don't send your personal information to any server beyond the AI generation request.",
  },
  {
    q: "Does this cost money?",
    a: "No. Before They Were Gone is free to use. It was built at INDYHAX as an open-source hackathon project.",
  },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (i) => {
    setOpenFaq(openFaq === i ? null : i);
  };

  return (
    <div className="page" id="how-it-works-page">
      <div className="page-container-sm">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">How It Works</p>
          <h1>From silence to reconnection in four simple steps</h1>
          <p>
            No signup, no account, no saved data. Just tell us about the person
            and we'll help you write the first message back.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="how-steps-list">
          {steps.map((step, i) => (
            <motion.div
              className="how-step"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="how-step-number">{step.num}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <Link to="/create" className="btn btn-primary" id="how-cta">
            Try It Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* FAQ */}
        <motion.section
          className="faq-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? " is-open" : ""}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                  id={`faq-${i}`}
                >
                  <span>{faq.q}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openFaq === i && (
                  <motion.div
                    className="faq-answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
