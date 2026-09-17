import { Box, Container, Grid, Typography } from '@mui/material';

const STEPS = [
  { num: '01', title: 'Enquire', body: "Call or WhatsApp us with your licence details and which region you're plated in." },
  { num: '02', title: 'Get verified', body: 'We check your private hire and driving licence, and confirm which car fits your area.' },
  { num: '03', title: 'Collect your car', body: 'Pick up from your nearest hub, fully maintained and ready to switch your apps on.' },
  { num: '04', title: 'Start earning', body: 'Pay weekly, swap or return with notice — no long-term contract tying you in.' },
];

export default function HowItWorks() {
  return (
    <Box component="section" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 1 }}>
            From enquiry to earning, in four steps
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            No paperwork chase, no waiting weeks for a car.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {STEPS.map((step, i) => (
            <Grid item xs={12} sm={6} md={3} key={step.num}>
              <Box
                sx={{
                  pr: { md: i < STEPS.length - 1 ? 3 : 0 },
                  borderRight: { md: i < STEPS.length - 1 ? '1px solid' : 'none' },
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: 'secondary.main', mb: 1.5 }}>
                  {step.num}
                </Typography>
                <Typography variant="h6" sx={{ fontSize: 18, mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {step.body}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
