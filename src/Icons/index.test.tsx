/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Icons } from './index';

describe('Components/Icons', () => {
	it(`should render icon Report`, async () => {
		const { getByTestId } = render(<Icons.Report data-testid="IconReport" />);
		expect(getByTestId('IconReport')).toBeInTheDocument();
	});
	it(`should render icon Power`, async () => {
		const { getByTestId } = render(<Icons.Power data-testid="IconPower" />);
		expect(getByTestId('IconPower')).toBeInTheDocument();
	});
	it(`should render icon printer`, async () => {
		const { getByTestId } = render(<Icons.Printer data-testid="IconPrinter" />);
		expect(getByTestId('IconPrinter')).toBeInTheDocument();
	});
	it(`should render icon Pdf`, async () => {
		const { getByTestId } = render(<Icons.Pdf data-testid="IconPdf" />);
		expect(getByTestId('IconPdf')).toBeInTheDocument();
	});
	it(`should render icon Excel`, async () => {
		const { getByTestId } = render(<Icons.Excel data-testid="IconExcel" />);
		expect(getByTestId('IconExcel')).toBeInTheDocument();
	});
	it(`should render icon Xml`, async () => {
		const { getByTestId } = render(<Icons.Xml data-testid="IconXml" />);
		expect(getByTestId('IconXml')).toBeInTheDocument();
	});
	it(`should render icon Trash`, async () => {
		const { getByTestId } = render(<Icons.Trash data-testid="IconTrash" />);
		expect(getByTestId('IconTrash')).toBeInTheDocument();
	});
	it(`should render icon Article`, async () => {
		const { getByTestId } = render(<Icons.Article data-testid="IconArticle" />);
		expect(getByTestId('IconArticle')).toBeInTheDocument();
	});
	it(`should render icon UserGear`, async () => {
		const { getByTestId } = render(
			<Icons.UserGear data-testid="IconUserGear" />
		);
		expect(getByTestId('IconUserGear')).toBeInTheDocument();
	});
	it(`should render icon CloudDown`, async () => {
		const { getByTestId } = render(
			<Icons.CloudDown data-testid="IconCloudDown" />
		);
		expect(getByTestId('IconCloudDown')).toBeInTheDocument();
	});
	it(`should render icon Eye`, async () => {
		const { getByTestId } = render(<Icons.Eye data-testid="IconEye" />);
		expect(getByTestId('IconEye')).toBeInTheDocument();
	});
	it(`should render icon Pen`, async () => {
		const { getByTestId } = render(<Icons.Pen data-testid="IconPen" />);
		expect(getByTestId('IconPen')).toBeInTheDocument();
	});
	it(`should render icon ArrowSingleLeft`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowSingleLeft data-testid="IconArrowSingleLeft" />
		);
		expect(getByTestId('IconArrowSingleLeft')).toBeInTheDocument();
	});
	it(`should render icon ArrowSingleRight`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowSingleRight data-testid="IconArrowSingleRight" />
		);
		expect(getByTestId('IconArrowSingleRight')).toBeInTheDocument();
	});
	it(`should render icon ArrowPairLeft`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowPairLeft data-testid="IconArrowPairLeft" />
		);
		expect(getByTestId('IconArrowPairLeft')).toBeInTheDocument();
	});
	it(`should render icon ArrowPairRight`, async () => {
		const { getByTestId } = render(
			<Icons.ArrowPairRight data-testid="IconArrowPairRight" />
		);
		expect(getByTestId('IconArrowPairRight')).toBeInTheDocument();
	});
	it(`should render icon PaperClip`, async () => {
		const { getByTestId } = render(
			<Icons.PaperClip data-testid="IconPaperClip" />
		);
		expect(getByTestId('IconPaperClip')).toBeInTheDocument();
	});
	it(`should render icon Save`, async () => {
		const { getByTestId } = render(<Icons.Save data-testid="IconSave" />);
		expect(getByTestId('IconSave')).toBeInTheDocument();
	});
});
