import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //add this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),  //add this line 
    react()],
})