import { Button } from "@chakra-ui/react";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-textmate";
import Ajv from "ajv/dist/2020";
import router from "next/router";
import { useState } from "react";
import AceEditor from "react-ace";
import styles from "./Ide.module.css";

const ajv = new Ajv();

function validateCode(
	round: number,
	code: string,
	setValidity: React.Dispatch<React.SetStateAction<string>>,
	setIsInvalid: React.Dispatch<React.SetStateAction<boolean>>
) {
	code = code.trim();

	switch (round) {
		case 1:
			try {
				const schema = JSON.parse(code!);
				const validate = ajv.compile(schema);
				const valid = validate({}) || validate([]);

				if (code !== "{}" && valid) {
					setValidity(
						"Your code is valid! You can move to the next round."
					);
					setIsInvalid(false);
				} else {
					setValidity("Schema is invalid. Please try again!");
					setIsInvalid(true);
				}
			} catch (e) {
				setValidity("Schema is invalid. Please try again!");
				setIsInvalid(true);
			}
			break;

		case 2:
			try {
				const schema = JSON.parse(code!);
				const validate = ajv.compile(schema);
				const valid = validate([1, 2, 5, 6, 8, 9]);

				if (valid) {
					setValidity("Yes! This is a valid schema!");
					setIsInvalid(false);
				} else {
					setValidity("Invalid schema provided!");
					setIsInvalid(true);
				}
			} catch (e) {
				console.log(e);
				setValidity("Invalid schema provided!");
				setIsInvalid(true);
			}
			break;

		default:
			console.log("something went wrong !");
			break;
	}
}

const Ide = ({
	round,
	setRound,
	code,
	setCode,
	validity,
	setValidity,
	isInvalid,
	setIsInvalid,
}: {
	round: number;
	setRound: React.Dispatch<React.SetStateAction<number>>;
	code: string;
	setCode: (code: string) => void;
	validity: string;
	setValidity: React.Dispatch<React.SetStateAction<string>>;
	isInvalid: boolean;
	setIsInvalid: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div className={styles.main}>
			<div className={styles.editor}>
				<AceEditor
					value={code}
					mode="json"
					theme="textmate"
					fontSize="14px"
					highlightActiveLine={true}
					setOptions={{
						enableLiveAutocompletion: true,
						showLineNumbers: true,
						tabSize: 2,
					}}
					style={{
						border: "2px solid hsl(var(--text))",
						borderRadius: "1em",
						fontFamily: "Fira Code",
						width: "100%",
					}}
					onChange={(newCode) => setCode(newCode)}
				/>
			</div>

			<div className={styles.output}>
				<div className={styles.outputTitle}>Output Window</div>
				<div>
					{isInvalid && (
						<div className={styles.error}>{validity}</div>
					)}

					{/* make for valid code */}
					{!isInvalid && validity && (
						<div className={styles.success}>{validity}</div>
					)}
				</div>
			</div>

			<div className={styles.run}>
				{validity && !isInvalid && (
					<Button
						bg={"hsl(var(--approve), 0.8)"}
						_hover={{ bg: "hsl(var(--approve), 0.9)" }}
						_active={{ bg: "hsl(var(--approve))" }}
						color={"hsl(var(--text2))"}
						onClick={() => {
							if (round < 2) {
								setRound(round + 1);
							} else if (round === 2) {
								router.push("/Congratulations");
							}
							setCode("\n");
							// reset the output window
							setValidity("");
							setIsInvalid(false);
							return null; // Add a return statement to resolve the type error
						}}
					>
						Next
					</Button>
				)}

				<Button
					bg={"hsl(var(--accent))"}
					_hover={{ bg: "hsl(var(--primary), 0.9)" }}
					_active={{ bg: "hsl(var(--primary))" }}
					color={"hsl(var(--text2))"}
					onClick={() => {
						validateCode(round, code, setValidity, setIsInvalid);
					}}
				>
					Validate Code
				</Button>
			</div>
		</div>
	);
};

export default Ide;
