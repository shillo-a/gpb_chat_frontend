import React from 'react'
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = styled.button(props => {

    const { theme, variant } = props;

    return css`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.primary.contrastText};
        border: none;
        border-radius: ${theme.shape.borderRadius};
        box-shadow: ${theme.shadows[1]};
        padding: 6px 16px;

        cursor: pointer;

        &:hover {
            background-color: ${theme.palette.primary.dark};
            box-shadow: ${theme.shadows[5]};
        };

        &:active {
            background-color: ${theme.palette.primary.light};
        }
    `
})

Button.propTypes = {
    variant: PropTypes.oneOf(['text', 'contained', 'outlined'])
}

export default Button


// color: coral; 
// padding: 0.25rem 1rem; 
// border: solid 2px coral; 
// border-radius: 3px;
// margin: 0.5rem;
// font-size: 1rem;