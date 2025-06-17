import { createTheme } from '@mui/material/styles';

// Цвета из твоего гайдлайна
const palette = {
    primary: {
        main: '#1B1033',      // Dark Purple
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#003A41',      // Dark Teal
        contrastText: '#FFFFFF',
    },
    accentTurquoise: {
        main: '#28D8C4',
    },
    accentLavender: {
        main: '#B79FFF',
    },
    accentOrange: {
        main: '#FFA857',
    },
    background: {
        default: '#1B1033',
        paper: '#1B1033',
        light: '#F3EFE7', // parchment for cards
    },
    text: {
        primary: '#FFFFFF',
        secondary: '#B79FFF',
        accent: '#28D8C4',
        orange: '#FFA857',
    },
};

const theme = createTheme({
    palette: {
        ...palette,
        mode: 'dark', // важен для контраста
        background: {
            default: '#1B1033',
            paper: '#1B1033',
        },
    },
    typography: {
        fontFamily: [
            '"Exo 2"',
            'Inter',
            'Arial',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
            fontSize: 'clamp(2rem, 6vw, 3rem)', // 32-48px
            letterSpacing: '0.03em',
        },
        h2: {
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            letterSpacing: '0.03em',
        },
        h3: {
            fontWeight: 600,
            fontSize: '2rem',
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
        },
        body1: {
            fontWeight: 400,
            fontSize: '1.125rem', // 18px
            letterSpacing: '0.3px',
        },
        body2: {
            fontWeight: 400,
            fontSize: '1rem',
            letterSpacing: '0.3px',
        },
        button: {
            fontWeight: 600,
            fontSize: '1rem',
            letterSpacing: '0.03em',
        },
    },
    shape: {
        borderRadius: 16, // карточки
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#1B1033',
                    borderRadius: 24,
                    boxShadow: '0 2px 12px 0 rgba(12, 8, 21, 0.15)', // мягкая тень
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    fontWeight: 600,
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #28D8C4 0%, #B79FFF 100%)',
                    color: '#1B1033',
                    boxShadow: '0 2px 6px 0 rgba(12, 8, 21, 0.15)',
                    '&:hover': {
                        filter: 'brightness(1.08)',
                        boxShadow: '0 4px 16px 0 rgba(12, 8, 21, 0.18)',
                    },
                },
                outlined: {
                    borderColor: '#28D8C4',
                    color: '#28D8C4',
                    '&:hover': {
                        backgroundColor: 'rgba(40,216,196,0.10)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none', // отключить стандартные градиенты MUI
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    background: 'rgba(27,16,51,0.6)',
                    border: '1px solid rgba(183,159,255,0.4)',
                    color: '#FFFFFF',
                    '&.Mui-focused': {
                        border: '2px solid #28D8C4',
                        boxShadow: '0 0 4px 0 #28D8C4',
                    },
                },
                input: {
                    fontFamily: '"Exo 2", Inter, Arial, sans-serif',
                },
            },
        },
    },
});

export default theme;
