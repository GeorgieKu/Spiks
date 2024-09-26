import path from 'path';

/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {
      fsCache: true,
    },
  },
  staticDirs: [
    '../public/assets',
  ],
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolveLoader: {
        ...config.resolveLoader,

        modules: ['node_modules', path.resolve(__dirname, 'webpack-loaders')],
      },
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.pug$/,
            use: 'custom-pug-loader',
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              'css-loader',
              'sass-loader',
            ],
          },
        ],
      },
    };
  },
};
export default config;
