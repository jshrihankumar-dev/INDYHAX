import { useClaudeAPI } from "./hooks/useClaudeAPI";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const { result, loading, error, generate } = useClaudeAPI();

  return (
    <div className="app">
      <h1>Before They Were Gone</h1>
      <InputForm onSubmit={generate} loading={loading} />
      {error && <p>{error}</p>}
      {result && <ResultCard result={result} />}
    </div>
  );
}