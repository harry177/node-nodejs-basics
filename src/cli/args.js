const parseArgs = () => {
    for (let key of process.argv) {
        if (key.includes('--')) {
            console.log(`${key.slice(2)} is ${process.argv[process.argv.indexOf(key) + 1]}`)
        }
    }
};

parseArgs();