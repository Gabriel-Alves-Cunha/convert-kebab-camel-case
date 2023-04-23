import { replaceStringOnActiveEditor } from "./replaceStringOnActiveEditor";

export function kebakToCamelCommand(): void {
	replaceStringOnActiveEditor(kebabToCamel);
}

export function kebabToCamel(kebabCase: string): string {
	if (typeof kebabCase !== "string") {
		throw new Error(
			`Input must be in kebab case (e.g. "my-example-string") but received argument of type \`${typeof kebabCase}\` = \`${kebabCase}\``,
		);
	}

	if (!kebabCase) return kebabCase;

	///////////////////////////////////////
	///////////////////////////////////////

	const words = kebabCase.split(splitAtHiphenRegex);

	let camelCasedString = "";

	for (let i = 0; i < words.length; ++i) {
		const word = words[i] as string;

		camelCasedString += capitalizeFirstLetter(word);
	}

	// Make first letter lowercase:
	return camelCasedString.replace(
		firstLetterOfAlmostAllAlphabetsRegex,
		matchToLower,
	);
}

export const firstLetterOfAlmostAllAlphabetsRegex = /^\p{L}/u;
export const splitAtHiphenRegex = /-/g;

function matchToUpper(match: string): string {
	return match.toLocaleUpperCase();
}

function matchToLower(match: string): string {
	return match.toLocaleLowerCase();
}

export function capitalizeFirstLetter(input: string): string {
	if (typeof input !== "string") {
		throw new Error(
			`Input must be a string but received argument of type \`${typeof input}\` = \`${input}\``,
		);
	}

	if (!input) return input;

	return input.replace(firstLetterOfAlmostAllAlphabetsRegex, matchToUpper);
}
