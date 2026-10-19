import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, Component } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import SmoothScroll from "./components/SmoothScroll";
import Home from "./pages/Home";
import CivicIndiaCaseStudy from "./pages/CivicIndiaCaseStudy";
import CoachingDemo from "./pages/CoachingDemo";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-berry flex items-center justify-center font-bold text-xl mb-4">
            !
          </div>
          <h2 className="font-serif text-2xl font-semibold text-ink mb-2">Something went wrong</h2>
          <p className="text-ink-muted text-[0.92rem] max-w-md mb-6 font-sans">
            An unexpected error occurred while loading this view. You can safely return to the home page.
          </p>
          <a
            href="/"
            onClick={() => this.setState({ hasError: false })}
            className="px-6 py-2.5 rounded-full bg-[#450920] text-white text-[0.88rem] font-medium hover:bg-berry active:scale-[0.97] transition-all shadow-sm"
          >
            Return to Home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isDemo = location.pathname.startsWith("/demo");

  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollToTop />
      {!isDemo && <Navbar />}
      <ErrorBoundary>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/civicindia" element={<CivicIndiaCaseStudy />} />
            <Route path="/demo/coaching-institute" element={<CoachingDemo />} />
          </Routes>
        </AnimatePresence>
      </ErrorBoundary>
      {!isDemo && <Footer />}
    </SmoothScroll>
  );
}
