import {
	leadingAndTrailingHyphensOrUnderscoresRegex,
	firstLetterOfAlmostAllAlphabetsRegex,
	underscoreOrHiphenOrSpaceRegex,
} from "./regexes";

export function toCamelCase(input: string): string {
	if (!(input && underscoreOrHiphenOrSpaceRegex.test(input))) return input;

	const output = input
		.toLocaleLowerCase()
		.replace(underscoreOrHiphenOrSpaceRegex, toUpper)
		.replace(leadingAndTrailingHyphensOrUnderscoresRegex, "");

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

	return input.replace(firstLetterOfAlmostAllAlphabetsRegex, matchToUpper);
}
