import { axios } from '../../plugins/axios';
import { Currency } from '../../typings/currencies';

export const currencyService = {
  async getCurrenciesData(): Promise<Currency[]>{
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    return response.data;
  },
  async getCurrencyPriceById(id: string){
    const response = await axios.get(`https://api.coinpaprika.com/v1/coins/${id}/ohlcv/latest`);
    return response.data[0];
  }
} 