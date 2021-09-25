import { createTheme } from '@material-ui/core';
import { pink, purple } from '@material-ui/core/colors';

const Theme = createTheme({
    overrides: {
        MuiCssBaseline: {
                "@global": {
                    body: {
                        scrollbarColor: "#141414 #141414",
                            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                                backgroundColor: '#3b3b3b',
                            },
                            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                                borderRadius: 10,
                                backgroundColor: purple[500],
                                minHeight: 5,
                                border: '.5px solid #E91E63',
                            },
                            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                                backgroundColor: "#3b3b3b",
                            },
                            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                                backgroundColor: pink[500],
                            },
                            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                                backgroundColor: pink[800],
                            },
                            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                                backgroundColor: pink[500],
                            },
                    },
                },
            },
    },
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[800]
        },
        secondary: {
            light: purple[300],
            main: purple[500],
            dark: purple[800]
        },
        text: {
            primary: '#FFFFFF',
            secondary: purple['A400'],
            disabled: purple[50],
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        background: {
            paper: '#161B22',
            default: '#000000'
        }
    },
});

export default Theme;