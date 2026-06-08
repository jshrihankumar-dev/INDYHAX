import { motion } from "framer-motion";

export default function AboutPage() {
  const techStack = [
    "React 19",
    "OpenAI API",
    "Framer Motion",
    "React Hot Toast",
    "Vanilla CSS",
    "Local Storage"
  ];

  return (
    <div className="page" id="about-page">
      <div className="page-container-sm">
        <motion.div
          className="about-hero"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow" style={{ color: "var(--red)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>Our Mission</p>
          <h1>Building bridges back, one message at a time.</h1>
          <p>
            Before They Were Gone was created at INDYHAX 2026 to solve a simple but universal human problem:
            we all lose touch with people we care about, and we all get stuck when trying to reach out.
          </p>
        </motion.div>

        <div className="about-sections">
          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>The Reconnection Problem</h2>
            <p>
              Psychological research shows that people consistently overestimate how awkward it will be to reach
              out to someone they haven't spoken to in years. We assume the other person won't care, or that they'll
              feel pressured, or that we'll have to explain the silence in exhaustive detail.
            </p>
            <p>
              In reality, studies show that receiving a casual, low-stakes text from an old friend is almost always
              a positive experience. The barrier isn't a lack of care — it's the blank page. We get stuck on the
              exact wording, so we close the app and say we'll do it tomorrow.
            </p>
          </motion.section>

          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>How This Fits the "Bridge" Theme</h2>
            <div className="about-bridge-theme">
              <h3>The Ultimate Bridge</h3>
              <p>
                A bridge connects two separated landmasses over a gap. In human terms, the widest gaps are the
                silences that grow in our relationships. <strong>Before They Were Gone</strong> serves as the blueprint
                and the construction materials to build a verbal bridge back across those gaps.
              </p>
            </div>
          </motion.section>

          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Technology Stack</h2>
            <p>
              This app runs entirely in your browser without database requirements or backend services, making it
              lightweight, fast, and completely private.
            </p>
            <div className="about-tech-grid">
              {techStack.map((tech, i) => (
                <div className="about-tech-item" key={i}>
                  {tech}
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", textAlign: "center" }}
          >
            <h2>Created at INDYHAX</h2>
            <p style={{ color: "var(--muted)", fontStyle: "italic" }}>
              Developed as a collaborative hackathon project by Shrihan and teammate.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
