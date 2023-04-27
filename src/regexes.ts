export const kebabOrCamelOrSnakeCaseRegex =
	/(\p{Lowercase_Letter})(\p{Uppercase_Letter})|(-)/gu;
export const lowercaseUppercaseRegex =
	/([\p{Lowercase_Letter}])([\p{Uppercase_Letter}])/gu;
export const leadingAndTrailingHyphensOrUnderscoresRegex = /^[-_]+|[-_]+$/g;
export const firstLetterOfAlmostAllAlphabetsRegex = /^\p{Letter}/u;
export const nonAlphanumericRegex = /[^\p{Letter}\p{Number}]+/gu;
export const underscoreOrHiphenOrSpaceRegex = /[\s_-]+(\w)/g;
export const oneOrMoreSpaceRegex = /\p{Separator}+/gu;
export const oneOrMoreNumberRegex = /(\p{Number}+)/gu;
export const splitAtHiphenRegex = /-/g;
