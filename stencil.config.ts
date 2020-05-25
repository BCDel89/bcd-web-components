import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'bcd-web-components',
  taskQueue: 'async',
  globalStyle: 'src/global/variables.css',
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
