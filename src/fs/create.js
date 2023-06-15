import fs from "fs";
const content = "I am fresh and young";

const create = async () => {
  const file = "./src/fs/files/fresh.txt";
  if (fs.existsSync(file)) {
    console.log("FS operation failed");
  } else {
    fs.writeFile(file, content, (err) => {
      if (err) {
        console.log("Something went wrong...");
      }
    });
  }
};

await create();
