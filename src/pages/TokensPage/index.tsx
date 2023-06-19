import { useQuery } from '@apollo/client';
import { Box, DataTable, Text } from 'grommet';
import { useNavigate } from 'react-router-dom';

import { Loader, LoaderSize } from '../../components/Loader';
import { Token } from '../../interfaces';
import { TOKENS } from '../../queries/tokens';
import { numberFormatter } from '../../utils/formatter';

const columns = [
  {
    property: 'name',
    header: 'Name',
    search: true,
    render: (data: Token) => (
      <Box width="20vw">
        <Text truncate={true}>
          <strong>{data.name}</strong>
          {data.symbol && `(${data.symbol})`}
        </Text>
      </Box>
    ),
  },
  {
    property: 'Volume USD',
    header: 'Volume USD',
    render: (data: Token) => <Text>{numberFormatter(+data.volumeUSD, 1)}</Text>,
  },
  {
    property: 'txCount',
    header: 'Transaction count',
    render: (data: Token) => <Text>{numberFormatter(+data.txCount, 1)}</Text>,
  },
  {
    property: 'totalValueLockedUSD',
    header: 'Liquidity',
    render: (data: Token) => <Text>{numberFormatter(+data.totalValueLockedUSD, 1)}</Text>,
  },
];

export function TokensPage() {
  const { loading, error, data } = useQuery(TOKENS);

  const navigate = useNavigate();

  return (
    <Box round="1rem" border={{ size: '.5px', color: 'border' }} pad="medium" background="card-color">
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
            data={data.tokens}
            paginate={true}
            step={9}
            pad="small"
            onClickRow={({ datum }) => {
              navigate(`/tokens/${datum.id}`);
            }}
            sort={{
              direction: 'asc',
              external: false,
              property: 'name',
            }}
          />
        </Box>
      )}
    </Box>
  );
}
