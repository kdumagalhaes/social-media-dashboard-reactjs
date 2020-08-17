import {createGlobalStyle} from 'styled-components'

const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        outline: none;
    }

    html {
        /* primary */
        --lime-green: hsl(163, 72%, 41%);
        --bright-red: hsl(356, 69%, 56%);
        --fb-color: hsl(208, 92%, 53%);
        --tt-color: hsl(203, 89%, 53%);
        --it-color: linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
        --yt-color: hsl(348, 97%, 39%);

        /* dark theme colors */
        --d-toggle-color: linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%);
        --d-very-dark-blue-bg: hsl(230, 17%, 14%);
        --d-very-dark-blue-top: hsl(232, 19%, 15%);
        --d-dark-desaturated-blue: hsl(228, 28%, 20%);
        --d-desaturated-blue: hsl(228, 34%, 66%);
        --d-white: hsl(0, 0%, 100%);

        /* light theme colors */
        --l-toggle-color: hsl(230, 22%, 74%);
        --l-white: hsl(0, 0%, 100%);
        --l-very-pale-blue: hsl(225, 100%, 98%);
        --l-light-grayish-blue: hsl(227, 47%, 96%);
        --l-dark-grayish-blue: hsl(228, 12%, 44%);
        --l-very-dark-blue: hsl(230, 17%, 14%);

        /* padding, spaces */
        --safe-area-padding: 0 30px 0 30px;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        background-color: ${({theme}) => theme.colors.white};
    }

`

export default GlobalReset