// vite.config.js in host-app
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    federation({
      name: "micro-apps",
      remotes: {
        currency_converter: "http://localhost:4173/assets/remoteEntry.js",
        password_generator: "http://localhost:4174/assets/remoteEntry.js",
        photo_album: "http://localhost:4175/assets/remoteEntry.js",
        todo: "http://localhost:4176/assets/remoteEntry.js",
      },
      shared: ["react", "react-router-dom"],
    }),
  ],
  optimizeDeps: {
    include: [
      "@emotion/react",
      "@emotion/styled",
      "@mui/material/Tooltip",
      "@mui/material/Grid2",
    ],
  },
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});

// import { defineConfig } from "vite";
// import React from "react";
// import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";

// export default defineConfig({
//   plugins: [
//     react(),
//     federation({
//       name: "micro-apps",
//       remotes: {
//         currency_converter: "http://localhost:4173/assets/remoteEntry.js",
//         password_generator: "http://localhost:4174/assets/remoteEntry.js",
//       },
//       shared: {
//         react: {
//           singleton: true,
//           requiredVersion: ">=16.0.0", // Adjust the version as needed
//         },
//       },
//     }),
//   ],
//   build: {
//     minify: false,
//     cssCodeSplit: false,
//   },
// });
