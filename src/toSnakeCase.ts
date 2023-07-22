import { KEBAB_OR_CAMEL_OR_SNAKE_CASE_REGEX } from "./regexes";

export function toSnakeCase(input: string): string {
	if (!input) return input;

	const output = input
		.replaceAll(KEBAB_OR_CAMEL_OR_SNAKE_CASE_REGEX, "$1_$2")
		.toLocaleLowerCase();

	return output;
}
