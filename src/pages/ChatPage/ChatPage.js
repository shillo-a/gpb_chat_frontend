
import React from 'react'
import { makeStyledStyles } from '../../components/custom-styled-ui/utils/makeStyledStyles'
import ChatHeader from './ChatHeader/ChatHeader';
import Container from '../../components/custom-styled-ui/Container';
import ChatMessages from './ChatMessages/ChatMessages';
import ChatFooter from './ChatFooter/ChatFooter';

const useStyledStyles = makeStyledStyles((theme)=>({

    wrapper: {
        width: '100vw',
        height: '100vh',
        background: '#f7f8f8'
    },

    chatBlock: {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        background: 'white'
    }

}))

const ChatPage = () => {

    const styles = useStyledStyles();

    return (
        <div css={styles.wrapper}>
            
            <Container maxWidth='md' css={styles.chatBlock}>
                
                <ChatHeader/>
                <ChatMessages/>
                <ChatFooter/>
                
            </Container>
            
        </div>
    )

}

export default ChatPage