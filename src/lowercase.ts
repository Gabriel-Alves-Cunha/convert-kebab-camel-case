import { replaceStringOnActiveEditor } from "./replaceStringOnActiveEditor";

export function lowercaseCommand(): void {
	replaceStringOnActiveEditor(lowercase);
}

function lowercase(input: string): string {
	return input.toLocaleLowerCase();
}
