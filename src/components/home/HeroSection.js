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
          <Grid item xs={12} md={6}>
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
                {/* Placeholder for client logos */}
                {['Client 1', 'Client 2', 'Client 3', 'Client 4'].map((client, index) => (
                  <Box
                    key={index}
                    sx={{
                      height: 30,
                      width: 100,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: 1,
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
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
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
              >
                {/* Placeholder for hero image - replace with actual image in production */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h4" align="center" sx={{ px: 3 }}>
                    Hero Image Placeholder
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;