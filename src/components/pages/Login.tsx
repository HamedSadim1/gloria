import { useState, useEffect, useActionState, type FC } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";
import { PageLayout, AmbientGlow, FadeIn } from "@/components/ui";
import { ROUTES } from "@/config/routes";
import Seo from "@/components/seo/Seo";
import { API_DELAY_MS, LOGIN_REDIRECT_MS } from "@/config/constants";
import { validateUsername, sleep } from "@/utils";
import {
  LoginHeader,
  LoginSuccess,
  UsernameField,
  SubmitButton,
} from "@/components/pages/login/index";

type LoginState =
  | { status: "idle" }
  | { status: "error"; error: string; submitted: string }
  | { status: "success"; name: string };

const Login: FC = () => {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const [state, formAction, isPending] = useActionState(
    async (_prev: LoginState, formData: FormData): Promise<LoginState> => {
      const submitted = String(formData.get("username") ?? "").trim();
      const validationError = validateUsername(submitted);
      if (validationError) {
        return { status: "error", error: validationError, submitted };
      }

      // Simulate API call
      await sleep(API_DELAY_MS);
      login(submitted);
      return { status: "success", name: submitted };
    },
    { status: "idle" },
  );

  // Show the validation error only while the input still holds the submitted value
  const error =
    state.status === "error" && state.submitted === name
      ? state.error
      : undefined;

  // Redirect to the dashboard after a successful login
  useEffect(() => {
    if (state.status !== "success") return;
    const timeout = window.setTimeout(
      () => navigate(ROUTES.DASHBOARD),
      LOGIN_REDIRECT_MS,
    );
    return () => window.clearTimeout(timeout);
  }, [state.status, navigate]);

  return (
    <PageLayout>
      <Seo
        title="Login"
        description="Sign in to your GLORIA account dashboard."
        path={ROUTES.LOGIN}
        noindex
      />
      <AmbientGlow color="bg-neon-purple/10" />

      <div className="mx-auto w-full max-w-md">
        <LoginHeader />

        <AnimatePresence mode="wait">
          {state.status === "success" ? (
            <LoginSuccess name={state.name} />
          ) : (
            <form
              key="form"
              action={formAction}
              className="rounded-xl sm:rounded-2xl border border-gray-800 bg-dark-800 p-5 sm:p-8"
            >
              <UsernameField
                value={name}
                error={error}
                disabled={isPending}
                onChange={setName}
              />
              <SubmitButton />
            </form>
          )}
        </AnimatePresence>

        <FadeIn delay={0.8} y={0} className="mt-4 sm:mt-6 text-center">
          <p className="text-xs text-gray-400">
            Don't have an account?{" "}
            <Link
              to={ROUTES.PRODUCTS}
              className="text-neon-cyan no-underline hover:underline"
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
