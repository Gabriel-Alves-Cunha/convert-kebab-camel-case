import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

async function getWordsFromFile(filename: string): Promise<string[]> {
	const path = resolve(filename);

	const words = await readFile(path, "utf-8");
	const wordList = words.split(/\s+/);

	return wordList;
}

export const commonWords = await getWordsFromFile("tests/common-words.txt");
