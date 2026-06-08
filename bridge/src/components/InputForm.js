import { motion } from "framer-motion";
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
  name: "Maya",
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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const fieldHints = [
  "Specific memory",
  "No pressure",
  "Short enough to send",
];

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
    <motion.form 
      className="input-form" 
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className="form-intelligence" variants={itemVariants}>
        <div>
          <div className="mono">Message recipe</div>
          <p>Context in, low-pressure draft out. No contact info required.</p>
        </div>
        <div className="recipe-pills">
          {fieldHints.map((hint) => (
            <span key={hint}>{hint}</span>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="form-grid two">
        <label className="form-label">
          <span>Person</span>
          <input
            autoComplete="off"
            className="form-input"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Maya, cousin, old teammate"
            required
            type="text"
            value={formData.name}
            id="input-person-name"
          />
        </label>

        <label className="form-label">
          <span>Relationship</span>
          <input
            autoComplete="off"
            className="form-input"
            onChange={(event) => updateField("relationship", event.target.value)}
            placeholder="Friend, cousin, teammate"
            required
            type="text"
            value={formData.relationship}
            id="input-relationship-type"
          />
        </label>
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="form-label">
          <span>How close were you?</span>
          <div className="slider-container">
            <input
              aria-label="Closeness from 1 to 10"
              max="10"
              min="1"
              onChange={(event) => updateField("closeness", event.target.value)}
              type="range"
              value={formData.closeness}
              id="input-closeness-slider"
            />
            <strong>{formData.closeness}/10</strong>
          </div>
        </label>
      </motion.div>

      <motion.div variants={itemVariants}>
        <label className="form-label">
          <span>Why did you drift?</span>
          <textarea
            className="form-textarea"
            onChange={(event) => updateField("reason", event.target.value)}
            placeholder="Moved away and stopped texting..."
            required
            rows="3"
            value={formData.reason}
            id="input-drift-reason"
          />
        </label>
      </motion.div>

      <motion.div variants={itemVariants} className="form-grid two align-end">
        <label className="form-label">
          <span>Time apart</span>
          <select
            className="form-select"
            onChange={(event) => updateField("duration", event.target.value)}
            value={formData.duration}
            id="input-time-apart"
          >
            {durationOptions.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </label>

        <div className="form-label">
          <span>Tone</span>
          <ToneSelector
            onChange={(tone) => updateField("tone", tone)}
            value={formData.tone}
          />
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="form-actions">
        <button className="btn btn-soft" onClick={onExample} type="button" id="btn-autofill-example">
          Try example
        </button>
        <button className="btn btn-primary" style={{ flex: 1 }} disabled={loading} type="submit" id="btn-submit-generate">
          {loading ? "Drafting..." : "Generate draft"}
        </button>
      </motion.div>
    </motion.form>
  );
}
