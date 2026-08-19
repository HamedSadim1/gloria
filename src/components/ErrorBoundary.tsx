import { Component, type ErrorInfo, type ReactNode } from "react";
import { motion } from "framer-motion";
import { AmbientGlow, Badge, FadeIn, Button } from "./ui";
import { ROUTES } from "../config/routes";

interface Props {
  children: ReactNode;
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
    // Log to external error reporting service in production
    void error;
    void errorInfo;
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = ROUTES.HOME;
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-grid relative flex min-h-screen items-center justify-center px-4">
          <AmbientGlow
            color="bg-red-500/10"
            className="top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2"
            duration={6}
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

            <Badge variant="red">Unexpected Error</Badge>

            <FadeIn delay={0.3} y={20} className="mb-3">
              <h1 className="text-2xl font-bold text-white">
                Something went wrong
              </h1>
            </FadeIn>

            <FadeIn delay={0.4} y={20} className="mb-6">
              <p className="text-sm text-gray-400">
                An unexpected error occurred. Please try again or return to the
                home page.
              </p>
            </FadeIn>

            {this.state.error && (
              <FadeIn delay={0.5} y={20} className="mb-6">
                <div className="rounded-lg border border-gray-800 bg-[#12121a] p-4 text-left">
                  <p className="mb-1 text-xs font-medium text-gray-400 uppercase">
                    Error Details
                  </p>
                  <p className="font-mono text-xs text-red-400 break-all">
                    {this.state.error.message}
                  </p>
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.6} y={20}>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button onClick={this.handleReset}>Go to Home</Button>
                <Button
                  variant="secondary"
                  onClick={() => window.location.reload()}
                >
                  Reload Page
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
