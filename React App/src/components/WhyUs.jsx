import { Box, Container, Grid, Typography, Card } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';

const ITEMS = [
  { icon: VerifiedUserOutlinedIcon, title: 'Fully maintained', body: 'Every car is licensed for Private Hire work and matched to the right council for your PHV driver licence.' },
  { icon: BuildOutlinedIcon, title: 'Servicing & MOT included', body: 'We keep the car road-legal and maintained — you focus on driving, not garage bookings.' },
  { icon: EventRepeatOutlinedIcon, title: 'No long-term contract', body: 'Weekly rolling hire. Give us notice and hand the car back — nothing to buy out.' },
  { icon: SwapHorizOutlinedIcon, title: 'Easy vehicle swap', body: "Need a different car for a period off the road? We'll sort a swap where we can." },
  { icon: SupportAgentOutlinedIcon, title: 'Support when you need it', body: 'A direct number and WhatsApp line for breakdowns, questions or account changes.' },
  { icon: PhoneIphoneOutlinedIcon, title: 'App-ready from day one', body: 'Vehicles plated and set up so you can switch Uber, Bolt or Free Now on straight away.' },
];

export default function WhyUs() {
  return (
    <Box component="section" id="why" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 1 }}>
            Everything a driver shouldn't have to think about
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            We handle the running costs so your week's earnings stay yours.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {ITEMS.map(({ icon: Icon, title, body }) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Card sx={{ p: 3.25, height: '100%' }}>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: '10px',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                  }}
                >
                  <Icon sx={{ fontSize: 20, color: 'warning.main' }} />
                </Box>
                <Typography variant="h6" sx={{ fontSize: 17, mb: 0.75 }}>
                  {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {body}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
