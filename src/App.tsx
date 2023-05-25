import './styles/reset.css';
import './App.css';

import { useQuery } from '@apollo/client';
import { Anchor, Box, Card, Heading, Text } from 'grommet';

import { Loader, LoaderSize } from './components/Loader';
import { GLOBAL_DATA } from './queries/global';
import { numberFormatter } from './utils/formatter';

function App() {
  const { loading, error, data } = useQuery(GLOBAL_DATA, {
    variables: { id: '0x1F98431c8aD98523631AE4a59f267346ea31F984' },
  });

  return (
    <Box gap="small">
      <Heading level="2">Overview</Heading>
      <Anchor href="/tokens">
        <Text margin={{ left: 'small' }}>Tokens</Text>
      </Anchor>
      <Anchor href="/pools">
        <Text margin={{ left: 'small' }}>Pools</Text>
      </Anchor>
      {loading ? (
        <Box height="70vh" align="center" justify="center">
          <Loader size={LoaderSize.Large} margin="none" />
        </Box>
      ) : error ? (
        <Text color="danger">Something went wrong. {error.message}</Text>
      ) : (
        <Card pad="small">
          <Box>
            <Text color="text-faded">Amount of pools created</Text>
            <Heading level="3" weight="500">
              {numberFormatter(+data.factory.poolCount)}
            </Heading>
          </Box>
          <Box>
            <Text color="text-faded">Amount of transactions</Text>
            <Heading level="3" weight="500">
              {numberFormatter(+data.factory.totalFeesUSD)}
            </Heading>
          </Box>
          <Box>
            <Text color="text-faded">Total volume in USD</Text>
            <Heading level="3" weight="500">
              ${numberFormatter(+data.factory.totalVolumeUSD)}
            </Heading>
          </Box>
          <Box>
            <Text color="text-faded">TVL in USD</Text>
            <Heading level="3" weight="500">
              ${numberFormatter(+data.factory.totalValueLockedUSD)}
            </Heading>
          </Box>
        </Card>
      )}
    </Box>
  );
}

export default App;
