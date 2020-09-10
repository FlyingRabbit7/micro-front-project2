import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

registerMicroApps([
  {
    name: 'micro-app-react', // app name registered
    entry: '//localhost:7101',
    container: '#container',
    activeRule: '/react',
  },
  {
    name: 'vue app',
    entry: '//localhost:7102',
    container: '#container',
    activeRule: '/vue',
  },
]);

setDefaultMountApp('/react');

start();