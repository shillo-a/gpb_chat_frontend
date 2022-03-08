import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paper = styled.div(props => {

    const { theme, shadow } = props;

    return {
        background: theme.palette.background.paper,
        boxShadow: theme.shadows[shadow || 0],
        borderRadius: theme.shape.borderRadius
    }
    
})




Paper.propTypes = {}

export default Paper
