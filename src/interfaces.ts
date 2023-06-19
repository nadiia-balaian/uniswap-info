export interface Factory {
    id: string;
    poolCount: string;
    txCount: string;
    totalFeesUSD: string;
    totalVolumeETH: string;
    totalVolumeUSD: string;
    totalValueLockedUSD: string;
}

export interface Token {
    id: string;
    name: string;
    symbol: string;
    volume: string;
    volumeUSD: string;
    txCount: string;
    feesUSD: string;
    totalValueLockedUSD: string;
}

export interface TokenDayData {
    id: string;
    date: number;
    priceUSD: string;
    volumeUSD: string;
    feesUSD: string;
    totalValueLocked: string;
    totalValueLockedUSD: string;
    open: string;
    high: string;
    low: string;
    close: string;
}


export interface Filter {
    label: string;
    value: string | number;
}

export interface Pool {
    id: string;
    token0: Token;
    token1: Token;
    liquidity: string;
    sqrtPrice: string;
    token0Price: string;
    token1Price: string;
    volumeToken0: string;
    volumeToken1: string;
    volumeUSD: string;
    feesUSD: string;
    totalValueLockedUSD: string;
    totalValueLockedToken0: string;
    totalValueLockedToken1: string;
}

export interface PoolDayData {
    id: string;
    tvlUSD: string;
    feesUSD: string;
    volumeUSD: string;
    sqrtPrice: string;
    token0Price?: string;
    token1Price?: string;
    volumeToken0?: string;
    volumeToken1?: string;
    txCount?: number;
}

  
