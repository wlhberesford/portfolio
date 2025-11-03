import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          'react-three-fiber': ['@react-three/fiber'],
          'react-three-drei': ['@react-three/drei']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },
  server: {
    sourcemapIgnoreList: () => true
  }
});

