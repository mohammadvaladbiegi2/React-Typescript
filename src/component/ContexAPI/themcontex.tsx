import { createContext } from "react";

type ContextType = { dark: string, light: string }
type ChildrenType = {
    children: React.ReactNode
}

const theme: ContextType = { dark: "black", light: "white" }

export const ThemContex: React.Context<ContextType> = createContext(theme)

export default function ContexThemProvider({ children }: ChildrenType): JSX.Element {

    return (
        <ThemContex.Provider value={theme}>
            {children}
        </ThemContex.Provider>
    )
}