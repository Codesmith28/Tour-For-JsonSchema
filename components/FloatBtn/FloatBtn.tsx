import Send from "@/public/icons/Send";
import React from "react";
import styles from "./FloatBtn.module.css";

const FloatBtn = () => {
	return (
		<div>
			<button className={styles.main}>
				<Send />
			</button>
		</div>
	);
};

export default FloatBtn;
