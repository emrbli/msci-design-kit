import { notFound } from "next/navigation";

const DEV_PAGES_ENABLED =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES === "true";

/**
 * Gate: everything under /dev is internal component documentation, never a
 * public route. It 404s in production builds unless explicitly opted in.
 */
export default function DevLayout({ children }: LayoutProps<"/dev">) {
  if (!DEV_PAGES_ENABLED) {
    notFound();
  }

  return children;
}
