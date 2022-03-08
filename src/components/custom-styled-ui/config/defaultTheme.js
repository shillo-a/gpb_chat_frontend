export const defaultTheme = {

    breakpoints:{
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },

    palette: {

        primary: {
            main: '#162e89',
            light: '#4264e3',
            dark: '#3952b1',
            contrastText: '#fff'
        },

        action: {
            active: 'rgba(0, 0, 0, 0.54)',
            hover: 'rgba(0, 0, 0, 0.54)',
        },

        background: {
            paper: '#fff'
        }
        
    },

    spacing(factor){
        return `${8 * factor}px`
    },

    shape: {
        borderRadius: `${4}px`
    },

    shadows: {
        0: "none",
        1: "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        5: "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        10: "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        24: "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
    },

    typography: {

        htmlFontSize: '12px',
        fontFamily: 'Montserrat',
        fontWeightRegular: 400,

        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: '1.167',
            letterSpacing: '-0.01562em'
        },

        h2: {
            fontFamily: 'Montserrat',
            fontWeight: 300,
            fontSize: '3.75rem',
            lineHeight: '1.2',
            letterSpacing: '-0.00833em'
        },

        h3: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '3rem',
            lineHeight: '1.167',
            letterSpacing: '0em'
        },

        h4: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: '1.235',
            letterSpacing: '0.000735em'
        },

        h5: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '1.5rem',
            lineHeight: '1.334',
            letterSpacing: '0em'
        },

        h6: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '1.25rem',
            lineHeight: '1.6',
            letterSpacing: '0.0075em'
        },

        subtitle1: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.75',
            letterSpacing: '0.00938em'
        },

        subtitle2: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: '1.57',
            letterSpacing: '0.00714em'
        },

        body1: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: '1.5',
            letterSpacing: '0.00938em'
        },

        body2: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '0.875rem',
            lineHeight: '1.43',
            letterSpacing: '0.01071em'
        },

        button: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
            textTransform: 'uppercase'
        },

        caption: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '1.66',
            letterSpacing: '0.03333em'
        },

        overline: {
            fontFamily: 'Montserrat',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: '2.66',
            letterSpacing: '0.08333em',
            textTransform: 'uppercase'
        },




    }

}