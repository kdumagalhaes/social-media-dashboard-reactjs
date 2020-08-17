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

        /* padding, spaces */
        --safe-area-padding: 0 30px 0 30px;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        background-color: ${({theme}) => theme.colors.color1};
    }

`

export default GlobalReset