import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useAppTheme } from '../../providers/ThemeProvider';

export const LoadingDataCard = () => {
  const { theme } = useAppTheme();

  const getWidth = (start: number, variation: number) => {
    const base = start;

    const random = Math.floor(Math.random() * variation);
    return `${base + random}px`;
  };

  const bgcolor = theme === 'dark' ? 'grey.900' : 'grey.300';

  return (
    <Stack
      height="280px"
      sx={{
        borderRadius: 1,
        bgcolor,
      }}
      p={2}
      gap={1}
    >
      {Array.from(Array(4).keys()).map((_, index) => (
        <Stack key={index}>
          <Skeleton role="status" height="21px" width={getWidth(80, 20)} />
          <Skeleton role="status" height="32px" width={getWidth(160, 80)} />
        </Stack>
      ))}
    </Stack>
  );
};
