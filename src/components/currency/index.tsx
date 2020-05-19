import React from 'react';
import { CoinList } from './coin-list';
import { CoinAdd } from './add-coin';
import { useSelector } from 'react-redux';

interface RootState {
  currencies: {ticker: string}[]
}

export const CoinComponent: React.FC = () => {
  const coins = useSelector((state: RootState): any => state.currencies);
  return (
    <div className="currency">
      <CoinAdd/>
      <CoinList coins={coins.currencies}/>
    </div>
  );
};