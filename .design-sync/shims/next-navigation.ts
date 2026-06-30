// Static shim for `next/navigation` used only by the design-sync bundle.
// usePathname/useRouter/etc. need the App Router context, which doesn't exist in
// the design tool. These no-op stubs let components that call them (SiteHeader,
// MobileCtaBar) render statically. usePathname returns "/" so active-link logic
// has a sane default.
const noop = () => {};

export function usePathname(): string {
  return "/";
}

export function useRouter() {
  return {
    push: noop,
    replace: noop,
    prefetch: noop,
    back: noop,
    forward: noop,
    refresh: noop,
  };
}

export function useSearchParams(): URLSearchParams {
  return new URLSearchParams();
}

export function useParams<T extends Record<string, string | string[]> = Record<string, string | string[]>>(): T {
  return {} as T;
}

export function useSelectedLayoutSegment(): string | null {
  return null;
}

export function useSelectedLayoutSegments(): string[] {
  return [];
}

export function redirect(_url: string): never {
  throw new Error("redirect() is a no-op in the design-sync shim");
}

export function permanentRedirect(_url: string): never {
  throw new Error("permanentRedirect() is a no-op in the design-sync shim");
}

export function notFound(): never {
  throw new Error("notFound() is a no-op in the design-sync shim");
}
