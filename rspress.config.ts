import * as path from 'path';
import { defineConfig } from 'rspress/config';
import { pluginPreview } from '@rspress/plugin-preview';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Rspress-preview',
  description: 'hello',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  markdown: {
    mdxRs: false
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  plugins: [pluginPreview()]
});
