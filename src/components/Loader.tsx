import { Box, BoxProps } from 'grommet';

export enum LoaderSize {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

const loaderSizes = {
  S: '1rem',
  M: '1.5rem',
  L: '2rem',
};

interface LoaderProps {
  size: LoaderSize;
  margin: BoxProps['margin'];
  justify?: BoxProps['justify'];
}

const Spinner = () => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13.5" cy="13.5" r="12" stroke="#6FE7CA" strokeWidth="3" />
      <path
        d="M13.4923 0.00785517V3.22444C15.7412 3.21676 17.9311 3.94346 19.7293 5.29409C21.5276 6.64472 22.8359 8.54554 23.4552 10.7075C24.0745 12.8695 23.9711 15.1748 23.1607 17.2726C22.3503 19.3705 20.8772 21.1465 18.9652 22.3307C17.0533 23.5149 14.807 24.0424 12.5678 23.8334C10.3286 23.6244 8.21883 22.69 6.55908 21.1724C4.89933 19.6549 3.78031 17.6372 3.37214 15.4256C2.96397 13.214 3.28891 10.9295 4.29762 8.91942L1.42047 7.47211C0.109052 10.1001 -0.309518 13.084 0.228194 15.9714C0.765906 18.8588 2.23058 21.492 4.4001 23.4718C6.56961 25.4515 9.32551 26.6701 12.2499 26.942C15.1744 27.214 18.1078 26.5246 20.6051 24.9788C23.1025 23.433 25.0276 21.1151 26.0885 18.3764C27.1494 15.6376 27.2882 12.6276 26.4839 9.80288C25.6795 6.97811 23.9758 4.49247 21.6313 2.72342C19.2868 0.95436 16.4293 -0.00166861 13.4923 2.18623e-06V0.00785517Z"
        fill="#F4EEE0"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 13.5 13.5"
          to="360 13.5 13.5"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export const Loader: React.FC<LoaderProps> = ({ size, margin, justify = 'stretch' }) => {
  return (
    <Box width={loaderSizes[size]} height={loaderSizes[size]} margin={margin} justify={justify} data-testid="loader">
      <Spinner />
    </Box>
  );
};
