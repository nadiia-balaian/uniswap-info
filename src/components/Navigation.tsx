import { Nav, Text } from 'grommet';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';

const StyledLink = ({ text, url }: { text: string; url: string }) => {
  const { dark }: any = useTheme();

  return (
    <NavLink
      to={url}
      style={({ isActive }) => {
        return {
          borderBottom: dark ? (isActive ? '1px solid #6FE7CA' : 'none') : isActive ? '1px solid #33303f' : 'none',
          textDecoration: 'none',
          fontSize: '20px',
          padding: '8px 10px',
          color: dark ? (isActive ? '#6FE7CA' : 'inherit') : isActive ? '#33303f' : 'inherit',
        };
      }}
    >
      <Text>{text}</Text>
    </NavLink>
  );
};

export function Navigation() {
  return (
    <Nav
      direction="row"
      background="card-color"
      pad="medium"
      margin={{ bottom: '.5rem' }}
      round=".5rem"
      border={{ size: '0.5px' }}
    >
      <StyledLink url="/" text="Overview" />
      <StyledLink url="/tokens" text="Tokens" />
      <StyledLink url="/pools" text="Pools" />
    </Nav>
  );
}
