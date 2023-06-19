import { parentPort, workerData, isMainThread } from "worker_threads";

// n should be received from main thread
parentPort.on("message", (n) => {
  const final = n < 2 ? n : n - 1 + n - 2;
  const sendResult = () => {
    parentPort.postMessage(final);
  };

  sendResult();
});

parentPort.postMessage({ start: workerData, isMainThread });

//let result = nthFibonacci();
