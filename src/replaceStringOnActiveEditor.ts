import { window } from "vscode";

export function replaceStringOnActiveEditor(
	stringReplacer: (selectedText: string) => string,
): void {
	const { activeTextEditor } = window;

	if (!activeTextEditor) return;

	// Get all selections from the editor:
	const {
		document: { getText },
		selections,
		edit,
	} = activeTextEditor;

	selections.forEach((selection) => {
		// Get the text within the selection:
		const selectedText = getText(selection);

		// Now you can perform an action on the selected text:
		const newString = stringReplacer(selectedText);

		// Replace the selected text with the converted text:
		edit((editBuilder) => editBuilder.replace(selection, newString));
	});
}
