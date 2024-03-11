"use client";
import { authConfig } from "@/lib/Auth/auth";
import { Button } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import styles from "./styles/page.module.css";

export default function Home() {
	const router = useRouter();
	router.push("/LandingPage");
}
