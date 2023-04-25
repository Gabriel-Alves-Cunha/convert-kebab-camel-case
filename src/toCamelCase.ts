import {
	firstLetterOfAlmostAllAlphabetsRegex,
	underscoreOrHiphenOrSpaceRegex,
} from "./regexes";

export function toCamelCase(input: string): string {
	if (!(input && underscoreOrHiphenOrSpaceRegex.test(input))) return input;

	return input
		.toLocaleLowerCase()
		.replace(underscoreOrHiphenOrSpaceRegex, toUpper);
}

function toUpper(_match: unknown, str: string): string {
	return str.toLocaleUpperCase();
}

function toLower(_match: unknown, str: string): string {
	return str.toLocaleLowerCase();
}

function matchToUpper(match: string): string {
	return match.toLocaleUpperCase();
}

function matchToLower(match: string): string {
	return match.toLocaleLowerCase();
}

export function capitalizeFirstLetter(input: string): string {
	if (!input) return "";

	return input.replace(firstLetterOfAlmostAllAlphabetsRegex, matchToUpper);
}
