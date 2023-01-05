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
});
