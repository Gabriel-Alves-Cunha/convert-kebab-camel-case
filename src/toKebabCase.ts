import {
	LEADING_AND_TRAILING_HYPHENS_OR_UNDERSCORES_REGEX,
	LOWERCASE_UPPERCASE_REGEX,
	ONE_OR_MORE_NUMBER_REGEX,
	ONE_OR_MORE_SPACE_REGEX,
	NON_ALPHANUMERIC_REGEX,
} from "./regexes";

export function toKebabCase(input: string): string {
	if (!input) return input;

	const output = input
		.replace(NON_ALPHANUMERIC_REGEX, "-") // Replace one or more consecutive special characters with single hyphen
		.replace(LOWERCASE_UPPERCASE_REGEX, "$1-$2")
		.toLocaleLowerCase() // Add hyphen between lowercase and uppercase letters, then convert to lowercase
		.replace(ONE_OR_MORE_SPACE_REGEX, "-") // Replace spaces with hyphens
		.replace(ONE_OR_MORE_NUMBER_REGEX, "-$1") // Add hyphen before digits
		.replace(LEADING_AND_TRAILING_HYPHENS_OR_UNDERSCORES_REGEX, ""); // Remove leading and trailing hyphens

	return output;
}
