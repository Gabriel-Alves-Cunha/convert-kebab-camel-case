import { describe, it, expect } from "vitest";

import { toSnakeCase } from "@src/toSnakeCase";

describe("to snake case", () => {
	// Tests that the function correctly converts a string in camelCase format to snake_case format.
	it("test_happy_path_camel_case", () => {
		const input = "thisIsCamelCase";
		const expectedOutput = "this_is_camel_case";
		const result = toSnakeCase(input);
		expect(result).toEqual(expectedOutput);
	});

	// Tests that the function returns an empty string when given an empty input string.
	it("test_edge_case_empty_string", () => {
		const input = "";
		const expectedOutput = "";
		const result = toSnakeCase(input);
		expect(result).toEqual(expectedOutput);
	});

	// Tests that the function correctly converts a string in PascalCase format to snake_case format.
	it("test_happy_path_pascal_case", () => {
		const input = "PascalCaseString";
		const expectedOutput = "pascal_case_string";
		const result = toSnakeCase(input);
		expect(result).toEqual(expectedOutput);
	});

	// Tests that the function correctly converts all uppercase letters in the input string to lowercase before converting to snake_case format.
	it("test_general_behavior_uppercase_conversion", () => {
		const input = "UPPERCASESTRING";
		const expectedOutput = "uppercasestring";
		const result = toSnakeCase(input);
		expect(result).toEqual(expectedOutput);
	});

	// Tests that the function returns the input string in snake_case format when given a string with only one word.
	it("test_edge_case_single_word", () => {
		expect(toSnakeCase("hello")).toBe("hello");
	});

	it("test with string already at snake case", () => {
		const input = "hello_world";
		const expected = "hello_world";

		expect(toSnakeCase(input)).toBe(expected);
	});
});
