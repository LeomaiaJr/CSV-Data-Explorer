import { styled as muiStyled } from '@mui/material/styles';

export const FileWrapper = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '80%',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: theme.spacing(1),
  color: theme.palette.text.primary,

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: theme.spacing(3),
    borderRadius: 0,
  },
}));
