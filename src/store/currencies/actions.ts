import { ADD_CURRENCY } from "../actionTypes";

const getId = () => {
  return new Promise((res, rej)=>{
    const now = new Date().getTime();
    setTimeout(() => res(now), 1000)
  })
}

export const addCurrency = (currencyTicker: string) => {
  return async (dispatch: any) => {
    const id = await getId();
    dispatch({
      type: ADD_CURRENCY,
      payload: {
        ticker: currencyTicker,
        id
      }
    })
  }
};
