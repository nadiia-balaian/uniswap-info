import { gql } from "@apollo/client";

export const POOLS = gql`
    query TotalPool {
        pools(first: 1000, orderBy: liquidity, orderDirection: desc) {
          id
          token0 {
            symbol
            id
          }
          token1 {
            symbol
            id
          }
          token0Price
          token1Price
          liquidity
          sqrtPrice
          volumeToken0
          volumeToken1
          feesUSD
          volumeUSD
          totalValueLockedUSD
        }
    }
`;
