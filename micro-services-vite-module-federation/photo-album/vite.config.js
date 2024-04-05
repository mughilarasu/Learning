// vite.config.js in todo-components
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "photo_album",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
        "./FullScreenImage": "./src/FullScreenImage.jsx",
      },
      shared: ["react", "react-router-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
