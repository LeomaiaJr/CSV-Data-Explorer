import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface DataCardProps {
  data: Record<string, string>;
}

export const DataCard = ({ data }: DataCardProps) => {
  const formatKey = (key: string) => {
    return key
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent
        sx={{
          gap: 1.5,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {Object.entries(data).map(([key, value]) => (
          <Box key={key}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
              {formatKey(key)}
            </Typography>
            <Typography variant="h5" component="div">
              {value}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};
