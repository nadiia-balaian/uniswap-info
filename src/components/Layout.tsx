import { Box, Grommet, Main } from 'grommet';
import { Actions } from 'grommet-icons';
import { useState } from 'react';

import { theme } from '../styles/theme';

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Grommet theme={theme} themeMode={darkMode ? 'dark' : 'light'}>
      <Main pad="small">
        <Box height="30px">
          <Actions onClick={() => setDarkMode(!darkMode)} cursor="pointer" />
        </Box>
        <Box direction="row" height="calc(100vh - 42px)">
          <Box pad="medium" flex={{ grow: 1, shrink: 1 }}>
            {children}
          </Box>
        </Box>
      </Main>
    </Grommet>
  );
};
