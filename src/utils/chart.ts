import { Filter } from "../interfaces";

export const getTimeAxis = (date: number) => {
  const milliseconds = date * 1000;
  const newDate = new Date(milliseconds);
  const formattedDate = newDate.toISOString().split('T')[0].substring(5, 10); // returns MM-DD without time
  return formattedDate.replace('-', '/'); // returns MM/DD
};

export const tokenFilters: Filter[] = [
  { label: "Price", value: "priceUSD" },
  { label: "Volume", value: "volumeUSD" },
  { label: "TVL", value: "totalValueLockedUSD" },
];

export const poolFilters: Filter[] = [
  { label: "Volume", value: "volumeUSD" },
  { label: "TVL", value: "tvlUSD" },
  { label: "Fees", value: "feesUSD" },
];

export const dateRanges: Filter[] = [
  { label: '7 days', value: 7 },
  { label: '15 days', value: 15 },
  { label: '30 days', value: 30 },
];