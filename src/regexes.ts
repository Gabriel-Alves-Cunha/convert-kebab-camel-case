export const kebabOrCamelCaseOrSpaceRegex =
	/(\p{Ll})(\p{Lu})|(-)|_(\p{Ll})|(\s+)/gu;
export const kebabOrCamelOrSnakeCaseRegex =
	/(\p{Ll})(\p{Lu})|(-)|(_)(\p{Ll})/gu;
export const kebabOrCamelCaseRegex = /(\p{Ll})(\p{Lu})/gu;
export const firstLetterOfAlmostAllAlphabetsRegexGlobal = /^\p{L}/gu;
export const camelOnAlmostAllAlphabetsRegex = /(\p{Ll})(\p{Lu})/gu;
export const firstLetterOfAlmostAllAlphabetsRegex = /^\p{L}/u;
export const splitAtHiphenRegex = /-/g;
export const camelCase = /(\p{Ll})(\p{Lu})/gu;
export const kebabCase = /^[\p{Ll}]+(-[\p{Ll}]+)*$/gu;
export const snakeCase = /^[\p{Ll}]+(_[\p{Ll}]+)*$/gu;
export const spaceCase = /^[\p{Ll}]+(\s[\p{Ll}]+)*$/gu;
export const underscoreOrHiphenOrSpaceRegex = /[\s_-]+(\w)/g;
export const uppercaseRegex = /\p{Lu}/gu;
export const spaceOrUnderscoreRegex = /[\s_]+/g;
// name this following regex:
export const nonAlphanumericRegex = /[^\p{L}\p{N}\s]/gu;
export const trailingUnderscoreOrHiphenRegex = /[_-]*$/;
