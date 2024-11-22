'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./button";

export const ToogleButtonThemes = () => {
	const { theme, setTheme } = useTheme();
	const [mount, setMount] = useState(false);
	useEffect(() => {
		setMount(true);
	}, []);
	if (!mount) return null;
	return (
		<Button onClick={()=>setTheme(theme === "light" ? "dark" : "light")}>
			you are in the {theme === "light" ? "dark" : "light"} mode
		</Button>
	);
};