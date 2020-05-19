import { ADD_CURRENCY } from "../actionTypes";

const initialState = {
  currencies: [],
};

export function currencies(state = initialState, action: any) {
  switch (action.type) {
    case ADD_CURRENCY: {
      return {
        ...state,
        currencies: [...state.currencies, action.payload]
      }
    }
    default:
      return state;
  }
}
