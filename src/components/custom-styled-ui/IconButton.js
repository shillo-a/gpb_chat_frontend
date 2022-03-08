import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconButton = styled.button(props => {

    const { theme, color } = props;

    return {
        
        cursor: 'pointer',
        background: 'transparent',
        border: 'transparent',
        color: "white",
        
        // boxShadow: theme.shadows[1],

        '&:hover': {
            background: theme.palette.primary.dark,
            boxShadow: theme.shadows[5],
        },

        '&:active': {
            background: theme.palette.primary.light,
        },

        
        height: '34px',
        width: '34px',

        fontSize: '20px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: '15px',

    }
    
})




IconButton.propTypes = {
    variant: PropTypes.string,
    variant: PropTypes.oneOf([
        'primary', 
        'secondary', 
        'error', 
        'info', 
        'success', 
        'warning'
    ]),
}

export default IconButton


// background: theme.palette.background.paper,
// boxShadow: theme.shadows[shadow || 0],
// borderRadius: theme.shape.borderRadius