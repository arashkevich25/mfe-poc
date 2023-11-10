import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      remotes: {
        teamA: 'http://localhost:5001/assets/appTeamAEntry.js',
        teamB: 'http://localhost:5002/assets/appTeamBEntry.js',
        teamC: 'http://localhost:5003/assets/appTeamCEntry.js',
      },
      shared: ['react','react-dom', 'solid-js'] 
    })
  ],
})
