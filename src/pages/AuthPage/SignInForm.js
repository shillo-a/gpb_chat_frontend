import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { failed, succeeded } from '../../utils/apis/config/statuses'

import Container from '../../components/custom-styled-ui/Container'
import Button from '../../components/custom-styled-ui/Button'
import Paper from '../../components/custom-styled-ui/Paper'
import Typography from '../../components/custom-styled-ui/Typography'
import { makeStyledStyles } from '../../components/custom-styled-ui/utils/makeStyledStyles'
import LogoPageName from '../../components/composite/LogoPageName'
import { signIn } from '../../redux/user/user.actions'
import { selectSignInStatus } from '../../redux/user/user.selectors'
import { useNavigate } from 'react-router-dom'
import TextField from '../../components/custom-styled-ui/TextField'

const useStyledStyles = makeStyledStyles((theme)=>({
    
    auth: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

        padding: theme.spacing(4),
        width: '360px',
    },

    auth__logo: {
        marginBottom: theme.spacing(2),
    },

    auth__header: {
        marginBottom: theme.spacing(0.5),
        
    },

    authForm: {
        textAlign: 'center'
    },

    authForm__input: {
        
    },

    authForm__errors: {
        marginTop: theme.spacing(1),
        color: 'red'
    },

    authForm__button: {
        marginTop: theme.spacing(2),
    }

}))

const SignInForm = () => {

    const styles = useStyledStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // LOCAL STATE
    // Управление значениями формы
    const [formValues, setFormValues] = useState({
        userKey: { label: 'Логин', value: '', errors: []}
    })

    const handleChangeFormValue = (fieldName, value) => {
        setFormValues(prevState => ({
            ...prevState,
            [fieldName]: {
                ...prevState[fieldName],
                value: value
            }
        }))
    }

    const handleChangeFormError = (fieldName, errors) => {
        setFormValues(prevState => ({
            ...prevState,
            [fieldName]: {
                ...prevState[fieldName],
                errors: errors
            }
        }))
    }

    // REDUX STATE
    // Контроль статуса создания userKey
    const signInStatus = useSelector(selectSignInStatus)
    useEffect(()=>{

        if(signInStatus.status === failed.status){
            handleChangeFormError('userKey', signInStatus.remarks)
        }

        if(signInStatus.status === succeeded.status){
            navigate('/chat')
        }

    }, [signInStatus])
    
    const handleAuthFormSubmit = (event) => {
        event.preventDefault();
        dispatch(signIn(formValues.userKey.value));
    }

    return (
        <Paper shadow={5} css={styles.auth} >
                
                <LogoPageName css={styles.auth__logo}
                    pageName='Чат для клиентов'
                />
                
                <form css={styles.authForm} onSubmit={handleAuthFormSubmit}>
                    
                    <TextField
                        css={styles.authForm__input}
                        placeholder='Введите ваш логин'
                        name='userKey'
                        value={formValues['userKey'].value}
                        onChange={(event) => handleChangeFormValue('userKey', event.target.value)}
                    />

                    {formValues['userKey'].errors.length > 0 && 
                        <div css={styles.authForm__errors}>
                            {formValues['userKey'].errors.map((error, index) => {
                                return <Typography key={index}>{error.message}</Typography> //В данном случае index в качестве key - ОК
                            })}
                        </div>
                    }
                    
                    <Button 
                        type='submit'
                        css={styles.authForm__button}
                    >Войти</Button>
                    
                </form>
                
            </Paper>
    )

}

export default SignInForm