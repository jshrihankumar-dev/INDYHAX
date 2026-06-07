import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ResultCard({ result }) {
  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(result.message);
      toast.success("Message copied. Now send it when you are ready.");
    } catch {
      toast.error("Could not copy the message.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {result && (
        <motion.article
          animate={{ opacity: 1, y: 0 }}
          className="result-card"
          exit={{ opacity: 0, y: 18 }}
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="result-header">
            <div>
              <p className="eyebrow">Generated message</p>
              <h2>Ready when you are</h2>
            </div>
            <button className="copy-button" onClick={copyMessage} type="button">
              Copy
            </button>
          </div>

          <blockquote>{result.message}</blockquote>

          <div className="result-insight">
            <h3>Why this works</h3>
            <p>{result.why}</p>
          </div>

          <div className="result-warning">
            <h3>Be prepared for</h3>
            <p>{result.warning}</p>
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
}
