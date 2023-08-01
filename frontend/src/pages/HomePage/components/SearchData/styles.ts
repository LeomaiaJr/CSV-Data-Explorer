import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import { styled as muiStyled } from '@mui/material/styles';

export const SearchButtonWrapper = muiStyled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const SearchField = muiStyled(TextField)(({ theme }) => ({
  width: '300px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));
