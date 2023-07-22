export const KEBAB_OR_CAMEL_OR_SNAKE_CASE_REGEX =
	/(\p{Lowercase_Letter})(\p{Uppercase_Letter})|(-)/gu;
export const LOWERCASE_UPPERCASE_REGEX =
	/([\p{Lowercase_Letter}])([\p{Uppercase_Letter}])/gu;
export const LEADING_AND_TRAILING_HYPHENS_OR_UNDERSCORES_REGEX =
	/^[-_]+|[-_]+$/g;
export const FIRST_LETTER_OF_ALMOST_ALL_ALPHABETS_REGEX = /^\p{Letter}/u;
export const NON_ALPHANUMERIC_REGEX = /[^\p{Letter}\p{Number}]+/gu;
export const UNDERSCORE_OR_HIPHEN_OR_SPACE_REGEX = /[\s_-]+(\w)/g;
export const ONE_OR_MORE_SPACE_REGEX = /\p{Separator}+/gu;
export const ONE_OR_MORE_NUMBER_REGEX = /(\p{Number}+)/gu;
export const HIPHEN_REGEX = /-/g;
