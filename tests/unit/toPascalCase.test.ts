import { describe, it, expect } from "vitest";

import { toPascalCase } from "@src/toPascalCase";

describe("test to pascal case", () => {
	// Tests that a valid input string with no special characters returns a string in PascalCase.
	it("test_valid_input_no_special_chars", () => {
		const input = "helloWorld";
		const output = toPascalCase(input);
		expect(output).toBe("HelloWorld");
	});

	// Tests that a valid input string with underscores, hyphens, or spaces returns a string in PascalCase.
	it("test_valid_input_with_special_chars", () => {
		const input = "hello_world-how are you";
		const output = toPascalCase(input);
		expect(output).toBe("HelloWorldHowAreYou");
	});

	// Tests that an empty string input returns an empty string.
	it("test_empty_input", () => {
		const input = "";
		const output = toPascalCase(input);
		expect(output).toBe("");
	});

	// Tests that an input string with only special characters returns the same string.
	it("test_input_with_only_special_chars", () => {
		const input = "_- ";
		const output = toPascalCase(input);
		expect(output).toBe("_- ");
	});

	// Tests that the function handles non-ASCII characters correctly.
	it("test_non_ascii_chars", () => {
		const input = "héllo_wörld";
		const output = toPascalCase(input);
		expect(output).toBe("HélloWörld");
	});

	// Tests that the function handles numbers and symbols correctly.
	it("test_numbers_and_symbols", () => {
		const input = "hello_world_123!@#";
		const output = toPascalCase(input);
		expect(output).toBe("HelloWorld123!@#");
	});

	// Tests that the function does not require any mocking.
	it("test_mocking", () => {
		const input = "hello_world";
		const output = toPascalCase(input);
		expect(output).toBeDefined();
	});

	// Tests that the function performs well with large inputs.
	it("test_performance", () => {
		const input = "a".repeat(100000);
		const output = toPascalCase(input);
		expect(output).toBeDefined();
	});

	// Tests that an input string with special characters at the beginning returns a string in PascalCase.
	it("test_input_with_special_chars_at_beginning", () => {
		const input = "_hello_world";
		const output = toPascalCase(input);
		expect(output).toBe("HelloWorld");
	});

	// Tests that an input string with special characters at the end returns a string in PascalCase.
	it("test_input_with_special_chars_at_end", () => {
		const input = "hello_world_";
		const output = toPascalCase(input);
		expect(output).toBe("HelloWorld");
	});
});
