// ── Brand ────────────────────────────────────────────────────────────
/** Application brand name */
export const BRAND = "GLORIA" as const;

// ── Login ────────────────────────────────────────────────────────────
/** Minimum username length for validation */
export const MIN_USERNAME_LENGTH = 2;

/** Simulated API call delay in ms */
export const API_DELAY_MS = 800;

/** Delay before redirecting to dashboard after successful login (ms) */
export const LOGIN_REDIRECT_MS = 1000;

// ── Products ─────────────────────────────────────────────────────────
/** Number of characters to show when truncating a product ID */
export const ID_DISPLAY_LENGTH = 12;

// ── Animation timing ─────────────────────────────────────────────────
/** Common animation durations (seconds) */
export const ANIM = {
  /** Standard fade-in duration */
  FADE: 0.6,
  /** Faster transition (nav, breadcrumbs) */
  FAST: 0.4,
  /** Slower reveal (values, counters) */
  SLOW: 0.8,
  /** Individual item fade-in */
  ITEM: 0.5,
  /** Icon rotation cycle */
  ROTATION: 4,
  /** Status dot / widget pulse */
  PULSE: 2,
  /** Spinner rotation cycle */
  SPINNER: 1,
  /** Brand logo slow rotation */
  BRAND_ROTATION: 20,
  /** Bouncing arrow cycle */
  BOUNCE: 1.5,
} as const;

/** Stagger delay between sequential items (seconds) */
export const STAGGER = 0.1;

/** Common animation delay milestones (seconds) */
export const DELAY = {
  NONE: 0,
  EARLY: 0.2,
  MID: 0.5,
  LATE: 0.8,
  LAST: 0.9,
  FINAL: 1.2,
} as const;

// ── Layout ───────────────────────────────────────────────────────────
/** Max-width for page content */
export const CONTENT_WIDTH = "max-w-5xl";

// ── Shared Tailwind classes ──────────────────────────────────────────
/** Gradient text class (cyan → purple) */
export const GRADIENT_TEXT =
  "bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent";

/** Repeated section heading class (small uppercase cyan label) */
export const SECTION_HEADING_CLASS =
  "mb-4 text-xs sm:text-sm font-semibold tracking-widest text-neon-cyan uppercase";
