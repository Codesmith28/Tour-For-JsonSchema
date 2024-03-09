import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={16}
		height={20}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M2.234 18.625c-.287 0-.57-.076-.82-.219a1.843 1.843 0 0 1-.912-1.61V3.204c0-.673.35-1.29.912-1.61a1.647 1.647 0 0 1 1.677.022l11.618 6.954a1.688 1.688 0 0 1 0 2.86l-11.62 6.956a1.663 1.663 0 0 1-.855.24Z"
			fill="#fff"
			stroke="#000"
		/>
	</svg>
);

export default SvgComponent;
