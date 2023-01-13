import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import windicss from "vite-plugin-windicss"

export default defineConfig({
  plugins: [
    react(),
    windicss(),
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[name]'
		})
  ],
  css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true
			}
		}
	},
  resolve: {
		alias: {
			'@': resolve(__dirname, './src/')
		}
	},
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
  },
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: process.env.TAURI_PLATFORM == "windows" ? "chrome105" : "safari13",
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
});
