import { useQuery } from '@apollo/client';
import { Box, DataTable, Heading, Text } from 'grommet';
import { FormPrevious } from 'grommet-icons';
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
    header: <Text>Volume USD</Text>,
    render: (data: Token) => <Text>{numberFormatter(+data.volumeUSD, 1)}</Text>,
  },
  {
    property: 'txCount',
    header: <Text>Transaction count</Text>,
    render: (data: Token) => <Text>{numberFormatter(+data.txCount, 1)}</Text>,
  },
  {
    property: 'totalValueLockedUSD',
    header: <Text>Liquidity</Text>,
    render: (data: Token) => <Text>{numberFormatter(+data.totalValueLockedUSD, 1)}</Text>,
  },
];

export function TokensPage() {
  const { loading, error, data } = useQuery(TOKENS);

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
          All Tokens
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
            data={data.tokens}
            paginate={true}
            step={10}
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
