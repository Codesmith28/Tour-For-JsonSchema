import Logo from "@/components/Logo/Logo";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import styles from "./Congratulations.module.css";

const Congratulations = () => {
	return (
		<div className={styles.main}>
			<Logo />
			<h1>
				Congratulations!
				<br />
				You have successfully completed the tour to JSON Schema.
			</h1>

			<Link href="/">
				<Button variant={"default"}>Start again!</Button>
			</Link>
		</div>
	);
};

export default Congratulations;
