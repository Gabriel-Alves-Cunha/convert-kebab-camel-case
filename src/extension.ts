import { type ExtensionContext, commands } from "vscode";

import { myExtension } from "./utils";
import {
	toPascalCaseCommand,
	toCamelCaseCommand,
	toKebabCaseCommand,
	toLowerCaseCommand,
	toSnakeCaseCommand,
	toUpperCaseCommand,
} from "./commands";

// This method is called when your extension is activated.
// Your extension is activated the very first time the command is executed.
export function activate(context: ExtensionContext): void {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log(`"${myExtension}" is now active!`);

	// The command has been defined in the package.json file.
	// Now provide the implementation of the command with registerCommand.
	// The commandId parameter must match the command field in package.json.
	// The code you place here will be executed every time your command is executed.
	// You can pass arguments to your command by using the first argument
	// of the registerCommand method. For example:
	// 		registerCommand('my-extension.sayHello', (name) => {
	// 			console.log(`Hello ${name}!`);
	// 		}
	const disposeToKebabCaseCommand = commands.registerTextEditorCommand(
		`${myExtension}.toKebabCase`,
		toKebabCaseCommand,
	);

	const disposeToCamelCaseCommand = commands.registerTextEditorCommand(
		`${myExtension}.toCamelCase`,
		toCamelCaseCommand,
	);

	const disposeToSnakeCaseCommand = commands.registerTextEditorCommand(
		`${myExtension}.toSnakeCase`,
		toSnakeCaseCommand,
	);

	const disposeToPascalCaseCommand = commands.registerTextEditorCommand(
		`${myExtension}.toPascalCase`,
		toPascalCaseCommand,
	);

	const disposeToUpperCaseCommand = commands.registerTextEditorCommand(
		`${myExtension}.toUpperCase`,
		toUpperCaseCommand,
	);

	const disposeToLowerCaseCommand = commands.registerTextEditorCommand(
		`${myExtension}.toLowerCase`,
		toLowerCaseCommand,
	);

	context.subscriptions.push(
		disposeToPascalCaseCommand,
		disposeToKebabCaseCommand,
		disposeToCamelCaseCommand,
		disposeToSnakeCaseCommand,
		disposeToUpperCaseCommand,
		disposeToLowerCaseCommand,
	);
}

// This method is called when your extension is deactivated.
export function deactivate(): void {}
