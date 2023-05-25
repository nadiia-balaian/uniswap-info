import { gql } from "@apollo/client";

export const GLOBAL_DATA = gql`
    query TotalPool($id: String!) {
        factory(id: $id) {
            poolCount
            txCount
            totalVolumeUSD
            totalVolumeETH
            totalFeesUSD
            totalValueLockedUSD
        }
    }
`;
