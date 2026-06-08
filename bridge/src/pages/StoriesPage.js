import { Link } from "../router";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const stories = [
  {
    tag: "Friend",
    title: "Childhood best friend",
    person: "Jake",
    meta: "9/10 closeness · 3 years apart",
    tone: "Warm",
    quote: "Hey Jake, I was driving past our old neighborhood the other day and it hit me how much I miss just showing up at your place unannounced. I know we kind of let things fade after I moved, but I'd really love to catch up if you're open to it.",
    why: "It ties the message to a specific shared memory, making it feel personal rather than generic.",
    warning: "He may need a few days to respond — the first reply after years can feel loaded.",
  },
  {
    tag: "Teammate",
    title: "Old basketball teammate",
    person: "Marcus",
    meta: "7/10 closeness · 8 months apart",
    tone: "Casual",
    quote: "Yo Marcus, saw a clip the other day that reminded me of that comeback game junior year — still one of the craziest moments. Hope you're doing well, would be cool to grab food sometime.",
    why: "Leading with a shared high-energy memory reactivates positive emotions and makes reaching out feel natural.",
    warning: "He might match your casual tone but keep it surface-level at first — that's okay.",
  },
  {
    tag: "Family",
    title: "Cousin after family tension",
    person: "Priya",
    meta: "6/10 closeness · 2 years apart",
    tone: "Warm",
    quote: "Hey Priya, I know things got complicated with all the family stuff, and I'm not trying to rehash any of that. I've just been thinking about you and I miss having you around. No pressure, but I'd love to hear how you're doing.",
    why: "Acknowledging the tension without relitigating it shows emotional maturity and lowers defensiveness.",
    warning: "She may want to address the family situation directly — be prepared for a deeper conversation.",
  },
  {
    tag: "Mentor",
    title: "Former teacher who believed in you",
    person: "Mr. Davis",
    meta: "5/10 closeness · 4 years apart",
    tone: "Formal",
    quote: "Mr. Davis, I've been meaning to reach out for a while. Your class was one of the few places I actually felt like someone believed I could do something meaningful. I just wanted you to know that, and to say thank you.",
    why: "Gratitude-based messages have the highest response rates because they're entirely positive and require nothing in return.",
    warning: "He may not remember you as vividly as you remember him, and that's completely normal.",
  },
  {
    tag: "Friend",
    title: "College roommate who drifted",
    person: "Alex",
    meta: "8/10 closeness · 1 year apart",
    tone: "Humorous",
    quote: "Alex, I just realized it's been a full year since we talked and honestly that's unacceptable considering you still owe me for that pizza from sophomore year. But seriously, I miss hanging out. Let me know if you want to catch up.",
    why: "Humor diffuses the awkwardness of a long silence and immediately re-establishes the dynamic you had.",
    warning: "The humor might land differently over text — be ready for a more serious response.",
  },
  {
    tag: "Partner",
    title: "Ex you ended on good terms with",
    person: "Sam",
    meta: "9/10 closeness · 6 months apart",
    tone: "Warm",
    quote: "Hey Sam, I hope this isn't weird. I've been thinking about you and just wanted to check in. I hope things are going well with the new job — you deserved that. No expectations, just wanted you to know I still care how you're doing.",
    why: "Setting the boundary ('no expectations') removes pressure while the specific detail (new job) shows genuine attentiveness.",
    warning: "This could reopen feelings on either side — make sure you're reaching out for the right reasons.",
  },
];

export default function StoriesPage() {
  const copyMessage = async (message) => {
    try {
      await navigator.clipboard.writeText(message);
      toast.success("Message copied!");
    } catch {
      toast.error("Could not copy.");
    }
  };

  return (
    <div className="page" id="stories-page">
      <div className="page-container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Stories</p>
          <h1>Real reconnection scenarios</h1>
          <p>
            Browse example messages for different relationships. Click "Try this"
            to jump into the creator with a similar scenario pre-loaded.
          </p>
        </motion.div>

        <div className="stories-grid">
          {stories.map((s, i) => (
            <motion.div
              className="story-card"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="story-card-top">
                <span className="story-card-tag">{s.tag}</span>
                <span className="story-card-closeness">{s.tone}</span>
              </div>
              <h3>{s.title}</h3>
              <p className="story-card-meta">{s.meta}</p>
              <blockquote>{s.quote}</blockquote>
              <div className="story-card-footer">
                <Link to="/create" className="scenario-card-action">
                  Try this scenario
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <button
                  className="btn btn-copy btn-sm"
                  onClick={() => copyMessage(s.quote)}
                  id={`copy-story-${i}`}
                >
                  Copy
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
