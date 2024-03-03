import React from 'react';
import MainLayout from './components/layouts/MainLayout'
import {createTheme, ThemeProvider} from "@material-ui/core";


function App() {
    const theme = createTheme();
    return (
        <div className="App">
            <ThemeProvider theme={theme}><MainLayout></MainLayout></ThemeProvider>
        </div>
    );
}

export default App;
