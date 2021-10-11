const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: { builder: 'webpack5' },
  webpack: async config => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.module\.(s[ac]ss|css)$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: true,
                modules: {
                  localIdentName: '[local]___[hash:base64:8]',
                  exportLocalsConvention: 'camelCase',
                },
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  indentWidth: 4,
                  includePaths: [path.join(__dirname, './src/styles')],
                },
              },
            }
          ],
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          exclude: /\.module\.(s[ac]ss|css)$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: true,
              },
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  indentWidth: 4,
                  includePaths: [path.join(__dirname, './src/styles')],
                },
              },
            },
          ],
        },
      ],
    },
  }),
};
