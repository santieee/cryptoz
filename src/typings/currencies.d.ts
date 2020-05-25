export type CurrencyPrice = {
  time_open: string,
  time_close: string,
  open: number,
  high: number,
  low: number,
  close: number,
  volume: number,
  market_cap: number,
  latest_update?: string
}

export interface Currency extends Partial<CurrencyPrice> {
  id: string,
  is_active: boolean,
  is_new: boolean,
  name: string,
  rank: number,
  symbol: string,
  type: string
};