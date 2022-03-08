import React from 'react';
import CustomReactMarkdown from '../../../components/composite/CustomReactMarkdown';
import { makeStyledStyles } from '../../../components/custom-styled-ui/utils/makeStyledStyles';

const useStyledStyles = makeStyledStyles((theme)=>({

    wrapper: {
        width: '100%',
        background: 'lightgrey',
        padding: theme.spacing(1),
        borderRadius: theme.shape.borderRadius,
        minHeight: '34px',
    }

}))

const MessageMarkdown = ({ 
    className: parrentClassName,
    currentMessage
}) => {

    const styles = useStyledStyles();

    return (
        <div 
            className={parrentClassName}
            css={styles.wrapper}
        >

            <CustomReactMarkdown
                children={currentMessage}
            />

        </div>
        
    )

}

export default MessageMarkdown

{/* <ReactMarkdown>{currentMessage}</ReactMarkdown> */}