import { registerMicroApps, start, setDefaultMountApp, loadMicroApp } from 'qiankun';

// registerMicroApps([
//   {
//     name: 'micro-app-react', // app name registered
//     entry: '//localhost:7101',
//     container: '#container',
//     activeRule: '/react',
//   },
//   {
//     name: 'vue app',
//     entry: '//localhost:7102',
//     container: '#container',
//     activeRule: '/vue',
//   },
//   {
//     name: 'micro-app-jquery',
//     entry: '//localhost:7103',
//     container: '#container',
//     activeRule: '/static',
//   },
// ]);



// setDefaultMountApp('/react');

// start();


const app1 = loadMicroApp(
  { name: 'micro-app-react', entry: '//localhost:7101', container: '#react16' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);

const app2 = loadMicroApp(
  { name: 'vue app', entry: '//localhost:7102', container: '#vue' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);