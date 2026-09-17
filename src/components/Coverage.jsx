import { Box, Container, Typography, Chip, Stack } from '@mui/material';

const AREAS = ['Manchester', 'Liverpool', 'Sefton', 'Wolverhampton', 'Birmingham'];

export default function Coverage() {
  return (
    <Box component="section" id="coverage" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 4 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 1 }}>
            Where we operate
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Covering Key Metropolitan Councils Across the North West & Midlands.
          </Typography>
        </Box>
        <Stack direction="row" flexWrap="wrap" gap={1.5}>
          {AREAS.map((area) => (
            <Chip
              key={area}
              icon={<Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', ml: 1.5 }} />}
              label={area}
              variant="outlined"
              sx={{ px: 1, py: 2.5, fontSize: 14.5, borderColor: 'divider' }}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
