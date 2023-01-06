/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Icons } from '.';

describe('ComponentsInternal/Icons', () => {
	it(`should render icon TelegramLogo`, async () => {
		const { getByTestId } = render(
			<Icons.TelegramLogo data-testid="IconTelegramLogo" />
		);
		expect(getByTestId('IconTelegramLogo')).toBeInTheDocument();
	});
	it(`should render icon CustomLoading`, async () => {
		const { getByTestId } = render(
			<Icons.CustomLoading data-testid="IconCustomLoading" />
		);
		expect(getByTestId('IconCustomLoading')).toBeInTheDocument();
	});
	it(`should render icon WhatsappLogo`, async () => {
		const { getByTestId } = render(
			<Icons.WhatsappLogo data-testid="IconWhatsappLogo" />
		);
		expect(getByTestId('IconWhatsappLogo')).toBeInTheDocument();
	});
	it(`should render icon YoutubeLogo`, async () => {
		const { getByTestId } = render(
			<Icons.YoutubeLogo data-testid="IconYoutubeLogo" />
		);
		expect(getByTestId('IconYoutubeLogo')).toBeInTheDocument();
	});
	it(`should render icon TrendUp`, async () => {
		const { getByTestId } = render(<Icons.TrendUp data-testid="IconTrendUp" />);
		expect(getByTestId('IconTrendUp')).toBeInTheDocument();
	});
	it(`should render icon TrendDown`, async () => {
		const { getByTestId } = render(
			<Icons.TrendDown data-testid="IconTrendDown" />
		);
		expect(getByTestId('IconTrendDown')).toBeInTheDocument();
	});
});
