import { Toaster } from "react-hot-toast";
import { HashRouter, Routes, Route } from "./router";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import CreatePage from "./pages/CreatePage";
import HowItWorksPage from "./pages/HowItWorksPage";
import StoriesPage from "./pages/StoriesPage";
import SavedDraftsPage from "./pages/SavedDraftsPage";
import TipsPage from "./pages/TipsPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <HashRouter>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2800,
          style: {
            background: "var(--ink)",
            borderRadius: "2px",
            color: "var(--paper)",
            fontFamily: "var(--ui)",
            fontSize: "13px",
          },
        }}
      />
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/saved" element={<SavedDraftsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
