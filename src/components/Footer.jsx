import { Box, Container, Typography, Stack } from '@mui/material';

const LINKS = [
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why us', href: '#why' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={3}
        >
          <Stack direction="row" alignItems="center" spacing={1.25}>
            <Box
              sx={{
                width: 34,
                height: 34,
                borderRadius: '9px',
                bgcolor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: 'warning.main', fontWeight: 700, fontSize: 18 }}>O</Typography>
            </Box>
            <Typography variant="h6" sx={{ fontSize: 19 }}>
              Osmium Rentals
            </Typography>
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={3}>
            {LINKS.map((link) => (
              <Typography
                key={link.href}
                component="a"
                href={link.href}
                sx={{ fontSize: 14, color: 'text.secondary', textDecoration: 'none' }}
              >
                {link.label}
              </Typography>
            ))}
          </Stack>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          spacing={1.5}
          sx={{ mt: 4.5, pt: 2.5, borderTop: '1px solid', borderColor: 'divider' }}
        >
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            © 2026 Osmium Rentals. All rights reserved.
          </Typography>
          <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
            Manchester · Liverpool · Sefton · Wolverhampton · Birmingham
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
