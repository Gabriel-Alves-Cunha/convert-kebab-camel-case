import { it, expect, describe } from "vitest";

import {
	firstLetterOfAlmostAllAlphabetsRegex,
	kebabToCamel,
} from "#src/kebabToCamel";

describe(
	"kebabToCamel",
	() => {
		// Tests that the function correctly converts a kebab-case string with only one word to camelCase.
		it("Tests a single word", () => {
			for (const word of ["hello", "Hello", "world"]) {
				expect(kebabToCamel(word)).toBe(
					word.replace(firstLetterOfAlmostAllAlphabetsRegex, (match) =>
						match.toLocaleLowerCase(),
					),
				);
			}
		});

		// Tests that the function returns an empty string when given an empty string as input.
		it("Tests an empty string", () => {
			expect(kebabToCamel("")).toBe("");
		});

		// Tests that the function correctly handles input with leading or trailing hyphens.
		it("Tests with leading trailing hyphens", () => {
			expect(kebabToCamel("-hello-world-")).toBe("helloWorld");
			expect(kebabToCamel("--hello-world--")).toBe("helloWorld");
		});

		// Tests that the function correctly converts a kebab-case string with multiple words to camelCase.
		it("test_multiple_words", () => {
			const kebabCase = "hello-world-test";
			const expectedCamelCase = "helloWorldTest";

			const result = kebabToCamel(kebabCase);

			expect(result).toEqual(expectedCamelCase);
		});

		// Tests that the function returns an empty string when given a string with only hyphens as input.
		it("Tests a string with only hyphens", () => {
			const kebabCase = "----";
			const expectedCamelCase = "";

			const result = kebabToCamel(kebabCase);

			expect(result).toEqual(expectedCamelCase);
		});

		// Tests that the function correctly handles non-alphabetic characters in the input.
		it("test_non_alphabetic_characters", () => {
			const kebabCase = "hello-world-123";
			const expectedCamelCase = "helloWorld123";

			const result = kebabToCamel(kebabCase);

			expect(result).toEqual(expectedCamelCase);
		});

		// Tests that the function correctly preserves the case of the first word in the input.
		it("test_preserve_first_word_case", () => {
			const input = "my-kebab-case";
			const expectedOutput = "myKebabCase";

			const result = kebabToCamel(input);

			expect(result).toEqual(expectedOutput);
		});

		// Tests that the function correctly handles non-ASCII characters in the input.
		it("test_non_ascii_characters", () => {
			const input = "müller-kebab-case";
			const expectedOutput = "müllerKebabCase";

			const result = kebabToCamel(input);

			expect(result).toEqual(expectedOutput);
		});

		// Tests that the function returns the expected output for a given input.
		it("test_function_output", () => {
			const input = "this-is-a-test-case";
			const expectedOutput = "thisIsATestCase";

			const result = kebabToCamel(input);

			expect(result).toEqual(expectedOutput);
		});
	},
	{ timeout: 1_000 },
);
