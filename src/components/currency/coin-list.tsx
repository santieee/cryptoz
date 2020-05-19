import React from 'react';
import { Coin } from './coin';

export function CoinList({coins}: any) {
  if(!coins.length) return (
    <div>Your list is empty.</div>
  )
  return (
    <div className="coinList">
      {coins.map((coin:any) => (
        <Coin coin={coin} key={coin.ticker}/>
      ))}
    </div>
  );
};