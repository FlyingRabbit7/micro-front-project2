const path = require("path");

module.exports = {
  webpack: (config) => {
    // 微应用的包名，这里与主应用中注册的微应用名称一致
    // config.output.library = `micro-app-react`;
    
    return config;
  }
};