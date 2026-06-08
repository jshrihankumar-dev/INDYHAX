import { useState, useEffect } from "react";
import { Link } from "../router";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function SavedDraftsPage() {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("btwg_drafts") || "[]");
      setDrafts(stored);
    } catch {
      setDrafts([]);
    }
  }, []);

  const deleteDraft = (id) => {
    const updated = drafts.filter((d) => d.id !== id);
    setDrafts(updated);
    localStorage.setItem("btwg_drafts", JSON.stringify(updated));
    toast.success("Draft deleted.");
  };

  const copyMessage = async (message) => {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Message copied!");
    } catch {
      toast.error("Could not copy.");
    }
  };

  const clearAll = () => {
    setDrafts([]);
    localStorage.setItem("btwg_drafts", "[]");
    toast.success("All drafts cleared.");
  };

  const formatDate = (iso) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return "Unknown date";
    }
  };

  return (
    <div className="page" id="saved-page">
      <div className="page-container-sm">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Saved Drafts</p>
          <h1>Your saved messages</h1>
          <p>
            Messages you've saved from the creator. Everything is stored locally
            in your browser — nothing leaves your device.
          </p>
        </motion.div>

        {drafts.length > 0 ? (
          <>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
              <button className="btn btn-danger btn-sm" onClick={clearAll} id="clear-all-drafts">
                Clear All
              </button>
            </div>
            <div className="drafts-list">
              {drafts.map((draft, i) => (
                <motion.div
                  className="draft-card"
                  key={draft.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="draft-card-header">
                    <div>
                      <h3>
                        To: {draft.person}
                        {draft.relationship ? ` (${draft.relationship})` : ""}
                      </h3>
                    </div>
                    <span className="draft-card-date">{formatDate(draft.savedAt)}</span>
                  </div>
                  <blockquote>{draft.message}</blockquote>
                  <div className="draft-card-actions">
                    <button
                      className="btn btn-copy btn-sm"
                      onClick={() => copyMessage(draft.message)}
                      id={`copy-draft-${draft.id}`}
                    >
                      Copy
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteDraft(draft.id)}
                      id={`delete-draft-${draft.id}`}
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="empty-state-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                <polyline points="17 21 17 13 7 13 7 21" />
                <polyline points="7 3 7 8 15 8" />
              </svg>
            </div>
            <h2>No saved drafts yet</h2>
            <p>
              When you generate a message, you can save it here for later. Your
              drafts are stored locally in your browser.
            </p>
            <Link to="/create" className="btn btn-primary" id="empty-create-cta">
              Create Your First Message
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
