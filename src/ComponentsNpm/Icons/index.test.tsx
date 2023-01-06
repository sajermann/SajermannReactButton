/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Icons } from '.';

describe('ComponentsNpm/Icons', () => {
	it(`should render icon Success`, async () => {
		const { getByTestId } = render(<Icons.Success data-testid="IconSuccess" />);
		expect(getByTestId('IconSuccess')).toBeInTheDocument();
	});
	it(`should render icon Failed`, async () => {
		const { getByTestId } = render(<Icons.Failed data-testid="IconFailed" />);
		expect(getByTestId('IconFailed')).toBeInTheDocument();
	});
	it(`should render icon LoadingCircle`, async () => {
		const { getByTestId } = render(
			<Icons.LoadingCircle data-testid="IconLoadingCircle" />
		);
		expect(getByTestId('IconLoadingCircle')).toBeInTheDocument();
	});
	it(`should render icon LoadingPoints`, async () => {
		const { getByTestId } = render(
			<Icons.LoadingPoints data-testid="IconLoadingPoints" />
		);
		expect(getByTestId('IconLoadingPoints')).toBeInTheDocument();
	});
});
