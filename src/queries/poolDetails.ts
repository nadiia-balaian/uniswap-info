import { gql } from "@apollo/client";

export const POOL_DETAILS = gql`
  query PoolDetails($id: String!, $date: Int!) {
    pool(id: $id) {
        token0 {
            symbol
            id
          }
          token1 {
            symbol
            id
          }
          feeTier
          sqrtPrice
          liquidity
          token0Price
          token1Price
          totalValueLockedToken0
          totalValueLockedToken1
          totalValueLockedUSD
          volumeUSD
    }
    poolDayDatas(first: 100, orderBy: date, where: {
        pool: $id,
        date_gt: 1651363200
      } ) {
        date
        liquidity
        sqrtPrice
        token0Price
        token1Price
        volumeToken0
        volumeToken1
        tvlUSD
        feesUSD
        volumeUSD
      }
  }
`;
