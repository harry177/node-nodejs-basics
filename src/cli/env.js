const parseEnv = () => {
    for (let key in process.env) {
        key.includes('RSS') ? console.log(`${key}=${process.env[key]}`) : null;
    }
};

parseEnv();