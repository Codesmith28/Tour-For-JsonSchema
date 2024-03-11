import White from "@/public/icons/White";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import Head from "next/head";
import { Providers } from "./providers";
import "./styles/globals.css";

const font = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tour-For-JsonSchema",
	description: "Tour-For-JsonSchema by Sarthak Siddhpura",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
