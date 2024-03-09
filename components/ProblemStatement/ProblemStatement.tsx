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

const ProblemStatement = ({
	round,
	setRound,
	title,
	desc,
	hint,
}: {
	round: number;
	setRound: React.Dispatch<React.SetStateAction<number>>;
	title: string;
	desc: string;
	hint: string;
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
							if (round > 1) setRound(round - 1);
						}}
					/>
					{title}
				</div>
				<div className={styles.desc}>{desc}</div>
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
								<AccordionPanel pb={4}>{hint}</AccordionPanel>
							</>
						)}
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default ProblemStatement;
