const workerThreads = require('worker_threads');

/** The function that the worker is going to execute */
const func = new Function('return ' + workerThreads.workerData)();

/** On each message execute the function and return the results with the index */
workerThreads.parentPort.on('message', (message) => {
    func(message.item)
        .then((response) => {
            workerThreads.parentPort.postMessage({response, index: message.index});
        });
});
