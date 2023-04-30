import type { TextEditorEdit, TextEditor } from "vscode";

import { replaceStringOnActiveEditor } from "./replaceStringOnActiveEditor";
import { toPascalCase } from "./toPascalCase";
import { toCamelCase } from "./toCamelCase";
import { toSnakeCase } from "./toSnakeCase";
import { toKebabCase } from "./toKebabCase";
import { toLowerCase } from "./toLowerCase";
import { toUpperCase } from "./toUpperCase";

export function toPascalCaseCommand(
	textEditor: TextEditor,
	edit: TextEditorEdit
): void {
	replaceStringOnActiveEditor(textEditor, edit, toPascalCase);
}

export function toKebabCaseCommand(
	textEditor: TextEditor,
	edit: TextEditorEdit
): void {
	replaceStringOnActiveEditor(textEditor, edit, toKebabCase);
}

export function toCamelCaseCommand(
	textEditor: TextEditor,
	edit: TextEditorEdit
): void {
	replaceStringOnActiveEditor(textEditor, edit, toCamelCase);
}

export function toSnakeCaseCommand(
	textEditor: TextEditor,
	edit: TextEditorEdit
): void {
	replaceStringOnActiveEditor(textEditor, edit, toSnakeCase);
}

export function toLowerCaseCommand(
	textEditor: TextEditor,
	edit: TextEditorEdit
): void {
	replaceStringOnActiveEditor(textEditor, edit, toLowerCase);
}

export function toUpperCaseCommand(
	textEditor: TextEditor,
	edit: TextEditorEdit
): void {
	replaceStringOnActiveEditor(textEditor, edit, toUpperCase);
}
