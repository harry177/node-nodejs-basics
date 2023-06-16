import fs from "fs";

const target = "./src/fs/files/fileToRead.txt";

const read = async () => {
  fs.readFile(target, 'utf8', (err, data) => {
    if (err) {
      console.error("FS operation failed");
    } else {
        console.log(data);
    }
  });
};

await read();
