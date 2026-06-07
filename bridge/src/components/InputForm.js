import ToneSelector from "./ToneSelector";

const durationOptions = [
  "A few weeks",
  "A few months",
  "8 months",
  "1 year",
  "2 years",
  "3 years",
  "More than 3 years",
];

export const exampleScenario = {
  name: "Childhood best friend",
  relationship: "Friend",
  closeness: 9,
  reason: "Moved away and stopped texting regularly",
  duration: "3 years",
  tone: "Warm",
};

export const emptyForm = {
  name: "",
  relationship: "",
  closeness: 6,
  reason: "",
  duration: "A few months",
  tone: "Warm",
};

export default function InputForm({
  formData,
  loading,
  onChange,
  onExample,
  onSubmit,
}) {
  const updateField = (field, value) => {
    onChange({
      ...formData,
      [field]: field === "closeness" ? Number(value) : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="form-row two-column">
        <label>
          <span>Person</span>
          <input
            autoComplete="off"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Childhood best friend"
            required
            type="text"
            value={formData.name}
          />
        </label>

        <label>
          <span>Relationship</span>
          <input
            autoComplete="off"
            onChange={(event) => updateField("relationship", event.target.value)}
            placeholder="Friend, cousin, teammate"
            required
            type="text"
            value={formData.relationship}
          />
        </label>
      </div>

      <label className="form-row">
        <span>How close were you?</span>
        <div className="slider-line">
          <input
            aria-label="Closeness from 1 to 10"
            max="10"
            min="1"
            onChange={(event) => updateField("closeness", event.target.value)}
            type="range"
            value={formData.closeness}
          />
          <strong>{formData.closeness}/10</strong>
        </div>
      </label>

      <label className="form-row">
        <span>Why did you drift?</span>
        <textarea
          onChange={(event) => updateField("reason", event.target.value)}
          placeholder="Moved away and stopped texting regularly"
          required
          rows="4"
          value={formData.reason}
        />
      </label>

      <div className="form-row two-column align-end">
        <label>
          <span>Time apart</span>
          <select
            onChange={(event) => updateField("duration", event.target.value)}
            value={formData.duration}
          >
            {durationOptions.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </label>

        <div className="tone-field">
          <span>Tone</span>
          <ToneSelector
            onChange={(tone) => updateField("tone", tone)}
            value={formData.tone}
          />
        </div>
      </div>

      <div className="form-actions">
        <button className="secondary-button" onClick={onExample} type="button">
          Try an Example
        </button>
        <button className="primary-button" disabled={loading} type="submit">
          {loading ? "Building the bridge..." : "Generate Message"}
        </button>
      </div>
    </form>
  );
}
