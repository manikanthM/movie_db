import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth : 1280px;
        --white : #fff;
        --lightWhite : #eee;
        --midGrey : #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig : 2.5rem;
        --fontBig : 1.5rem;
        --fontMed : 1.1rem;
        --fontSmall : 1.0rem
    }

    * {
        box-sizing : border-box;
        font-family: 'Abel',sans-serif;
    }

    body {
        margin : 0;
        padding : 0;

        h1{
            font-size: 2rem;
            font-weight : 600;
            color : var(--white);
        }

        h3 {
            font-size: 1.11rem;
            fonot-weight : 600;
            color : var(--white);
        }

        p {
            font-size : 1rem;
            font-weight : var(--white);
        }
    }
`;