import Unocss from "unocss/vite";
import adapter from "@sveltejs/adapter-auto";
import { extractorSvelte } from "@unocss/core";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";
import presetAttributify from "@unocss/preset-attributify";
import presetIcons from "@unocss/preset-icons";
import presetTypography from "@unocss/preset-typography";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetWind from "@unocss/preset-wind";
import transformerDirective from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

const dev = process.env.NODE_ENV === "development"; // eslint-disable-line @typescript-eslint/no-unused-vars

/** @type {import('@sveltejs/kit').Config} */
const config = {
  /*
   * Consult https://github.com/sveltejs/svelte-preprocess
   * for more information about preprocessors
   */
  extensions: [".svelte", ".svelte.md"],
  preprocess: [mdsvex({ extensions: [".svelte.md"] }), preprocess()],

  kit: {
    adapter: adapter(),
    // * Enable this for static site generation (GitHub Pages).
    /*
     * "prerender": {
     *   "default": true
     * }
     */
    // * Enable this if deploying to GitHub Pages (unless your account's page, then don't)
    /*
     * "paths": {
     *   "base": dev ? "" : "/your-repo-name"
     * }
     */

    // ? Vite Configuration
    vite: () => ({
      plugins: [
        Unocss({
          extractors: [extractorSvelte],
          transformers: [transformerDirective(), transformerVariantGroup()],
          presets: [
            presetWind(),
            presetIcons({ cdn: "https://esm.sh/" }),
            presetAttributify(),
            presetWebFonts({
              // Currently UnoCSS only supports Google Fonts as a fonts provider.
              provider: "google",
              fonts: {
                // The default fonts.
                sans: ["Inter"],
                mono: ["JetBrains Mono"],
                serif: ["EB Garamond"],
                title: ["Zilla Slab"],
                highlight: ["Zilla Slab Highlight"],
              },
            }),
            presetTypography(),
          ],
        }),
      ],
      resolve: {
        alias: {
          // Path aliases
          $lib: "/src/lib",
          $assets: "/src/lib/assets",
          $audio: "/src/lib/assets/audio",
          $image: "/src/lib/assets/image",
          $video: "/src/lib/assets/video",
          $components: "/src/lib/components",
        },
      },
    }),
  },
};

export default config;
