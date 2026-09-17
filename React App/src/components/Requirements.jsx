import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const REQUIREMENTS = [
  'Full UK or EU driving licence, held for at least 12 months',
  "Valid private hire driver licence for the council you'll operate under",
  'Enhanced DBS certificate, ideally on the update service',
  'Proof of address dated within the last 3 months',
  'No more than 6 penalty points on your licence',
  'Minimum age 21',
];

export default function Requirements() {
  return (
    <Box component="section" id="requirements" sx={{ py: { xs: 7, md: 11 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 7 }}>
          <Grid item xs={12} md={5}>
            <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 1 }}>
              What you'll need to hire with us
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 4 }}>
              A quick checklist before you call — have these ready and we can move fast.
            </Typography>
            <Stack spacing={2}>
              {REQUIREMENTS.map((req) => (
                <Stack key={req} direction="row" spacing={1.75} alignItems="flex-start">
                  <CheckCircleOutlineIcon sx={{ color: 'secondary.main', fontSize: 20, mt: 0.25, flexShrink: 0 }} />
                  <Typography sx={{ fontSize: 15.5 }}>{req}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ bgcolor: 'primary.main', color: '#fff', borderRadius: 3.5, p: 3.5 }}>
              <Typography sx={{ color: 'warning.main', fontSize: 15, fontWeight: 600, mb: 1.25 }}>
                Everything You Need to Get Moving
              </Typography>
              <Typography sx={{ fontSize: 14.5, color: '#CBD8D4', mb: 1.75 }}>
                Whether you're switching vehicles or starting your private hire journey, we're here to make things easier. Our team can help you explore available vehicles, understand the requirements and take the next step with confidence.
              </Typography>
              <Typography sx={{ fontSize: 14.5, color: '#CBD8D4' }}>
                Bring your documents to collection and we can usually get you moving same day..
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
