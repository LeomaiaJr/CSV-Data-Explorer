import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import SnackbarUtils from '../../utils/SnackbarUtils';
import {
  CustomTypography,
  DropArea,
  FileDataWrapper,
  IconWrapper,
} from './styles';

interface DragNDropProps {
  setFile: (file: File | undefined) => void;
  file?: File;
}

const DragNDrop = ({ setFile, file }: DragNDropProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file && file.name.endsWith('.csv')) setFile(file);
    else
      SnackbarUtils.error(
        'Invalid file extension, only .csv files are accepted'
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
    },
  });

  return (
    <>
      {file === undefined ? (
        <DropArea active={isDragActive ? 'true' : 'false'} {...getRootProps()}>
          <input {...getInputProps()} />
          <UploadFileIcon
            sx={{
              width: '50px',
              height: '50px',
            }}
          />
          <Typography mt={1} variant="h6" fontWeight={700} textAlign="center">
            Select a CSV file to upload
          </Typography>
          <Typography
            sx={{
              opacity: 0.6,
            }}
            mt={0.5}
          >
            or drag and drop it here
          </Typography>
        </DropArea>
      ) : (
        <FileDataWrapper>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            maxWidth="80%"
          >
            <IconWrapper>
              <InsertDriveFileIcon />
            </IconWrapper>
            <CustomTypography ml={2} variant="h5">
              {file.name}
            </CustomTypography>
          </Box>
          <div>
            <IconButton
              onClick={() => {
                setFile(undefined);
              }}
              sx={{
                marginRight: '16px',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
              }}
            >
              <DeleteIcon
                sx={{
                  color: '#f44336',
                  width: '32px',
                  height: '32px',
                }}
              />
            </IconButton>
          </div>
        </FileDataWrapper>
      )}
    </>
  );
};

export default DragNDrop;
