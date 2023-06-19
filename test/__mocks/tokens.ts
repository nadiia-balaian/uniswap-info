import { Token, TokenDayData } from '../../src/interfaces';

export const tokenDataMock = (name: string) => (
    {
      id: `id-${name}`,
      name: name,
      symbol: name.toUpperCase(),
      volume: "7416233.099392966693495344",
      volumeUSD: "1215.88479823448115445072371343828",
      txCount: '777',
      feesUSD: "123.123",
      totalValueLockedUSD: "87416233",
    } as Token
);

export const tokenDayDataMock = (name: string) => (
  {
    id: `id-${name}`,
    date: 1619548800,
    priceUSD: '123',
    volumeUSD: '66666',
    feesUSD: "123.123",
    totalValueLocked: '777444',
    totalValueLockedUSD: '1234555',
    open: '123',
    high: '888',
    low: '123',
    close: '777',
  } as TokenDayData
);

