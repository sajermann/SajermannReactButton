/* eslint-disable react/button-has-type */
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Loading } from '../Loading';
import { FeedbackIcons } from '../FeedbackIcons';

import { useWindowSize } from '../../Hooks/UseWindowSize';

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
	withFeedback?: PropsFeedBack;
}

function Button({
	type,
	withFeedback,
	children,
	startIcon,
	endIcon,
	...props
}: Props) {
	const [isEllipsisActive, setIsEllipsisActive] = useState(false);
	const divRef = useRef<HTMLDivElement>(null);
	const size = useWindowSize();

	useEffect(() => {
		const element = divRef.current;

		setIsEllipsisActive(
			element
				? element.offsetWidth < element.scrollWidth ||
						element.offsetHeight < element.scrollHeight
				: false
		);
	}, [size]);

	function verifyColorIcon(opacity?: number) {
		return '';
	}

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
			return (
				<Loading
					color={verifyColorIcon()}
					type={withFeedback.loadingOptions.typeLoadingIcon}
					data-testid="loadingIcon"
				/>
			);
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
			return <FeedbackIcons name="Success" color={verifyColorIcon()} />;
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
			return <FeedbackIcons name="Failed" color={verifyColorIcon()} />;
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
				<div className={styles.containerIcon}>
					{buildLoading}
					{buildFeedbackIcon}
				</div>
			);
		}
		return null;
	}, [withFeedback]);

	const buildStartIcon = useMemo(() => {
		if (startIcon) {
			return <div className={styles.containerIcon}>{startIcon}</div>;
		}
		return null;
	}, [startIcon]);

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
			<div className={styles.text} ref={divRef} title={verifyEllipsis()}>
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
			return <div className={styles.containerIcon}>{endIcon}</div>;
		}
		return null;
	}, [endIcon, withFeedback]);

	const stylesFoda: React.CSSProperties = {
		position: 'relative',
		overflow: 'hidden',
		cursor: 'pointer',
		width: '100%',
		height: '100%',
	};

	const onlyIcon: React.CSSProperties = {
		minWidth: '44px',
		maxWidth: '44px',
	};

	const disabledStyle: React.CSSProperties = {
		cursor: 'not-allowed',
	};

	function verifyStyles() {
		let finalStyles: React.CSSProperties = { ...stylesFoda };

		if (!children) {
			finalStyles = { ...finalStyles, ...onlyIcon };
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
		<button
			{...props}
			type={type}
			className={`${props.className}`}
			style={verifyStyles()}
		>
			<div className={styles.internal}>
				{buildStartIcon}
				{buildChildren}
				{mainFeedback}
				{buildEndIcon}
			</div>
		</button>
	);
}

export { Button };
