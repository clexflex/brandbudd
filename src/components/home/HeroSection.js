'use client';
import { Box, Container, Typography, Button, Grid, Hidden } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: theme.palette.background.dark,
        color: theme.palette.text.white,
        overflow: 'hidden',
        pt: { xs: '120px', md: '160px' },
        pb: { xs: '80px', md: '120px' },
      }}
    >
      {/* Background graphic elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.6) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                }}
              >
                Elevate Your Digital Presence
              </Typography>

              <Typography
                variant="h4"
                component="p"
                sx={{
                  mb: 4,
                  fontWeight: 400,
                  color: 'rgba(255, 255, 255, 0.85)',
                }}
              >
                Strategic marketing solutions and custom software development to transform your business
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 4 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href="/contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="large"
                  component={Link}
                  href="/portfolio"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.light,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  View Portfolio
                </Button>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Trusted by innovative companies across industries
              </Typography>

              {/* Client logos would go here */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 4,
                  mt: 2,
                  alignItems: 'center',
                  opacity: 0.6,
                }}
              >
                {[
                  { src: '/images/clients/client-1.webp', name: 'Client 1' },
                  { src: '/images/clients/client-2.png', name: 'Client 2' },
                  { src: '/images/clients/client-3.png', name: 'Client 3' },
                  { src: '/images/clients/client-4.png', name: 'Client 4' },
                  { src: '/images/clients/client-5.png', name: 'Client 5' },
                  { src: '/images/clients/client-7.png', name: 'Client 7' },
                  { src: '/images/clients/client-8.png', name: 'Client 8' },
                  { src: '/images/clients/client-9.png', name: 'Client 9' },
                  { src: '/images/clients/client-8.webp', name: 'Client 10' },
                  { src: '/images/clients/client-14.svg', name: 'Client 12' },
                  { src: '/images/clients/client-20.png', name: 'Client 13' },
                  { src: '/images/clients/client-22.webp', name: 'Client 14' },
                  { src: '/images/clients/client-23.webp', name: 'Client 15' },
                  { src: '/images/clients/client-24.jpg', name: 'Client 16' },
                  { src: '/images/clients/client-25.jpg', name: 'Client 17' },
                  { src: '/images/clients/client-26.png', name: 'Client 18' },
                  { src: '/images/clients/client-27.jpg', name: 'Client 19' },
                  { src: '/images/clients/client-30.png', name: 'Client 20' },
                  { src: '/images/clients/client-32.png', name: 'Client 21' },
                  { src: '/images/clients/client-33.webp', name: 'Client 22' },
                  { src: '/images/clients/client-35.png', name: 'Client 23' },
                  { src: '/images/clients/client-36.webp', name: 'Client 25' },
                  { src: '/images/clients/client-37.png', name: 'Client 26' },
                  { src: '/images/clients/client-38.png', name: 'Client 27' },
                ].map((client, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: 'relative',
                      height: 30,
                      width: 100,
                      borderRadius: 1,
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={client.src}
                      alt={`${client.name} logo`}
                      fill
                      style={{ objectFit: 'contain' }}
                      sizes="100px"
                    />
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', sm: '400px', md: '500px' },
                  width: '100%',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >

                <Image
                  src="/images/hero/hero2.png"
                  alt="Digital marketing and software development services by BrandBudd"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  quality={90}
                />
              </Box>

            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;