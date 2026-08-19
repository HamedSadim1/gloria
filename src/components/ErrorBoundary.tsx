import { Component, type ErrorInfo, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  onNavigateHome?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (this.props.onNavigateHome) {
      this.props.onNavigateHome();
    } else {
      window.location.href = "/";
    }
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-grid relative flex min-h-screen items-center justify-center px-4">
          <motion.div
            className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />

          <div className="w-full max-w-md text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/30 bg-red-500/10">
                <svg
                  className="h-10 w-10 text-red-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
            </motion.div>

            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm text-red-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Unexpected Error
            </motion.div>

            <motion.h1
              className="mb-3 text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Something went wrong
            </motion.h1>

            <motion.p
              className="mb-6 text-sm text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              An unexpected error occurred. Please try again or return to the
              home page.
            </motion.p>

            {this.state.error && (
              <motion.div
                className="mb-6 rounded-lg border border-gray-800 bg-[#12121a] p-4 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="mb-1 text-xs font-medium text-gray-400 uppercase">
                  Error Details
                </p>
                <p className="font-mono text-xs text-red-400 break-all">
                  {this.state.error.message}
                </p>
              </motion.div>
            )}

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={this.handleReset}
                className="cursor-pointer rounded-lg bg-[#00f5ff] px-6 py-3 font-semibold text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,255,0.5)] focus-visible:ring-2 focus-visible:ring-[#00f5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
              >
                Go to Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="cursor-pointer rounded-lg border border-gray-700 bg-transparent px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5 focus-visible:ring-2 focus-visible:ring-[#00f5ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
              >
                Reload Page
              </button>
            </motion.div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundaryWithNav = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  return (
    <ErrorBoundary onNavigateHome={() => navigate("/", { replace: true })}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWithNav;
