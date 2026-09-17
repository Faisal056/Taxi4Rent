import { Box, Container, Typography, Button, Stack } from '@mui/material';
import PhotoSlot from './PhotoSlot.jsx';
import ioniqBlack from '../assets/ioniq-2023-black.jpg';

const STATS = [
  { value: '5 regions', label: 'Manchester to Birmingham' },
  { value: '2 models', label: 'Prius & Ioniq, ready to plate' },
  { value: '7 days', label: 'Weekly hire' },
];

export default function Hero() {
  return (
    <Box component="section" sx={{ pt: { xs: 6, md: 9 }, pb: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' },
            gap: { xs: 5, md: 7 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <Typography variant="h1" sx={{ fontSize: { xs: 34, sm: 42, md: 54 }, mb: 2 }}>
              Weekly hire cars built for the long shift.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 18, color: 'text.secondary', maxWidth: '46ch', mb: 3.5 }}>
              Private Hire Licenced Fully Maintained Toyota Prius and Hyundai Ioniq, ready for Uber, Bolt and Free Now.
              Collect this week, Unlimited Mileage, No surprises.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} sx={{ mb: 4 }}>
              <Button variant="contained" color="primary" href="tel:+447506017520">
                Call 07506 017520
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                sx={{ borderColor: 'divider', color: 'text.primary' }}
                href="https://wa.me/447506017520?text=Hi%20Osmium%20Rentals%2C%20I%27d%20like%20to%20ask%20about%20weekly%20car%20hire"
                target="_blank"
                rel="noopener"
              >
                Chat on WhatsApp
              </Button>
            </Stack>
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 4 }}
              flexWrap="wrap"
              sx={{ pt: 3, borderTop: '1px solid', borderColor: 'divider' }}
            >
              {STATS.map((stat) => (
                <Box key={stat.value}>
                  <Typography variant="h6" sx={{ fontSize: 22 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          <Box sx={{ order: { xs: 1, md: 2 }, position: 'relative' }}>
            <PhotoSlot
              src={ioniqBlack}
              alt="2023 Hyundai Ioniq, black, Osmium Rentals"
              label="2023 Hyundai Ioniq — Black"
              aspectRatio={{ xs: '16/10', md: '4/3' }}
              sx={{ boxShadow: 'none' }}
            />
            <Box
              sx={{
                position: 'absolute',
                left: 18,
                bottom: 18,
                bgcolor: 'rgba(14,36,48,0.85)',
                color: '#fff',
                px: 2,
                py: 1,
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 500,
              }}
            >
              2023 Hyundai Ioniq · Black
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
