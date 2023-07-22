import * as Unicons from "@iconscout/react-unicons";
import { styled } from "styled-components";
import { device } from "./StylesGlobal";
//top bar
export const IconArrow = styled(Unicons.UilArrowLeft)``;
export const IconCam = styled(Unicons.UilVideo)`
  margin-left: 10px;
  margin-right: 10px;
`;
export const IconPhone = styled(Unicons.UilPhone)``;
export const IconMenu = styled(Unicons.UilEllipsisV)``;
//bottom bar
export const IconSmile = styled(Unicons.UilSmile)`
display: none;
@media ${device.sm}{
  display:inline;
}`;
export const IconClip = styled(Unicons.UilPaperclip)`
display: none;
@media ${device.sm} {
  display: inline;
} `;
export const IconCamera = styled(Unicons.UilCamera)`
display: none;
@media ${device.sm} {
  display: inline;
} `;
export const IconMicrophone = styled(Unicons.UilMicrophone)`
background-color:#00ab88;
color: #fff;
padding: 6px;
border-radius:50%;
margin-left:8px;
width: 36px;
height: 36px;
`;
export const IconSend = styled(Unicons.UilMessage)`
background-color:#00ab88;
color:#fff;
padding:6px;
border-radius:50%;
margin-left:8px;
width: 36px;
height: 36px;
`;