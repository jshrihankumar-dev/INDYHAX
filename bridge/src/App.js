import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import BridgeVisual from "./BridgeVisual";
import InputForm, { emptyForm, exampleScenario } from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import { useOpenAIAPI } from "./hooks/useOpenAIAPI";

function App() {
  const [formData, setFormData] = useState(emptyForm);
  const { error, generate, loading, result, usedFallback } = useOpenAIAPI();

  const useExample = () => {
    setFormData(exampleScenario);
  };

  return (
    <div className="app-shell">
      <Toaster position="top-center" />

      <main className="app-layout">
        <section className="workspace-panel">
          <div className="intro">
            <p className="eyebrow">Before They Were Gone</p>
            <h1>Write the first message back.</h1>
            <p>
              Turn the awkward silence into a clear, low-pressure note that is
              specific enough to send.
            </p>
          </div>

          <BridgeVisual active={Boolean(result)} />

          <InputForm
            formData={formData}
            loading={loading}
            onChange={setFormData}
            onExample={useExample}
            onSubmit={generate}
          />
        </section>

        <aside className="output-panel">
          {error && <p className="error-message">{error}</p>}
          {usedFallback && (
            <p className="fallback-note">
              Demo backup is active. Add REACT_APP_OPENAI_API_KEY for live AI.
            </p>
          )}

          {result ? (
            <ResultCard result={result} />
          ) : (
            <div className="empty-result">
              <p className="eyebrow">Output</p>
              <h2>Your message will appear here</h2>
              <p>
                Use the example for a fast demo, then generate a message and
                copy it from this panel.
              </p>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
}