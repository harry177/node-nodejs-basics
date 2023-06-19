import fs from "fs";

const target = "./src/streams/files/fileToWrite.txt";

const write = async () => {
  const writableStream = fs.createWriteStream(target, "utf8");

  process.stdin.on("data", (content) => {
    writableStream.write(content);
  });
};

await write();
