import type { StorybookConfig } from '@storybook/svelte-vite';
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-svelte-csf', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/svelte-vite',
    options: {}
  },
  core: {
    disableTelemetry: true
  },
  docs: {
    autodocs: true
  },
  features: {
    storyStoreV7: true
  }
};
export default config;