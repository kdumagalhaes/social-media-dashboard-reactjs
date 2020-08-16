import React, { Fragment } from 'react';
import GlobalReset from './GlobalReset'
import Header from './components/Header/Header'
import BigCardsRow from './components/Cards/BigCardsRow/BigCardsRow';

function App() {
  return (
    <Fragment>
      <Header followers="23,004"/>
      <BigCardsRow/>
      <GlobalReset />
    </Fragment>
  );
}

export default App;
