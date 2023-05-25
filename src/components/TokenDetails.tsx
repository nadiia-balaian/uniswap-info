import { Box, Heading, Text } from 'grommet';

import { Token, TokenDayData } from '../interfaces';
import { numberFormatter } from '../utils/formatter';

export function TokenDetails({ tokenData, tokenDayData }: { tokenData: Token; tokenDayData: TokenDayData }) {
  const { totalValueLockedUSD, txCount, volumeUSD } = tokenData;
  const { totalValueLockedUSD: dailyTVL, volumeUSD: dailyVolumeUSD, feesUSD, priceUSD } = tokenDayData;

  return (
    <Box gap="small" width="200px">
      <Box>
        <Text color="text-faded">Price</Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+priceUSD)}
        </Heading>
      </Box>
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
      <Box>
        <Text color="text-faded">Total transactions count</Text>
        <Heading level="3" weight="500">
          {numberFormatter(+txCount)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded">Daily TVL</Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+dailyTVL)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded">Daily Volume</Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+dailyVolumeUSD)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded">Fees</Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+feesUSD)}
        </Heading>
      </Box>
    </Box>
  );
}
