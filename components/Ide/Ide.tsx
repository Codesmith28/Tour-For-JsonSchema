import { Button } from "@chakra-ui/react";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-textmate";
import { useState } from "react";
import AceEditor from "react-ace";
import styles from "./Ide.module.css";

const Ide = ({
	round,
	setRound,
	code,
	setCode,
}: {
	round: number;
	setRound: React.Dispatch<React.SetStateAction<number>>;
	code: string;
	setCode: (code: string) => void;
}) => {
	return (
		<div className={styles.main}>
			<div className={styles.editor}>
				<AceEditor
					value={code}
					mode="javascript"
					theme="textmate"
					fontSize="14px"
					highlightActiveLine={true}
					setOptions={{
						enableLiveAutocompletion: true,
						showLineNumbers: true,
						tabSize: 2,
					}}
					style={{
						borderRadius: "1em",
						fontFamily: "Fira Code",
						width: "100%",
					}}
					onChange={(newCode) => setCode(newCode)}
				/>
			</div>

			<div className={styles.output}> Output Window</div>

			<div className={styles.run}>
				<Button
					bg={"hsl(var(--accent))"}
					_hover={{ bg: "hsl(var(--primary), 0.9)" }}
					_active={{ bg: "hsl(var(--primary))" }}
					color={"hsl(var(--text2))"}
					onClick={() => {
						if (round < 3) setRound(round + 1);
					}}
				>
					Validate Code
				</Button>
			</div>
		</div>
	);
};

export default Ide;
