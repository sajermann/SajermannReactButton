import React, { useState } from 'react';

import { Button, ISajermannReactButton } from './ComponentsNpm/Button';

import styles from './App.module.css';
import { Icons } from './ComponentsInternal/Icons';

interface Batata extends ISajermannReactButton {
	startIcon?: JSX.Element;
}

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
					<Button endIcon={<Icons.TelegramLogo />}>Icone no Fim</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						startIcon={<Icons.YoutubeLogo />}
						endIcon={<Icons.YoutubeLogo />}
					>
						Icone no Início/Fim
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						disabled
						onClick={handleSave}
						withFeedback={{
							loadingOptions: {
								isLoading: true,
							},
						}}
					>
						Is Loading Default
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						style={{ width: 200 }}
						disabled
						onClick={handleSave}
						withFeedback={{
							loadingOptions: {
								isLoading: true,
								typeLoadingIcon: 'Points',
							},
						}}
					>
						Is Loading Points
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						style={{ width: 200 }}
						disabled={isLoading}
						onClick={handleSave}
						withFeedback={{
							loadingOptions: {
								isLoading,
								fullIcon: true,
							},
						}}
					>
						Is Loading Full Icon
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						style={{ width: 200 }}
						disabled={isLoading}
						onClick={handleSave}
						withFeedback={{
							loadingOptions: {
								isLoading,
								customIcon: <Icons.CustomLoading />,
							},
						}}
					>
						Is Loading Custom Icon
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						style={{ width: 200 }}
						disabled={isLoading}
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
						With Feedback Success
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						disabled={isLoading}
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
						With Feedback Success Full Icon
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						disabled={isLoading}
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
						With Feedback Success Custom Icon
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						disabled={isLoading}
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
						With Feedback Failed
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						disabled={isLoading}
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
						With Feedback Failed Full Icon
					</Button>
				</SubContainerButton>

				<SubContainerButton>
					<Button
						disabled={isLoading}
						onClick={handleSaveFailed}
						withFeedback={{
							loadingOptions: {
								isLoading,
							},
							failedOptions: {
								failed,
								customIcon: <Icons.TrendDown />,
							},
						}}
					>
						With Feedback Failed Custom Icon
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
						Ellipsis - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Accusantium vero delectus animi! Reprehenderit nostrum harum unde
						odio ex deleniti? Labore beatae dolorem quae nam velit nobis
						inventore blanditiis omnis a.
					</Button>
				</SubContainerButton>

				<div
					style={{
						padding: '5px',
						display: 'flex',
						gap: '4px',
						border: '1px solid',
						width: '100%',
						height: '50px',
						flexWrap: 'wrap',
					}}
				>
					<Button
						style={{ width: 50, height: 50 }}
						disabled={isLoading}
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
						style={{ width: 50, height: 50 }}
						disabled={isLoading}
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
							width: 50,
							height: 50,
							borderRadius: '50%',
							border: 'none',
						}}
						disabled={isLoading}
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

				<div style={{ width: 300, height: 50 }}>
					<Button
						disabled={isLoading}
						className={styles.primary}
						endIcon={<Icons.YoutubeLogo />}
						withFeedback={{
							loadingOptions: {
								isLoading,
								typeLoadingIcon: 'Points',
							},
							successOptions: {
								success,
							},

							failedOptions: {
								failed,
								fullIcon: true,
							},
						}}
					>
						Implementação
					</Button>
				</div>

				<Button
					style={{ width: '150px', height: '150px' }}
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
					endIcon={<Icons.YoutubeLogo />}
				/>

				<Button
					disabled={isLoading}
					className={`${styles.primary} ${styles.implementsBig}`}
					startIcon={<Icons.TelegramLogo />}
					endIcon={<Icons.YoutubeLogo />}
					withFeedback={{
						loadingOptions: {
							isLoading,
							typeLoadingIcon: 'Points',
						},
						successOptions: {
							success,
						},

						failedOptions: {
							failed,
							fullIcon: true,
						},
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
					eveniet voluptate ipsa itaque! Officiis in enim quod architecto
					delectus fugiat nihil nobis. A sint magnam exercitationem, culpa hic
					eius doloremque.
				</Button>
			</SubContainer>
		</main>
	);
}

export default App;
