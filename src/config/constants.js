const devConfig = {};
const testConfig = {};
const prodConfig = {};
const defaultConfig = {
    PORT: proccess.env.PORT || 3000,
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
export default {...defaultConfig,
    ...envConfig(process.env.NODE_ENV)
};