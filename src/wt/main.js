import os from "os";
import { Worker } from "worker_threads";

const result = [];

const performCalculations = async (workerData) => {
  const numOfCpus = os.cpus().length;
  
  for (let i = 0; i < numOfCpus; i++) {
    const worker = new Worker("./src/wt/worker.js", { workerData });
    const n = i + 10;
    worker.postMessage(n);
    worker.on("message", (final) => result.push(final));
    //console.log(result);
  }
  console.log(result);
};

await performCalculations();
