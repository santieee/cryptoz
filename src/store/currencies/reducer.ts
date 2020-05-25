import { SET_CURRENCY_DATA, UPDATE_CURRENCY_FAVORITE } from "../actionTypes";
import { Currency } from '../../typings/currencies';

export type T = {
  data: Currency[],
  favorites: Currency[],
}

export type RootState = {
  currencies: T
}

const initialState: T = {
  data: [],
  favorites: [],
};

export function currencies(state = initialState, action: any) {
  switch (action.type) {
    case SET_CURRENCY_DATA: {
      return {
        ...state,
        data: action.payload
      }
    }
    case UPDATE_CURRENCY_FAVORITE: {
      return {
        ...state,
        favorites: [...action.payload]
      }
    }
    default:
      return state;
  }
}
