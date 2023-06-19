import fs from "fs";
import { createGunzip } from "zlib";
import { pipeline } from "stream";

const targetFile = "./src/zip/files/archive.gz";
const distFile = "./src/zip/files/fileToCompress.txt";

const decompress = async () => {
  const gunzip = createGunzip();
  const readableStream = fs.createReadStream(targetFile);
  const writableStream = fs.createWriteStream(distFile, "utf8");

  pipeline(readableStream, gunzip, writableStream, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
  fs.unlink(targetFile, (err) => {
    if (err) {
      console.error("FS operation failed");
    }
  });
};

await decompress();
