import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginLess } from "@rsbuild/plugin-less";

export default defineConfig({
  html: {
    title: "PWSE - 幻兽帕鲁配置文件编辑器",
  },
  plugins: [pluginReact(), pluginLess()],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  server: {
    port: 9353,
  },
});
