import { Transform } from 'stream';

const transform = async () => {
    const reversal = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split('').reverse().join(''));
            callback();
        } 
    });

    process.stdin.pipe(reversal).pipe(process.stdout);
};

await transform();