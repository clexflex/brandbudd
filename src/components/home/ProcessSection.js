'use client';
import { Box, Container, Grid, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your business, goals, and challenges through in-depth discussions and research.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Based on our findings, we develop a customized strategy tailored to your unique business needs and objectives.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Our creative team designs engaging, user-friendly experiences that align with your brand identity and business goals.',
  },
  {
    number: '04',
    title: 'Development',
    description: 'We build robust, scalable solutions using cutting-edge technologies and best development practices.',
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Rigorous testing ensures your solution works flawlessly across all devices and platforms before launch.',
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'We handle the deployment process and provide ongoing support to ensure continued success post-launch.',
  },
];

const ProcessSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Box sx={{ 
      py: { xs: 8, md: 12 },
      width: '100%',
      backgroundColor: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl">
        <SectionTitle
          title="Our Process"
          subtitle="We follow a proven, systematic approach to deliver successful projects that meet your business objectives."
        />
        
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item  size={{ xs: 12, sm: 6, md: 4 }}   key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 3,
                    position: 'relative',
                    overflow: 'visible',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -20,
                      left: 20,
                      width: 60,
                      height: 60,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      borderRadius: '50%',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                      zIndex: 1,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="span"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                      }}
                    >
                      {step.number}
                    </Typography>
                  </Box>
                  
                  <CardContent sx={{ pt: 5, px: 4, pb: 4 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        fontWeight: 600,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                    >
                      {step.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProcessSection;