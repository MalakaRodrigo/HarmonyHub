function getConfigs(){
const env = process.env.REACT_APP_VERSION
if(env === 'dev'){
    return {
        ENV: 'dev',
        APIG_URL: 'http://localhost:5000/'
    }
}
}

export default getConfigs()