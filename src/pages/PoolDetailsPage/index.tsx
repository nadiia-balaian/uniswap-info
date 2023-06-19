import { useQuery } from '@apollo/client';
import { Box, Card, Heading, ResponsiveContext, Tag, Text } from 'grommet';
import { useParams } from 'react-router-dom';

import { BarChart } from '../../components/BarChart';
import { Loader, LoaderSize } from '../../components/Loader';
import { PoolDetails } from '../../components/PoolDetails';
import { POOL_DETAILS } from '../../queries/poolDetails';
import { numberFormatter } from '../../utils/formatter';

export function PoolDetailsPage() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(POOL_DETAILS, {
    variables: { id, date: Math.floor(Date.now() / 86400) },
  });

  return (
    <Box round="1rem" border={{ size: '.5px', color: 'border' }} pad="medium" background="card-color">
      {error ? (
        <Text color="danger">Something went wrong. {error.message}</Text>
      ) : (
        <Box>
          {loading ? (
            <Box height="3rem" align="center" justify="center" width="200px">
              <Loader size={LoaderSize.Large} margin="none" />
            </Box>
          ) : (
            <>
              <Heading level="4" margin="small">
                {data?.pool.token0.symbol} / {data?.pool.token1.symbol}
              </Heading>
              <Box direction="row" gap="small" margin={{ bottom: 'small' }}>
                <Tag
                  size="small"
                  name={`1 ${data?.pool.token0.symbol} = `}
                  value={`${numberFormatter(+data?.pool.token1Price)} ${data?.pool.token1.symbol}`}
                />
                <Tag
                  size="small"
                  name={`1 ${data?.pool.token1.symbol} = `}
                  value={`${numberFormatter(+data?.pool.token0Price)} ${data?.pool.token0.symbol}`}
                />
              </Box>
            </>
          )}
          <ResponsiveContext.Consumer>
            {(size) => (
              <Box direction={size === 'small' ? 'column' : 'row'} gap="medium" align="stretch">
                <Card pad="medium">
                  {loading ? (
                    <Box height="50vh" align="center" justify="center" width="200px">
                      <Loader size={LoaderSize.Large} margin="none" />
                    </Box>
                  ) : (
                    <PoolDetails poolData={data?.pool} poolDayData={data?.poolDayDatas[0]} />
                  )}
                </Card>
                <Card pad={{ vertical: 'medium', horizontal: 'small' }} width="100%" elevation="none">
                  {loading ? (
                    <Box height="50vh" align="center" justify="center" width="100%">
                      <Loader size={LoaderSize.Large} margin="none" />
                    </Box>
                  ) : (
                    <Box direction="row" gap="small">
                      <BarChart chartData={data.poolDayDatas} />
                    </Box>
                  )}
                </Card>
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </Box>
      )}
    </Box>
  );
}
