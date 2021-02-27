import {Worker} from "worker_threads";
import {getMinimal} from "./get-minimal";

/**
 * Execute functions in parallel via worker threads
 * @param func - The function that we want to execute
 * @param args - Array of items - we are going to execute the function on each of the items
 * @param parallelism - The max number of functions that we want to run in parallel
 */
async function doParallel<T, S>(
	func: (args: T) => Promise<S>,
	args: T[],
	parallelism: number = 10
): Promise<S[]> {
	return new Promise(resolve => {
		/** Set the max number of workers (we don't want to create more workers then length of the args) */
		const numberOfMaxWorkers: number = args.length < parallelism ? args.length : parallelism;
		/** The amount of works that done */
		let doneWorks: number = 0;
		/** The total amount of functions that the workers are going to execute */
		let totalWorks: number = args.length;
		/** Array of the workers that we are going to create */
		const workers: Worker[] = [];
		/** Array with the workers results */
		const results: S[] = [];
		/** Create the workers */
		for (let i = 0; i < numberOfMaxWorkers; i++) {
			const worker = new Worker('./question-2/worker.js', {
				workerData: func.toString()
			});
			workers.push(worker);
			/** Listen to the response from the worker */
			worker.on('message', (data: { response: any, index: number }) => {
				/** Update the number of the done works so we could know when the works done their jobs */
				doneWorks++;
				/** Set the worker result */
				results[data.index] = data.response;
				/** Check if workers finish their jobs */
				if (doneWorks === totalWorks) {
					/** return the value */
					resolve(results);
					/** Workers now can rest in peace */
					for (const worker of workers) {
						worker.terminate();
					}
				} else {
					/** Send the last value of to args array to the worker and remove the value */
					if (args.length) {
						worker.postMessage({item: args.pop(), index: args.length});
					}
				}
			});
			/** Send the last value of to args array to the worker and remove the value */
			if (args.length) {
				worker.postMessage({item: args.pop(), index: args.length});
			}
		}
	});
}

/** Example 1 */
doParallel(getMinimal, [
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
	{number1: Math.random(), number2: Math.random(), number3: Math.random()},
], 10)
	.then((response) => {
		console.log('response', response);
	});

/** Example 2 */
doParallel(getMinimal, [
	{number1: -1, number2: 0, number3: 1},
	{number1: 1, number2: 0, number3: -1},
	{number1: -1, number2: -1, number3: -1},
	{number1: 1, number2: 2, number3: 3}
], 10)
	.then((response) => {
		console.log('response', response);
	});
