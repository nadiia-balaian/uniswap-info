import { useQuery } from '@apollo/client';
import { Box, Card, Heading, Tag, Text } from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { useNavigate, useParams } from 'react-router-dom';

import { BarChart } from '../../components/BarChart';
import { Loader, LoaderSize } from '../../components/Loader';
import { PoolDetails } from '../../components/PoolDetails';
import { POOL_DETAILS } from '../../queries/poolDetails';
import { numberFormatter } from '../../utils/formatter';

export function PoolDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(POOL_DETAILS, {
    variables: { id, date: Math.floor(Date.now() / 86400) },
  });

  return (
    <Box round="1rem" border={{ size: '1px', color: 'border-dark' }} pad="medium">
      <Box direction="row" align="center">
        <FormPrevious
          size="large"
          onClick={() => {
            navigate('/pools');
          }}
        />
        <Heading level="3" margin="small">
          Pool Details
        </Heading>
      </Box>
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
          <Box direction="row" gap="medium" align="stretch">
            <Card pad={{ vertical: 'medium', horizontal: 'small' }} background={{ dark: '#33303f', light: '#e5e5e5' }}>
              {loading ? (
                <Box height="50vh" align="center" justify="center" width="200px">
                  <Loader size={LoaderSize.Large} margin="none" />
                </Box>
              ) : (
                <PoolDetails poolData={data?.pool} poolDayData={data?.poolDayDatas[0]} />
              )}
            </Card>
            <Card
              pad={{ vertical: 'medium', horizontal: 'small' }}
              background={{ dark: '#33303f', light: '#e5e5e5' }}
              width="100%"
            >
              {loading ? (
                <Box height="50vh" align="center" justify="center" width="100%">
                  <Loader size={LoaderSize.Large} margin="none" />
                </Box>
              ) : (
                <Box direction="row" gap="small">
                  {/* {renderChart([...data.tokenDayDatas].reverse(), filter as string)} */}
                  <BarChart chartData={data.poolDayDatas} />
                  {/* <Box gap="small">
                    <Select
                      options={dateRanges}
                      value={dateRanges.find((option) => option.value === timeRange)}
                      onChange={({ option }) => setTimeRange(option.value)}
                    />
                    <RadioButtonGroup
                      name="tokenFilter"
                      options={tokenFilters}
                      value={filter}
                      onChange={(event) => setFilter(event.target.value)}
                    />
                  </Box> */}
                </Box>
              )}
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  );
}
