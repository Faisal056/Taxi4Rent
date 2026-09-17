import { Box, Typography } from '@mui/material';

/**
 * Displays a real photo when `src` is provided.
 * Falls back to a labelled placeholder (dashed border) when it isn't,
 * so missing fleet photos are obvious rather than a broken image icon.
 */
export default function PhotoSlot({ src, alt, label, aspectRatio = '16/10', sx = {} }) {
  if (src) {
    return (
      <Box
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          aspectRatio,
          ...sx,
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        borderRadius: 3,
        aspectRatio,
        border: '1.5px dashed #B9C8C2',
        backgroundImage:
          'repeating-linear-gradient(135deg, #F1F5F2 0 14px, #E7ECE8 14px 28px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
        ...sx,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          fontWeight: 500,
          bgcolor: 'rgba(255,255,255,0.85)',
          borderRadius: 2,
          px: 2,
          py: 1,
        }}
      >
        Add photo here
        <br />
        {label}
      </Typography>
    </Box>
  );
}
