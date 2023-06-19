import fs from 'fs';

const target = './src/streams/files/fileToRead.txt';

const read = async () => {
    const readableStream = fs.createReadStream(target, 'utf8');
    readableStream.on('data', (data) => {
        process.stdout.write(data)
    })
};

await read();