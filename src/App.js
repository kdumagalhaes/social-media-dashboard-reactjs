import React, { Fragment } from 'react';
import GlobalReset from './styles/GlobalReset';
import Header from './components/Header/Header';
import BigCardsRow from './components/Cards/BigCardsRow/BigCardsRow';
import SmallCardsRow from './components/Cards/SmallCardsRow/SmallCardsRow';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Fragment>
        <Header followers="23,004" />
        <BigCardsRow />
        <SmallCardsRow />
        <GlobalReset />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
