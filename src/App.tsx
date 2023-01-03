import React, { useState } from 'react';

import { Button } from './Components/Button';

import styles from './App.module.css';
import { Icons } from './Components/Icons';

function SubContainer({ children }: { children: React.ReactNode }) {
	return <div className={styles.subContainer}>{children}</div>;
}

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	function delay(delayMs: number): Promise<void> {
		return new Promise(resolve => {
			setTimeout(() => resolve(), delayMs);
		});
	}

	async function handleSave() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
		await delay(2000);
		setSuccess(false);
	}

	async function handleSaveFailed() {
		setIsLoading(true);
		await delay(3000);
		setIsLoading(false);
		setFailed(true);
		await delay(2000);
		setFailed(false);
	}

	return (
		<main className={styles.main}>
			<div>
				<div>{`import { Input } from '@sajermann/ui-react';`}</div>
			</div>

			<SubContainer>
				<div style={{ width: '300px', height: '30px' }}>
					<Button>Default</Button>
				</div>

				<div style={{ width: '300px', height: '50px' }}>
					<Button startIcon={<Icons.WhatsappLogo />}>Whats</Button>
				</div>

				<Button type="button" endIcon={<Icons.TelegramLogo />}>
					Telegram
				</Button>

				<Button
					type="button"
					startIcon={<Icons.YoutubeLogo />}
					endIcon={<Icons.YoutubeLogo />}
				>
					Youtube
				</Button>

				<Button
					disabled
					type="button"
					onClick={() => handleSave()}
					withFeedback={{
						loadingOptions: {
							isLoading: true,
						},
					}}
				>
					Default
				</Button>
				<Button
					disabled
					type="button"
					onClick={() => handleSave()}
					withFeedback={{
						loadingOptions: {
							isLoading: true,
							typeLoadingIcon: 'Points',
						},
					}}
				>
					Points
				</Button>
				<Button
					disabled
					type="button"
					onClick={() => handleSave()}
					withFeedback={{
						loadingOptions: {
							isLoading: true,
							fullIcon: true,
						},
					}}
				>
					Full Icon
				</Button>
				<Button
					disabled
					type="button"
					onClick={() => handleSave()}
					withFeedback={{
						loadingOptions: {
							isLoading: true,
							customIcon: <Icons.CustomLoading />,
						},
					}}
				>
					Custom Icon
				</Button>

				<Button
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						successOptions: {
							success,
						},
					}}
				>
					Sucesso
				</Button>
				<Button
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						successOptions: {
							success,
							fullIcon: true,
						},
					}}
				>
					Full Icon
				</Button>
				<Button
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						successOptions: {
							success,
							customIcon: <Icons.TrendUp />,
						},
					}}
				>
					Custom Icon
				</Button>

				<Button
					disabled={isLoading}
					type="button"
					onClick={handleSaveFailed}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						failedOptions: {
							failed,
						},
					}}
				>
					Falha
				</Button>
				<Button
					disabled={isLoading}
					type="button"
					onClick={handleSaveFailed}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						failedOptions: {
							failed,
							fullIcon: true,
						},
					}}
				>
					Full Icon
				</Button>
				<Button
					disabled={isLoading}
					type="button"
					onClick={handleSaveFailed}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						failedOptions: {
							failed: true,
							customIcon: <Icons.TrendDown />,
						},
					}}
				>
					Custom Icon
				</Button>

				<Button
					style={{ width: '250px', height: '50px' }}
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
							fullIcon: true,
						},
						successOptions: {
							success,
							fullIcon: true,
						},
					}}
				>
					Fixo Somente Icone
				</Button>
				<Button
					style={{ width: '250px', height: '50px' }}
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						successOptions: {
							success,
						},
					}}
				>
					Fixo Com Icone
				</Button>
				<Button
					style={{ width: '100px', height: '50px' }}
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						successOptions: {
							success,
						},
					}}
				>
					Ellipsis
				</Button>

				<Button
					style={{ minWidth: '50px', height: '50px' }}
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
						},
						successOptions: {
							success,
						},
					}}
					endIcon={<Icons.WhatsappLogo />}
				/>
				<Button
					style={{ minWidth: '50px', height: '50px' }}
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
							typeLoadingIcon: 'Points',
						},
						successOptions: {
							success,
						},
					}}
					endIcon={<Icons.YoutubeLogo />}
				/>
				<Button
					style={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}
					disabled={isLoading}
					type="button"
					onClick={handleSave}
					withFeedback={{
						loadingOptions: {
							isLoading,
							typeLoadingIcon: 'Points',
						},
						successOptions: {
							success,
						},
					}}
					endIcon={<Icons.TelegramLogo />}
				/>
			</SubContainer>
		</main>
	);
}

export default App;
