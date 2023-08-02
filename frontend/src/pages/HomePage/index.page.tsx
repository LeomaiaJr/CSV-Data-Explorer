import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import DragNDrop from '../../components/DragNDrop/DragNDrop';
import { FileWrapper } from './styles';
import SnackbarUtils from '../../utils/SnackbarUtils';
import CSVService from '../../api/services/CSVService';
import { SearchData } from './components/SearchData/SearchData';

export const HomePage = () => {
  const [file, setFile] = useState<File | undefined>(undefined);

  const [uploading, setUploading] = useState(false);
  const [upload, setUpload] = useState(false);

  const handleUpload = async () => {
    try {
      setUpload(false);
      setUploading(true);
      const payload = new FormData();
      payload.append('csvFile', file as File);
      await CSVService.sendFile(payload);
      setUpload(true);
      SnackbarUtils.success('File uploaded successfully');
    } catch {
      SnackbarUtils.error('Error while uploading file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <Stack height="100%" alignItems="center">
      <FileWrapper>
        <Typography variant="h6" fontWeight={700}>
          Upload file
        </Typography>
        <DragNDrop file={file} setFile={setFile} />

        <Box mt={1} display="flex" justifyContent="end">
          <Button
            data-testid="upload-button"
            variant="contained"
            disabled={file === undefined}
            onClick={handleUpload}
          >
            Upload
            {uploading && (
              <CircularProgress
                sx={{
                  color: 'white',
                  marginLeft: 1,
                }}
                size={20}
              />
            )}
          </Button>
        </Box>
      </FileWrapper>

      {upload && <SearchData />}
    </Stack>
  );
};
