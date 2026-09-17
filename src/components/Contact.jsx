import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
  Alert,
} from '@mui/material';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const AREAS = ['Manchester', 'Liverpool', 'Sefton', 'Wolverhampton', 'Birmingham', 'Other'];
const CARS = ['Hyundai Ioniq', 'Toyota Prius', 'Not sure yet'];

const METHODS = [
  {
    icon: PhoneInTalkOutlinedIcon,
    title: '07506 017520',
    subtitle: 'Call or text, 7 days a week',
    href: 'tel:+447506017520',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    subtitle: '07506 017520 — fastest way to reach us',
    href: 'https://wa.me/447506017520?text=Hi%20Osmium%20Rentals%2C%20I%27d%20like%20to%20ask%20about%20weekly%20car%20hire',
  },
  {
    icon: EmailOutlinedIcon,
    title: 'info@taxi4rent.com',
    subtitle: 'For documents and longer questions',
    href: 'mailto:info@taxi4rent.com',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    area: 'Manchester',
    car: 'Hyundai Ioniq',
    phone: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' });

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitState({ status: 'sending', message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `Weekly hire enquiry from ${form.name}`,
          from_name: 'Taxi4Rent website',
          ...form,
        }),
      });
      const result = await response.json();

      if (!result.success) throw new Error(result.message);

      setForm({ name: '', area: 'Manchester', car: 'Hyundai Ioniq', phone: '', message: '' });
      setSubmitState({ status: 'success', message: 'Thanks, your enquiry has been sent.' });
    } catch {
      setSubmitState({
        status: 'error',
        message: 'Something went wrong. Please call or WhatsApp us instead.',
      });
    }
  };

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 7, md: 11 }, bgcolor: 'primary.main', color: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 }, mb: 1, color: '#fff' }}>
            Ready to get on the road?
          </Typography>
          <Typography sx={{ color: '#B9C8C4' }}>
            Call, WhatsApp or send a few details and we'll get back to you the same day.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 5, md: 7 }}>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {METHODS.map(({ icon: Icon, title, subtitle, href }) => (
                <Stack
                  key={title}
                  component="a"
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener' : undefined}
                  direction="row"
                  spacing={1.75}
                  alignItems="center"
                  sx={{
                    p: 2,
                    border: '1.5px solid #2A4450',
                    borderRadius: 3,
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '9px',
                      bgcolor: 'warning.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon sx={{ fontSize: 18, color: 'primary.main' }} />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 15, fontWeight: 600 }}>{title}</Typography>
                    <Typography sx={{ fontSize: 13.5, color: '#B9C8C4' }}>{subtitle}</Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                '& .MuiOutlinedInput-root': {
                  bgcolor: '#132E3B',
                  color: '#fff',
                  '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus': {
                    WebkitBoxShadow: '0 0 0 1000px #132E3B inset',
                    WebkitTextFillColor: '#fff',
                    caretColor: '#fff',
                    transition: 'background-color 9999s ease-out 0s',
                  },
                  '& fieldset': { borderColor: '#2A4450' },
                  '&:hover fieldset': { borderColor: '#3A5A66' },
                },
                '& .MuiInputLabel-root': { color: '#B9C8C4' },
                '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
                '& .MuiSelect-icon': { color: '#B9C8C4' },
              }}
            >
              <TextField
                label="Name"
                required
                value={form.name}
                onChange={handleChange('name')}
                fullWidth
              />
              <TextField
                select
                label="Which area are you based in?"
                value={form.area}
                onChange={handleChange('area')}
                fullWidth
              >
                {AREAS.map((area) => (
                  <MenuItem key={area} value={area}>
                    {area}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label="Which car are you interested in?"
                value={form.car}
                onChange={handleChange('car')}
                fullWidth
              >
                {CARS.map((car) => (
                  <MenuItem key={car} value={car}>
                    {car}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Phone number"
                required
                value={form.phone}
                onChange={handleChange('phone')}
                fullWidth
              />
              <TextField
                label="Anything else we should know?"
                multiline
                rows={3}
                value={form.message}
                onChange={handleChange('message')}
                fullWidth
              />
              {submitState.status !== 'idle' && submitState.status !== 'sending' && (
                <Alert severity={submitState.status} onClose={() => setSubmitState({ status: 'idle', message: '' })}>
                  {submitState.message}
                </Alert>
              )}
              <Button
                type="submit"
                variant="contained"
                color="warning"
                size="large"
                disabled={submitState.status === 'sending'}
              >
                {submitState.status === 'sending' ? 'Sending...' : 'Send enquiry'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
