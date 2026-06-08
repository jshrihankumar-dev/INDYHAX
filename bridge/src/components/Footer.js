import { Link } from "../router";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Logo />
            Before They Were Gone
          </Link>
          <p>
            Reconnecting people through carefully crafted, low-pressure messages.
            Built to take the anxiety out of saying hello again.
          </p>
        </div>
        
        <div className="footer-col">
          <div className="mono" style={{ marginBottom: 14 }}>Product</div>
          <Link to="/create">Generator</Link>
          <Link to="/how-it-works">How it works</Link>
          <Link to="/stories">Real stories</Link>
        </div>

        <div className="footer-col">
          <div className="mono" style={{ marginBottom: 14 }}>Resources</div>
          <Link to="/tips">Tips</Link>
          <Link to="/saved">Saved Drafts</Link>
          <Link to="/about">About INDYHAX</Link>
        </div>

        <div className="footer-col">
          <div className="mono" style={{ marginBottom: 14 }}>Legal</div>
          <button type="button">Privacy Policy</button>
          <button type="button">Terms of Service</button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="mono">Built at INDYHAX 2026</div>
        <div className="footer-status">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--leaf)' }}/>
          <span className="mono" style={{ textTransform: 'none' }}>All systems nominal</span>
        </div>
      </div>
    </footer>
  );
}
