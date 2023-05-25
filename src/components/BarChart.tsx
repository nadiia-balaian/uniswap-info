import { Box, RadioButtonGroup } from 'grommet';
import { useState } from 'react';
import { Bar, BarChart as Chart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { getTimeAxis, poolFilters } from '../utils/chart';
import { numberFormatter } from '../utils/formatter';

export const BarChart = ({ chartData }: { chartData: any }) => {
  const [selectedFilter, setSelectedFilter] = useState('volumeUSD');

  return (
    <>
      <Box>
        <RadioButtonGroup
          name="poolFilter"
          options={poolFilters}
          value={selectedFilter}
          onChange={(event) => setSelectedFilter(event.target.value)}
        />
      </Box>
      <ResponsiveContainer width="100%" height={450}>
        <Chart
          margin={{
            top: 30,
          }}
          data={[...chartData]}
        >
          <XAxis dataKey={(data) => getTimeAxis(data.date)} />
          <YAxis width={80} />
          <Tooltip
            formatter={(value) => numberFormatter(+parseFloat(value as string).toFixed(2))}
            labelStyle={{ color: '#33303f' }}
            cursor={{ fill: 'transparent' }}
          />
          <CartesianGrid stroke="#0e0e0e" strokeDasharray="5 5" />
          <Bar dataKey={selectedFilter} fill="#8884d8" hide={false} />
        </Chart>
      </ResponsiveContainer>
    </>
  );
};
