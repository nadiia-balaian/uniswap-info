import { Box } from 'grommet';

export const InfoCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      pad="large"
      round="small"
      elevation="xsmall"
      background="card-color"
      align="start"
      justify="center"
      gap="small"
      border={{ size: '.5px' }}
    >
      {children}
    </Box>
  );
};
