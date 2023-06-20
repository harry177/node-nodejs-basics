import fs from "fs";

const folder = "./src/fs/files";

const list = async () => {
  fs.readdir(folder, (error, files) => {
    if (error) {
      console.error("FS operation failed");
    } else {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
};

await list();
