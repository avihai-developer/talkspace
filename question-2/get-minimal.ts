/**
 * Get object with 3 numbers and return the minimal number
 * @param obj - object with 3 numbers
 */
export const getMinimal = async (obj: { number1: number, number2: number, number3: number }): Promise<number> => {
	/** Get the values of the object and use Math.min to get the minimal number */
	return Math.min(...Object.values(obj));
}

getMinimal({number1: -1, number2: 0, number3: 1})
	.then((response) => {
		console.log('response', response);
	});

getMinimal({number1: 1, number2: 0, number3: -1})
	.then((response) => {
		console.log('response', response);
	});

getMinimal({number1: -1, number2: -1, number3: -1})
	.then((response) => {
		console.log('response', response);
	});

getMinimal({number1: 1, number2: 2, number3: 3})
	.then((response) => {
		console.log('response', response);
	});
