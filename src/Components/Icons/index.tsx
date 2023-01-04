/* eslint-disable react/no-unused-prop-types */
type Props = {
	color?: string;
	width?: number;
	height?: number;
};

function TelegramLogo({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M88,134.9,177.9,214a8,8,0,0,0,13.1-4.2L228.6,45.6a8,8,0,0,0-10.7-9.2L33.3,108.9c-7.4,2.9-6.4,13.7,1.4,15.3Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<line
				x1="88"
				y1="134.9"
				x2="224.1"
				y2="36.6"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M132.9,174.4l-31.2,31.2A8,8,0,0,1,88,200V134.9"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function CustomLoading({ width, height, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
		>
			<rect x="19" y="19" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0s"
					calcMode="discrete"
				/>
			</rect>
			<rect x="40" y="19" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0.125s"
					calcMode="discrete"
				/>
			</rect>
			<rect x="61" y="19" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0.25s"
					calcMode="discrete"
				/>
			</rect>
			<rect x="19" y="40" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0.875s"
					calcMode="discrete"
				/>
			</rect>
			<rect x="61" y="40" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0.375s"
					calcMode="discrete"
				/>
			</rect>
			<rect x="19" y="61" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0.75s"
					calcMode="discrete"
				/>
			</rect>
			<rect x="40" y="61" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0.625s"
					calcMode="discrete"
				/>
			</rect>
			<rect x="61" y="61" width="20" height="20" fill="#e15b64">
				<animate
					attributeName="fill"
					values="#f8b26a;#e15b64;#e15b64"
					keyTimes="0;0.125;1"
					dur="1s"
					repeatCount="indefinite"
					begin="0.5s"
					calcMode="discrete"
				/>
			</rect>
		</svg>
	);
}

function WhatsappLogo({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<path
				d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function YoutubeLogo({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polygon
				points="160 128 112 96 112 160 160 128"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<path
				d="M24,128c0,29.8,3.1,47.2,5.4,56.2A16.1,16.1,0,0,0,39,195.1c33.5,12.8,89,12.5,89,12.5s55.5.3,89-12.5a16.1,16.1,0,0,0,9.6-10.9c2.3-9,5.4-26.4,5.4-56.2s-3.1-47.2-5.4-56.2A16.1,16.1,0,0,0,217,60.9c-33.5-12.8-89-12.5-89-12.5s-55.5-.3-89,12.5a16.1,16.1,0,0,0-9.6,10.9C27.1,80.8,24,98.2,24,128Z"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</svg>
	);
}

function TrendUp({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="232 56 136 152 96 112 24 184"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="232 120 232 56 168 56"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<animate
				attributeName="opacity"
				values="0;1;0"
				dur="1s"
				repeatCount="indefinite"
			/>
		</svg>
	);
}

function TrendDown({ width, height, color, ...rest }: Props) {
	return (
		<svg
			{...rest}
			width={width || '100%'}
			height={height || '100%'}
			fill={color || 'currentColor'}
			viewBox="0 0 256 256"
		>
			<rect width="256" height="256" fill="none" />
			<polyline
				points="232 200 136 104 96 144 24 72"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<polyline
				points="232 136 232 200 168 200"
				fill="none"
				stroke={color || 'currentColor'}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<animate
				attributeName="opacity"
				values="0;1;0"
				dur="1s"
				repeatCount="indefinite"
			/>
		</svg>
	);
}

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
			viewBox="-25 -25 100 100"
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
	TelegramLogo,
	CustomLoading,
	WhatsappLogo,
	YoutubeLogo,
	TrendUp,
	TrendDown,
	Success,
	Failed,
	LoadingCircle,
	LoadingPoints,
};
