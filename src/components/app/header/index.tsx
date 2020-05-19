import React from 'react';
import style from './style.module.scss'
import { Container } from '@material-ui/core';
import icon from './logo.svg';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <Container className={style.container}>
        <div className={style.logo}>
          <img src={icon} alt="logo"/>
        </div>
      </Container>
    </header>
  );
};
