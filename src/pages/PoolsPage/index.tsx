import { useQuery } from '@apollo/client';
import { Box, DataTable, Heading, Text } from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';

import { Loader, LoaderSize } from '../../components/Loader';
import { Pool } from '../../interfaces';
import { POOLS } from '../../queries/pools';
import { numberFormatter } from '../../utils/formatter';

const columns = [
  {
    property: 'pool',
    header: 'Pool',
    render: (data: Pool) => (
      <Box width="20vw">
        <Text truncate={true}>
          <strong>
            {data.token0.symbol} / {data.token1.symbol}
          </strong>
        </Text>
      </Box>
    ),
  },
  {
    property: 'totalValueLockedUSD',
    header: <Text>Liquidity</Text>,
    render: (data: Pool) => <Text>{numberFormatter(+data.totalValueLockedUSD, 1)}</Text>,
  },
  {
    property: 'volumeUSD',
    header: <Text>Volume USD</Text>,
    render: (data: Pool) => <Text>{numberFormatter(+data.volumeUSD, 1)}</Text>,
  },
  {
    property: 'feesUSD',
    header: <Text>Fees</Text>,
    render: (data: Pool) => <Text>{numberFormatter(+data.feesUSD, 1)}</Text>,
  },
];

export function PoolsPage() {
  const { loading, error, data } = useQuery(POOLS);
  const navigate = useNavigate();

  return (
    <Box round="1rem" border={{ size: '1px', color: 'border-dark' }} pad="medium">
      <Box direction="row" align="center">
        <FormPrevious
          size="large"
          onClick={() => {
            navigate('/');
          }}
        />
        <Heading level="3" margin="small">
          All Pools
        </Heading>
      </Box>

      {loading ? (
        <Box height="70vh" align="center" justify="center">
          <Loader size={LoaderSize.Large} margin="none" />
        </Box>
      ) : error ? (
        <Text color="danger">Something went wrong. {error.message}</Text>
      ) : (
        <Box width="100%">
          <DataTable
            fill="horizontal"
            columns={columns}
            data={data.pools}
            paginate={true}
            step={10}
            pad="small"
            onClickRow={({ datum }) => {
              navigate(`/pools/${datum.id}`);
            }}
            sort={{
              direction: 'desc',
              external: false,
              property: 'totalValueLockedUSD',
            }}
          />
        </Box>
      )}
    </Box>
  );
}
