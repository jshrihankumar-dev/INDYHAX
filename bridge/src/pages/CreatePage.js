import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import BridgeVisual from "../BridgeVisual";
import InputForm, { emptyForm, exampleScenario } from "../components/InputForm";
import ResultCard from "../components/ResultCard";
import useOpenAIAPI from "../hooks/useOpenAIAPI";

const checklist = [
  "Specific relationship",
  "Short message",
  "No pressure",
  "Honest warning",
];

export default function CreatePage() {
  const [formData, setFormData] = useState(emptyForm);
  const [result, setResult] = useState(null);
  const { generateMessage, loading, error, usedFallback } = useOpenAIAPI();

  const handleGenerate = async (data) => {
    setResult(null);
    const response = await generateMessage(data);
    if (response) setResult(response);
  };

  const handleAutofillExample = () => {
    setFormData(exampleScenario);
  };

  return (
    <div className="page create-page">
      <section className="studio-header">
        <div>
          <p className="eyebrow">Drafting room</p>
          <h1 className="serif">
            Build a bridge before the silence gets heavier.
          </h1>
        </div>
        <div className="studio-status">
          <span className="status-dot" />
          <div>
            <strong>{process.env.REACT_APP_OPENAI_API_KEY ? "Live AI" : "Demo backup"}</strong>
            <p>{process.env.REACT_APP_OPENAI_API_KEY ? "OpenAI key loaded" : "No key needed for demo"}</p>
          </div>
        </div>
      </section>

      <section className="create-layout">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="create-panel card"
          initial={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="panel-heading">
            <div>
              <p className="mono">Input</p>
              <h2 className="serif">Relationship context</h2>
            </div>
            <button
              className="btn btn-soft btn-sm"
              onClick={handleAutofillExample}
              type="button"
            >
              Fill demo
            </button>
          </div>

          <InputForm
            formData={formData}
            loading={loading}
            onChange={setFormData}
            onExample={handleAutofillExample}
            onSubmit={handleGenerate}
          />

          {error && <div className="inline-alert">{error}</div>}
          {usedFallback && (
            <div className="inline-alert is-info">
              Demo backup generated this draft. Add REACT_APP_OPENAI_API_KEY for live AI.
            </div>
          )}
        </motion.div>

        <aside className="output-panel">
          <div className="bridge-preview card">
            <div className="card-meta">
              <span className="mono">Bridge preview</span>
              <span className="badge badge-leaf">{result ? "active" : "waiting"}</span>
            </div>
            <BridgeVisual active={Boolean(result) || loading} />
          </div>

          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="empty-result card"
                exit={{ opacity: 0, scale: 0.97 }}
                initial={{ opacity: 0, y: 18 }}
                key="empty"
                transition={{ duration: 0.35 }}
              >
                <p className="mono">Output</p>
                <h2 className="serif">
                  {loading ? "Writing your draft..." : "Your draft will appear here"}
                </h2>
                <p>
                  The generated card includes the message, why it works, and
                  what to be prepared for before sending.
                </p>
                <div className="quality-list">
                  {checklist.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <ResultCard key="result" result={result} formData={formData} />
            )}
          </AnimatePresence>
        </aside>
      </section>
    </div>
  );
}
