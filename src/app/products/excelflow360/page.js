'use client';
import { Box, Container, Grid, Typography, Button, Card, CardContent, Divider, List, ListItem, ListItemIcon, ListItemText, Chip, Tab, Tabs, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import CtaSection from '@/components/common/CtaSection';
import Link from 'next/link';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StorageIcon from '@mui/icons-material/Storage';
import PeopleIcon from '@mui/icons-material/People';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ApiIcon from '@mui/icons-material/Api';

// SEO Metadata
export const Metadata = {
  title: 'ExcelFlow360 - Excel Data Management Solution | BrandBudd',
  description: 'ExcelFlow360 is a MERN stack web application designed to manage employee data with Excel file uploads, user management, and EOD status tracking.',
  keywords: 'ExcelFlow360, Excel management, data processing, MERN stack, file upload, employee management',
};

export default function ExcelFlow360Page() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <StorageIcon color="primary" fontSize="large" />,
      title: 'Excel Processing',
      description: 'Powerful Excel file processing with support for complex data structures, automated validation, and error handling.',
    },
    {
      icon: <PeopleIcon color="primary" fontSize="large" />,
      title: 'User Management',
      description: 'Comprehensive user management with role-based access control for employees and administrators.',
    },
    {
      icon: <InsertDriveFileIcon color="primary" fontSize="large" />,
      title: 'File Management',
      description: 'Centralized file repository with version control, download options, and search capabilities.',
    },
    {
      icon: <AssessmentIcon color="primary" fontSize="large" />,
      title: 'EOD Tracking',
      description: 'Track employee End-of-Day status with customizable reporting and notification systems.',
    },
    {
      icon: <SecurityIcon color="primary" fontSize="large" />,
      title: 'Data Security',
      description: 'Enterprise-grade security measures ensuring your sensitive data remains protected at all times.',
    },
    {
      icon: <SettingsIcon color="primary" fontSize="large" />,
      title: 'Custom Workflows',
      description: 'Tailored workflows that adapt to your business processes rather than forcing you to change yours.',
    },
  ];

  const pricingPlans = [
    {
      title: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small teams and businesses',
      features: [
        'Up to 5 users',
        '1000 file uploads/month',
        '10GB storage',
        'Basic Excel processing',
        'Email support',
        'CSV export',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'outlined',
    },
    {
      title: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        '10,000 file uploads/month',
        '50GB storage',
        'Advanced Excel processing',
        'Priority support',
        'API access (1,000 calls/day)',
        'Custom Excel templates',
        'Analytics dashboard',
      ],
      buttonText: 'Get Started',
      buttonVariant: 'contained',
      highlighted: true,
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited users',
        'Unlimited file uploads',
        'Unlimited storage',
        'Custom workflows',
        'Dedicated support',
        'Unlimited API access',
        'On-premise deployment option',
        'White-labeling available',
        'SLA guarantee',
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outlined',
    },
  ];

  const apiPricing = [
    {
      tier: 'Basic API',
      price: '$99',
      period: '/month',
      features: [
        '10,000 API calls/month',
        'Standard endpoints',
        'Hourly rate limits',
        'Basic authentication',
        'Community support',
      ],
    },
    {
      tier: 'Professional API',
      price: '$299',
      period: '/month',
      features: [
        '100,000 API calls/month',
        'All endpoints',
        'Higher rate limits',
        'OAuth 2.0 support',
        'Priority support',
        'Webhook integration',
      ],
    },
    {
      tier: 'Enterprise API',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited API calls',
        'Custom endpoints',
        'No rate limits',
        'Advanced authentication',
        'Dedicated support',
        'Custom SLA',
        'Private deployment',
      ],
    },
  ];

  const stepByStepGuide = [
    {
      step: 1,
      title: 'Upload Excel Sheet',
      description: 'Easily upload your Excel files through our intuitive drag-and-drop interface or file browser. Supports XLS, XLSX, and CSV formats.',
      image: '/images/portfolio/Step_1_ExcelFlow360.png',
    },
    {
      step: 2,
      title: 'Select the File',
      description: 'Choose the file you want to process. Preview your data and select specific sheets or ranges for processing.',
      image: '/images/portfolio/Step_2_ExcelFlow360.png',
    },
    {
      step: 3,
      title: 'Processing',
      description: 'Our advanced algorithms process your data in real-time. Watch as your Excel data is validated, cleaned, and transformed according to your rules.',
      image: '/images/portfolio/Step_3_ExcelFlow360.png',
    },
    {
      step: 4,
      title: 'Completed',
      description: 'Download your processed data, view reports, or take further actions. Your data is now clean, structured, and ready for use.',
      image: '/images/portfolio/Step_4_ExcelFlow360.png',
    },
  ];

  return (
    <Box component="div">
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: `linear-gradient(to right, ${theme.palette.secondary.dark}, ${theme.palette.primary.dark})`,
          color: theme.palette.text.white,
          pt: { xs: '120px', md: '160px' },
          pb: { xs: '80px', md: '120px' },
          overflow: 'hidden',
        }}
      >
        {/* Background pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Chip
                  label="MERN Stack Application"
                  color="secondary"
                  size="medium"
                  sx={{ mb: 3, fontWeight: 600 }}
                />

                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  ExcelFlow360
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
                  Streamline Excel data processing for your organization
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 4,
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  ExcelFlow360 is a comprehensive MERN stack web application designed to manage employee data with a core focus on Excel file uploads, unsubscribe handling, user management, and employee EOD status tracking.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    component={Link}
                    href="/contact"
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                    }}
                  >
                    Schedule Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection('pricing')}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                  >
                    View Pricing
                  </Button>
                </Box>
              </motion.div>
            </Grid>

            <Grid item size={{ xs: 12, md: 6 }}>
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
                    background: '#fff',
                  }}
                >
                  <Image
                    src="/images/portfolio/excelflow360_dashboard-preview.png"
                    alt="ExcelFlow360 Dashboard - Excel data management interface"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    priority
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Step-by-Step Guide Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="How ExcelFlow360 Works"
            subtitle="Follow these simple steps to process your Excel data efficiently"
          />

          <Grid container spacing={6}>
            {stepByStepGuide.map((step, index) => (
              <Grid item size={{ xs: 12 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Grid container>
                      {/* Step Information */}
                      <Grid item size={{ xs: 12, md:5 }} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
                        <Box
                          sx={{
                            p: { xs: 4, md: 6 },
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.secondary.main,
                              color: 'white',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 3,
                              fontSize: '1.5rem',
                              fontWeight: 700,
                            }}
                          >
                            {step.step}
                          </Box>

                          <Typography variant="h4" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                            {step.title}
                          </Typography>

                          <Typography variant="body1" color="text.secondary">
                            {step.description}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Step Image */}
                      <Grid item  size={{ xs: 12, md:7 }} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
                        <Box
                          sx={{
                            position: 'relative',
                            height: { xs: '300px', md: '400px' },
                            width: '100%',
                            backgroundColor: theme.palette.grey[100],
                          }}
                        >
                          <Image
                            src={step.image}
                            alt={`${step.title} - Step ${step.step}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 60vw"
                            quality={90}
                          />
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="Key Features"
            subtitle="ExcelFlow360 offers a range of powerful features to streamline your data management processes."
          />

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 2 }}>
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 1.5,
                          fontWeight: 600,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }} id="pricing">
        <Container maxWidth="lg">
          <SectionTitle
            title="Pricing Plans"
            subtitle="Choose the perfect plan for your data processing needs"
          />

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {pricingPlans.map((plan, index) => (
              <Grid item size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      boxShadow: plan.highlighted ? '0 15px 30px rgba(0,0,0,0.2)' : '0 5px 15px rgba(0,0,0,0.05)',
                      transform: plan.highlighted ? 'scale(1.05)' : 'scale(1)',
                      '&:hover': {
                        transform: plan.highlighted ? 'scale(1.08)' : 'scale(1.03)',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                      },
                      zIndex: plan.highlighted ? 2 : 1,
                      border: plan.highlighted ? `2px solid ${theme.palette.secondary.main}` : 'none',
                    }}
                  >
                    {plan.highlighted && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: -30,
                          transform: 'rotate(45deg)',
                          backgroundColor: theme.palette.secondary.main,
                          color: 'white',
                          px: 4,
                          py: 0.5,
                          width: 150,
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="body2" fontWeight={600}>
                          Most Popular
                        </Typography>
                      </Box>
                    )}

                    <Box
                      sx={{
                        p: 4,
                        backgroundColor: plan.highlighted ? 'rgba(16, 185, 129, 0.05)' : 'transparent',
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: plan.highlighted ? theme.palette.secondary.main : 'inherit',
                        }}
                      >
                        {plan.title}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 1 }}>
                        <Typography
                          variant="h3"
                          component="span"
                          sx={{
                            fontWeight: 800,
                          }}
                        >
                          {plan.price}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          color="text.secondary"
                        >
                          {plan.period}
                        </Typography>
                      </Box>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3 }}
                      >
                        {plan.description}
                      </Typography>

                      <Divider sx={{ mb: 3 }} />

                      <List sx={{ mb: 3 }}>
                        {plan.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0, py: 1 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleIcon color={plan.highlighted ? "secondary" : "success"} />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    <Box sx={{ p: 3, mt: 'auto' }}>
                      <Button
                        fullWidth
                        variant={plan.buttonVariant}
                        color={plan.highlighted ? "secondary" : "primary"}
                        size="large"
                        component={Link}
                        href="/contact"
                        sx={{
                          py: 1.5,
                        }}
                      >
                        {plan.buttonText}
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* API Pricing Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="API Access Pricing"
            subtitle="Integrate ExcelFlow360 into your existing systems with our powerful API"
          />

          <Grid container spacing={4} sx={{ mt: 2 }}>
            {apiPricing.map((tier, index) => (
              <Grid item size={{ xs: 12, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      overflow: 'hidden',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                      },
                    }}
                  >
                    <Box sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <ApiIcon color="secondary" sx={{ mr: 1, fontSize: 28 }} />
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                          }}
                        >
                          {tier.tier}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                        <Typography
                          variant="h3"
                          component="span"
                          sx={{
                            fontWeight: 800,
                          }}
                        >
                          {tier.price}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="span"
                          color="text.secondary"
                        >
                          {tier.period}
                        </Typography>
                      </Box>

                      <Divider sx={{ mb: 3 }} />

                      <List>
                        {tier.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0, py: 1 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                              <CheckCircleIcon color="secondary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    <Box sx={{ p: 3, mt: 'auto' }}>
                      <Button
                        fullWidth
                        variant="outlined"
                        color="secondary"
                        component={Link}
                        href="/contact"
                      >
                        Get API Access
                      </Button>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Technology Stack Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            title="Technology Stack"
            subtitle="Built with modern technologies to ensure reliability, scalability, and exceptional performance."
          />

          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              centered
              textColor="primary"
              indicatorColor="primary"
              sx={{
                '& .MuiTabs-flexContainer': {
                  justifyContent: { xs: 'flex-start', sm: 'center' },
                  overflowX: { xs: 'auto', sm: 'visible' },
                },
              }}
            >
              <Tab label="Frontend" />
              <Tab label="Backend" />
              <Tab label="Database" />
              <Tab label="DevOps" />
            </Tabs>
          </Box>

          {/* Frontend */}
          <Box role="tabpanel" hidden={tabValue !== 0}>
            {tabValue === 0 && (
              <Grid container spacing={6} alignItems="center">
                <Grid item size={{ xs: 12, md: 6 }}  >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                      Responsive & Interactive UI
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                      ExcelFlow360&apos;s frontend is built with React and enhanced with Material UI and Tailwind CSS to create a responsive, user-friendly interface that works seamlessly across all devices.
                    </Typography>

                    <List>
                      {[
                        'React for dynamic user interfaces',
                        'Material UI for consistent design components',
                        'Tailwind CSS for custom styling and responsive design',
                        'React Router for seamless navigation',
                        'Context API for state management',
                        'Form validation with React Hook Form',
                        'Interactive data visualizations',
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="secondary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}  >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: 'center',
                      }}
                    >
                      {[
                        { name: 'React', color: '#61DAFB' },
                        { name: 'Material UI', color: '#0081CB' },
                        { name: 'Tailwind CSS', color: '#38B2AC' },
                        { name: 'React Router', color: '#CA4245' },
                        { name: 'React Hook Form', color: '#EC5990' },
                        { name: 'Context API', color: '#61DAFB' },
                      ].map((tech, index) => (
                        <Card
                          key={index}
                          sx={{
                            width: 130,
                            height: 130,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 3,
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                            background: `linear-gradient(135deg, ${tech.color}22, ${tech.color}44)`,
                            border: `1px solid ${tech.color}33`,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            align="center"
                            sx={{
                              fontWeight: 600,
                              color: theme.palette.text.primary,
                            }}
                          >
                            {tech.name}
                          </Typography>
                        </Card>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            )}
          </Box>

          {/* Backend */}
          <Box role="tabpanel" hidden={tabValue !== 1}>
            {tabValue === 1 && (
              <Grid container spacing={6} alignItems="center">
                <Grid item size={{ xs: 12, md: 6 }}  >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                      Powerful API Architecture
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                      ExcelFlow360&apos;s backend is built on Node.js and Express, providing a robust API architecture that efficiently processes Excel files and manages user data.
                    </Typography>

                    <List>
                      {[
                        'Node.js for high-performance server operations',
                        'Express.js for API routing and middleware',
                        'JWT authentication for secure access',
                        'Excel.js for powerful spreadsheet processing',
                        'Multer for file uploads handling',
                        'Nodemailer for email notifications',
                        'RESTful API design principles',
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="secondary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}  >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        padding: 3,
                        borderRadius: 3,
                        backgroundColor: '#1E293B',
                        color: '#E2E8F0',
                        fontFamily: 'monospace',
                        overflow: 'hidden',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Typography variant="body2" component="pre" sx={{ overflowX: 'auto', p: 0, m: 0 }}>
                        {`// Sample ExcelFlow360 API endpoint
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const ExcelJS = require('exceljs');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// Excel file upload endpoint
router.post(
  '/upload',
  [auth, upload.single('excelFile')],
  async (req, res) => {
    try {
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.readFile(req.file.path);
      
      // Process Excel data...
      
      res.json({ success: true, msg: 'File processed successfully' });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

module.exports = router;`}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            )}
          </Box>

          {/* Database */}
          <Box role="tabpanel" hidden={tabValue !== 2}>
            {tabValue === 2 && (
              <Grid container spacing={6} alignItems="center">
                <Grid item size={{ xs: 12, md: 6 }}  >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                      Flexible Data Storage
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                      ExcelFlow360 uses MongoDB as its primary database, providing flexible schema design and scalable data storage capabilities.
                    </Typography>

                    <List>
                      {[
                        'MongoDB for flexible document storage',
                        'Mongoose ODM for schema validation',
                        'Efficient data indexing for quick retrievals',
                        'Aggregation pipelines for complex queries',
                        'GridFS for large file storage',
                        'Data encryption at rest',
                        'Automated backups and recovery',
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="secondary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }} >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        padding: 3,
                        borderRadius: 3,
                        backgroundColor: '#1E293B',
                        color: '#E2E8F0',
                        fontFamily: 'monospace',
                        overflow: 'hidden',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                      }}
                    >
                      <Typography variant="body2" component="pre" sx={{ overflowX: 'auto', p: 0, m: 0 }}>
                        {`// Sample MongoDB Schema for ExcelFlow360
const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  originalName: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  mimetype: {
    type: String,
    required: true
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['processing', 'completed', 'failed'],
    default: 'processing'
  },
  processedData: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('File', FileSchema);`}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            )}
          </Box>

          {/* DevOps */}
          <Box role="tabpanel" hidden={tabValue !== 3}>
            {tabValue === 3 && (
              <Grid container spacing={6} alignItems="center">
                <Grid item size={{ xs: 12, md: 6 }} >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Typography variant="h4" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                      Deployment & Infrastructure
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3 }}>
                      ExcelFlow360 is designed for easy deployment and scaling, with CI/CD pipelines and infrastructure as code.
                    </Typography>

                    <List>
                      {[
                        'Vercel for frontend deployment',
                        'Render for backend services',
                        'MongoDB Atlas for database hosting',
                        'Docker containers for consistent environments',
                        'GitHub Actions for CI/CD pipelines',
                        'Environment-based configuration',
                        'Performance monitoring and error tracking',
                      ].map((item, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="secondary" />
                          </ListItemIcon>
                          <ListItemText primary={item} />
                        </ListItem>
                      ))}
                    </List>
                  </motion.div>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }} >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                      }}
                    >
                      <Card
                        sx={{
                          borderRadius: 3,
                          p: 3,
                          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                          background: `linear-gradient(135deg, #F0F0F0, #FFFFFF)`,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <CodeIcon color="secondary" sx={{ mr: 1 }} />
                          <Typography variant="h6">CI/CD Pipeline</Typography>
                        </Box>
                        <Divider sx={{ mb: 2 }} />
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 1,
                          }}
                        >
                          {['Build', 'Test', 'Deploy', 'Monitor'].map((step, index) => (
                            <Chip
                              key={index}
                              label={step}
                              color="secondary"
                              variant="outlined"
                              sx={{ minWidth: '70px' }}
                            />
                          ))}
                        </Box>
                      </Card>

                      <Card
                        sx={{
                          borderRadius: 3,
                          p: 3,
                          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                          background: `linear-gradient(135deg, #F0F0F0, #FFFFFF)`,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <StorageIcon color="secondary" sx={{ mr: 1 }} />
                          <Typography variant="h6">Infrastructure</Typography>
                        </Box>
                        <Divider sx={{ mb: 2 }} />
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: 1,
                          }}
                        >
                          {['Vercel', 'Render', 'MongoDB Atlas', 'Docker'].map((platform, index) => (
                            <Chip
                              key={index}
                              label={platform}
                              color="primary"
                              variant="outlined"
                              sx={{ minWidth: '70px' }}
                            />
                          ))}
                        </Box>
                      </Card>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            )}
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <CtaSection
        title="Ready to Streamline Your Data Management?"
        description="Contact us today to see how ExcelFlow360 can transform your Excel data processing workflows."
        buttonText="Get Started"
        buttonLink="/contact"
        background="secondary"
      />
    </Box>
  );
}