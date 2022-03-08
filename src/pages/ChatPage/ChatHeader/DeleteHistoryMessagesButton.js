import React from 'react'
import IconButton from '../../../components/custom-styled-ui/IconButton'

import { BiTrash } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { patchUserShowMessagesFrom } from '../../../redux/user/user.actions';
import { useNavigate } from 'react-router-dom';

const DeleteHistoryMessagesButton = ({ className: parrentClassName }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDeleteHistoryMessage = (event) => {
        event.preventDefault();
        dispatch(patchUserShowMessagesFrom());
        navigate(0); //можно сделать цепочку асинхронных вызовов, и убрать значения через redux
    }

    return (

        <IconButton 
            className={parrentClassName}
            children={<BiTrash/>}
            title='Очистить историю'
            onClick={handleDeleteHistoryMessage}
        />

    )

}

export default DeleteHistoryMessagesButton

