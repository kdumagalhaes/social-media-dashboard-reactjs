import React, { Fragment, useState } from 'react';
import GlobalReset from './styles/GlobalReset';
import Header from './components/Header/Header';
import BigCardsRow from './components/Cards/BigCardsRow/BigCardsRow';
import SmallCardsRow from './components/Cards/SmallCardsRow/SmallCardsRow';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Fragment>
        <Header
          followers="23,004"
          setTheme={setTheme}
          toggleTheme={toggleTheme}
        />
        <BigCardsRow />
        <SmallCardsRow />
        <GlobalReset />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
