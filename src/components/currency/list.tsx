import React from 'react';
import { Coin } from './coin';
import { Currency } from '../../typings/currencies';
import style from './style.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/currencies/reducer';

export function CurrencyList() {
  const currenciesFavorites = useSelector((state: RootState): Currency[] => state.currencies.favorites);
  
  if(!currenciesFavorites.length) return (
    <div className={style.coinList}>Your list is empty.</div>
  )
  return (
    <div className={style.coinList}>
      {currenciesFavorites.map((coin: Currency) => (
        <Coin coin={coin} key={coin.id}/>
      ))}
    </div>
  );
};