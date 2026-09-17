import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';

const NAV_LINKS = [
  { label: 'Fleet', href: '#fleet' },
  { label: 'Why us', href: '#why' },
  { label: 'Requirements', href: '#requirements' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
      }}
    >
      <Toolbar sx={{ maxWidth: 1160, width: '100%', mx: 'auto', px: { xs: 2, md: 3.5 }, py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexGrow: 1 }}>
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
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', mr: 4 }}>
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.href}
                component="a"
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                sx={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'text.secondary',
                  cursor: 'pointer',
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {link.label}
              </Typography>
            ))}
          </Box>
        )}

        {!isMobile ? (
          <Box sx={{ display: 'flex', gap: 1.25 }}>
            <Button variant="outlined" color="inherit" href="tel:+447506017520" sx={{ borderColor: 'divider' }}>
              07506 017520
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => scrollTo('#contact')}
            >
              Get a car
            </Button>
          </Box>
        ) : (
          <IconButton onClick={() => setOpen(true)} aria-label="Open menu">
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItemButton key={link.href} onClick={() => scrollTo(link.href)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href="tel:+447506017520">
              <ListItemText primary="Call 07506 017520" />
            </ListItemButton>
            <ListItemButton onClick={() => scrollTo('#contact')}>
              <ListItemText primary="Get a car" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
