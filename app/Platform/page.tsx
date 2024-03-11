"use client";
import FloatBtn from "@/components/FloatBtn";
import Ide from "@/components/Ide";
import ProblemStatement from "@/components/ProblemStatement/ProblemStatement";
import Send from "@/public/icons/Send";
import { Button, IconButton, Progress } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./Platform.module.css";

import problemStatements from "@/data/ProblemStatements.json";

const Page = () => {
	const [code, setCode] = useState("\n");
	const [round, setRound] = useState(1);

	// for the code to be valid:
	const [validity, setValidity] = useState("");
	const [isInvalid, setIsInvalid] = useState(false);

	// get the problem statement for the current round
	const problemStatement = problemStatements[round - 1];

	return (
		<div className={styles.main}>
			{/* progress bar */}
			<div>
				<Progress
					height={"6px"}
					hasStripe
					value={
						round === 1
							? 33
							: round === 2
							? 66
							: round === 3
							? 100
							: 0
					}
					colorScheme="telegram"
				/>
			</div>

			<div className={styles.prompt}>
				<div className={styles.problemStatement}>
					<ProblemStatement
						title={problemStatement.title}
						desc={problemStatement.desc}
						hint={problemStatement.hint}
						code1={problemStatement.code1}
						exampleCode={problemStatement.exampleCode}
						round={round}
						setRound={setRound}
						setValidity={setValidity}
						setIsInvalid={setIsInvalid}
					/>
				</div>

				<div className={styles.ide}>
					<Ide
						code={code}
						setCode={setCode}
						round={round}
						setRound={setRound}
						validity={validity}
						setValidity={setValidity}
						isInvalid={isInvalid}
						setIsInvalid={setIsInvalid}
					/>
				</div>
			</div>
		</div>
	);
};

export default Page;
