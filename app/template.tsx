// A template re-mounts on every navigation, so this gives each route a subtle
// fade-in. Kept short and opacity-only to avoid layout shift or scroll jumps.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-fade-in">{children}</div>;
}
