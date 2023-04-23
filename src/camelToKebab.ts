import { replaceStringOnActiveEditor } from "./replaceStringOnActiveEditor";

export function camelToKebabCommand(): void {
	replaceStringOnActiveEditor(camelToKebab);
}

/** This function takes a string in camelCase format as input.
 * The replace method is used to match all occurrences of a
 * lowercase letter followed by an uppercase letter and replace
 * it with the same letters separated by a hyphen (i.e. a regex
 * capturing group is used). This effectively converts the string
 * to kebab-case. Finally, the toLowerCase() method is used to
 * ensure the output is always in lowercase.
 */
export function camelToKebab(camelCase: string): string {
	if (typeof camelCase !== "string") {
		throw new Error(
			`Input must be in kebab case (e.g. "my-example-string") but received argument of type \`${typeof camelCase}\` = \`${camelCase}\``,
		);
	}

	if (!camelCase) return camelCase;

	///////////////////////////////////////
	///////////////////////////////////////

	return camelCase
		.replace(camelOnAlmostAllAlphabetsRegex, "$1-$2")
		.toLocaleLowerCase();
}

const camelOnAlmostAllAlphabetsRegex = /(\p{Ll})(\p{Lu})/gu;
