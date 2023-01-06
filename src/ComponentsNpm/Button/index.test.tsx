/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import { Button } from '.';

function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

describe('ComponentsNpm/Button', () => {
	it(`must fire onClick`, async () => {
		const mockFn = vi.fn();
		const { getByTestId } = render(
			<Button data-testid="Button" onClick={mockFn} />
		);
		fireEvent.click(getByTestId('Button'));
		expect(mockFn).toBeCalled();
	});

	it(`must render start icon`, async () => {
		const { getByTestId } = render(
			<Button startIcon={<div data-testid="startIcon">T</div>}>
				Start Icon
			</Button>
		);
		expect(getByTestId('startIcon')).toBeInTheDocument();
	});

	it(`must render end icon`, async () => {
		const { getByTestId } = render(
			<Button endIcon={<div data-testid="endIcon">T</div>}>End Icon</Button>
		);
		expect(getByTestId('endIcon')).toBeInTheDocument();
	});

	it(`must render is loading custom icon`, async () => {
		const { getByTestId } = render(
			<Button
				withFeedback={{
					loadingOptions: {
						isLoading: true,
						customIcon: <div data-testid="isLoadingCustomIcon">T</div>,
					},
				}}
			>
				Is Loading Custom Icon
			</Button>
		);
		expect(getByTestId('isLoadingCustomIcon')).toBeInTheDocument();
	});

	it(`must render is loading`, async () => {
		const { getByTestId } = render(
			<>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: true,
						},
					}}
				>
					Is Loading Default
				</Button>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: true,
							typeLoadingIcon: 'Points',
						},
					}}
				>
					Is Loading Default
				</Button>
			</>
		);
	});

	it(`must render button disabled with elipsis`, async () => {
		const { getByTitle } = render(
			<div style={{ width: 100, height: 40 }}>
				<Button disabled>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
					numquam perspiciatis corporis libero. Enim, debitis. Architecto sed
					reiciendis omnis perspiciatis iste natus, quae veniam perferendis,
					quas blanditiis ipsa, dicta maxime.
				</Button>
			</div>
		);
		await delay(100);
		await waitFor(() => {
			// const t = getByTitle('Eli.');
		});
	});

	it(`must render success and failed feedback`, async () => {
		const { getByTestId } = render(
			<>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: false,
						},
						successOptions: {
							success: true,
						},
					}}
				>
					Success
				</Button>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: false,
						},
						failedOptions: {
							failed: true,
						},
					}}
				>
					Failed
				</Button>
			</>
		);
	});

	it(`must render success/failed custom icon`, async () => {
		const { getByTestId } = render(
			<>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: false,
						},
						successOptions: {
							success: true,
							customIcon: <div data-testid="successCustomIcon">T</div>,
						},
					}}
				>
					Success Custom Icon
				</Button>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: false,
						},
						failedOptions: {
							failed: true,
							customIcon: <div data-testid="failedCustomIcon">T</div>,
						},
					}}
				>
					Failed Custom Icon
				</Button>
			</>
		);
		expect(getByTestId('successCustomIcon')).toBeInTheDocument();
		expect(getByTestId('failedCustomIcon')).toBeInTheDocument();
	});

	it(`must render icon button`, async () => {
		const { getByTestId } = render(
			<Button
				style={{ alignItems: 'center' }}
				withFeedback={{
					loadingOptions: {
						isLoading: false,
					},
					successOptions: {
						success: false,
					},
					failedOptions: {
						failed: false,
					},
				}}
				endIcon={<div data-testid="endIcon">T</div>}
			/>
		);
		expect(getByTestId('endIcon')).toBeInTheDocument();
	});

	it(`must render full icon`, async () => {
		const { getByTestId } = render(
			<>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: true,
							fullIcon: true,
						},
					}}
				>
					Is Loading Full Icon
				</Button>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: false,
							fullIcon: false,
						},
						successOptions: {
							success: true,
							fullIcon: true,
						},
					}}
				>
					Success Full Icon
				</Button>
				<Button
					withFeedback={{
						loadingOptions: {
							isLoading: false,
							fullIcon: false,
						},
						failedOptions: {
							failed: true,
							fullIcon: true,
						},
					}}
				>
					Failed Full Icon
				</Button>
			</>
		);
	});
});
