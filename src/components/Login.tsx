import { useState, useRef, useEffect, type FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { PageLayout, AmbientGlow, FadeIn } from "./ui";
import { ROUTES } from "../config/routes";
import {
  LoginHeader,
  LoginSuccess,
  UsernameField,
  SubmitButton,
} from "./login/index";

const Login: FC = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<{ name?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const timeoutRef = useRef<number | null>(null);
  const isSubmitting = useRef(false);

  useEffect(() => {
    return () => {
      isSubmitting.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const validate = () => {
    const newErrors: { name?: string } = {};
    if (!name.trim()) {
      newErrors.name = "Username is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Username must be at least 2 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (isSubmitting.current) return;
    isSubmitting.current = true;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    login(name.trim());
    setIsLoading(false);
    setShowSuccess(true);

    timeoutRef.current = window.setTimeout(() => {
      navigate(ROUTES.DASHBOARD);
    }, 1000);
  };

  return (
    <PageLayout>
      <AmbientGlow color="bg-[#bf00ff]/10" />

      <div className="mx-auto w-full max-w-md">
        <LoginHeader />

        <AnimatePresence mode="wait">
          {showSuccess ? (
            <LoginSuccess name={name} />
          ) : (
            <form
              key="form"
              onSubmit={handleSubmit}
              className="rounded-xl sm:rounded-2xl border border-gray-800 bg-[#12121a] p-5 sm:p-8"
            >
              <UsernameField
                value={name}
                error={errors.name}
                disabled={isLoading}
                onChange={setName}
                onClearError={() =>
                  setErrors((prev) => ({ ...prev, name: undefined }))
                }
              />
              <SubmitButton isLoading={isLoading} />
            </form>
          )}
        </AnimatePresence>

        <FadeIn delay={0.8} y={0} className="mt-4 sm:mt-6 text-center">
          <p className="text-xs text-gray-400">
            Don't have an account?{" "}
            <Link
              to={ROUTES.PRODUCTS}
              className="text-[#00f5ff] no-underline hover:underline"
            >
              View Products
            </Link>
          </p>
        </FadeIn>
      </div>
    </PageLayout>
  );
};

export default Login;
