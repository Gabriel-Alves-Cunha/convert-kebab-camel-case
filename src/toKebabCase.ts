import {
	leadingAndTrailingHyphensOrUnderscoresRegex,
	lowercaseUppercaseRegex,
	nonAlphanumericRegex,
	oneOrMoreNumberRegex,
	oneOrMoreSpaceRegex,
} from "./regexes";

export function toKebabCase(input: string): string {
	if (!input) return input;

	const output = input
		.replace(nonAlphanumericRegex, "-") // Replace one or more consecutive special characters with single hyphen
		.replace(lowercaseUppercaseRegex, "$1-$2")
		.toLocaleLowerCase() // Add hyphen between lowercase and uppercase letters, then convert to lowercase
		.replace(oneOrMoreSpaceRegex, "-") // Replace spaces with hyphens
		.replace(oneOrMoreNumberRegex, "-$1") // Add hyphen before digits
		.replace(leadingAndTrailingHyphensOrUnderscoresRegex, ""); // Remove leading and trailing hyphens

	return output;
}
