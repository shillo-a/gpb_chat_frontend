import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/custom-styled-ui/Button';
import { signOut } from '../../../redux/user/user.actions';
import { selectUserKeyLocalStorage } from '../../../redux/user/user.selectors'

import { BiLogOut } from "react-icons/bi";
import IconButton from '../../../components/custom-styled-ui/IconButton';

const SignOutButton = ({ className: parrentClassName }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClickSignOut = () => {
        dispatch(signOut());
        navigate('/')
    }

    return (

        <IconButton 
            className={parrentClassName}
            onClick={handleClickSignOut}
            children={<BiLogOut/>}
            title='Выйти из чата'
        />

    )

}

export default SignOutButton