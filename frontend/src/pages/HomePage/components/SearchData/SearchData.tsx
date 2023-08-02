import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { SearchButtonWrapper, SearchField } from './styles';
import { useState } from 'react';
import SnackbarUtils from '../../../../utils/SnackbarUtils';
import CSVService from '../../../../api/services/CSVService';
import { DataCard } from '../../../../components/DataCard/DataCard';
import Grid from '@mui/material/Grid';
import FolderOffIcon from '@mui/icons-material/FolderOff';
import { useAppTheme } from '../../../../providers/ThemeProvider';
import { LoadingDataCard } from '../../../../components/LoadingDataCard/LoadingDataCard';

export const SearchData = () => {
  const { currentTheme } = useAppTheme();

  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);

  const [query, setQuery] = useState('');
  const [data, setData] = useState<Record<string, string>[]>([]);

  const handleSearch = async () => {
    if (query.trim() === '' || loading) return;

    try {
      setLoad(false);
      setLoading(true);
      const res = await CSVService.search(query.trim());
      setData(res);
      setLoad(true);
    } catch {
      SnackbarUtils.error('Error while searching data');
    } finally {
      setLoading(false);
    }
  };

  const disabledSearch = query === '' || loading;

  return (
    <Stack width="100%" p={4}>
      <Typography
        variant="h6"
        fontWeight={700}
        color={currentTheme.palette.text.primary}
      >
        Search data on file:
      </Typography>
      <Box mt={2} display="flex" alignItems="center" gap={2}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <SearchField
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="filled-basic"
            label="Search"
            variant="filled"
            placeholder="Query"
          />
        </form>
        <SearchButtonWrapper onClick={handleSearch} disabled={disabledSearch}>
          <SearchIcon />
        </SearchButtonWrapper>
      </Box>

      {load && data.length > 0 && (
        <Stack mt={4}>
          <Grid container spacing={2}>
            {data.map((row, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <DataCard data={row} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}

      {loading && (
        <Stack mt={4}>
          <Grid container spacing={2}>
            {Array.from(Array(6).keys()).map((_, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <LoadingDataCard />
              </Grid>
            ))}
          </Grid>
        </Stack>
      )}

      {load && data.length === 0 && (
        <Stack mt={6} alignItems="center">
          <FolderOffIcon
            sx={{ color: currentTheme.palette.text.primary, fontSize: 100 }}
          />
          <Typography
            mt={1}
            variant="h6"
            fontWeight={700}
            color={currentTheme.palette.text.primary}
          >
            No data found
          </Typography>
          <Typography variant="body1" color="gray">
            Try another query or upload another file
          </Typography>
        </Stack>
      )}
    </Stack>
  );
};
