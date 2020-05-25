import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab/';
import { addCurrencyFavorite } from '../../store/currencies/actions';
import { Currency } from '../../typings/currencies';
import style from './style.module.scss';

type T = {
  currencies: Currency[]
}
export function CurrencyAdd({currencies}: T) {
  const dispatch = useDispatch();
  const [favoriteCoin, setFavoriteCoin] = useState({} as Currency);
  const [favoriteCoinInput, setFavoriteCoinInput] = useState('');
  const addCoin = () => {
    if(!favoriteCoin.id) return;
    dispatch(addCurrencyFavorite(favoriteCoin));
    reset();
  };
  const reset = () => {
    setFavoriteCoinInput('');
    setFavoriteCoin({} as Currency);
  }
  const changeHandler = (event: React.ChangeEvent<{}>, newValue: Currency | null) => {
    if(!newValue) return reset();
    setFavoriteCoinInput(newValue.symbol);
    setFavoriteCoin(newValue);
  }
  const keyUpHandler = (event: React.KeyboardEvent<{}>) => {
    if (event.key === 'Enter') {
      addCoin();
    }
  }
  const changeInputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFavoriteCoinInput(evt.target.value);
  }
  return (
    <div className={style.addCurrency}>
      <Autocomplete
        value={favoriteCoin.id ? favoriteCoin : null}
        loading={!currencies.length}
        options={currencies}
        getOptionLabel={(option: Currency) => `${option.symbol} - ${option.name}`}
        style={{marginRight: '10px' }}
        getOptionSelected={(option, value) => {
            return option.id === value.id
          }
        }
        loadingText='Loading...'
        size="small"
        fullWidth
        onChange={changeHandler}
        onKeyUp={keyUpHandler}
        inputValue={favoriteCoinInput}
        renderInput={(params: any) => {
            return (
            <TextField 
              {...params}
              onChange={changeInputHandler}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {!currencies.length ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                  ),
                }}
              label="Select coin"  
              variant="outlined"
            />
          )}
        }
      />
      <Button variant="contained" color="primary" onClick={addCoin} disabled={!favoriteCoin.symbol}>
        Add
      </Button>
    </div>
  );
};