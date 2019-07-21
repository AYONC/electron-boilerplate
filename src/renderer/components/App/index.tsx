/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import Logo from '../svg/logo.svg';
import { AppStyle } from './styles';

export const App: React.FC = () => {
  return (
    <div css={AppStyle.wrapper}>
      <header css={AppStyle.header}>
        <Logo css={AppStyle.logo}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          css={AppStyle.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};
