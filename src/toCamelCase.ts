import {
	LEADING_AND_TRAILING_HYPHENS_OR_UNDERSCORES_REGEX,
	FIRST_LETTER_OF_ALMOST_ALL_ALPHABETS_REGEX,
	UNDERSCORE_OR_HIPHEN_OR_SPACE_REGEX,
} from "./regexes";

export function toCamelCase(input: string): string {
	if (!(input && UNDERSCORE_OR_HIPHEN_OR_SPACE_REGEX.test(input))) return input;

	const output = input
		.toLocaleLowerCase()
		.replace(UNDERSCORE_OR_HIPHEN_OR_SPACE_REGEX, toUpper)
		.replace(LEADING_AND_TRAILING_HYPHENS_OR_UNDERSCORES_REGEX, "");

	return output;
}

function toUpper(_match: unknown, str: string): string {
	return str.toLocaleUpperCase();
}

function matchToUpper(match: string): string {
	return match.toLocaleUpperCase();
}

export function capitalizeFirstLetter(input: string): string {
	if (!input) return "";

	return input.replace(
		FIRST_LETTER_OF_ALMOST_ALL_ALPHABETS_REGEX,
		matchToUpper,
	);
}
