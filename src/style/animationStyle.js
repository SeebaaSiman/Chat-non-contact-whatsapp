import { keyframes } from "styled-components";

export const showInLeft = keyframes`
0%{
 transform:scale(.5) translateX(-100%);
}
100%{
 transform:scale(1) translateX(0%);
}
 `
export const showInRight = keyframes`
0%{
 transform:scale(.5) translateX(100%);
}
100%{
 transform:scale(1) translateX(0%);
}
 `