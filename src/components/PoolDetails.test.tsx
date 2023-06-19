import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { poolDataMock, poolDayDataMock } from '../../test/__mocks/pools';
import { numberFormatter } from '../utils/formatter';
import { PoolDetails, PoolDetailsProps } from './PoolDetails';

const defaultProps: PoolDetailsProps = {
  poolData: poolDataMock('0e1234tf'),
  poolDayData: poolDayDataMock('0e1234tf'),
};

describe('PoolDetails component tests', () => {
  it('render component and shows title', async () => {
    render(<PoolDetails {...defaultProps} />);

    const title = await screen.findByText('Total Tokens Locked');
    expect(title).toBeInTheDocument();

    const totalValueLockedUSD = await screen.findByText(numberFormatter(+defaultProps.poolData.totalValueLockedUSD), {
      exact: false,
    });
    expect(totalValueLockedUSD).toBeInTheDocument();
  });
});
