// vite.config.js
import { defineConfig } from "file:///D:/CODEBLACK/Practice/vite/photo-album/node_modules/vite/dist/node/index.js";
import react from "file:///D:/CODEBLACK/Practice/vite/photo-album/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///D:/CODEBLACK/Practice/vite/photo-album/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    federation({
      name: "photo_album",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
        "./FullScreenImage": "./src/FullScreenImage.jsx"
      },
      shared: ["react", "react-router-dom"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDT0RFQkxBQ0tcXFxcUHJhY3RpY2VcXFxcdml0ZVxcXFxwaG90by1hbGJ1bVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ09ERUJMQUNLXFxcXFByYWN0aWNlXFxcXHZpdGVcXFxccGhvdG8tYWxidW1cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NPREVCTEFDSy9QcmFjdGljZS92aXRlL3Bob3RvLWFsYnVtL3ZpdGUuY29uZmlnLmpzXCI7Ly8gdml0ZS5jb25maWcuanMgaW4gdG9kby1jb21wb25lbnRzXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogXCJwaG90b19hbGJ1bVwiLFxuICAgICAgZmlsZW5hbWU6IFwicmVtb3RlRW50cnkuanNcIixcbiAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgXCIuL0FwcFwiOiBcIi4vc3JjL0FwcC5qc3hcIixcbiAgICAgICAgXCIuL0Z1bGxTY3JlZW5JbWFnZVwiOiBcIi4vc3JjL0Z1bGxTY3JlZW5JbWFnZS5qc3hcIixcbiAgICAgIH0sXG4gICAgICBzaGFyZWQ6IFtcInJlYWN0XCIsIFwicmVhY3Qtcm91dGVyLWRvbVwiXSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBtb2R1bGVQcmVsb2FkOiBmYWxzZSxcbiAgICB0YXJnZXQ6IFwiZXNuZXh0XCIsXG4gICAgbWluaWZ5OiBmYWxzZSxcbiAgICBjc3NDb2RlU3BsaXQ6IGZhbHNlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sZ0JBQWdCO0FBRXZCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULHFCQUFxQjtBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxRQUFRLENBQUMsU0FBUyxrQkFBa0I7QUFBQSxJQUN0QyxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
