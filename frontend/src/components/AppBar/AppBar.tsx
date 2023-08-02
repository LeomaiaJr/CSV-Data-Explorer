import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { FunctionComponent } from 'react';
import ThemeSelector from '../ThemeSelector/ThemeSelector';
import { Title, TitleWrapper } from './styles';

const AppBar: FunctionComponent = () => {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <TitleWrapper>
          <Title variant="h6">CSV Data Explorer</Title>
        </TitleWrapper>

        <Box position="absolute" right={16}>
          <ThemeSelector />
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
