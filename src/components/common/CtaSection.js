'use client';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CtaSection = ({ 
  title = "Ready to Elevate Your Digital Presence?", 
  description = "Let's discuss how we can help your business grow with our cutting-edge digital marketing strategies and custom software solutions.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  background = "gradient" // Options: "gradient", "primary", "paper"
}) => {
  const theme = useTheme();
  
  let backgroundStyles = {};
  
  switch (background) {
    case "gradient":
      backgroundStyles = {
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      };
      break;
    case "primary":
      backgroundStyles = {
        backgroundColor: theme.palette.primary.main,
      };
      break;
    case "paper":
      backgroundStyles = {
        backgroundColor: theme.palette.background.paper,
      };
      break;
    default:
      backgroundStyles = {
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      };
  }
  
  const isLight = background === "paper";
  
  return (
    <Box 
      sx={{ 
        py: { xs: 6, md: 10 },
        ...backgroundStyles
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={background === "paper" ? 1 : 0}
          sx={{
            py: { xs: 4, md: 6 },
            px: { xs: 3, md: 8 },
            textAlign: 'center',
            backgroundColor: background === "paper" ? theme.palette.background.paper : 'transparent',
            backgroundImage: background === "paper" ? 'none' : 'none',
            boxShadow: background === "paper" ? '0px 10px 30px rgba(0, 0, 0, 0.1)' : 'none',
            borderRadius: background === "paper" ? 3 : 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                mb: 2,
                color: isLight ? theme.palette.text.primary : theme.palette.text.white,
                fontWeight: 700,
              }}
            >
              {title}
            </Typography>
            
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 4, 
                maxWidth: '800px', 
                mx: 'auto',
                color: isLight ? theme.palette.text.secondary : 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {description}
            </Typography>
            
            <Button 
              variant="contained" 
              color={isLight ? "primary" : "secondary"}
              size="large" 
              component={Link}
              href={buttonLink}
              sx={{ 
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              {buttonText}
            </Button>
          </motion.div>
        </Paper>
      </Container>
    </Box>
  );
};

export default CtaSection;