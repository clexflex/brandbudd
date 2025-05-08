'use client';
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function LoveCountdown() {
  const theme = useTheme();
  const targetDate = new Date('2025-05-10T09:05:00');
  const [timeLeft, setTimeLeft] = useState({});
  const [windowHeight, setWindowHeight] = useState(500);
  const [isMounted, setIsMounted] = useState(false);

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor((difference % 1000) / 10), // Get milliseconds in 2-digit format
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    setIsMounted(true);
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 10); // Update more frequently for milliseconds

    return () => clearInterval(timer);
  }, [isMounted, calculateTimeLeft]); // Added calculateTimeLeft to the dependency array

  const heartbeatVariants = {
    beat: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timeDigits = { 
    fontSize: { xs: '2.5rem', md: '3.5rem' }, 
    fontWeight: 700, 
    fontFamily: 'var(--font-playfair)'
  };
  
  const timeLabels = { 
    fontSize: { xs: '0.9rem', md: '1.1rem' }, 
    color: 'rgba(255, 255, 255, 0.8)', 
    textTransform: 'uppercase', 
    letterSpacing: 2 
  };
  
  const msDigits = { 
    fontSize: { xs: '1.5rem', md: '2rem' }, 
    fontWeight: 600, 
    fontFamily: 'var(--font-playfair)'
  };
  
  // Background gradient with a romantic feel
  const bgGradient = `linear-gradient(135deg, 
    ${theme.palette.primary.dark}, 
    #ad1457, 
    #5c007a)`;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        background: bgGradient,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Floating hearts background - only render on client side */}
      {isMounted && [...Array(20)].map((_, i) => (
        <Box
          key={i}
          component={motion.div}
          initial={{ y: Math.random() * 100 + 100, x: Math.random() * 100, opacity: 0.2 + Math.random() * 0.3 }}
          animate={{ 
            y: [-20, -windowHeight],
            x: [Math.random() * 20 - 10, Math.random() * 20 - 10],
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 10,
          }}
          sx={{
            position: 'absolute',
            color: 'rgba(255, 255, 255, 0.15)',
            zIndex: 0,
          }}
        >
          <FavoriteIcon sx={{ fontSize: 10 + Math.random() * 30 }} />
        </Box>
      ))}
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container direction="column" alignItems="center" spacing={5}>
          <Grid item>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  mb: 1,
                  fontFamily: 'var(--font-playfair)',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  fontSize: { xs: '2rem', md: '3rem' },
                }}
              >
                Counting Down Until We Meet
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  textAlign: 'center',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: 400,
                  mb: 4,
                  fontFamily: 'var(--font-lato)',
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                Jaipur to Kota | Until our hearts reunite on May 10th, 9:05 AM
              </Typography>
            </motion.div>
          </Grid>
          
          <Grid item sx={{ width: '100%' }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Paper 
                elevation={8} 
                sx={{ 
                  p: { xs: 3, md: 5 },
                  borderRadius: 4,
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  {/* Days */}
                  <Grid item size={{ xs: 6, sm: 3 }}>
                    <Box 
                      sx={{ 
                        textAlign: 'center',
                        p: 2,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h2" color="white" sx={timeDigits}>
                        {String(timeLeft.days || 0).padStart(2, '0')}
                      </Typography>
                      <Typography variant="body1" sx={timeLabels}>
                        Days
                      </Typography>
                    </Box>
                  </Grid>
                  
                  {/* Hours */}
                  <Grid item size={{ xs: 6, sm: 3 }}>
                    <Box 
                      sx={{ 
                        textAlign: 'center',
                        p: 2,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h2" color="white" sx={timeDigits}>
                        {String(timeLeft.hours || 0).padStart(2, '0')}
                      </Typography>
                      <Typography variant="body1" sx={timeLabels}>
                        Hours
                      </Typography>
                    </Box>
                  </Grid>
                  
                  {/* Minutes */}
                  <Grid item size={{ xs: 6, sm: 3 }}>
                    <Box 
                      sx={{ 
                        textAlign: 'center',
                        p: 2,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h2" color="white" sx={timeDigits}>
                        {String(timeLeft.minutes || 0).padStart(2, '0')}
                      </Typography>
                      <Typography variant="body1" sx={timeLabels}>
                        Minutes
                      </Typography>
                    </Box>
                  </Grid>
                  
                  {/* Seconds */}
                  <Grid item size={{ xs: 6, sm: 3 }}>
                    <Box 
                      sx={{ 
                        textAlign: 'center',
                        p: 2,
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.1)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h2" color="white" sx={timeDigits}>
                        {String(timeLeft.seconds || 0).padStart(2, '0')}
                      </Typography>
                      <Typography variant="body1" sx={timeLabels}>
                        Seconds
                      </Typography>
                    </Box>
                  </Grid>
                <Grid item size={{ xs: 6, sm: 3 }}>
                {/* Milliseconds in a special format below */}
                <Box 
                  sx={{ 
                    textAlign: 'center',
                    p: 2,
                    borderRadius: 3,
                    background: 'rgba(255, 255, 255, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h2" color="white" sx={msDigits}>
                    {String(timeLeft.milliseconds || 0).padStart(2, '0')}
                  </Typography>
                  <Typography variant="body1" sx={{...timeLabels}}>
                    Centiseconds
                  </Typography>
                </Box>
                </Grid>
                </Grid>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item>
            <motion.div
              animate="beat"
              variants={heartbeatVariants}
            >
              <FavoriteIcon 
                sx={{ 
                  fontSize: { xs: 48, md: 64 }, 
                  color: '#ff4081',
                  filter: 'drop-shadow(0 0 10px rgba(255, 64, 129, 0.7))',
                }} 
              />
            </motion.div>
          </Grid>
          
          <Grid item>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  textAlign: 'center',
                  color: 'white',
                  fontFamily: 'var(--font-dancing)',
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  maxWidth: '600px',
                  mx: 'auto',
                  fontStyle: 'italic',
                  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                }}
              >
                &ldquo;Every moment brings us closer to when our hearts reunite...&rdquo;
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}