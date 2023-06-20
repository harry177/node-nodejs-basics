import fs from "fs";

const target = "./src/fs/files/fileToRemove.txt";


const remove = async () => {
    fs.unlink(target, (err) => {
        if (err) {
            console.error("FS operation failed");
        }
    }) 
};

await remove();