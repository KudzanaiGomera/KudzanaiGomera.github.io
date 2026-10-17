import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps asset paths relative, so the site works on
// username.github.io and on username.github.io/repo-name alike.
export default defineConfig({ plugins: [react()], base: "./" });
