import React, { Fragment } from 'react';
import GlobalReset from './GlobalReset'
import Header from './components/Header/Header'
import BigCardsRow from './components/Cards/BigCardsRow/BigCardsRow';
import SmallCardsRow from './components/Cards/SmallCardsRow/SmallCardsRow'

function App() {
  return (
    <Fragment>
      <Header followers="23,004"/>
      <BigCardsRow/>
      <SmallCardsRow/>
      <GlobalReset />
    </Fragment>
  );
}

export default App;
