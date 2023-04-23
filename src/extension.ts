// The module 'vscode' contains the VS Code extensibility API
import { type ExtensionContext, commands } from "vscode";

import { camelToKebabCommand } from "./camelToKebab";
import { kebakToCamelCommand } from "./kebabToCamel";

const myExtension = "convert-kebab-camel-case";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext): void {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log(`"${myExtension}" is now active!`);

	// The command has been defined in the package.json file.
	// Now provide the implementation of the command with registerCommand.
	// The commandId parameter must match the command field in package.json.
	// The code you place here will be executed every time your command is executed.
	// You can pass arguments to your command by using the first argument
	// of the registerCommand method. For example:
	// 		registerCommand('my-extension.sayHello', (name) => {
	// 			console.log(`Hello ${name}!`);
	// 		}
	const disposeCamelToKebabCommand = commands.registerCommand(
		`${myExtension}.camelToKebab`,
		camelToKebabCommand,
	);

	const disposeKebakToCamelCommand = commands.registerCommand(
		`${myExtension}.kebabToCamel`,
		kebakToCamelCommand,
	);

	context.subscriptions.push(
		disposeCamelToKebabCommand,
		disposeKebakToCamelCommand,
	);
}

// This method is called when your extension is deactivated
export function deactivate(): void {}
