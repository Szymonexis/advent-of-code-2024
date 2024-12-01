import { readFileSync } from 'fs';
import { zip } from 'lodash';

export function solve01_A(): number {
	const fileContents = readFileSync('src/01/input.txt', 'utf-8');

	const leftNumbers: number[] = [];
	const rightNumbers: number[] = [];

	const mappedFileContents = fileContents.split('\n').map((line) => {
		return line.replace(/\s+/g, ' ').split(' ');
	});

	mappedFileContents.forEach(([leftNumber, rightNumber]) => {
		leftNumbers.push(parseInt(leftNumber));
		rightNumbers.push(parseInt(rightNumber));
	});

	const diffs: number[] = [];
	const sortedLeftNums = leftNumbers.sort((a, b) => a - b);
	const sortedRightNums = rightNumbers.sort((a, b) => a - b);

	zip(sortedLeftNums, sortedRightNums).forEach(([left, right]) => {
		diffs.push(Math.abs(right - left));
	});

	const sum = diffs.reduce((acc, curr) => acc + curr, 0);

	return sum;
}

export function solve01_B(): number {
	const fileContents = readFileSync('src/01/input.txt', 'utf-8');

	const leftNumbers: number[] = [];
	const rightNumbers: number[] = [];

	const mappedFileContents = fileContents.split('\n').map((line) => {
		return line.replace(/\s+/g, ' ').split(' ');
	});

	mappedFileContents.forEach(([leftNumber, rightNumber]) => {
		leftNumbers.push(parseInt(leftNumber));
		rightNumbers.push(parseInt(rightNumber));
	});

	const similarities: { [key: number]: { count: number; score: number } } = {};

	leftNumbers.forEach((left) => {
		if (left in similarities) {
			similarities[left].count += 1;
		} else {
			const score = rightNumbers.filter((right) => right === left).length;
			similarities[left] = { count: 1, score };
		}
	});

	const sum = Object.entries(similarities).reduce(
		(acc, [value, { count, score }]) => {
			return acc + parseInt(value) * count * score;
		},
		0
	);

  return sum;
}
