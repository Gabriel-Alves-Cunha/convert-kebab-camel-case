import {
	trailingUnderscoreOrHiphenRegex,
	spaceOrUnderscoreRegex,
	nonAlphanumericRegex,
} from "./regexes";

export function toKebabCase(input: string): string {
	if (!input) return input;

	input = input.replace(/[^a-zA-Z0-9]+/g, "-"); // Replace one or more consecutive special characters with single hyphen
	input = input.replace(/([a-z])([A-Z])/g, "$1-$2").toLocaleLowerCase(); // Add hyphen between lowercase and uppercase letters, then convert to lowercase
	input = input.replace(/\s+/g, "-"); // Replace spaces with hyphens
	input = input.replace(/(\d+)/g, "-$1"); // Add hyphen before digits

	return input.replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}
