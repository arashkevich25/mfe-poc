import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'team-b',
      filename: 'appTeamBEntry.js',
      exposes: { 
        './AppTeamB': './src/App.tsx',
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    target: 'esnext'
  },
})
