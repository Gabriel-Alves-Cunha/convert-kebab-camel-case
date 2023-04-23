import { it, expect, describe } from "vitest";

import { camelToKebab } from "#src/camelToKebab";

describe("camelToKebab", () => {
	// Tests that a string in camelCase format is correctly converted to kebab-case.
	it("test_happy_path", () => {
		const input = "thisIsCamelCase";
		const expectedOutput = "this-is-camel-case";
		const output = camelToKebab(input);
		expect(output).toEqual(expectedOutput);
	});

	// Tests that a non-string input returns an error message.
	it("test_non_string_input", () => {
		const input = 123;

		// @ts-ignore => This error is expected.
		expect(() => camelToKebab(input)).toThrowError();
	});

	// Tests that an empty string input returns an empty string.
	it("test_empty_string", () => {
		const input = "";
		const expectedOutput = "";
		const output = camelToKebab(input);
		expect(output).toEqual(expectedOutput);
	});

	// Tests that an input string with only one character is correctly converted to kebab-case.
	it("test_one_character_input", () => {
		expect(camelToKebab("a")).toBe("a");
	});

	// Tests that an input string with only uppercase letters is correctly converted to kebab-case.
	it("test_all_uppercase_input", () => {
		expect(camelToKebab("HELLO")).toBe("hello");
	});

	// Tests that an input string with numbers or special characters is correctly converted to kebab-case.
	it("test_numbers_and_special_characters_input", () => {
		expect(camelToKebab("myString123!")).toBe("my-string123!");
	});

	// Tests that an input string with only lowercase letters is correctly converted to kebab-case.
	it("test_all_lowercase_input", () => {
		const input = "hellothere";
		const output = camelToKebab(input);
		expect(output).toEqual("hellothere");
	});

	// Tests that the input string is not modified by the function.
	it("test_input_immutable", () => {
		const input = "helloThere";
		camelToKebab(input);
		expect(input).toEqual("helloThere");
	});
});
