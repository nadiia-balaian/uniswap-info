import { useQuery } from '@apollo/client';
import { Box, Card, Heading, RadioButtonGroup, Select, Text } from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { renderChart } from '../../components/LineChart';
import { Loader, LoaderSize } from '../../components/Loader';
import { TokenDetails } from '../../components/TokenDetails';
import { TOKEN_DETAILS } from '../../queries/tokenDetails';
import { dateRanges, tokenFilters } from '../../utils/chart';

export function TokenDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filter, setFilter] = useState<string | number>(tokenFilters[0].value);
  const [timeRange, setTimeRange] = useState(7);

  const { loading, error, data } = useQuery(TOKEN_DETAILS, {
    variables: { id, timeRange },
  });

  return (
    <Box round="1rem" border={{ size: '1px', color: 'border-dark' }} pad="medium">
      <Box direction="row" align="center">
        <FormPrevious
          size="large"
          onClick={() => {
            navigate('/tokens');
          }}
        />
        <Heading level="3" margin="small">
          Token Details
        </Heading>
        {/* <SwapWidget defaultOutputTokenAddress={id} theme={darkTheme} /> */}
      </Box>
      {/* {loading ? (
        <Box height="70vh" align="center" justify="center">
          <Loader size={LoaderSize.Large} margin="none" />
        </Box> */}
      {/* ) :  */}
      {error ? (
        <Text color="danger">Something went wrong. {error.message}</Text>
      ) : (
        <Box>
          <Heading level="4" margin="small">
            {data?.token?.name} ({data?.token?.symbol})
          </Heading>
          <Box direction="row" gap="medium" align="stretch">
            <Card pad={{ vertical: 'medium', horizontal: 'small' }} background={{ dark: '#33303f', light: '#e5e5e5' }}>
              {loading ? (
                <Box height="50vh" align="center" justify="center" width="200px">
                  <Loader size={LoaderSize.Large} margin="none" />
                </Box>
              ) : (
                <TokenDetails tokenData={data?.token} tokenDayData={data?.tokenDayDatas[0]} />
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
                  {renderChart([...data.tokenDayDatas].reverse(), filter as string)}
                  <Box gap="small">
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
                  </Box>
                </Box>
              )}
            </Card>
          </Box>
        </Box>
      )}
    </Box>
  );
}
