import { createTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#512da8',
    },
  },
  typography: {
    fontFamily: ['Shabnam', 'sans-serif'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.8em',
        },
        '*::-webkit-scrollbar-track': {
          background: '#ebebeb',
          borderRadius: '11px',
        },
        '*::-webkit-scrollbar-thumb': {
          background: '#BFBFBF',
          borderRadius: '11px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: '#999999',
        },
      },
    },
    MuiSelect: {
      icon: {
        margin: '0 .4rem',
      },
      select: {
        backgroundColor: 'none',
        '&:focus': {
          backgroundColor: 'none',
        },
      },
      root: {
        '&.MuiInputBase-input': {
          padding: '.8rem 0 0',
        },
        '&.Mui-error': {
          border: '1px solid rgba(241, 39, 42, 0.6)',
          '& .MuiInputBase-input': {
            '&::placeholder': {
              color: 'rgba(241, 39, 42, 0.94)',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      root: {
        margin: '0 .8rem',
      },
      shrink: {
        transform: 'translate(0, 8px) scale(0.75)',
      },
    },
    MuiInputBase: {
      root: {
        border: '1px solid rgba(0, 0, 0, 0.2)',
        padding: '.8rem',
        borderRadius: '.8rem',
        marginBottom: '.8rem',
        '&:hover': {
          border: '1px solid rgba(121, 80, 225, 0.5)',
        },
        '&.Mui-error': {
          border: '2px solid rgba(241, 80, 42, 0.9)',
          '& .MuiInputBase-input': {
            '&::placeholder': {
              color: 'rgba(241, 39, 42, 0.94)',
              opacity: '.8',
            },
          },
        },
        '& .MuiInputBase-input': {
          '&::placeholder': {
            textAlign: 'left',
          },
        },
      },
      // input: {
      //   '&::placeholder': {
      //     textAlign: 'left',
      //   },
      // },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#D4CDD9',
        '&:hover': {
          backgroundColor: '#C2B7DD',
        },
      },
    },
    // MuiTextField: {
    //   root: {},
    // },
  },
});

export default theme;
