export function Logo() {
  return (
    <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
      <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-accent blur-sm opacity-60" />
      <svg viewBox="0 0 24 24" className="relative h-5 w-5 text-white" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path
          d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}
