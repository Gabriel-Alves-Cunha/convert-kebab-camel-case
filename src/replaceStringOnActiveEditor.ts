import type { TextEditor, TextEditorEdit } from "vscode";

export function replaceStringOnActiveEditor(
	textEditor: TextEditor,
	edit: TextEditorEdit,
	replaceStringFunction: (selectedText: string) => string,
): void {
	// Get the selection from the editor
	const { selection } = textEditor;

	// Get the text within the selection
	const selectedText = textEditor.document.getText(selection);

	// Now you can perform an action on the selected text
	const newString = replaceStringFunction(selectedText);

	// Replace the selected text with the converted text
	edit.replace(selection, newString);
}
