import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ResultCard({ result, formData }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.message);
      toast.success("Message copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };

  const handleSave = () => {
    try {
      const existing = JSON.parse(localStorage.getItem("btwg_drafts") || "[]");
      const draft = {
        id: Date.now().toString(),
        person: formData?.name || "Unknown",
        relationship: formData?.relationship || "Unknown",
        message: result.message,
        savedAt: new Date().toISOString()
      };
      localStorage.setItem("btwg_drafts", JSON.stringify([draft, ...existing]));
      toast.success("Draft saved!");
    } catch {
      toast.error("Could not save draft.");
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="result-card"
    >
      <div className="result-card-header">
        <div>
          <p className="mono">Generated draft</p>
          <h2>Your message is ready</h2>
        </div>
        <div className="result-actions">
          <button className="btn btn-sm btn-soft" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-sm btn-primary" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      <div className="result-message-area">
        <blockquote className="result-blockquote">
          {result.message}
        </blockquote>
      </div>

      <div className="result-insights">
        <div className="result-insight-box">
          <h3>Why this works</h3>
          <p>{result.why}</p>
        </div>
        <div className="result-insight-box">
          <h3>Keep in mind</h3>
          <p>{result.warning}</p>
        </div>
      </div>
    </motion.article>
  );
}
