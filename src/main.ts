import { solve01_A, solve01_B } from './01/01';

const funcs = [solve01_A, solve01_B];

console.table(
	funcs.map((func) => {
		return { name: func.name, value: func() };
	}),
	['name', 'value']
);
