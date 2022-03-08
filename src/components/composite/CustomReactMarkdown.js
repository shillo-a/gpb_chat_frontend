import React from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import remarkGfm from 'remark-gfm'
import { makeStyledStyles } from '../custom-styled-ui/utils/makeStyledStyles';

const useStyledStyles = makeStyledStyles((theme) => ({

    markdown: {
        whiteSpace: 'pre-wrap'
    }
}))

// Если потребуется подсвечивать код особым образом
const CustomSyntaxHighlighter = ({ value, language }) => {

    return (
        <SyntaxHighlighter language={language} style={docco}>
            {value ?? ""}
        </SyntaxHighlighter>
    );

};

const CustomReactMarkdown = ({ children }) => {

    const styles = useStyledStyles();

    return (

        <ReactMarkdown 
            css={styles.markdown}
            children={children} 
            remarkPlugins={[remarkGfm]}
            // renderers={{code: CustomSyntaxHighlighter}}
        />

    )

}

export default CustomReactMarkdown



// ![](https://www.imgonline.com.ua/examples/bee-on-daisy.jpg)

