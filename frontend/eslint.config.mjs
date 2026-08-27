import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

/** Next.js App Router ESLint — replaces legacy TanStack/Vite config. */
const config = [
  ...nextCoreWebVitals,
  {
    files: ["src/components/ui/**", "src/hooks/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
];

export default config;
