export function toLowerCase(input: string): string {
	if (!input) return input;

	const output = input.toLocaleLowerCase();

	return output;
}
