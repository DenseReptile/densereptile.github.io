import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "/tests/e2e",
  webServer: {
    command: "npm run build && npm run preview",
    port: 3000,
  },
};

export default config;
