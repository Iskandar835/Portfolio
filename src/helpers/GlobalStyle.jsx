// All this synthaxe is for an use-friendly style 
import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle` 
    :root {
        --primary-color: #F9F9F9;
        --secondary-color: #CF91D8;
        --tertiary-color: #E9C2EC;

        --first-bg-color: #FFFFFF;
        --secondary-bg-color: #000000;
        
        --first-font-color: #000000;
        --secondary-font-color: #FFFFFF;
        --title-font-family: "Poppins", sans serif;
        --text-font-family: "varela round", sans serif;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: var(--text-font-family); 
        color: var(--first-font-color);
        background-color: var(--primary-color);
    }
`

export default GlobalStyle;    