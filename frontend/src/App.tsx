import Stack from '@mui/material/Stack';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import responsiveFontSizes from '@mui/material/styles/responsiveFontSizes';
import AppBar from './components/AppBar';
import CustomSnackbarProvider from './components/CustomSnackbarProvider';
import { UploadPage } from './pages/UploadPage/index.page';
import { useAppTheme } from './providers/ThemeProvider';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  const { currentTheme } = useAppTheme();

  return (
    <Stack height="100%" bgcolor={currentTheme.palette.background.default}>
      <ThemeProvider theme={responsiveFontSizes(currentTheme)}>
        <CustomSnackbarProvider>
          <AppBar />
          <UploadPage />
        </CustomSnackbarProvider>
      </ThemeProvider>
    </Stack>
  );
}

export default App;
