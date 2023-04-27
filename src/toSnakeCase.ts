import { kebabOrCamelOrSnakeCaseRegex } from "./regexes";

export function toSnakeCase(input: string): string {
	if (!input) return input;

	const output = input
		.replaceAll(kebabOrCamelOrSnakeCaseRegex, "$1_$2")
		.toLocaleLowerCase();

	return output;
}
