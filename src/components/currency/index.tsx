import React, { useEffect, useMemo } from 'react';
import { CurrencyList } from './list';
import { CurrencyAdd } from './add';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrenciesData } from '../../store/currencies/actions';
import { Currency } from '../../typings/currencies';
import { RootState } from '../../store/currencies/reducer';
import style from './style.module.scss';

export const CoinComponent: React.FC = () => {
  const dispatch = useDispatch();
  const currenciesData = useSelector((state: RootState): any => state.currencies.data);
  const currenciesFavorites = useSelector((state: RootState): any => state.currencies.favorites);
  
  const filtredCurrenciesData = useMemo(() => {
    const currenciesFavoritesId = currenciesFavorites.map((coin: Currency) => coin.id);
    return currenciesData.filter((coin: Currency) => !currenciesFavoritesId.includes(coin.id));
  }, [currenciesData, currenciesFavorites])

  useEffect(() => {
    if(!currenciesData.length) dispatch(getCurrenciesData());
  }, [currenciesData.length, dispatch])

  return (
    <div className={style.currencyContainer}>
      <div className={style.currency}>
        <CurrencyAdd currencies={filtredCurrenciesData}/>
        <CurrencyList/>
      </div>
    </div>
  );
};