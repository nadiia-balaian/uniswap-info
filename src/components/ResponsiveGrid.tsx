import { Grid, ResponsiveContext } from 'grommet';

const columns = {
  small: ['auto'],
  medium: ['auto', 'auto'],
  large: ['auto', 'auto', 'auto'],
  xlarge: ['auto', 'auto', 'auto'],
};

export const ResponsiveGrid: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      return (
        <Grid rows="small" columns={size ? (columns as any)[size] : ['medium', 'medium']} gap={size}>
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);
