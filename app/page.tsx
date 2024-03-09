import { authConfig } from "@/lib/Auth/auth";
import { Button } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import styles from "./styles/page.module.css";

export default async function Home() {
	redirect("/LandingPage");
}
