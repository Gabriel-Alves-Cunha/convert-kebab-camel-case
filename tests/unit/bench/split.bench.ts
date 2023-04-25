import { bench, describe } from "vitest";

import { splitAtHiphenRegex } from "@src/regexes";
import { commonWords } from "./commonWords";

describe("split benchmark", () => {
	bench("split with regex", () => {
		for (const string of commonWords) {
			string.split(splitAtHiphenRegex);
		}
	});

	bench("split array", () => {
		for (const string of commonWords) {
			string.split("-");
		}
	});
});
