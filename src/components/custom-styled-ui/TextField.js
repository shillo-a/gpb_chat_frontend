import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextField = styled.input(props => {

    const { theme } = props;

    return {
        width: '100%',
        padding: theme.spacing(1),
        // height: '34px',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid`,
        outline: 'none',
    
        '::placeholder': {
        },

        '&:active': {
            border: `1px solid ${theme.palette.primary.main}`,
        },

        '&:focus': {
            border: `1px solid ${theme.palette.primary.main}`,
        },

        '&:hover': {
            border: `1px solid ${theme.palette.primary.main}`,
        }
    }
    
})




TextField.propTypes = {}

export default TextField
