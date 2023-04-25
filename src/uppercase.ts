import { replaceStringOnActiveEditor } from "./replaceStringOnActiveEditor";

export function uppercaseCommand(): void {
	replaceStringOnActiveEditor(uppercase);
}

function uppercase(input: string): string {
	return input.toLocaleUpperCase();
}
