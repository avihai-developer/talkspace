/**
 * Receives an array and returns the lead (or -1 if there is none) using quick search
 * Time - O(log(n))
 * Memory - O(1)
 * @param sortedArray - Sorted array of numbers.
 */
function getLeadNumber(sortedArray: number[]): number {
	/** Return -1 if the array is empty (amount of lead number can't be bigger then 0) */
	if (sortedArray.length === 0) return -1;
	/** Get the index of the array */
	const middleIndex = Math.floor(sortedArray.length / 2);
	/** Find the lead number left index using quick search */
	let currentStartIndex: number = 0;
	let currentEndIndex: number = middleIndex;
	let currentMiddleIndex: number;
	while (currentEndIndex - currentStartIndex > 1) {
		currentMiddleIndex = currentStartIndex + Math.floor((currentEndIndex - currentStartIndex) / 2);
		if (sortedArray[currentMiddleIndex] === sortedArray[middleIndex]) {
			currentEndIndex = currentMiddleIndex;
		} else {
			currentStartIndex = currentMiddleIndex;
		}
	}
	let leadNumberStartIndex: number = currentEndIndex;
	/** Find the lead number right index using quick search */
	currentStartIndex = middleIndex;
	currentEndIndex = sortedArray.length - 1;
	while (currentEndIndex - currentStartIndex > 1) {
		currentMiddleIndex = currentStartIndex + Math.ceil((currentEndIndex - currentStartIndex) / 2);
		if (sortedArray[currentMiddleIndex] === sortedArray[middleIndex]) {
			currentStartIndex = currentMiddleIndex;
		} else {
			currentEndIndex = currentMiddleIndex;
		}
	}
	let leadNumberEndIndex: number = currentStartIndex;
	/** Check if the amount of the lead number is bigger then half of the array */
	if (leadNumberEndIndex - leadNumberStartIndex + 1 > sortedArray.length / 2) {
		/** return the lead number */
		return sortedArray[middleIndex];
	} else {
		/** return -1 if there is no lead number */
		return -1;
	}
}

/** Example 1 */
const example1: number[] = [1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 7, 7, 10];
const example1LeadNumber: number = getLeadNumber(example1);
console.log('example1LeadNumber', example1LeadNumber);

/** Example 2 */
const example2: number[] = [1, 4, 4, 6, 6, 6, 6, 9, 9, 13];
const example2LeadNumber: number = getLeadNumber(example2);
console.log('example2LeadNumber', example2LeadNumber);

/** Example 3 */
const example3: number[] = [];
const example3LeadNumber: number = getLeadNumber(example3);
console.log('example3LeadNumber', example3LeadNumber);
