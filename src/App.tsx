import './styles/reset.css';
import './App.css';

import { useQuery } from '@apollo/client';
import { Box, Grid, Heading, Text } from 'grommet';

import { InfoCard } from './components/Card';
import { Loader, LoaderSize } from './components/Loader';
import { GLOBAL_DATA } from './queries/global';
import { numberFormatter } from './utils/formatter';

function App() {
  const { loading, error, data } = useQuery(GLOBAL_DATA, {
    variables: { id: '0x1F98431c8aD98523631AE4a59f267346ea31F984' },
  });

  return (
    <Box gap="small">
      {loading ? (
        <Box height="70vh" align="center" justify="center">
          <Loader size={LoaderSize.Large} margin="none" />
        </Box>
      ) : error ? (
        <Text color="danger">Something went wrong. {error.message}</Text>
      ) : (
        <Grid rows="small" columns={['medium', 'medium']} gap="medium">
          <InfoCard>
            <Text color="text">Amount of pools created</Text>
            <Heading level="2" weight="500">
              {numberFormatter(+data.factory.poolCount)}
            </Heading>
          </InfoCard>
          <InfoCard>
            <Text color="text">Amount of transactions</Text>
            <Heading level="3" weight="500">
              {numberFormatter(+data.factory.totalFeesUSD)}
            </Heading>
          </InfoCard>
          <InfoCard>
            <Text color="text">Total volume in USD</Text>
            <Heading level="3" weight="500">
              ${numberFormatter(+data.factory.totalVolumeUSD)}
            </Heading>
          </InfoCard>
          <InfoCard>
            <Text color="text">TVL in USD</Text>
            <Heading level="3" weight="500">
              ${numberFormatter(+data.factory.totalValueLockedUSD)}
            </Heading>
          </InfoCard>
        </Grid>
      )}
    </Box>
  );
}

export default App;
