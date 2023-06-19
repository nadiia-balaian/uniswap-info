import { Box, Grommet, Main } from 'grommet';
import { Actions } from 'grommet-icons';
import { useState } from 'react';
import styled from 'styled-components';

import { theme } from '../styles/theme';

const Gradient = styled.div`
  background: radial-gradient(farthest-side at top left, rgba(117, 255, 222, 0.32), transparent),
    radial-gradient(farthest-corner at bottom right, rgba(117, 255, 222, 0.32), transparent 400px);
  filter: blur(50px);
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'}>
      <Main pad="small" style={{ position: 'relative', zIndex: '2' }}>
        <Box height="30px">
          <Actions onClick={() => setDarkMode(!darkMode)} cursor="pointer" />
        </Box>
        <Box direction="row" height="calc(100vh - 54px)">
          <Box pad={{ vertical: 'xsmall', horizontal: 'medium' }} flex={{ grow: 1, shrink: 1 }}>
            {children}
          </Box>
        </Box>
      </Main>
      <Gradient />
    </Grommet>
  );
};
