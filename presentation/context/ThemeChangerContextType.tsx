import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { createContext, PropsWithChildren, useContext } from "react";
import { useColorScheme } from 'nativewind';

interface ThemeChangerContextType {
    currentTheme: 'light' | 'dark';
    isSystemTheme: boolean;


    toggleTheme: () => void;
    setSystemTheme: () => void;
}


const ThemeChangerContext = createContext({} as ThemeChangerContextType);


export const useThemeChangerContext = () => {
    const themeCharger = useContext(ThemeChangerContext)

    return themeCharger;
}


export const ThemeChangerProvider = ({children}: PropsWithChildren) => {

    const { colorScheme } = useColorScheme();
    
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <ThemeChangerContext.Provider
                value={{
                    currentTheme: 'light',
                    isSystemTheme: false,

                    toggleTheme: async() => {
                        
                    },
                    setSystemTheme: async() => {

                    }
                }}
            >
                {children}
            </ThemeChangerContext.Provider>
        </ThemeProvider>
    )
}