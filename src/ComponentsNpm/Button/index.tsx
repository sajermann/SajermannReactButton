/* eslint-disable react/button-has-type */
import { useEffect, useMemo, useRef, useState } from 'react';

import { useWindowSize } from '../../Hooks/UseWindowSize';
import { Icons } from '../Icons';

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

interface ISajermannReactButton
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
	containerIconsProps?: React.AllHTMLAttributes<HTMLDivElement>;
	containerInsideProps?: React.AllHTMLAttributes<HTMLDivElement>;
	containerChildrenProps?: React.AllHTMLAttributes<HTMLDivElement>;
	withFeedback?: PropsFeedBack;
}

function isDevelopment(obj: { [i: string]: string }) {
	if (!import.meta.env.DEV) return {};
	return obj;
}

function Button({
	type,
	withFeedback,
	children,
	startIcon,
	endIcon,
	containerIconsProps,
	containerInsideProps,
	containerChildrenProps,
	...props
}: ISajermannReactButton) {
	const [isEllipsisActive, setIsEllipsisActive] = useState(false);
	const divRef = useRef<HTMLDivElement>(null);
	const size = useWindowSize();

	function verifyFullIcon() {
		const full = '100%';
		const partialSize = '10%';
		if (!children) return full;
		if (
			withFeedback?.loadingOptions.isLoading &&
			withFeedback?.loadingOptions.fullIcon
		)
			return full;
		if (
			withFeedback?.successOptions?.success &&
			withFeedback?.successOptions?.fullIcon
		)
			return full;
		if (
			withFeedback?.failedOptions?.failed &&
			withFeedback?.failedOptions?.fullIcon
		)
			return full;

		return partialSize;
	}

	const stylesContainerIcon: React.CSSProperties = {
		width: verifyFullIcon(),
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};

	useEffect(() => {
		const element = divRef.current;

		setIsEllipsisActive(
			element
				? element.offsetWidth < element.scrollWidth ||
						element.offsetHeight < element.scrollHeight
				: false
		);
	}, [size]);

	function verifyEllipsis() {
		if (props.title) {
			return props.title;
		}
		if (isEllipsisActive && typeof children === 'string') {
			return children;
		}
		return '';
	}

	const buildLoading = useMemo(() => {
		if (
			withFeedback?.loadingOptions.isLoading &&
			!withFeedback?.loadingOptions.customIcon
		) {
			if (withFeedback.loadingOptions.typeLoadingIcon === 'Points') {
				return <Icons.LoadingPoints />;
			}
			return <Icons.LoadingCircle />;
		}

		if (
			withFeedback?.loadingOptions.isLoading &&
			withFeedback?.loadingOptions.customIcon
		) {
			return withFeedback.loadingOptions.customIcon;
		}
		return null;
	}, [withFeedback]);

	const buildFeedbackIcon = useMemo(() => {
		if (withFeedback?.loadingOptions.isLoading) {
			return null;
		}
		if (
			withFeedback?.successOptions?.success &&
			!withFeedback?.successOptions?.customIcon
		) {
			return <Icons.Success />;
		}
		if (
			withFeedback?.successOptions?.success &&
			withFeedback?.successOptions?.customIcon
		) {
			return withFeedback?.successOptions?.customIcon;
		}
		if (
			withFeedback?.failedOptions?.failed &&
			!withFeedback?.failedOptions?.customIcon
		) {
			return <Icons.Failed />;
		}
		if (
			withFeedback?.failedOptions?.failed &&
			withFeedback?.failedOptions?.customIcon
		) {
			return withFeedback?.failedOptions?.customIcon;
		}

		return null;
	}, [withFeedback]);

	const mainFeedback = useMemo(() => {
		if (
			withFeedback?.loadingOptions.isLoading ||
			withFeedback?.successOptions?.success ||
			withFeedback?.failedOptions?.failed
		) {
			return (
				<div
					{...containerIconsProps}
					style={{
						...stylesContainerIcon,
						...containerIconsProps?.style,
					}}
				>
					{buildLoading}
					{buildFeedbackIcon}
				</div>
			);
		}
		return null;
	}, [withFeedback]);

	const buildStartIcon = useMemo(() => {
		if (startIcon) {
			return (
				<div
					{...isDevelopment({ 'data-content': 'buildStartIcon' })}
					{...containerIconsProps}
					style={{
						...stylesContainerIcon,
						...containerIconsProps?.style,
					}}
				>
					{startIcon}
				</div>
			);
		}
		return null;
	}, [startIcon]);

	const stylesChildren: React.CSSProperties = {
		width: '100%',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		flex: 1,
	};

	const buildChildren = useMemo(() => {
		if (!children) {
			return null;
		}
		if (
			withFeedback?.loadingOptions.fullIcon &&
			withFeedback?.loadingOptions.isLoading
		) {
			return null;
		}
		if (
			withFeedback?.successOptions?.fullIcon &&
			withFeedback?.successOptions.success
		) {
			return null;
		}
		if (
			withFeedback?.failedOptions?.fullIcon &&
			withFeedback?.failedOptions.failed
		) {
			return null;
		}
		return (
			<div
				{...isDevelopment({ 'data-content': 'buildChildren' })}
				ref={divRef}
				title={verifyEllipsis()}
				{...containerChildrenProps}
				style={{ ...stylesChildren, ...containerChildrenProps?.style }}
			>
				{children}
			</div>
		);
	}, [withFeedback, children, isEllipsisActive]);

	const buildEndIcon = useMemo(() => {
		if (
			endIcon &&
			!withFeedback?.loadingOptions.isLoading &&
			!withFeedback?.successOptions?.success &&
			!withFeedback?.failedOptions?.failed
		) {
			return (
				<div
					{...isDevelopment({ 'data-content': 'buildEndIcon' })}
					{...containerIconsProps}
					style={{
						...stylesContainerIcon,
						...containerIconsProps?.style,
					}}
				>
					{endIcon}
				</div>
			);
		}
		return null;
	}, [endIcon, withFeedback]);

	const stylesFoda: React.CSSProperties = {
		overflow: 'hidden',
		cursor: 'pointer',
		padding: '5px',
		width: '100%',
		height: '100%',
	};

	const disabledStyle: React.CSSProperties = {
		cursor: 'not-allowed',
	};

	const subContainer: React.CSSProperties = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
		gap: '5px',
	};

	function verifyStyles() {
		let finalStyles: React.CSSProperties = { ...stylesFoda };

		if (!children) {
			finalStyles = { ...finalStyles };
		}

		if (props.disabled) {
			finalStyles = { ...finalStyles, ...disabledStyle };
		}

		if (props.style) {
			finalStyles = { ...finalStyles, ...props.style };
		}

		return { ...finalStyles };
	}

	return (
		<button type={type} {...props} style={verifyStyles()}>
			<div
				{...isDevelopment({ 'data-content': 'containerInsideButton' })}
				{...containerInsideProps}
				style={{ ...subContainer, ...containerInsideProps?.style }}
			>
				{buildStartIcon}
				{buildChildren}
				{mainFeedback}
				{buildEndIcon}
			</div>
		</button>
	);
}

export { Button };
export type { ISajermannReactButton };
