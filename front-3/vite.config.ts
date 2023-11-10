import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'team-c',
      filename: 'appTeamCEntry.js',
      exposes: { 
        './AppTeamC': './src/App.tsx',
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    target: 'esnext'
  },
})
