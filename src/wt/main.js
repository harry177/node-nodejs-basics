import os from "os";
import { Worker } from "worker_threads";

const result = [];

const performCalculations = async () => {
  const numOfCpus = os.cpus().length;

  for (let i = 0; i < numOfCpus; i++) {
    const n = i + 10;
    const worker = new Worker("./src/wt/worker.js", { workerData: n });

    worker.on("message", (data) => result.push({ 'status': 'resolved', 'data': data }));
  }
  setTimeout(() => {
    console.log(result);
  }, 1000);
};

await performCalculations();
