import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import List from './List';

describe('List component tests', () => {
  it('render component and shows title', async () => {
    render(
      //   <RouterProvider router={router}>
      <List />
      //   </RouterProvider>
    );

    // render(<List />);
    const title = await screen.findByText('List');
    expect(title).toBeInTheDocument();
  });
});
