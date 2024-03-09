import Logo from "@/components/Logo/Logo";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "./LandingPage.module.css";

const page = () => {
	return (
		<div className={styles.main}>
			<Logo />

			<div className={styles.start}>
				<span>Let&apos;s Learn JSON-Schema</span>

				<Link href="/Platform">
					<Button variant={"default"} fontSize={"16px"}>
						{" "}
						Start Learning!
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default page;
