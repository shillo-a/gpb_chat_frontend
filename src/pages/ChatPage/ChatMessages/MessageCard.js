import React from 'react'
import ReactMarkdown from 'react-markdown'
import Paper from '../../../components/custom-styled-ui/Paper'
import { makeStyledStyles } from '../../../components/custom-styled-ui/utils/makeStyledStyles'
import Typography from '../../../components/custom-styled-ui/Typography'
import CustomReactMarkdown from '../../../components/composite/CustomReactMarkdown'

const useStyledStyles = makeStyledStyles((theme, props)=>({

    message: {
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
        flexBasis: 0,
        alignSelf: props.isOwner ? 'self-end' : 'self-start',
        maxWidth: '80%',
        wordWrap: 'break-word',
        background: props.isOwner ? '#476bf0' : '#eaecf4', 
        color: props.isOwner ? 'white' : '', 
    },

    message__author: {
        fontWeight: 700
    },

    message__time: {
        textAlign: 'end'
    }

}))

const MessageCard = ({ 
    className: parrentClassName,

    body,
    authorKey,
    createdAtTime,
    isOwner=false,

}) => {

    const styles = useStyledStyles({ isOwner});

    return (
        <Paper 
            className={parrentClassName}
            css={styles.message}
        >
            
            <Typography 
                css={styles.message__author}
                variant='subtitle1'
            >
                {authorKey}
            </Typography>

            <CustomReactMarkdown children={body}/>
            
            <Typography
                css={styles.message__time}
                variant='overline'
            >{createdAtTime}</Typography>

        </Paper>
    )

}

export default MessageCard