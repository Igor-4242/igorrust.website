import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// bun gh-pages -d dist --cname igorrust.xyz --no-history
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/igorrust.website/"
})
