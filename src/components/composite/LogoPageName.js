import React from 'react'
import GpbLogoMain from '../../assets/logos/gpb-logo-main.svg'
import Typography from '../custom-styled-ui/Typography'
import { makeStyledStyles } from '../custom-styled-ui/utils/makeStyledStyles'

const useStyledStyles = makeStyledStyles((theme) => ({

    wrapper: {

    },

    logo: {
        width: '200px',
        margin: '0 auto'
    },

    logo__text: {
        marginTop: theme.spacing(-1),
        marginLeft: theme.spacing(6.5),
        textTransform: 'uppercase',
        color: theme.palette.primary.main,
        fontWeight: 700

    }


}))

const LogoPageName = ({ pageName, className: parrentClassName }) => {

    const styles = useStyledStyles();

    return (
        <div 
            className={parrentClassName}
            css={styles.wrapper}
        >
            <div css={styles.logo} >
                <img src={GpbLogoMain}/>

                <Typography 
                    css={styles.logo__text}
                    variant='subtitle2'
                >
                    {pageName}
                </Typography>
            </div>
            

        </div>
    )

}

export default LogoPageName