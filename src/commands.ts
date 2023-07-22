import { replaceStringOnActiveEditor } from "./replaceStringOnActiveEditor";
import { toPascalCase } from "./toPascalCase";
import { toCamelCase } from "./toCamelCase";
import { toSnakeCase } from "./toSnakeCase";
import { toKebabCase } from "./toKebabCase";
import { toLowerCase } from "./toLowerCase";
import { toUpperCase } from "./toUpperCase";

export function toPascalCaseCommand(): void {
	replaceStringOnActiveEditor(toPascalCase);
}

export function toKebabCaseCommand(): void {
	replaceStringOnActiveEditor(toKebabCase);
}

export function toCamelCaseCommand(): void {
	replaceStringOnActiveEditor(toCamelCase);
}

export function toSnakeCaseCommand(): void {
	replaceStringOnActiveEditor(toSnakeCase);
}

export function toAllCapsSnakeCaseCommand(): void {
	replaceStringOnActiveEditor((text) => toUpperCase(toSnakeCase(text)));
}

export function toLowerCaseCommand(): void {
	replaceStringOnActiveEditor(toLowerCase);
}

export function toUpperCaseCommand(): void {
	replaceStringOnActiveEditor(toUpperCase);
}
