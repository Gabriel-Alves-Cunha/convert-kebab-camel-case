import { it, expect, describe } from "vitest";

import { toKebabCase } from "@src/toKebabCase";

describe("to kebab case", () => {
	// Tests that a valid input with no special characters returns the same string in kebab-case format.
	it("test_no_special_characters", () => {
		expect(toKebabCase("helloWorld123")).toBe("hello-world-123");
	});

	// Tests that a valid input with spaces returns the same string in kebab-case format with spaces replaced by hyphens.
	it("test_with_spaces", () => {
		expect(toKebabCase("hello world")).toBe("hello-world");
	});

	// Tests that an empty string input returns an empty string.
	it("test_empty_input", () => {
		expect(toKebabCase("")).toBe("");
	});

	// Tests that a single character input returns the same character.
	it("test_single_character_input", () => {
		expect(toKebabCase("a")).toBe("a");
	});

	// Tests that a valid input with multiple consecutive spaces returns the same string in kebab-case format with consecutive spaces replaced by a single hyphen.
	it("test_with_multiple_consecutive_spaces", () => {
		expect(toKebabCase("hello   world")).toBe("hello-world");
	});

	// Tests that a valid input with multiple consecutive underscores returns the same string in kebab-case format with consecutive underscores replaced by a single hyphen.
	it("test_with_multiple_consecutive_underscores", () => {
		expect(toKebabCase("hello___world")).toBe("hello-world");
	});

	// Tests that a valid input with underscores returns the same string in kebab-case format with underscores replaced by hyphens.
	it("test_with_underscores", () => {
		expect(toKebabCase("hello_world")).toBe("hello-world");
	});

	// Tests that a valid input with spaces and underscores returns the same string in kebab-case format with spaces and underscores replaced by hyphens.
	it("test_with_spaces_and_underscores", () => {
		expect(toKebabCase("hello _world")).toBe("hello-world");
	});

	// Tests that a valid input with special characters returns the same string in kebab-case format with special characters removed.
	it("test_with_special_characters", () => {
		expect(toKebabCase("hello!@#$%^&*()_+")).toBe("hello");
	});

	// Tests that a valid input with special characters and spaces returns the same string in kebab-case format with special characters removed and spaces replaced by hyphens.
	it("test_with_special_characters_and_spaces", () => {
		expect(toKebabCase("hello!@# $%^&*()_+")).toBe("hello");
	});

	// Tests that a valid input with special characters and underscores returns the same string in kebab-case format with special characters removed and underscores replaced by hyphens.
	it("test_with_special_characters_and_underscores", () => {
		expect(toKebabCase("hello!@#_%^&*()_+")).toBe("hello");
	});

	// Tests that a valid input with special characters, spaces, and underscores returns the same string in kebab-case format with special characters removed and spaces and underscores replaced by hyphens.
	it("test_with_special_characters_spaces_and_underscores", () => {
		expect(toKebabCase("hello!@# _%^&*()_+world")).toBe("hello-world");
	});

	it("test uppercase", () => {
		const input = "HELLO WORLD";
		const expected = "hello-world";
		expect(toKebabCase(input)).toBe(expected);
	})
});
