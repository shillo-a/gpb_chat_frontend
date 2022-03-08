
import React from 'react'
import { makeStyledStyles } from '../../../components/custom-styled-ui/utils/makeStyledStyles'
import TextAreaAutosize from '../../../components/custom-styled-ui/TextAreaAutosize'

const useStyledStyles = makeStyledStyles((theme)=>({
    

}))

const MessageTextField = ({
    className: parrentClassName,
    currentMessage,
    handleChangeMessage,
    onEnter
}) => {

    const styles = useStyledStyles();

    return (
        <TextAreaAutosize
            className={parrentClassName}
            placeholder='Введите сообщение'
            value={currentMessage}
            onChange={handleChangeMessage}
            onEnter={onEnter}
        />
    )

}

export default MessageTextField


// <div>ChatMessageInput</div>