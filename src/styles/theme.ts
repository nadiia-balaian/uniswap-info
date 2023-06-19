export const colors = {
  text: {
    dark: '#D1D1D1',
    light: "#313131",
  },
  brand: '#6FE7CA',
  background: {
    dark: "#171920",
    light: "#FAFAFA"
  },
  border: {
    dark: '#6FE7CA',
    light: '#909090',
  },
  danger: '#c0392b',
  shadow: ' 0px 4px 7px 0px #00261F',
  borderSize: '0.5px',
  ['active-font']: '#F3F3F3',
  ['passive-font']: '##7D7D7D',
  ['card-color']: {
    dark: 'rgba(15, 15, 15, 0.6);',
    light: '#F4F4F4'
  },
  ['text-faded']: '#7D7D7D',
};

export const theme = {
    global: {
      colors: colors,
      font: {
        family: 'Inter, sans-serif',
        size: '18px',
        height: '20px',
        color: '#D1D1D1',
      },
      focus: {
        border: {
          color: 'brand',
        },
        shadow: {
          size: '2px',
        },
      },
      input: {
        font: {
          weight: 400,
        },
        border: {
          color: 'white',
        },
      },
      hover: {
        background: {
          dark: 'rgba(24, 197, 155, 0.07)',
          light:  'rgba(183, 255, 238, 0.35)'
        },
        border: {
          color: 'brand',
        },
        text: {
          dark: '#D1D1D1',
          light: "#313131",
        },
      }
    },
    dataTable: {
      header: {
        font: {
          weight: "600",
        }
      },
    },
    select: {
      container: {
        extend: () => `background: ${colors.background};`
      }
    },
    breakpoints: {
      small: {
        value: 600
      },
      medium: {
        value: 900
      },
      large: 3000
    }
  };