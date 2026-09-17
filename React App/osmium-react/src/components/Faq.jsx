import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQS = [
  {
    q: 'Do I need my own private hire licence?',
    a: "Yes — you'll need a valid private hire driver licence for the council you're working under.",
  },
  {
    q: 'Is insurance included in the weekly price?',
    a: 'Hire and reward insurance is not included as standard. Confirm the exact terms and excess with us when you call, as these can vary by driver profile.',
  },
  {
    q: 'Is there a deposit?',
    a: 'Deposit requirements depend on your licence history and the vehicle you choose — ask us for current terms when you enquire.',
  },
  {
    q: 'What happens if the car breaks down?',
    a: "Call our support line and we'll arrange recovery or a replacement vehicle where possible, so you're off the road for as little time as we can manage.",
  },
  {
    q: 'Can I return the car if it\'s not working out?',
    a: 'Hire is weekly and rolling rather than a fixed-term contract. Give us notice and hand the car back — no early-exit penalty to buy out.',
  },
];

export default function Faq() {
  return (
    <Box component="section" id="faq" sx={{ py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 560, mb: 5 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 26, md: 36 } }}>
            Common questions
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 760 }}>
          {FAQS.map((item, i) => (
            <Accordion
              key={item.q}
              defaultExpanded={i === 0}
              disableGutters
              elevation={0}
              square
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
                '&:before': { display: 'none' },
                paddingLeft: { xs: 2, md: 3.5 },
                paddingRight: { xs: 2, md: 3.5 },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 0, py: 1 }}>
                <Typography sx={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16.5 }}>
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 0, pb: 2.5 }}>
                <Typography sx={{ color: 'text.secondary', fontSize: 15, maxWidth: '64ch' }}>
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
