module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: [
    "../src/Intro.stories.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/preset-create-react-app",
  ],
  staticDirs: ["./static"],
};
