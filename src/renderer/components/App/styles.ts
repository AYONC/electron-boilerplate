import { css, keyframes } from '@emotion/core';

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const AppStyle = {
  wrapper: css`
    text-align: center;
  `,
  logo: css`
    animation: ${AppLogoSpin} infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
  `,
  header: css`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `,
  link: css`
    color: #61dafb;
  `,
};