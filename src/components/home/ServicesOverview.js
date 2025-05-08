'use client';
import { Box, Container, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import BrushIcon from '@mui/icons-material/Brush';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';

const services = [
  {
    id: 1,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive traffic, engagement, and conversions to boost your online presence.',
    icon: <TrendingUpIcon fontSize="large" />,
    link: '/services#digital-marketing',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom-built, responsive websites and web applications tailored to your specific business needs.',
    icon: <CodeIcon fontSize="large" />,
    link: '/services#web-development',
  },
  {
    id: 3,
    title: 'SEO Services',
    description: 'Comprehensive search engine optimization to improve visibility and organic traffic to your site.',
    icon: <SearchIcon fontSize="large" />,
    link: '/services#seo-services',
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centric design that creates intuitive, engaging, and visually appealing digital experiences.',
    icon: <BrushIcon fontSize="large" />,
    link: '/services#ui-ux-design',
  },
  {
    id: 5,
    title: 'Content Creation',
    description: 'Compelling content that tells your brand story and resonates with your target audience.',
    icon: <LanguageIcon fontSize="large" />,
    link: '/services#content-creation',
  },
  {
    id: 6,
    title: 'Software Development',
    description: 'Custom software solutions designed to streamline operations and solve business challenges.',
    icon: <SettingsIcon fontSize="large" />,
    link: '/services#software-development',
  },
];

const ServicesOverview = () => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        width: '100%',
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="xl">
        <SectionTitle
          title="Our Services"
          subtitle="We provide comprehensive digital solutions tailored to your business goals, from marketing strategies to custom software development."
        />
        
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6 }}  key={service.id}>
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
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                  component={Link}
                  href={service.link}
                >
                  <Box
                    sx={{
                      height: 8,
                      width: '100%',
                      background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    }}
                  />
                  <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          color: theme.palette.primary.main,
                          mr: 2,
                          mt: 0.5,
                        }}
                      >
                        {service.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </Typography>
                    </Box>
                    
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3, flexGrow: 1 }}
                    >
                      {service.description}
                    </Typography>
                    
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        mt: 'auto',
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          color: theme.palette.primary.main,
                          mr: 1,
                          fontWeight: 600,
                        }}
                      >
                        Learn More
                      </Typography>
                      <IconButton
                        size="small"
                        sx={{
                          color: theme.palette.primary.main,
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          '&:hover': {
                            backgroundColor: 'rgba(37, 99, 235, 0.2)',
                          },
                        }}
                      >
                        <ArrowForwardIcon fontSize="small" />
                      </IconButton>
                    </Box>
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

export default ServicesOverview;