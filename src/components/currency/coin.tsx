import React, { useEffect, useState, useCallback } from 'react';
import style from './style.module.scss';
import { Currency } from '../../typings/currencies';
import { updateCurrenciesData, deleteCurrencyFavorite } from '../../store/currencies/actions';
import { useDispatch } from 'react-redux';
import { timeAgo } from '../../utils/time';
import { useInterval } from '../../hooks/use-interval';

type T = {
  coin: Currency
}

export function Coin({coin}: T) {
  const dispatch = useDispatch();
  const [latestUpdate, setLatestUpdate] = useState('');
  const deleteCurrency = () => dispatch(deleteCurrencyFavorite(coin.id));

  const updateCurrency = useCallback(() => {
    const updateEverySeconds = 10;
    const now = new Date().getTime();
    const isTimeToUpdateData = coin.latest_update && now - +coin.latest_update > (updateEverySeconds * 1000);
    
    if(coin.latest_update) setLatestUpdate(timeAgo(+coin.latest_update));
    if(!coin.latest_update || isTimeToUpdateData) {
      dispatch(updateCurrenciesData(coin.id));
    }
  }, [coin.id, coin.latest_update, dispatch]);
  
  useEffect(() => updateCurrency(), [dispatch, coin, updateCurrency]);
  useInterval(() => updateCurrency(), 1000);
  
  return (
    <div className={style.coin}>
      <div className={style.info}>
        <div className={style.top}>
          <span className={style.coinName}>{coin.name}</span>
          <span>{latestUpdate}</span>
        </div>
        <div className={style.bottom}>
          <span>{coin.symbol}</span>
          <span>{coin.close ? `${coin.close}$` : ''}</span> 
        </div>
      </div>
      <div className={style.action}>
        <span className="close" onClick={() => deleteCurrency()}></span>
      </div>
    </div>
  );
};
