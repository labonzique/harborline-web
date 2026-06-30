// Side-effect polyfill, imported FIRST by ds-entry.tsx so it runs before any
// component module initializes. lib/site.ts reads process.env.NEXT_PUBLIC_* at
// module-eval time; the browser/design tool has no `process`, so we define a
// minimal stub. The real values all have fallbacks in site.ts, so leaving them
// undefined is correct — the components get their default URLs.
const g = globalThis as unknown as {
  process?: { env: Record<string, string | undefined> };
};
if (!g.process) g.process = { env: {} };

export {};
