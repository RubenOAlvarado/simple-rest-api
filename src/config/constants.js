//MongoDB url
const devConfig = {
  MONGO_URL:
    'mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api-dev?retryWrites=true&w=majority',
  JWT_SECRET: 'papagayo',
};
const testConfig = {
  MONGO_URL:
    'mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api?retryWrites=true&w=majority',
};
const prodConfig = {
  MONGO_URL:
    'mongodb+srv://Munditoro:munditoro@crudtest-h3y3e.mongodb.net/Api?retryWrites=true&w=majority',
  JWT_SECRET: 'papagayo',
};

const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

//Take default config nad make it a single object
//So, we have concateneted two object into one
export default { ...defaultConfig, ...envConfig(process.env.NODE_ENV) };
