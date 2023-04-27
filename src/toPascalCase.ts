import { capitalizeFirstLetter, toCamelCase } from "./toCamelCase";

export function toPascalCase(input: string): string {
	if (!input) return input;

	const output = capitalizeFirstLetter(toCamelCase(input));

	return output;
}
