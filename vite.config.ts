import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dst from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "styled-components",
        "react-icons/md",
        "@inubekit/foundations",
        "@inubekit/grid",
        "@inubekit/icon",
        "@inubekit/stack",
        "@inubekit/text",
        "@isettingkit/input",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react(), dst({ rollupTypes: true })],
});
