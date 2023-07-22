import { createGlobalStyle, keyframes } from "styled-components";

export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};
export const showIn = keyframes`
0% {
  opacity: 0;
  transform: scale(0.2);
  transform: translateX(-20px);
}
100% {
  opacity: 1;
  transform: scale(1);
}`;

export const BoxStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,' +
    'rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,' +
    'rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,' +
    'rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,' +
    'rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
};
export const StylesGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
  }
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    user-select: none; /* evita que se seleccione el texto */

}
body {
  overflow-x: hidden;
}
html{

}
::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`