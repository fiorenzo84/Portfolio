import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
//import ViteSass from "vite-plugin-sass";

export default defineConfig({
  plugins: [react()],
});

// export default defineConfig({
//   plugins: [react(), ViteSass()],
// });
