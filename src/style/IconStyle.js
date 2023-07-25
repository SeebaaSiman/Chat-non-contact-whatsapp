import * as Unicons from "@iconscout/react-unicons";
import { styled } from "styled-components";
import { device } from "./StylesGlobal";
import { showInRight } from "./animationStyle";

//top bar
export const IconArrow = styled(Unicons.UilArrowLeft)`
animation: ${showInRight} .5s forwards;
  animation-fill-mode: forwards;`;
export const IconCam = styled(Unicons.UilVideo)`
animation: ${showInRight} .5s forwards;
  animation-fill-mode: forwards;`;
export const IconPhone = styled(Unicons.UilPhone)`
animation: ${showInRight} .5s forwards;
  animation-fill-mode: forwards;`;
export const IconMenu = styled(Unicons.UilEllipsisV)`
animation: ${showInRight} .5s forwards;
  animation-fill-mode: forwards;`;
//bottom bar
export const IconSmile = styled(Unicons.UilSmile)`
display: none;
animation: ${showInRight} .6s forwards;
  animation-fill-mode: forwards;
@media ${device.sm}{
  display:inline;
}`;
export const IconClip = styled(Unicons.UilPaperclip)`
display: none;
animation: ${showInRight} .6s forwards;
  animation-fill-mode: forwards;
@media ${device.sm} {
  display:block;
} `;
export const IconCamera = styled(Unicons.UilCamera)`
display: none;
animation: ${showInRight} .6s forwards;
  animation-fill-mode: forwards;
@media ${device.sm} {
  display:block;
} `;
export const IconMicrophone = styled(Unicons.UilMicrophone)`
background-color:#00ab88;
color: #fff;
padding: 6px;
border-radius:50%;
margin-left:8px;
width: 36px;
height: 36px;
animation: ${showInRight} .6s forwards;
  animation-fill-mode: forwards;
`;
export const IconSend = styled(Unicons.UilMessage)`
background-color:#00ab88;
color:#fff;
padding:6px;
border-radius:50%;
margin-left:8px;
width: 36px;
height: 36px;
animation: ${showInRight} .6s forwards;
  animation-fill-mode: forwards;
`;