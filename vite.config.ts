import { configDefaults } from "vitest/config";
import { builtinModules } from "node:module";
import { defineConfig } from "vite";
import { resolve } from "node:path";

const external = builtinModules
	.map((mod) => `node:${mod}`)
	.concat(builtinModules, "vscode");

const MINIFY = true;

export default defineConfig(() => {
	return {
		build: {
			rollupOptions: {
				// make sure to externalize deps that shouldn't be bundled
				// into your library
				preserveEntrySignatures: "strict",
				strictDeprecations: true,
				external,

				// https://rollupjs.org/guide/en/#big-list-of-options
				output: {
					generatedCode: {
						objectShorthand: true,
						constBindings: true,
						preset: "es2015",
					},

					// assetFileNames: "assets/[name].[ext]",
					// entryFileNames: "extension.js", // This overrides the entry name.
					minifyInternalExports: MINIFY,
					entryFileNames: "[name].js",
					// chunkFileNames: "[name].js",
					sourcemap: true,
					format: "esm",
					dir: "./out",
				},
			},

			lib: { entry: "src/extension.ts", formats: ["cjs"] },
			reportCompressedSize: false,
			emptyOutDir: true,
			target: "es2022",
			sourcemap: true,
			minify: MINIFY,
		},

		esbuild: {
			minifyIdentifiers: MINIFY,
			minifyWhitespace: MINIFY,
			ignoreAnnotations: true,
			minifySyntax: MINIFY,
			treeShaking: true,
			logLevel: "info",
			platform: "node",
			target: "esnext",
			sourcemap: true,
			charset: "utf8",
			format: "esm",
			logLimit: 10,
			color: true,
		},

		test: {
			logHeapUsage: true,
			dir: "tests",
			coverage: {
				// reporter: ["html", "text"],
				reporter: ["text"],
				// all: true,
			},
			exclude: [
				...configDefaults.exclude,
				"**/seeLeakedVariables.ts",
				"**/.eslintrc.{js,cjs}",
				"**/styles.ts",
				"**/global.ts",
				"coverage/**",
				"**/*.d.ts",
			],
		},

		resolve: {
			alias: [
				{ find: "@tests", replacement: resolve("tests/") },
				{ find: "@src", replacement: resolve("src/") },
			],
		},
	} satisfies ReturnType<typeof defineConfig>;
});
