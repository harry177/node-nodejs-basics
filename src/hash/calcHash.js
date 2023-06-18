import fs from "fs";
import { createHash } from "crypto";

const calculateHash = async () => {
  const hash = createHash("sha256");
  const target = fs.readFileSync("./src/hash/files/fileToCalculateHashFor.txt");
  hash.update(target);
  console.log(hash.digest("hex"));
};

await calculateHash();
