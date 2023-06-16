import fs from "fs";

const folderName = "./src/fs/files";
const newFolderName = "./src/fs/files_copy";

const copy = async () => {
  if (!fs.existsSync(newFolderName)) {
    fs.cp(folderName, newFolderName, { recursive: true }, (err) => {
      if (err) {
        console.error("FS operation failed");
      }
    });
  } else {
    console.error("FS operation failed");
  }
};

await copy();
