type Props = {
	color?: string;
	width?: number;
	height?: number;
};

function Success({ width, height, color, ...rest }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="216 72 104 184 48 128"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function Failed({ width, height, color, ...rest }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<line
				x1="200"
				y1="56"
				x2="56"
				y2="200"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="200"
				y1="200"
				x2="56"
				y2="56"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function LoadingCircle({ width, height, color, ...rest }: Props) {
	return (
		<svg
			version="1.1"
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 32 32"
			xmlSpace="preserve"
		>
			<animateTransform
				attributeType="xml"
				attributeName="transform"
				type="rotate"
				from="360 0 0"
				to="0 0 0"
				dur="1s"
				additive="sum"
				repeatCount="indefinite"
			/>
			<path
				fill="currentColor"
				d="M18,4.181v2.021c4.559,0.929,8,4.97,8,9.798c0,5.514-4.486,10-10,10S6,21.514,6,16c0-4.829,3.441-8.869,8-9.798V4.181
				C8.334,5.137,4,10.066,4,16c0,6.617,5.383,12,12,12s12-5.383,12-12C28,10.066,23.666,5.137,18,4.181z"
			/>
		</svg>
	);
}

function LoadingPoints({ width, height, color, ...rest }: Props) {
	return (
		<svg
			viewBox="-20 -25 100 100"
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
		>
			<circle fill="currentColor" stroke="none" cx="6" cy="25" r="6">
				<animateTransform
					attributeName="transform"
					dur="1s"
					type="translate"
					values="0 15 ; 0 -15; 0 15"
					repeatCount="indefinite"
					begin="0.1"
				/>
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.1"
				/>
			</circle>
			<circle fill="currentColor" stroke="none" cx="30" cy="25" r="6">
				<animateTransform
					attributeName="transform"
					dur="1s"
					type="translate"
					values="0 10 ; 0 -10; 0 10"
					repeatCount="indefinite"
					begin="0.2"
				/>
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.2"
				/>
			</circle>
			<circle fill="currentColor" stroke="none" cx="54" cy="25" r="6">
				<animateTransform
					attributeName="transform"
					dur="1s"
					type="translate"
					values="0 5 ; 0 -5; 0 5"
					repeatCount="indefinite"
					begin="0.3"
				/>
				<animate
					attributeName="opacity"
					dur="1s"
					values="0;1;0"
					repeatCount="indefinite"
					begin="0.3"
				/>
			</circle>
		</svg>
	);
}

export const Icons = {
	Success,
	Failed,
	LoadingCircle,
	LoadingPoints,
};
