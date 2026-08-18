module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // New feature
        "fix", // Bug fix
        "docs", // Documentation
        "style", // Formatting (no code change)
        "refactor", // Code refactoring
        "perf", // Performance improvement
        "test", // Tests
        "build", // Build system or dependencies
        "ci", // CI configuration
        "chore", // Maintenance
        "revert", // Revert
      ],
    ],
    "subject-case": [2, "never", ["start-case", "pascal-case", "upper-case"]],
    "subject-empty": [2, "never"],
    "type-empty": [2, "never"],
    "header-max-length": [2, "always", 72],
  },
};
