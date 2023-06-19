import { Box, Heading, Text } from 'grommet';

import { Token, TokenDayData } from '../interfaces';
import { numberFormatter } from '../utils/formatter';

export function TokenDetails({
  tokenData,
  tokenDayData,
  size,
}: {
  tokenData: Token;
  tokenDayData: TokenDayData;
  size: string;
}) {
  const { totalValueLockedUSD, txCount, volumeUSD } = tokenData;
  const { totalValueLockedUSD: dailyTVL, volumeUSD: dailyVolumeUSD, feesUSD, priceUSD } = tokenDayData;

  return (
    <Box gap="small" width={size === 'small' ? '100%' : '200px'}>
      <Box>
        <Text color="text-faded" size="small">
          Price
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+priceUSD)}
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
      <Box>
        <Text color="text-faded" size="small">
          Total transactions count
        </Text>
        <Heading level="3" weight="500">
          {numberFormatter(+txCount)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded" size="small">
          Daily TVL
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+dailyTVL)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded" size="small">
          Daily Volume
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+dailyVolumeUSD)}
        </Heading>
      </Box>
      <Box>
        <Text color="text-faded" size="small">
          Fees
        </Text>
        <Heading level="3" weight="500">
          ${numberFormatter(+feesUSD)}
        </Heading>
      </Box>
    </Box>
  );
}
