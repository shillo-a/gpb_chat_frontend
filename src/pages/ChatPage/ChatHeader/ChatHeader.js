import React from 'react'
import Typography from '../../../components/custom-styled-ui/Typography';
import { makeStyledStyles } from '../../../components/custom-styled-ui/utils/makeStyledStyles'

import DeleteHistoryMessagesButton from './DeleteHistoryMessagesButton';
import OwnerMessagesToggleButton from './OwnerMessagesToggleButton';
import SignOutButton from './SignOutButton';

const useStyledStyles = makeStyledStyles((theme)=>({

    wrapper: {
        background: theme.palette.background.paper,
        padding: theme.spacing(2),
        background: '#40465a',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    buttons: {
        display: 'flex',
        alignItems: 'center'
    },

    button: {
        marginLeft: theme.spacing(1)
    }

}))

const ChatHeader = () => {

    const styles = useStyledStyles();

    return (
        <div css={styles.wrapper}>

            <Typography variant="h6">Газпромбанк - "Чат для Клиентов"</Typography>
            
            <div css={styles.buttons}>
                <OwnerMessagesToggleButton css={styles.button}/>
                <DeleteHistoryMessagesButton css={styles.button}/>
                <SignOutButton css={styles.button}/>
            </div>
           
        </div>
    )
}

export default ChatHeader