'use client';
import { theme } from "@/theme";
import { ThemeProvider } from "@emotion/react";
import { store } from '../store/store.js'
import { Provider } from 'react-redux'

const LayoutContent = ({ children }) => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </Provider>

    )
}

export default LayoutContent;