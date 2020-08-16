import React, { Fragment } from 'react';
import GlobalReset from './GlobalReset'
import Header from './components/Header/Header'

function App() {
  return (
    <Fragment>
      <Header followers="23,004"/>
      <GlobalReset />
    </Fragment>
  );
}

export default App;
