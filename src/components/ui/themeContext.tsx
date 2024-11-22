'use client'
import type { ReactNode } from "react"
import { ThemeProvider as NextThemeProvider } from "next-themes"


interface ThemeProviderProps{
    children:ReactNode
}

const ThemeProviderMode=({children}:ThemeProviderProps)=>{
    return(
        <NextThemeProvider attribute='class' enableSystem={false}>
{children}
        </NextThemeProvider>
    )

}

export default ThemeProviderMode