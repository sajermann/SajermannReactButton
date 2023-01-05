import ts from 'rollup-plugin-ts';
import terser from '@rollup/plugin-terser';

export default [
	{
		input: 'src/index.ts',
		output: {
			dir: 'build',
			format: 'esm',
			preserveModules: false, // One file bundle
		},
		plugins: [
			ts({
				tsconfig: './tsconfig.json',
				compilerOptions: {
					jsx: 'react-jsx',
					declaration: true,
					declarationDir: 'build',
				},
			}),
			// terser(), // minify
		],
	},
];
