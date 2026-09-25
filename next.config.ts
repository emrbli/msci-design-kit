import type { NextConfig } from "next";
import createBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Not enabling `typedRoutes`: the component kit's blocks (SiteHeader,
  // cards, footer, ...) take arbitrary `href: string` props by design, which
  // typedRoutes' literal route-union checking can't express.
  //
  // Babel-compiles hook-heavy/JSX files to auto-memoize, cutting re-renders
  // without hand-written useMemo/useCallback across the component kit.
  reactCompiler: true,
  experimental: {
    // lucide-react, date-fns and recharts are optimized by Next by default;
    // these are the extra icon/data/table libs the component kit pulls in.
    optimizePackageImports: [
      "@tanstack/react-table",
      "@tanstack/react-virtual",
      "react-day-picker",
      "embla-carousel-react",
      "radix-ui",
    ],
  },
};

export default withBundleAnalyzer(nextConfig);
