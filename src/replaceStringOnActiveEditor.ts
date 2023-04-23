import { window } from "vscode";

export function replaceStringOnActiveEditor(
	replaceStringFunction: (selectedText: string) => string,
): void {
	// Get the current active editor
	const editor = window.activeTextEditor;

	if (!editor) {
		console.warn("No active editor");

		return;
	}

	// Get the selection from the editor
	const primarySelection = editor.selection;

	// Get the text within the selection
	const selectedText = editor.document.getText(primarySelection);

	// Now you can perform an action on the selected text
	const newString = replaceStringFunction(selectedText);

	// Replace the selected text with the converted text
	editor.edit((editBuilder) => {
		editBuilder.replace(primarySelection, newString);
	});
}
