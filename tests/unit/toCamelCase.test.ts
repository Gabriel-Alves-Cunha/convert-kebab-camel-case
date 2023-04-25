import { it, expect, describe } from "vitest";

import { toCamelCase } from "@src/toCamelCase";

describe("to camel case", () => {
	// Tests that a single word input is correctly converted to camel case.
	it("test_happy_path_single_word", () => {
		const input = "hello";
		const expectedOutput = "hello";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that an input with multiple words separated by hyphens is correctly converted to camel case.
	it("test_general_behavior_multiple_words_hyphens", () => {
		const input = "hello-world";
		const expectedOutput = "helloWorld";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that an empty input returns an empty string.
	it("test_edge_case_empty_input", () => {
		const input = "";
		const expectedOutput = "";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that an input with multiple words separated by spaces is correctly converted to camel case.
	it("test_multiple_words_spaces", () => {
		const input = "hello world";
		const expectedOutput = "helloWorld";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that an input with all uppercase letters is correctly converted to camel case.
	it("test_general_behavior_all_uppercase_input", () => {
		const input = "HELLO WORLD";
		const expectedOutput = "helloWorld";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that an input with only non-alphabetic characters returns the same input.
	it("test_edge_case_non_alphabetic_input", () => {
		const input = "!@#$%^&*()";
		const expectedOutput = "!@#$%^&*()";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that an input with all lowercase letters is correctly converted to camel case.
	it("test_happy_path_all_lowercase_input", () => {
		const input = "hello_world";
		const expectedOutput = "helloWorld";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that an input with only one letter is correctly converted to uppercase.
	it("test_edge_case_one_letter_input", () => {
		const input = "a";
		const expectedOutput = "a";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	// Tests that letters after the first letter of each word are not modified.
	it("test_general_behavior_letters_after_first_letter", () => {
		const input = "hello-world";
		const expectedOutput = "helloWorld";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	it("test uppercase", () => {
		const input = "HELLO-WORLD";
		const expectedOutput = "helloWorld";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});

	it("test with string already at camel case", () => {
		const input = "helloWorld";
		const expectedOutput = "helloWorld";
		const actualOutput = toCamelCase(input);
		expect(actualOutput).toEqual(expectedOutput);
	});
});
