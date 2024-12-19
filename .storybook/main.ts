export default {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-mdx-gfm",
    "@chromatic-com/storybook",
  ],

  typescript: {
    // Enables the `react-docgen-typescript` parser.
    // See https://storybook.js.org/docs/api/main-config/main-config-typescript for more information about this option.
    reactDocgen: "react-docgen-typescript",
  },

  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import("vite");
    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }
    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },

  docs: {},
};
