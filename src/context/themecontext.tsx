import {createContext} from 'react'

export interface IThemeContext {
    mode: "dark" | "light"
}



const ThemeContext = createContext<IThemeContext>({})

const ThemeProvider: React.FC<any>=({children}) =>{
    return(
        <ThemeContext.Provider value ={{mode: "light"}}>
        {children}
        </ThemeContext.Provider>
    )
}




