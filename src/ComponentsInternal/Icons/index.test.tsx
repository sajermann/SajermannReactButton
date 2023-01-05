/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Icons } from './index';

describe('ComponentsInternal/Icons', () => {
	it(`should render icon TelegramLogo`, async () => {
		const { getByTestId } = render(
			<Icons.TelegramLogo data-testid="IconTelegramLogo" />
		);
		expect(getByTestId('IconTelegramLogo')).toBeInTheDocument();
	});
});
