import { defineConfig } from "vite";

export function decorateWithPlatform(platform: string, currentExtensions: string[]) {
  return currentExtensions.flatMap((ext) => [`.${platform}${ext}`, `${ext}`]);
}

export default defineConfig((mode) => {
  const platform = process.env.PLATFORM || "web";

  return {
    resolve: {
      extensions: decorateWithPlatform(platform, [
        ".mjs",
        ".js",
        ".mts",
        ".ts",
        ".jsx",
        ".tsx",
        ".json",
      ]),
    },
  };
});
