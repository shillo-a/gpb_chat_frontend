import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TypographyStyled = styled.div(props => {

    const { theme, variant } = props;

    return {
        ...theme.typography[variant],
    }
    
})

const Typography = (props) => {

    const {variant, component, ...otherProps} = props;

    const variantMapping = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        subtitle1: 'h6',
        subtitle2: 'h6',
        body1: 'p',
        body2: 'p',
        inherit: 'p'
    }

    return (

        <TypographyStyled 
            as={component || variantMapping[variant]} // tag html-элемента
            variant={variant}
            {...otherProps}
        />
    
    )
    
}


Typography.propTypes = {
    variant: PropTypes.string,
    variant: PropTypes.oneOf([
        'body1', 
        'body2', 
        'button', 
        'caption', 
        'h1', 
        'h2', 
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2'
    ]),
    component: PropTypes.string,
}

export default Typography


// width: '100%',
// display: 'block',
// boxSizing: 'border-box',
// maxWidth: '960px',
// marginLeft: 'auto',
// marginRight: 'auto',
// padding: `${theme.spacing(2)}`