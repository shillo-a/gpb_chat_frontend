import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import IconButton from '../../../components/custom-styled-ui/IconButton'

import { makeStyledStyles } from '../../../components/custom-styled-ui/utils/makeStyledStyles'
import { postMessage } from '../../../redux/messages/messages.actions'

import { BiSend, BiHide, BiShow } from "react-icons/bi";
import MessageTextField from './MessageTextField'
import MessageMarkdown from './MessageMarkdown'

const useStyledStyles = makeStyledStyles((theme, props) => ({
    
    container: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: `${theme.spacing(2)}`,
        background: '#40465a'
    },

    input: {
        display: props.preview ? 'none' : ''
    },

    markdown: {
        display: props.preview ? '' : 'none'
    },

    buttons: {
        display: 'flex',
        alignItems: 'center',
    },

    button: {
        marginLeft: theme.spacing(1)
    }

}))

const ChatFooter = () => {

    const dispatch = useDispatch();
    
    // LOCAL STATE
    const [currentMessage, setCurrentMessage] = useState('');
    const handleChangeMessage = (event) => {
        setCurrentMessage(event.target.value)
    }

    const [preview, setPreview] = useState(false);
    const handleTogglePreview = (event) => {
        event.preventDefault();
        setPreview(prevState => !prevState)
    }

    const styles = useStyledStyles({ preview }); //Hoisting в данном случае не работает
    
    // REDUX STATE
    const handleMessageSubmit = (event) => {
        event.preventDefault();
        dispatch(postMessage(currentMessage));
        setCurrentMessage('')
    }
 
    return (
            
        <div css={styles.container}>
            
            <MessageTextField
                css={styles.input}
                currentMessage={currentMessage}
                handleChangeMessage={handleChangeMessage}
                onEnter={handleMessageSubmit}
            />

            <MessageMarkdown
                css={styles.markdown}
                currentMessage={currentMessage}
            />
                
            <div css={styles.buttons}>

                <IconButton 
                    css={styles.button}
                    onClick={handleMessageSubmit}
                    children={<BiSend/>}
                    title='Отправить сообщение'
                />

                <IconButton 
                    css={styles.button}
                    onClick={handleTogglePreview}
                    children={preview ? <BiHide/> : <BiShow/>}
                    title={preview ? 'Скрыть предпросмотр' : 'Предпросмотр'} 
                />

            </div>
            
    
        </div>
            
    )

}

export default ChatFooter

//    //PM - post message
//    const [statusPM, setStatusPM] = useState('idle')
//    const postMessage = (body, authorKey) => {
//        setStatusPM('loading');
//        MessageApi.postMessage(body, authorKey)
//            .then(response => {
//                setStatusPM('failed')
//            })
//            .catch(error => {
//                console.log(error)
//                setStatusPM('failed')
//            })
//    }
