'use client';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Button,
  TextField,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.white,
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.text.white
                }}
              >
                BRANDBUDD
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.light }}>
                Transforming businesses through innovative digital marketing strategies and custom software solutions.
              </Typography>
              <Stack direction="row" spacing={1}>
                <a href={"https://www.facebook.com/brandbudd/"} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="facebook"
                    sx={{
                      color: theme.palette.text.light,
                      '&:hover': { color: theme.palette.primary.light },
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                </a>
                <a href={"#"} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="twitter"
                    sx={{
                      color: theme.palette.text.light,
                      '&:hover': { color: theme.palette.primary.light },
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                </a>
                <a href={"https://www.linkedin.com/company/brandbudd/"} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="linkedin"
                    sx={{
                      color: theme.palette.text.light,
                      '&:hover': { color: theme.palette.primary.light },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </a>
                <a href={"https://www.instagram.com/brand_budd"} target="_blank" rel="noopener noreferrer">
                  <IconButton
                    aria-label="instagram"
                    sx={{
                      color: theme.palette.text.light,
                      '&:hover': { color: theme.palette.primary.light },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </a>

              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Services
              </Typography>
              <Stack spacing={1.5}>
                {['Digital Marketing', 'Web Development', 'SEO Services', 'Content Creation', 'UI/UX Design'].map((item) => (
                  <MuiLink
                    key={item}
                    component={Link}
                    href={`/services#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    sx={{
                      color: theme.palette.text.light,
                      textDecoration: 'none',
                      '&:hover': { color: theme.palette.primary.light },
                    }}
                  >
                    {item}
                  </MuiLink>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Products
              </Typography>
              <Stack spacing={1.5}>
                {[
                  ['TeamSync', '/products/teamsync'],
                  ['ExcelFlow360', '/products/excelflow360'],
                  ['Portfolio', '/portfolio'],
                  ['Case Studies', '/portfolio#case-studies'],
                ].map(([label, url]) => (
                  <MuiLink
                    key={label}
                    component={Link}
                    href={url}
                    sx={{
                      color: theme.palette.text.light,
                      textDecoration: 'none',
                      '&:hover': { color: theme.palette.primary.light },
                    }}
                  >
                    {label}
                  </MuiLink>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h6"
                component="div"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                }}
              >
                Subscribe to Our Newsletter
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.light }}>
                Stay updated with our latest news, tips, and special offers.
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <TextField
                  fullWidth
                  placeholder="Your email address"
                  variant="outlined"
                  size="small"
                  sx={{
                    mr: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 1,
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '& input': {
                        color: theme.palette.text.white,
                      }
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ whiteSpace: 'nowrap' }}
                >
                  Subscribe
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" color="text.light">
              © {currentYear} BrandBudd. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: { md: 'flex-end' } }}>
              <MuiLink
                component={Link}
                href="/privacy-policy"
                sx={{
                  color: theme.palette.text.light,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.light },
                  fontSize: '0.875rem',
                }}
              >
                Privacy Policy
              </MuiLink>
              <MuiLink
                component={Link}
                href="/terms-of-service"
                sx={{
                  color: theme.palette.text.light,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.light },
                  fontSize: '0.875rem',
                }}
              >
                Terms of Service
              </MuiLink>
              <MuiLink
                component={Link}
                href="/contact"
                sx={{
                  color: theme.palette.text.light,
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.light },
                  fontSize: '0.875rem',
                }}
              >
                Contact Us
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;