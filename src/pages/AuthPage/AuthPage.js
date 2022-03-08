import React from 'react'
import { makeStyledStyles } from '../../components/custom-styled-ui/utils/makeStyledStyles'
import SignInForm from './SignInForm';

const useStyledStyles = makeStyledStyles((theme)=>({
    
    wrapper: {
    },


}))

const AuthPage = () => {

    const styles = useStyledStyles();

    return (
        
        <div css={styles.wrapper}>

            <SignInForm/>
            
        </div>

    )
}

export default AuthPage