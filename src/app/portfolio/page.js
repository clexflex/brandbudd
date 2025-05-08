'use client';
import { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia, Button, Tabs, Tab, Chip, Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import CtaSection from '@/components/common/CtaSection';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';

const projects = [
  {
    id: 'teamsync',
    title: 'TeamSync',
    subtitle: 'Employee Management Solution',
    description: 'A comprehensive team management solution with attendance tracking, leave management, and payroll processing capabilities.',
    image: '/images/portfolio/teamsync-dashboard-preview.png',
    link: '/products/teamsync',
    featured: true,
    category: 'software',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Material UI'],
    challenge: 'A growing company needed to streamline their HR processes and automate attendance tracking and payroll calculations.',
    solution: 'We developed TeamSync, a comprehensive employee management platform that centralizes all HR functions in one intuitive interface.',
    results: ['50% reduction in HR administrative time', '95% accuracy in payroll processing', '30% increase in employee satisfaction'],
    testimonial: {
      quote: "TeamSync has transformed how we manage our workforce. The time saved on administrative tasks alone has been invaluable.",
      author: "Sarah Johnson",
      position: "HR Director, TechGrowth Inc."
    }
  },
  {
    id: 'excelflow360',
    title: 'ExcelFlow360',
    subtitle: 'Excel Data Management Solution',
    description: 'MERN stack application for managing employee data with Excel file uploads and employee EOD status tracking.',
    image: '/images/portfolio/Processed_Excel_ExcelFlow360.png',
    link: '/products/excelflow360',
    featured: true,
    category: 'software',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Material UI', 'Tailwind CSS'],
    challenge: 'A client needed a more efficient way to process Excel files containing employee data and track employee status updates.',
    solution: 'We built ExcelFlow360, a specialized MERN stack application with robust Excel processing capabilities and EOD tracking features.',
    results: ['85% faster data processing than manual methods', '60% reduction in data entry errors', 'Centralized employee status tracking'],
    testimonial: {
      quote: "ExcelFlow360 has completely transformed our data management process. What used to take hours now takes minutes.",
      author: "Michael Chen",
      position: "Operations Manager, DataFirst Corp"
    }
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    subtitle: 'Custom Shopping Experience',
    description: 'Custom e-commerce solution with integrated payment processing and inventory management.',
    image: '/images/portfolio/ecomm1.png',
    link: '/portfolio/ecommerce-platform',
    category: 'web',
    technologies: ['React', 'Next.js', 'Stripe', 'MongoDB', 'AWS'],
    challenge: 'A retail client needed to transition from brick-and-mortar to online with a custom shopping experience that reflected their brand.',
    solution: 'We developed a custom e-commerce platform with seamless checkout, inventory management, and mobile-first design.',
    results: ['135% increase in online sales', '40% higher average order value compared to previous platform', '65% reduction in cart abandonment'],
    testimonial: {
      quote: "The custom e-commerce platform exceeded our expectations. Our online sales have more than doubled since launch.",
      author: "Jennifer Lopez",
      position: "CEO, Fashion Forward"
    }
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Portal',
    subtitle: 'Patient Management System',
    description: 'Secure patient portal with appointment scheduling, medical records, and telemedicine capabilities.',
    image: '/images/portfolio/healthcare_Dashboard_horizontal.png',
    link: '/portfolio/healthcare-portal',
    category: 'web',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Material UI'],
    challenge: 'A healthcare provider needed a HIPAA-compliant patient portal that would streamline appointments and improve patient communication.',
    solution: 'We built a secure healthcare portal with intuitive appointment scheduling, medical record access, and integrated telemedicine features.',
    results: ['45% reduction in appointment no-shows', '30% decrease in administrative calls', '92% patient satisfaction rating'],
    testimonial: {
      quote: "This portal has revolutionized how we interact with patients. The telemedicine integration came just in time for the pandemic.",
      author: "Dr. Robert Williams",
      position: "Medical Director, Wellness Center"
    }
  },
  {
    id: 'marketing-campaign',
    title: 'Digital Marketing Campaign',
    subtitle: 'Multi-Channel Strategy',
    description: 'Comprehensive digital marketing campaign spanning social media, email, and PPC advertising.',
    image: '/images/portfolio/marketing2.png',
    link: '/portfolio/marketing-campaign',
    category: 'marketing',
    technologies: ['Google Ads', 'Facebook Ads', 'Email Marketing', 'Content Marketing', 'Analytics'],
    challenge: 'A B2B software company struggled to generate qualified leads and convert them into customers.',
    solution: 'We developed an integrated digital marketing strategy with targeted content, paid advertising, and email nurturing sequences.',
    results: ['210% increase in qualified leads', '45% reduction in cost per acquisition', '28% increase in conversion rate'],
    testimonial: {
      quote: "The marketing campaign delivered ROI beyond our expectations. Our sales team now has more qualified leads than they can handle.",
      author: "Thomas Anderson",
      position: "Marketing Director, SoftSolutions Inc."
    }
  },
  {
    id: 'mobile-app',
    title: 'Fitness Tracking App',
    subtitle: 'Health and Wellness Solution',
    description: 'Mobile application for fitness tracking, meal planning, and community engagement.',
    image: '/images/portfolio/fitness-app2.png',
    link: '/portfolio/mobile-app',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Express', 'Google Fit API'],
    challenge: 'A fitness brand wanted to expand their digital presence with a mobile app that would keep users engaged in their wellness journey.',
    solution: 'We created a cross-platform mobile app with workout tracking, nutritional guidance, and social features to build community.',
    results: ['50,000+ downloads in first month', '76% user retention after 3 months', '4.8/5 average app store rating'],
    testimonial: {
      quote: "This app has become the digital cornerstone of our brand. The user engagement metrics speak for themselves.",
      author: "Amanda Steele",
      position: "Brand Director, FitLife"
    }
  },
];

export default function PortfolioPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.category === activeTab);

  return (
    <Box component="div">
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.background.dark,
          color: theme.palette.text.white,
          pt: { xs: '120px', md: '160px' },
          pb: { xs: '80px', md: '120px' },
          overflow: 'hidden',
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
          <Grid container spacing={6} justifyContent="center">
            <Grid size={{ xs: 12, md: 10 }} textAlign="center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                  }}
                >
                  Our Portfolio
                </Typography>

                <Typography
                  variant="h4"
                  component="p"
                  sx={{
                    mb: 4,
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.85)',
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  Showcasing our work across web development, digital marketing, and custom software solutions
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Filter Tabs */}
      <Box sx={{ py: 4, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            centered={!isMobile}
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.primary.main,
              },
            }}
          >
            <Tab label="All Projects" value="all" />
            <Tab label="Web Development" value="web" />
            <Tab label="Software Solutions" value="software" />
            <Tab label="Digital Marketing" value="marketing" />
            <Tab label="Mobile Apps" value="mobile" />
          </Tabs>
        </Container>
      </Box>

      {/* Featured Projects */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <SectionTitle
            title="Featured Projects"
            subtitle="Explore our most impactful work that has transformed businesses and delighted users."
          />

          <Grid container spacing={6}>
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 12 }} key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: '100%', md: '50%' },
                        position: 'relative',
                        minHeight: { xs: '300px', md: '400px' },
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.description}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={90}
                        priority={index === 0} // prioritize first image
                      />
                    </Box>

                    <CardContent sx={{ width: { xs: '100%', md: '50%' }, p: 4 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={
                            project.category === 'web' ? 'Web Development' :
                              project.category === 'software' ? 'Software Solution' :
                                project.category === 'marketing' ? 'Digital Marketing' : 'Mobile App'
                          }
                          color="primary"
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      </Box>

                      <Typography variant="h3" component="h2" sx={{ mb: 1, fontWeight: 700 }}>
                        {project.title}
                      </Typography>

                      <Typography variant="subtitle1" color="primary" sx={{ mb: 2, fontWeight: 500 }}>
                        {project.subtitle}
                      </Typography>

                      <Typography variant="body1" sx={{ mb: 3 }}>
                        {project.description}
                      </Typography>

                      <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                        Technologies Used
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {project.technologies.map((tech) => (
                          <Chip key={tech} label={tech} variant="outlined" size="small" />
                        ))}
                      </Box>

                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ArrowForwardIcon />}
                        component={Link}
                        href={project.link}
                        sx={{ px: 3 }}
                      >
                        View Project
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* All Projects Grid */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <SectionTitle
            title="All Projects"
            subtitle="Browse our complete portfolio of work across various industries and technologies."
          />

          <Grid container spacing={4}>
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
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
                    component={Link}
                    href={project.link}
                  >
                    <Box sx={{ position: 'relative', paddingTop: '56.25%' }}> {/* 16:9 aspect ratio */}
                      <Image
                        src={project.image}
                        alt={`${project.title} - ${project.description}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                      />
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={
                            project.category === 'web' ? 'Web Development' :
                              project.category === 'software' ? 'Software Solution' :
                                project.category === 'marketing' ? 'Digital Marketing' : 'Mobile App'
                          }
                          color="primary"
                          size="small"
                        />
                      </Box>

                      <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                        {project.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            color: theme.palette.primary.main,
                            mr: 1,
                            fontWeight: 600,
                          }}
                        >
                          View Details
                        </Typography>
                        <ArrowForwardIcon
                          fontSize="small"
                          sx={{ color: theme.palette.primary.main }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Case Studies Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }} id="case-studies">
        <Container maxWidth="lg">
          <SectionTitle
            title="Case Studies"
            subtitle="Dive deeper into our approach, solutions, and the transformative results we've achieved for our clients."
          />

          <Grid container spacing={6}>
            {filteredProjects.slice(0, 2).map((project, index) => (
              <Grid size={{ xs: 12, sm: 12, md: 12 }} key={`case-${project.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Grid container spacing={4}>
                        <Grid  size={{ xs: 12, md: 8 }}>
                          <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 700 }}>
                            {project.title}: {project.subtitle}
                          </Typography>

                          <Divider sx={{ mb: 3 }} />

                          <Box sx={{ mb: 4 }}>
                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                              Challenge
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                              {project.challenge}
                            </Typography>

                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                              Solution
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                              {project.solution}
                            </Typography>

                            <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                              Results
                            </Typography>
                            <Box component="ul" sx={{ pl: 2 }}>
                              {project.results.map((result, i) => (
                                <Box component="li" key={i} sx={{ mb: 1 }}>
                                  <Typography variant="body1">
                                    {result}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          </Box>

                          <Button
                            variant="contained"
                            color="primary"
                            endIcon={<ArrowForwardIcon />}
                            component={Link}
                            href={project.link}
                            sx={{ px: 3 }}
                          >
                            View Full Case Study
                          </Button>
                        </Grid>

                        <Grid  size={{ xs: 12, md: 4 }}>
                          <Box
                            sx={{
                              backgroundColor: theme.palette.background.default,
                              p: 3,
                              borderRadius: 2,
                              border: `1px solid ${theme.palette.divider}`,
                              mb: 3,
                            }}
                          >
                            <Typography variant="h6" component="h4" sx={{ mb: 2, fontWeight: 600 }}>
                              Technologies Used
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {project.technologies.map((tech) => (
                                <Chip key={tech} label={tech} size="small" />
                              ))}
                            </Box>
                          </Box>

                          <Card sx={{ p: 3, bgcolor: 'rgba(37, 99, 235, 0.05)' }}>
                            <Typography
                              variant="body1"
                              sx={{
                                mb: 2,
                                fontStyle: 'italic',
                                position: 'relative',

                              }}
                            >
                              {project.testimonial.quote}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {project.testimonial.author}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {project.testimonial.position}
                            </Typography>
                          </Card>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Process */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.dark,
          color: theme.palette.text.white,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.07,
            background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.6) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.6) 0%, transparent 40%)',
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <SectionTitle
            title="Our Project Approach"
            subtitle="We follow a proven methodology to ensure every project is delivered on time, within budget, and exceeds expectations."
            color="light"
          />

          <Grid container spacing={4}>
            {[
              { number: '01', title: 'Discovery', description: 'We begin by understanding your business, goals, and challenges through in-depth discussions and research.' },
              { number: '02', title: 'Planning', description: 'We develop a detailed project plan with clear milestones, deliverables, and timelines.' },
              { number: '03', title: 'Design', description: 'Our design team creates user-focused interfaces that align with your brand identity and business objectives.' },
              { number: '04', title: 'Development', description: 'We build your solution using industry best practices and cutting-edge technologies.' },
              { number: '05', title: 'Testing', description: 'Rigorous testing ensures your solution works flawlessly across all devices and scenarios.' },
              { number: '06', title: 'Launch & Support', description: 'We handle the deployment process and provide ongoing support to ensure continued success.' },
            ].map((step, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                      borderRadius: 3,
                      overflow: 'visible',
                      position: 'relative',
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

                    <CardContent sx={{ pt: 5, px: 3, pb: 3 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          mb: 2,
                          fontWeight: 600,
                          color: 'white',
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}
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

      {/* Call to Action */}
      <CtaSection
        title="Ready to Start Your Project?"
        description="Contact us today to discuss how we can bring your vision to life with our expertise in digital solutions."
        buttonText="Get in Touch"
        buttonLink="/contact"
        background="gradient"
      />
    </Box>
  );
}