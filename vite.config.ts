import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Frontend dev server runs on port 5173 and talks to the Express backend
// on http://localhost:3000/api directly (CORS is enabled on the backend).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
