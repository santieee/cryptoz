import React from 'react';
import { Header } from './header/';
import { CoinComponent } from '../currency';
import { Container } from '@material-ui/core';
import styles from './style.module.scss';
// import { useTheme } from '@material-ui/core/styles';

export const App: React.FC = (props) => {
  // const theme = useTheme();''
  return (
    <div className="App">
      <Header/>
      <Container className={styles.appContainer}>
        <CoinComponent/>
      </Container>
    </div>
  );
};
