import { Box, Container, Grid, Typography, Card, CardContent, Chip, Stack, Button } from '@mui/material';
import PhotoSlot from './PhotoSlot.jsx';
import ToyotaPrius2018 from '../assets/Toyota-Prius-2018-4.webp';
import HyundaiIoniq2019 from '../assets/Ioniq2.png';

const SPEC = ({ children }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'secondary.main' }} />
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {children}
    </Typography>
  </Stack>
);

export default function Fleet() {
  return (
    <Box component="section" id="fleet" sx={{ py: { xs: 7, md: 11 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 1 }}>
            Two cars, built for private hire
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Both models are hybrid or electric, ULEZ and Clean Air Zone compliant, and set up
            for Uber, Bolt and Free Now.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>

          {/* Hyundai Ioniq */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, height: '100%' }}>
              <CardContent sx={{ p: 0 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{ mb: 2.5 }}>
                  <Box>
                    <Typography variant="h5" sx={{ fontSize: 22 }}>
                      Hyundai Ioniq
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      2019 &amp; 2023 · Hybrid / Electric · 5-seat · Automatic
                    </Typography>
                  </Box>
                  <Chip label="Available" sx={{ bgcolor: '#00b67af2', border: '1px solid', borderColor: 'divider', color: 'white' }} />
                </Stack>

                <PhotoSlot label="2019 Hyundai Ioniq — Red" src={HyundaiIoniq2019} sx={{ mb: 2.5 }} />

                <Grid container spacing={1.25} sx={{ mb: 2.5 }}>
                  <Grid item xs={6}><SPEC>Automatic transmission</SPEC></Grid>
                  <Grid item xs={6}><SPEC>Hybrid &amp; electric options</SPEC></Grid>
                  <Grid item xs={6}><SPEC>Modern infotainment</SPEC></Grid>
                  <Grid item xs={6}><SPEC>ULEZ &amp; CAZ compliant</SPEC></Grid>
                  <Grid item xs={6}><SPEC>Sefton Council</SPEC></Grid>
                </Grid>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2.5 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Available in:</Typography>
                  <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: '#B0231E', border: '1.5px solid', borderColor: 'divider' }} title="Red (2019)" />
                  <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: '#043053', border: '1.5px solid', borderColor: 'divider' }} title="Black (2023)" />
                </Stack>

                <Button variant="contained" color="warning" fullWidth href="#contact">
                  Ask about the Ioniq
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Toyota Prius */}
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 4, height: '100%' }}>
              <CardContent sx={{ p: 0 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{ mb: 2.5 }}>
                  <Box>
                    <Typography variant="h5" sx={{ fontSize: 22 }}>
                      Toyota Prius
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      2018 · Hybrid · 5-seat · Automatic
                    </Typography>
                  </Box>
                  <Chip label="Unavailable" sx={{ bgcolor: '#000435', border: '1px solid', borderColor: 'divider', color: 'white' }} />
                </Stack>

                <PhotoSlot label="2018 Toyota Prius — Silver" src={ToyotaPrius2018} sx={{ mb: 2.5 }} />

                <Grid container spacing={1.25} sx={{ mb: 2.5 }}>
                  <Grid item xs={6}><SPEC>Automatic transmission</SPEC></Grid>
                  <Grid item xs={6}><SPEC>Excellent fuel economy</SPEC></Grid>
                  <Grid item xs={6}><SPEC>Large boot space</SPEC></Grid>
                  <Grid item xs={6}><SPEC>ULEZ &amp; CAZ compliant</SPEC></Grid>
                  <Grid item xs={6}><SPEC>Wolverhampton Council</SPEC></Grid>
                </Grid>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2.5 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Available in:</Typography>
                  <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: '#C7CCCE', border: '1.5px solid', borderColor: 'divider' }} title="Silver" />
                </Stack>

                <Button variant="contained" color="warning" fullWidth href="#contact" disabled>
                  Ask about the Prius
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
