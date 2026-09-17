import { Box, Container, Grid, Typography, Card } from '@mui/material';

const TESTIMONIALS = [
  {
    quote: '"Picked the car up on a Tuesday and was earning by Wednesday. No deposit drama, no waiting around."',
    role: 'Hilton - Manchester',
  },
  {
    quote: '"The car was reliable, the process was straightforward, and when an issue came up, they sorted it quickly. Exactly what you need when you rely on your car for work."',
    role: 'Ahmad - Birmingham',
  },
  {
    quote: '"Weekly hire meant I could try driving for Bolt without committing to a finance deal I wasn\'t sure about."',
    role: 'Mohammed - Liverpool',
  },
];

export default function Testimonials() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 1 }}>
            What drivers say
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Sample feedback — swap in real reviews from your own drivers before publishing.
          </Typography> */}
        </Box>
        <Grid container spacing={3}>
          {TESTIMONIALS.map((t) => (
            <Grid item xs={12} md={4} key={t.role}>
              <Card sx={{ p: 3.25, height: '100%', backgroundColor: '#ffffff', border: '1px solid', borderColor: 'divider' }}>
                <Typography sx={{ fontSize: 15, mb: 2.25 }}>{t.quote}</Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Driver review</Typography>
                <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>{t.role}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
