import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  // publicPath: "/React--ScenicSpot/",
  publicPath: process.env.NODE_ENV === "production" ? "/React--ScenicSpot/" : "/",
  base: "/React--ScenicSpot/",
})
