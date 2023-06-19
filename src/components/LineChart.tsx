import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { getTimeAxis } from '../utils/chart';
import { numberFormatter } from '../utils/formatter';

export function renderChart(data: any, dataKey = 'priceUSD', size: string) {
  //adjust tick count
  return (
    <ResponsiveContainer height={400} width={size === 'small' ? '100%' : '70%'} aspect={2}>
      <LineChart data={data}>
        <XAxis dataKey={(data) => getTimeAxis(data.date)} axisLine={false} tickLine={false} />
        <YAxis
          width={80}
          type="number"
          tickFormatter={(data) => numberFormatter(data)}
          dataKey={dataKey}
          axisLine={false}
          tickLine={false}
          tickCount={50}
        />
        <CartesianGrid stroke="#0e0e0e" strokeDasharray="5 5" />
        <Line type="monotone" dataKey={dataKey} stroke="#6FE7CA" strokeWidth={2} dot={false} />
        <Tooltip
          formatter={(value) => numberFormatter(+parseFloat(value as string).toFixed(2))}
          labelStyle={{ color: '#33303f' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
