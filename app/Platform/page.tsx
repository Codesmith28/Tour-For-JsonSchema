"use client";
import Ide from "@/components/Ide/Ide";
import { useState } from "react";
import styles from "./Platform.module.css";

function Page() {
	const [code, setCode] = useState("Hello there!");

	return (
		<div className={styles.main}>
			{/* progress bar */}
			<div></div>
			<div className={styles.prompt}>
				<div className={styles.problemStatement}>
					Problem statement here
				</div>
				<div className={styles.ide}>
					<Ide code={code} setCode={setCode} />
				</div>
			</div>
		</div>
	);
}

export default Page;
