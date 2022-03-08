import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextArea = styled.textarea(props => {

    const { theme } = props;

    return {
        
        width: '100%',
        padding: theme.spacing(1),
        height: '34px',
        resize: 'none',
        outline: 'none',
        overflow: 'hidden',
       
        background: 'white',
        borderRadius: theme.shape.borderRadius,
        borderColor: 'transparent',
        
        boxShadow: theme.shadows[5]

    }

})

TextArea.propTypes = {}

const TextAreaAutosize = (props) => {

    const { onChange: onChangeParrent, onEnter, ...parrentProps} = props

    const textRef = useRef();

    const handleAutosize = (event) => {
        const target = event.target;
        textRef.current.style.height = "34px";
        textRef.current.style.height = `${target.scrollHeight}px`;
    }

    const handleTextAreaEnter = (event) => {
        //По enter отправляет, enter + shift - перенос
        if(event.which === 13 && !event.shiftKey){
            onEnter(event)
            //сбрасываем высоту textarea
            textRef.current.style.height = "34px";
        }
    }

    return (
        <TextArea
            {...parrentProps}
            ref={textRef}

            onChange={(event)=>{
                handleAutosize(event)
                onChangeParrent(event)
            }}
            
            onKeyDown={handleTextAreaEnter}
        />
    )

}

export default TextAreaAutosize