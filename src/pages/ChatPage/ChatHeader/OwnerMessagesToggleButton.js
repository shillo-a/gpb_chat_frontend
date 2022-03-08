import React from 'react'
import IconButton from '../../../components/custom-styled-ui/IconButton'
import { selectOnlyOwnerMessagesIndicator } from '../../../redux/messages/messages.selectors';
import { useSelector } from 'react-redux';

import { BiUser, BiGroup } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { toggleOnlyOwnerMessagesIndicator } from '../../../redux/messages/messages.actions';


const OwnerMessagesToggleButton = ({ className: parrentClassName }) => {

    const dispatch = useDispatch();

    const onlyOwnerMessages = useSelector(selectOnlyOwnerMessagesIndicator);
    const handleShowMessages = (event) => {
        event.preventDefault;
        dispatch(toggleOnlyOwnerMessagesIndicator())
    }
    
    return (

        <IconButton 
            className={parrentClassName}
            onClick={handleShowMessages}
            children={onlyOwnerMessages ? <BiGroup/> : <BiUser/>}
            title={onlyOwnerMessages ? 'Показать все сообщения' : 'Показать мои сообщения'}
        />

    )

}

export default OwnerMessagesToggleButton

// Показать все сообщения