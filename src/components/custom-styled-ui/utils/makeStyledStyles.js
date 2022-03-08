import { useTheme } from "styled-components"

//make Styles for styled component
export const makeStyledStyles = (callback) => {

    return (props) => {
        const theme = useTheme(props);
        return callback(theme, props);
    }

}