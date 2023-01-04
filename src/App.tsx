import React, { useState } from 'react';

import { Button } from './Components/Button';

import styles from './App.module.css';
import { Icons } from './Components/Icons';

function SubContainer({ children }: { children: React.ReactNode }) {
	return <div className={styles.subContainer}>{children}</div>;
}

function SubContainerButton({ children }: { children: React.ReactNode }) {
	return <div className={styles.subContainerButton}>{children}</div>;
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
			<SubContainer>
				<SubContainerButton>
					<button type="button" style={{ width: '100%', height: '100%' }}>
						Botão Normal Sem Lib
					</button>
				</SubContainerButton>

				<SubContainerButton>
					<Button>Default</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button startIcon={<Icons.WhatsappLogo />}>Icone no Início</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button type="button" endIcon={<Icons.TelegramLogo />}>
						Telegram
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						type="button"
						startIcon={<Icons.YoutubeLogo />}
						endIcon={<Icons.YoutubeLogo />}
					>
						Youtube
					</Button>
				</SubContainerButton>

				<SubContainerButton>
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
				</SubContainerButton>
				<SubContainerButton>
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
				</SubContainerButton>
				<SubContainerButton>
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
				</SubContainerButton>
				<SubContainerButton>
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
				</SubContainerButton>
				<SubContainerButton>
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
				</SubContainerButton>
				<SubContainerButton>
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
				</SubContainerButton>

				<SubContainerButton>
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
				</SubContainerButton>

				<SubContainerButton>
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
				</SubContainerButton>

				<SubContainerButton>
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
				</SubContainerButton>

				<SubContainerButton>
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
				</SubContainerButton>

				<SubContainerButton>
					<Button
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
				</SubContainerButton>

				<SubContainerButton>
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
						Fixo Com Icone
					</Button>
				</SubContainerButton>

				<SubContainerButton>
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
						Ellipsis
					</Button>
				</SubContainerButton>

				<div
					style={{
						padding: '5px',
						display: 'flex',
						gap: '4px',
						border: '1px solid',
						width: '100%',
						flexWrap: 'wrap',
					}}
				>
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
						endIcon={<Icons.WhatsappLogo />}
					/>

					<Button
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
						style={{
							minWidth: '50px',
							height: '50px',
							borderRadius: '50%',
							border: 'none',
						}}
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
				</div>
			</SubContainer>
		</main>
	);
}

export default App;
