import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div(props => {

    const { theme, maxWidth } = props;

    return {
        width: '100%',
        display: 'block',
        boxSizing: 'border-box',
        maxWidth: `${maxWidth ? theme.breakpoints.values[maxWidth] : theme.breakpoints.values.md}px`,
        marginLeft: 'auto',
        marginRight: 'auto',
        // padding: `0 ${theme.spacing(2)}`
    }
    
})




Container.propTypes = {
    maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
}

export default Container;