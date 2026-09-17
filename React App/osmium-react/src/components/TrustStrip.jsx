import { Box, Container, Stack, Typography } from '@mui/material';

const ITEMS = ['Uber ready', 'Bolt ready', 'Free Now ready', 'Fully maintained', 'Weekly hire'];

export default function TrustStrip() {
  return (
    <Box sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          rowGap={2}
          columnGap={5}
          sx={{ py: 3.25 }}
        >
          {ITEMS.map((item) => (
            <Stack key={item} direction="row" spacing={1.25} alignItems="center">
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'warning.main' }} />
              <Typography sx={{ color: '#EAF2EF', fontSize: 14, fontWeight: 500 }}>{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
