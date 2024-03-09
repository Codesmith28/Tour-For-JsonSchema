import { extendTheme } from "@chakra-ui/react";

const Button = {
	baseStyle: {
		bg: "hsl(var(--accent))",
		color: "hsl(var(--text2))",
		_active: {
			bg: "hsl(var(--primary))",
			color: "hsl(var(--text2))",
		},
	},
};

export const theme = extendTheme({
	styles: {
		global: {
			bg: "hsl(var(--background))",
			color: "hsl(var(--text))",
		},
	},

	components: {
		Button,
	},

	fonts: {},

	colors: {
		text: "hsl(var(--text))",
		text2: "hsl(var(--text2))",
		background: "hsl(var(--background))",
		primary: "hsl(var(--primary))",
		secondary: "hsl(var(--secondary))",
		accent: "hsl(var(--accent))",
	},
});
