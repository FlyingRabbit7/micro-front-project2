import { loadMicroApp } from 'qiankun';

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
