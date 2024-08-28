var lwtm2m = require('lwm2m-node-lib').server;

const serverConfig = {
  endpointName: 'testEndpoint', // いらないかも
  port: 5683, 
  bootstrapServer: false, 
  logLevel: 'debug',
  defaultType: 'default' // デフォルトのデバイスの登録種別？
};

// サーバの開始
lwtm2m.start(serverConfig, (_data) => {
  console.log('LWM2Mサーバーの開始');
})