import { Box, ResponsiveContext } from 'grommet';

export const InfoCard: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          pad={size === 'small' ? 'medium' : 'large'}
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
      )}
    </ResponsiveContext.Consumer>
  );
};
