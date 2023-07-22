import { bench, describe } from "vitest";

import { HIPHEN_REGEX } from "@src/regexes";
import { commonWords } from "./commonWords";

describe("split benchmark", () => {
	bench("split with regex", () => {
		for (const string of commonWords) {
			string.split(HIPHEN_REGEX);
		}
	});

	bench("split array", () => {
		for (const string of commonWords) {
			string.split("-");
		}
	});
});
