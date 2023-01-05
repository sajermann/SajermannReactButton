import ts from 'rollup-plugin-ts';

export default [
	{
		input: 'src/index.ts',
		output: {
			dir: 'build',
			format: 'esm',
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
		],
	},
];
