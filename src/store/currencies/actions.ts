import { SET_CURRENCY_DATA, UPDATE_CURRENCY_FAVORITE } from "../actionTypes";
import { currencyService } from '../../services/currencies/';
import { Currency } from '../../typings/currencies';
import { store } from '../../store/'
import { Dispatch } from "react";

export const getCurrenciesData = () => {
  return async (dispatch: Dispatch<{type: string, payload: Currency[]}>) => {
    const currenciesData = await currencyService.getCurrenciesData();
    currenciesData.sort((coinA: Currency, coinB: Currency) => coinA.rank === 0 ? 0 : coinA.rank - coinB.rank);
    dispatch({
      type: SET_CURRENCY_DATA,
      payload: currenciesData
    })
  }
};

export const updateCurrenciesData = (coinId: string) => {
  return async (dispatch: Dispatch<{type: string, payload: Currency[]}>) => {
    const { currencies } = store.getState();
    const favoriteCurrencies = currencies.favorites;
    const coinPriceData = await currencyService.getCurrencyPriceById(coinId);
    const latest_update = String(new Date().getTime());
    const currencyIdx = favoriteCurrencies.findIndex((coin: Currency) => coin.id === coinId);
    favoriteCurrencies[currencyIdx] = {...favoriteCurrencies[currencyIdx], latest_update, ...coinPriceData};
    dispatch({
      type: UPDATE_CURRENCY_FAVORITE,
      payload: favoriteCurrencies
    });
  }
};

export const addCurrencyFavorite = (coinData: Currency) => {
  const { currencies } = store.getState();
  const favoriteCurrencies = [...currencies.favorites, coinData];
  return {
    type: UPDATE_CURRENCY_FAVORITE,
    payload: favoriteCurrencies
  }
};

export const deleteCurrencyFavorite = (coinId: string) => {
  const { currencies } = store.getState();
  const favoriteCurrencies = currencies.favorites.filter(currency => currency.id !== coinId);
  return {
    type: UPDATE_CURRENCY_FAVORITE,
    payload: favoriteCurrencies
  }
};

