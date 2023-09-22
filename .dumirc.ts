import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'rn-atomcss',
  publicPath: '/rn-atomcss/',
  themeConfig: {
    name: 'rn-atomcss',
    logo: '',
  },
  history: {
    type: 'hash',
  },
  styles: [
    `body .dumi-default-features-item{text-align: center}`,
    `body .dumi-default-header-left{width: 250px;}`,
    `.dumi-default-hero-title{font-size: 100px;}`,
  ],
});
