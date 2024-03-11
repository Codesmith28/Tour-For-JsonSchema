import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	IconButton,
} from "@chakra-ui/react";
import React from "react";
import styles from "./ProblemStatement.module.css";

import {
	ChevronDownIcon,
	ChevronLeftIcon,
	ChevronUpIcon,
} from "@chakra-ui/icons";
import { CodeBlock, CopyBlock, github, googlecode } from "react-code-blocks";

const ProblemStatement = ({
	round,
	setRound,
	title,
	desc,
	hint,
	code1,
	exampleCode,
	setValidity,
	setIsInvalid,
}: {
	round: number;
	setRound: React.Dispatch<React.SetStateAction<number>>;
	title: string;
	desc: string;
	hint: string;
	code1: string;
	exampleCode: string;
	setValidity: React.Dispatch<React.SetStateAction<string>>;
	setIsInvalid: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div className={styles.main}>
			<div className={styles.prob}>
				<div className={styles.title}>
					<IconButton
						aria-label="Send"
						icon={<ChevronLeftIcon />}
						fontSize={"20px"}
						isRound
						bg={"hsl(var(--accent), 0.1)"}
						_hover={{ bg: "hsl(var(--accent), 0.2)" }}
						_active={{
							bg: "hsl(var(--accent), 0.3)",
							color: "hsl(var(--text), 0.9)",
						}}
						onClick={() => {
							// if it is the first round:
							if (round === 1) {
								// go back to the landing page:
								window.location.href = "/";
							}

							if (round > 1) setRound(round - 1);
							// reset the output window
							setValidity("");
							setIsInvalid(false);
						}}
					/>
					{title}
				</div>
				<div className={styles.desc}>
					{desc}
					{exampleCode && (
						<CopyBlock
							customStyle={{
								fontFamily: "Fira Code",
							}}
							text={exampleCode}
							language={"javascript"}
							showLineNumbers={false}
							theme={googlecode}
						/>
					)}
				</div>
			</div>

			<div className={styles.hint}>
				<Accordion allowMultiple>
					<AccordionItem>
						{({ isExpanded }) => (
							<>
								<h2>
									<AccordionButton>
										<Box
											as="span"
											flex="1"
											textAlign="left"
											fontWeight={"bold"}
										>
											Hint
										</Box>
										{isExpanded ? (
											<ChevronDownIcon fontSize={"20"} />
										) : (
											<ChevronUpIcon fontSize={"20"} />
										)}
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									{hint}

									<CopyBlock
										text={code1}
										language={"javascript"}
										showLineNumbers={true}
										theme={googlecode}
									/>
								</AccordionPanel>
							</>
						)}
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default ProblemStatement;
