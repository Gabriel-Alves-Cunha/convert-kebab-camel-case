export function toUpperCase(input: string): string {
	if (!input) return input;

	const output = input.toLocaleUpperCase();

	return output;
}
