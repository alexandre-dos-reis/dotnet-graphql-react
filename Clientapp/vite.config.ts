import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/app",
  plugins: [react(), mkcert()],
  server: {
    https: true,
    port: 6363,
  },
});
