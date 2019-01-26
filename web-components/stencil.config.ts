import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mycomponent',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  excludeSrc: [
    '**/test/**',
    '**/testing/**',
    '**/*.spec.*',
    '**/*.e2e.*',
    '**/*.screenplay.*',
    '**/*.showcase.*',
    '**/*.cucumber.*'
  ]
};
