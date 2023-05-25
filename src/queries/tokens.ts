import { gql } from "@apollo/client";

export const TOKENS = gql`
  query Tokens {
    tokens(
      first: 150
      orderBy: totalValueLockedUSD
      orderDirection: desc
    )
    {
      id
      symbol
      name
      volumeUSD
      txCount
      totalValueLockedUSD
      feesUSD
    }
  }
`;
