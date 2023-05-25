import { gql } from "@apollo/client";

export const TOKEN_DETAILS = gql`
  query TokenDetails($id: String!, $timeRange: Int!) {
    token(id: $id) {
      name
      symbol
      derivedETH
      volumeUSD
      totalValueLockedUSD
      txCount
    }
    tokenDayDatas(
      orderBy: date
      orderDirection: desc
      first: $timeRange
      where: { token: $id }
    ) {
      id
      date
      priceUSD
      volumeUSD
      feesUSD
      totalValueLocked
      totalValueLockedUSD
      open
      high
      low
      close
    }
  }
`;
