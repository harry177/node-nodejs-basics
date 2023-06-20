import fs from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";

const targetFile = "./src/zip/files/fileToCompress.txt";
const distFile = "./src/zip/files/archive.gz";

const compress = async () => {
  const gzip = createGzip();
  const readableStream = fs.createReadStream(targetFile, "utf8");
  const writableStream = fs.createWriteStream(distFile);

  pipeline(readableStream, gzip, writableStream, (err) => {
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

await compress();
