import React from 'react';

export function Coin({coin}:any) {
  return (
    <div className="currency">
     | Ticker: {coin.ticker} |
    </div>
  );
};
