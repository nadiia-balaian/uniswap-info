import { Box, Card, Heading, Text } from 'grommet';

import { Pool, PoolDayData } from '../interfaces';
import { numberFormatter } from '../utils/formatter';

export function PoolDetails({ poolData }: { poolData: Pool; poolDayData?: PoolDayData }) {
  const { volumeUSD, totalValueLockedUSD, token0, token1, totalValueLockedToken0, totalValueLockedToken1 } = poolData;

  return (
    <Box gap="small" width="300px">
      <Card pad="small" background="background" margin={{ bottom: 'small' }}>
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
        <Text color="text-faded">TVL</Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+totalValueLockedUSD)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded">Volume</Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+volumeUSD)}
        </Heading>
      </Box>
    </Box>
  );
}
