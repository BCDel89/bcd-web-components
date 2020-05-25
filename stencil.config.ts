import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'bcd-web-components',
  taskQueue: 'async',
  globalStyle: 'src/global/variables.css',
  plugins: [
    sass()
  ],
  bundles: [
    {
      components: ['bcd-rating']
    }
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ]
};
