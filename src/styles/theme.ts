export const theme = {
    global: {
      colors: {
        text: {
          dark: '#F4EEE0',
          light: "#1d3660",
        },
        // text: '#1d3660',
        brand: '#8884d8',
        control: {
          dark: '#F4EEE0',
          light: "#1d3660",
        },
        background: {
          dark: "#393646",
          light: "#fff"
        },
        danger: '#c0392b',
        ['border-light']: '#E5ECF5',
        ['border-dark']: '#C9D8EF',
        ['text-faded']: '#7E90B2',
        ['text-dark']: '#354B71',
        ['text-darker']: '#1D3660',
        ['text-light']: '#FFFFFF',
        ['danger-600']: '#C0392B',
        ['black-700']: '#172B4D',
        ['black-600']: '#1D3660',
        ['black-500']: '#354B71',
        ['brand-300']: '#72C8CF',
        ['brand-80']: '#F7F8FA',
        ['lighter-bg']: '#474452'
      },
      font: {
        family: 'Poppins, sans-serif',
        size: '18px',
        height: '20px',
      },
      dataTable: {
        header: {
          extend: () => `text-transform: uppercase; border-bottom: 1px solid #E5ECF5;`,
          border: {
            color: 'border-dark', // not working, still getting the default color
          }
        },
      },
      focus: {
        border: {
          color: 'brand-200',
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
      select: {
        background: 'white',
      },
      hover: {
        background: {
          dark: '#F4EEE0',
          light: "#1d3660",
        },
        color: {
          dark: '#1d3660',
          light: "#F4EEE0",
        }
      }
    },
  };