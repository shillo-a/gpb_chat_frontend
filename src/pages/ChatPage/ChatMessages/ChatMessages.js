import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyledStyles } from '../../../components/custom-styled-ui/utils/makeStyledStyles'
import { clearMessages, closeMessagesConnection, createMessagesConnection, getMessages } from '../../../redux/messages/messages.actions';
import { selectMessages, selectOnlyOwnerMessagesIndicator } from '../../../redux/messages/messages.selectors';
import MessageCard from './MessageCard';

const useStyledStyles = makeStyledStyles((theme)=>({

    wrapper: {
        // background: 'grey',
        height: '100%',
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'column-reverse',
        padding: theme.spacing(2),
    },

    messageCard: {
        marginTop: theme.spacing(1),
        '&:last-child': {
            marginTop: theme.spacing(0)
        }
    }

}))

const ChatMessages = () => {

    const styles = useStyledStyles();
    const dispatch = useDispatch();

    const messages = useSelector(selectMessages);
    useEffect(()=>{
        
        // 1. Поулчаем все сообщения
        dispatch(getMessages());

        // 2. Подписываемся на появление новых сообщений (event sourcing)
        dispatch(createMessagesConnection());

        // 3. Unmount
        // 3.1. Закрываем event sourcing connection
        // 3.2. Отчищаем redux store - messages
        return () => {
            dispatch(closeMessagesConnection());
            dispatch(clearMessages())
        }

    }, [])

    const isOnlyOwnerMessages = useSelector(selectOnlyOwnerMessagesIndicator);

    const checkIsOwner = (authorKey) => {
        const userKey = JSON.parse(localStorage.getItem('userKey'));
        return authorKey===userKey
    }

    return (
        <div css={styles.wrapper}>

            { messages.map((message) => {

                const isOwner = checkIsOwner(message.authorKey);
                const showMessage = isOwner || !isOnlyOwnerMessages;

                return showMessage ? (
                    <MessageCard 
                        css={styles.messageCard}
                        key={message.id}

                        body={message.body}
                        authorKey={message.authorKey}
                        createdAtTime={message.createdAtTime}

                        isOwner={isOwner}
                    />
                ) : <></>
                
            })}
    
        </div>
    )
}

export default ChatMessages