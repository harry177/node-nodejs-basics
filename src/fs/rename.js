import fs from "fs";

const oldPath = "./src/fs/files/wrongFilename.txt";
const newPath = "./src/fs/files/properFilename.md";

const rename = async () => {
  fs.rename(oldPath, newPath, (error) => {
    if (error) {
      console.error("FS operation failed");
    }
  });
};

await rename();
