# @sajermann/react-button

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

