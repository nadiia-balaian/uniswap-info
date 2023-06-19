import { Box, Card, Heading, Text } from 'grommet';

import { Pool, PoolDayData } from '../interfaces';
import { numberFormatter } from '../utils/formatter';

export interface PoolDetailsProps {
  poolData: Pool;
  poolDayData?: PoolDayData;
}

export function PoolDetails({ poolData, poolDayData }: PoolDetailsProps) {
  const { volumeUSD, totalValueLockedUSD, token0, token1, totalValueLockedToken0, totalValueLockedToken1 } = poolData;
  const { volumeUSD: dailyVolumeUSD, feesUSD } = poolDayData || { volumeUSD: 0, feesUSD: 0 };

  return (
    <Box gap="small" width="300px">
      <Card margin={{ bottom: 'small' }} elevation="none">
        <Heading level="4" weight="400" color="text-faded" margin={{ bottom: 'small' }}>
          Total Tokens Locked
        </Heading>
        <Box justify="between" direction="row" margin={{ bottom: 'small' }}>
          <Text weight="bold">{token0.symbol}</Text>
          <Text>{numberFormatter(+totalValueLockedToken0)}</Text>
        </Box>
        <Box justify="between" direction="row">
          <Text weight="bold">{token1.symbol}</Text>
          <Text>{numberFormatter(+totalValueLockedToken1)}</Text>
        </Box>
      </Card>

      <Box>
        <Text color="text-faded" size="small">
          Volume 24h
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+dailyVolumeUSD)}
        </Heading>
      </Box>

      <Box>
        <Text color="text-faded" size="small">
          Fees 24h
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+feesUSD)}
        </Heading>
      </Box>

      <Box>
        <Text color="text-faded" size="small">
          TVL
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+totalValueLockedUSD)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded" size="small">
          Volume
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+volumeUSD)}
        </Heading>
      </Box>
    </Box>
  );
}
