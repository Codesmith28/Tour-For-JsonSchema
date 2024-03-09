import Send from "@/public/icons/Send";
import React from "react";
import styles from "./FloatBtn.module.css";

const FloatBtn = ({ text, onClick }: { text: string; onClick: () => void }) => {
	return (
		<div>
			<button onClick={onClick} className={styles.main}>
				<Send />
				{text}
			</button>
		</div>
	);
};

export default FloatBtn;
