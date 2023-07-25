import { styled } from "styled-components";
import { BoxStyle, device } from "../style/StylesGlobal";
import { showInLeft } from "../style/animationStyle";

export const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.5em;
  padding: 0.125em;
  box-shadow: ${BoxStyle.boxShadow};
  width: 4.4rem;
  font-size: 1.4rem;
  animation: ${showInLeft} .4s forwards;
  animation-fill-mode: forwards;
  @media ${device.md} {
    font-size: 1.6rem;
  }
`;
export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 0.375em;
  width: 4.4rem;
  height: 2.2rem;
  background-color: #ff3644;
  transition: background-color 0.6s forwards;
`;
export const ToggleButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0.0625em;
  border-radius: 0.3125em;
  width: 2rem;
  height: 2.2rem;
  background-image: url("/src/language/eeuu.png");
  background-size: cover;
  box-shadow: inset 0 -0.0625em 0.0625em 0.125em rgb(0 0 0 / 0.1),
    inset 0 -0.125em 0.0625em rgb(0 0 0 / 0.2),
    inset 0 0.1875em 0.0625em rgb(255 255 255 / 0.3),
    0 0.125em 0.125em rgb(0 0 0 / 0.5);
  transition: left 0.6s forwards;
`;
export const ToggleCheckbox = styled.input`
  appearance: none;
  position: absolute;
  z-index: 1;
  border-radius: inherit;
  width: 100%;
  height: 100%;

  /* fix em sizing */
  font: inherit;
  opacity: 0;
  cursor: pointer;
  &:checked + {
    ${ToggleContainer} {
      background-color: #f3b519;
    }
  }
  &:checked + ${ToggleContainer} ${ToggleButton} {
    left: 1.8rem;
    background-image: url("/src/language/spain.png");
    background-size: cover;
  }
`;
