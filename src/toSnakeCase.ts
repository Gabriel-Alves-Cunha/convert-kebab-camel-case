import { kebabOrCamelOrSnakeCaseRegex } from "./regexes";

export function toSnakeCase(text: string): string {
	return text.replaceAll(kebabOrCamelOrSnakeCaseRegex, "$1_$2").toLocaleLowerCase();
}
