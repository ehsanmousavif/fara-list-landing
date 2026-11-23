import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      'next/link': path.resolve(dirname, './src/lib/next-shim.tsx'),
      'next/navigation': path.resolve(dirname, './src/lib/next-shim.tsx'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
