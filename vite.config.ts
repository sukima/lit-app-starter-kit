import { resolve } from 'path';
import { defineConfig } from "vite";

const productionConfig = {};

const developmentConfig = {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tests: resolve(__dirname, 'tests/index.html'),
      },
    },
  },
};

export default defineConfig(({ mode }) => {
  return mode === 'production' ? productionConfig : developmentConfig;
});
