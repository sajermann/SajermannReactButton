# @sajermann/react-button

[![Quality Gate Status](https://sonar.sajermann.com/api/project_badges/measure?project=SajermannReactButton&metric=alert_status&token=09bc5f820031cca2e768f3afc49c0b843d6d3d6b)]() [![Coverage](https://sonar.sajermann.com/api/project_badges/measure?project=SajermannReactButton&metric=coverage&token=09bc5f820031cca2e768f3afc49c0b843d6d3d6b)]() [![Bugs](https://sonar.sajermann.com/api/project_badges/measure?project=SajermannReactButton&metric=bugs&token=09bc5f820031cca2e768f3afc49c0b843d6d3d6b)]() [![Code Smells](https://sonar.sajermann.com/api/project_badges/measure?project=SajermannReactButton&metric=code_smells&token=09bc5f820031cca2e768f3afc49c0b843d6d3d6b)]() [![Duplicated Lines (%)](https://sonar.sajermann.com/api/project_badges/measure?project=SajermannReactButton&metric=duplicated_lines_density&token=09bc5f820031cca2e768f3afc49c0b843d6d3d6b)]()

Library created for implements super power in button.

## Install

```npm i @sajermann/react-button```

## Links

[NPM](https://www.npmjs.com/package/@sajermann/react-button)
[Github](https://github.com/sajermann/SajermannReactButton)

## Props
```js
type PropsFeedBack = {
	loadingOptions: {
		isLoading: boolean;
		typeLoadingIcon?: 'Default' | 'Points';
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
	successOptions?: {
		success: boolean;
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
	failedOptions?: {
		failed: boolean;
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
	containerIconsProps?: React.AllHTMLAttributes<HTMLDivElement>;
	containerInsideProps?: React.AllHTMLAttributes<HTMLDivElement>;
	containerChildrenProps?: React.AllHTMLAttributes<HTMLDivElement>;
	withFeedback?: PropsFeedBack;
}
```

## Examples

### Default
```js
<Button>Default</Button>
```

### Start Icon
```js
<Button startIcon={<Icons.WhatsappLogo />}>Start Icon</Button>
```

### End Icon
```js
<Button endIcon={<Icons.TelegramLogo />}>End Icon</Button>
```

### Start/End Icon
```js
<Button
	startIcon={<Icons.YoutubeLogo />}
	endIcon={<Icons.YoutubeLogo />}
>
	Start/End Icon
</Button>
```

### Is Loading Default
```js
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
	Is Loading Default
</Button>
```

### Is Loading Points
```js
<Button
	disabled
	onClick={() => handleSave()}
	withFeedback={{
		loadingOptions: {
			isLoading: true,
			typeLoadingIcon: 'Points',
		},
	}}
>
	Is Loading Points
</Button>
```

### Is Loading Full Icon
```js
<Button
	disabled={isLoading}
	onClick={() => handleSave()}
	withFeedback={{
		loadingOptions: {
			isLoading,
			fullIcon: true,
		},
	}}
>
	Is Loading Full Icon
</Button>
```

### Is Loading Custom Icon
```js
<Button
	disabled={isLoading}
	onClick={() => handleSave()}
	withFeedback={{
		loadingOptions: {
			isLoading,
			customIcon: <Icons.CustomLoading />,
		},
	}}
>
	Is Loading Custom Icon
</Button>
```

### With Feedback Success
```js
<Button
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
```

### With Feedback Success Full Icon
```js
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
```

### With Feedback Success Custom Icon
```js
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
```

### With Feedback Failed
```js
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
```

### With Feedback Failed Full Icon
```js
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
```

### With Feedback Failed Custom Icon
```js
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
```

### Ellipsis
```js
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
```

### Icon Button - Square
```js
<Button
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
```

### Icon Button - Circle
```js
<Button
	style={{
		minWidth: '50px',
		height: '50px',
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
```
