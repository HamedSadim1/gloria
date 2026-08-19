import { motion } from "framer-motion";

interface UsernameFieldProps {
  value: string;
  error?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
  onClearError: () => void;
}

const UsernameField = ({
  value,
  error,
  disabled,
  onChange,
  onClearError,
}: UsernameFieldProps) => {
  return (
    <motion.div
      className="mb-6 sm:mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <label
        htmlFor="username"
        className="mb-2 block text-sm font-medium text-gray-300"
      >
        Username
      </label>
      <input
        id="username"
        type="text"
        className={`w-full rounded-lg border bg-dark-900 px-4 py-3 text-white placeholder-gray-500 transition-all duration-200 focus:outline-hidden focus:ring-1 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/50"
            : "border-gray-700 focus:border-neon-cyan focus:ring-neon-cyan/50"
        }`}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          if (error) onClearError();
        }}
        placeholder="Enter your username"
        disabled={disabled}
      />
      {error && (
        <motion.p
          className="mt-1.5 text-xs text-red-400"
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

export default UsernameField;
