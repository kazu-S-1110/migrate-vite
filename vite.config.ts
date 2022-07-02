import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import  react  from "@vitejs/plugin-react";

export default defineConfig({
  server:{open:true},
  build: {
    outDir: "build"
  },
  plugins: [tsConfigPaths(), react()]
});