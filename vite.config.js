import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-purgecss';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    //PurgeCss deletes the second data on card [data-category]. No idea what's happening and don't want to study purgecss as of now
    // htmlPurge([htmlPurge()]),
  ],
  base:'/time-tracking-dashboard/',
})
