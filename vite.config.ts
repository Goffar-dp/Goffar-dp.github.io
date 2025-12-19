
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Replace 'YOUR_REPO_NAME' with your actual repository name if it's not a custom domain
  // If your URL is https://goffar-dp.github.io/my-repo/, base should be '/my-repo/'
  // If it's a root domain, use '/'
  base: './', 
});
