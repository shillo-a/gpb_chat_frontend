import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flex = styled.div(props => {

    const { 
        theme, 
        container=false, 
        item=false,
        spacing=0,
        xs, sm, md, lg, xl,
        justifyContent
    } = props;
        
    const containerFlex = {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(spacing),
        justifyContent: justifyContent,
        '>div': {
            '--gap': spacing ? theme.spacing(spacing) : 0 //передаём плокальную переменную через css
        }
    }

    const itemFlex = {
        flexGrow: '1',
        flexShrink: '1',

        [`@media (min-width: ${theme.breakpoints.values.xs}px)`]: {
            width: xs && `calc(100% * ${xs}/12 - var(--gap) * ${(12/xs-1) / (12/xs)})`
        },

        [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
            width: sm && `calc(100% * ${sm}/12 - var(--gap) * ${(12/sm-1) / (12/sm)})`
        },

        [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
            width: md && `calc(100% * ${md}/12 - var(--gap) * ${(12/md-1) / (12/md)})`
        },

        [`@media (min-width: ${theme.breakpoints.values.lg}px)`]: {
            width: lg && `calc(100% * ${lg}/12 - var(--gap) * ${(12/lg-1) / (12/lg)})`
        },

        [`@media (min-width: ${theme.breakpoints.values.xl}px)`]: {
            width: xl && `calc(100% * ${xl}/12 - var(--gap) * ${(12/xl-1) / (12/xl)})`
        },

    }

    let finalFlex;
    if(container){finalFlex = containerFlex;} 
    else if(item){finalFlex = itemFlex;}
    return finalFlex

})


Flex.propTypes = {}

export default Flex


// '&:hover': {
//     background: 'red'
// }





// const { 
//     theme, 
//     container=false, 
//     item=false,
//     spacing=0,
//     xs, sm, md, lg, xl
// } = props;

// const containerGrid = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(12, 1fr)',
//     gridAutoRows: ''
//     // gridGap: theme.spacing(spacing)
// }

// const itemGrid = {
//     // gridColumn: '1/7'
// }


// console.log(props.children.length)

// let finalGrid;
// if(container){
//     finalGrid = containerGrid;
// } else if(item){
//     finalGrid = itemGrid;
// }

// return finalGrid;