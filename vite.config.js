import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/rfid-uuid-converter/",
  build: {
    outDir: 'docs'
  },
  plugins: [
    react(),
    VitePWA({
      mode: 'development',
      base: "/rfid-uuid-converter/",
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['favicon.svg'],
      manifest: {
        // icons: [

        //   {
        //     src: 'public/pwa-512x512.png', // <== don't remove slash, for testing
        //     sizes: '512x512',
        //     type: 'image/png',
        //   },

        // ],
      },
      workbox: {
        // clientsClaim: true,
        // skipWaiting: true
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2}']

      }
    })
  ],
})
