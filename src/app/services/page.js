'use client';
import { Box, Container, Grid, Typography, Card, CardContent, Button, Divider, useMediaQuery, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import CtaSection from '@/components/common/CtaSection';
import Link from 'next/link';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import BrushIcon from '@mui/icons-material/Brush';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


export default function ServicesPage() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  
  const services = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      subtitle: 'Strategic campaigns that boost your online presence',
      description: 'Our comprehensive digital marketing services help businesses grow their online presence, attract qualified leads, and convert visitors into customers. We develop tailored strategies based on your business goals and target audience.',
      icon: <TrendingUpIcon fontSize="large" />,
      features: [
        'Social Media Marketing',
        'Email Marketing Campaigns',
        'PPC Advertising',
        'Content Marketing Strategy',
        'Marketing Analytics & Reporting',
        'Conversion Rate Optimization',
      ],
      benefits: [
        'Increase brand awareness and reach',
        'Generate quality leads and improve conversion rates',
        'Maximize ROI on marketing spend',
        'Build stronger customer relationships',
        'Gain valuable insights through data analytics',
      ],
      process: [
        { step: 'Research', description: 'Understanding your business, competitors, and target audience' },
        { step: 'Strategy', description: 'Developing a customized marketing plan aligned with your goals' },
        { step: 'Implementation', description: 'Executing campaigns across relevant platforms' },
        { step: 'Optimization', description: 'Continuously refining strategies based on performance data' },
        { step: 'Reporting', description: 'Regular updates on campaign performance and ROI' },
      ],
      caseStudies: [
        {
          title: 'E-commerce Revenue Growth',
          description: 'Helped an online retailer increase sales by 85% through targeted social media and email campaigns.',
        },
        {
          title: 'B2B Lead Generation',
          description: 'Generated 120+ qualified leads per month for a SaaS company through content marketing and PPC.',
        },
      ],
    },
    {
      id: 'web-development',
      title: 'Web Development',
      subtitle: 'Custom websites and web applications tailored to your needs',
      description: 'We design and develop responsive, user-friendly websites and web applications that reflect your brand identity and meet your business objectives. Our development process focuses on creating scalable, secure, and maintainable solutions.',
      icon: <CodeIcon fontSize="large" />,
      features: [
        'Responsive Website Design',
        'E-commerce Development',
        'Content Management Systems',
        'Progressive Web Applications',
        'Web Portal Development',
        'API Integration & Development',
      ],
      benefits: [
        'Enhance user experience and engagement',
        'Improve conversion rates with optimized design',
        'Ensure cross-device compatibility',
        'Increase website speed and performance',
        'Implement scalable solutions that grow with your business',
      ],
      process: [
        { step: 'Discovery', description: 'Understanding your requirements and business goals' },
        { step: 'Planning', description: 'Creating wireframes, sitemaps, and technical specifications' },
        { step: 'Design', description: 'Developing UI/UX design tailored to your brand' },
        { step: 'Development', description: 'Building your website or application with clean, efficient code' },
        { step: 'Testing', description: 'Ensuring cross-browser compatibility and optimal performance' },
        { step: 'Deployment', description: 'Launching your website and providing training' },
      ],
      caseStudies: [
        {
          title: 'E-commerce Platform',
          description: 'Built a custom e-commerce solution that increased mobile conversions by 65%.',
        },
        {
          title: 'Healthcare Portal',
          description: 'Developed a secure patient portal with integrated appointment scheduling and medical records.',
        },
      ],
    },
    {
      id: 'seo-services',
      title: 'SEO Services',
      subtitle: 'Improve visibility and drive organic traffic',
      description: 'Our search engine optimization services help your business gain visibility in search results, attract targeted traffic, and increase conversions. We implement white-hat SEO techniques that deliver sustainable results.',
      icon: <SearchIcon fontSize="large" />,
      features: [
        'Keyword Research & Strategy',
        'On-Page SEO Optimization',
        'Technical SEO Audits',
        'Content Strategy & Creation',
        'Link Building & Outreach',
        'Local SEO & Google My Business',
      ],
      benefits: [
        'Increase organic search traffic and visibility',
        'Improve search engine rankings for target keywords',
        'Build domain authority and credibility',
        'Generate leads from search engine users',
        'Gain competitive advantage in your industry',
      ],
      process: [
        { step: 'Audit', description: 'Analyzing current website performance and identifying issues' },
        { step: 'Research', description: 'Identifying high-value keywords and competitor analysis' },
        { step: 'Strategy', description: 'Developing a comprehensive SEO roadmap' },
        { step: 'Implementation', description: 'Applying on-page and technical SEO improvements' },
        { step: 'Content', description: 'Creating optimized content that ranks and converts' },
        { step: 'Monitoring', description: 'Tracking performance and making adjustments' },
      ],
      caseStudies: [
        {
          title: 'Local Business Growth',
          description: 'Increased organic traffic by 210% and first-page rankings for 45 target keywords.',
        },
        {
          title: 'E-commerce Category Optimization',
          description: 'Boosted organic revenue by 95% through product and category page optimization.',
        },
      ],
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      subtitle: 'Create intuitive, engaging digital experiences',
      description: 'Our UI/UX design services focus on creating intuitive, user-centered interfaces that enhance user satisfaction and drive engagement. We combine aesthetics with functionality to deliver exceptional digital experiences.',
      icon: <BrushIcon fontSize="large" />,
      features: [
        'User Research & Personas',
        'Wireframing & Prototyping',
        'Interaction Design',
        'Visual Design & Branding',
        'Usability Testing',
        'Design Systems',
      ],
      benefits: [
        'Improve user satisfaction and retention',
        'Reduce user friction and increase conversions',
        'Create consistent brand experiences',
        'Make data-driven design decisions',
        'Design scalable interfaces that grow with your business',
      ],
      process: [
        { step: 'Research', description: 'Understanding user needs and business requirements' },
        { step: 'Analysis', description: 'Creating user personas and journey maps' },
        { step: 'Design', description: 'Developing wireframes, prototypes, and visual designs' },
        { step: 'Testing', description: 'Conducting usability tests and gathering feedback' },
        { step: 'Iteration', description: 'Refining designs based on testing results' },
        { step: 'Implementation', description: 'Collaborating with developers for smooth handoff' },
      ],
      caseStudies: [
        {
          title: 'Mobile App Redesign',
          description: 'Increased user engagement by 75% through intuitive navigation and streamlined user flows.',
        },
        {
          title: 'E-learning Platform',
          description: 'Reduced abandonment rate by 40% with accessible, user-friendly course interface design.',
        },
      ],
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      subtitle: 'Compelling content that drives engagement',
      description: 'Our content creation services help you tell your brand story, engage your audience, and drive conversions. We create high-quality, strategic content tailored to your target audience and business objectives.',
      icon: <LanguageIcon fontSize="large" />,
      features: [
        'Blog Articles & Long-form Content',
        'Website Copy & Product Descriptions',
        'Email & Newsletter Content',
        'Social Media Content',
        'Video Script Writing',
        'Infographics & Visual Content',
      ],
      benefits: [
        'Establish brand authority and expertise',
        'Increase website traffic and engagement',
        'Improve search engine visibility',
        'Build stronger connections with your audience',
        'Support sales and conversion goals',
      ],
      process: [
        { step: 'Research', description: 'Understanding your audience, industry, and competitors' },
        { step: 'Strategy', description: 'Developing a content plan aligned with business goals' },
        { step: 'Creation', description: 'Writing and designing high-quality content' },
        { step: 'Optimization', description: 'Ensuring content is SEO-friendly and engaging' },
        { step: 'Distribution', description: 'Publishing and promoting content across channels' },
        { step: 'Analysis', description: 'Measuring performance and refining strategy' },
      ],
      caseStudies: [
        {
          title: 'B2B Thought Leadership',
          description: 'Established client as industry authority through strategic blog content, increasing leads by 45%.',
        },
        {
          title: 'Product Launch Campaign',
          description: 'Created comprehensive content strategy that drove 12,000+ website visits during launch week.',
        },
      ],
    },
    {
      id: 'software-development',
      title: 'Software Development',
      subtitle: 'Custom solutions to streamline your business',
      description: 'We develop custom software solutions designed to automate processes, streamline operations, and solve complex business challenges. Our development approach ensures scalable, secure, and maintainable applications.',
      icon: <SettingsIcon fontSize="large" />,
      features: [
        'Custom Web & Mobile Applications',
        'Enterprise Software Solutions',
        'Database Design & Development',
        'API Development & Integration',
        'Legacy System Modernization',
        'Software Maintenance & Support',
      ],
      benefits: [
        'Automate manual processes and increase efficiency',
        'Develop solutions tailored to your exact needs',
        'Scale your software as your business grows',
        'Improve data management and security',
        'Gain competitive advantage through technology',
      ],
      process: [
        { step: 'Discovery', description: 'Understanding your requirements and business processes' },
        { step: 'Planning', description: 'Defining scope, architecture, and technical specifications' },
        { step: 'Development', description: 'Building your solution using agile methodologies' },
        { step: 'Testing', description: 'Ensuring functionality, performance, and security' },
        { step: 'Deployment', description: 'Implementing the solution in your environment' },
        { step: 'Support', description: 'Providing ongoing maintenance and enhancements' },
      ],
      caseStudies: [
        {
          title: 'Inventory Management System',
          description: 'Developed custom solution that reduced processing time by 75% and minimized errors.',
        },
        {
          title: 'Customer Portal',
          description: 'Created secure client portal that improved customer satisfaction and reduced support calls by 35%.',
        },
      ],
    },
  ];
  
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
            <Grid item  size={{ xs: 12, md: 10 }}   textAlign="center">
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
                  Our Services
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
                  Comprehensive digital solutions to transform your business
                </Typography>
                
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 5,
                    color: 'rgba(255, 255, 255, 0.7)',
                    maxWidth: '700px',
                    mx: 'auto',
                  }}
                >
                  From strategic digital marketing and web development to custom software solutions, we provide end-to-end services designed to help your business thrive in the digital landscape.
                </Typography>
                
                <Box sx={{ mt: 4, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                  {services.map((service) => (
                    <Button
                      key={service.id}
                      variant="outlined"
                      color="primary"
                      href={`#${service.id}`}
                      sx={{
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        '&:hover': {
                          borderColor: theme.palette.primary.light,
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        },
                      }}
                    >
                      {service.title}
                    </Button>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Services Overview */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item size={{ xs: 12, sm: 6 }}   key={service.id}>
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
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                      },
                      borderRadius: 3,
                      overflow: 'hidden',
                    }}
                    component={Link}
                    href={`#${service.id}`}
                  >
                    <Box
                      sx={{
                        height: 8,
                        width: '100%',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }}
                    />
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 2,
                        }}
                      >
                        <Box
                          sx={{
                            color: theme.palette.primary.main,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          component="h2"
                          sx={{
                            fontWeight: 600,
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      
                      <Typography
                        variant="subtitle1"
                        sx={{
                          mb: 2,
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                        }}
                      >
                        {service.subtitle}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, flexGrow: 1 }}
                      >
                        {service.description.split(' ').slice(0, 20).join(' ')}...
                      </Typography>
                      
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          alignItems: 'center',
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
      
      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <Box 
          key={service.id} 
          id={service.id}
          sx={{ 
            py: { xs: 8, md: 12 },
            backgroundColor: index % 2 === 0 ? theme.palette.background.default : theme.palette.background.paper,
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center" direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
              <Grid item size={{ xs: 12,md: 6 }}  >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                      mb: 3,
                      fontWeight: 700,
                    }}
                  >
                    {service.title}
                  </Typography>
                  
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.secondary,
                      fontWeight: 500,
                      fontSize: '1.25rem',
                    }}
                  >
                    {service.subtitle}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{ mb: 4 }}
                  >
                    {service.description}
                  </Typography>
                  
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    Key Features
                  </Typography>
                  
                  <Grid container spacing={1} sx={{ mb: 4 }}>
                    {service.features.map((feature, featureIndex) => (
                      <Grid item xs={12} sm={6} key={featureIndex}>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            py: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: theme.palette.primary.main,
                              mr: 2,
                            }}
                          />
                          <Typography variant="body1">
                            {feature}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    component={Link}
                    href="/contact"
                    sx={{ px: 4, py: 1.5 }}
                  >
                    Discuss Your Project
                  </Button>
                </motion.div>
              </Grid>
              
              <Grid item  size={{ xs: 12,  md: 6 }}  >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ mb: 4 }}>
                    <Tabs
                      value={activeTab}
                      onChange={handleTabChange}
                      centered={!isMobile}
                      variant={isMobile ? "scrollable" : "standard"}
                      scrollButtons={isMobile ? "auto" : false}
                      sx={{
                        mb: 3,
                        '& .MuiTabs-indicator': {
                          backgroundColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      <Tab label="Benefits" />
                      <Tab label="Process" />
                      <Tab label="Case Studies" />
                    </Tabs>
                    
                    {/* Benefits Tab */}
                    <Box role="tabpanel" hidden={activeTab !== 0} sx={{ minHeight: '600px' }}>
                      {activeTab === 0 && (
                        <Card sx={{ borderRadius: 3, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                              How {service.title} Benefits Your Business
                            </Typography>
                            
                            {service.benefits.map((benefit, benefitIndex) => (
                              <Box
                                key={benefitIndex}
                                sx={{
                                  display: 'flex',
                                  py: 1.5,
                                  borderBottom: benefitIndex < service.benefits.length - 1 ? `1px solid ${theme.palette.divider}` : 'none',
                                }}
                              >
                                <Box
                                  sx={{
                                    color: theme.palette.primary.main,
                                    mr: 2,
                                    mt: 0.5,
                                  }}
                                >
                                  <CheckCircleIcon />
                                </Box>
                                <Typography variant="body1">
                                  {benefit}
                                </Typography>
                              </Box>
                            ))}
                          </CardContent>
                        </Card>
                      )}
                    </Box>
                    
                    {/* Process Tab */}
                    <Box role="tabpanel" hidden={activeTab !== 1} sx={{ minHeight: '600px' }}>
                      {activeTab === 1 && (
                        <Card sx={{ borderRadius: 3, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                              Our {service.title} Process
                            </Typography>
                            
                            {service.process.map((processStep, processIndex) => (
                              <Box
                                key={processIndex}
                                sx={{
                                  display: 'flex',
                                  mb: 2.5,
                                  position: 'relative',
                                }}
                              >
                                <Box
                                  sx={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    mr: 2,
                                    flexShrink: 0,
                                    zIndex: 1,
                                  }}
                                >
                                  {processIndex + 1}
                                </Box>
                                
                                {processIndex < service.process.length - 1 && (
                                  <Box
                                    sx={{
                                      position: 'absolute',
                                      left: 18,
                                      top: 36,
                                      bottom: -10,
                                      width: 2,
                                      backgroundColor: theme.palette.divider,
                                      zIndex: 0,
                                    }}
                                  />
                                )}
                                
                                <Box>
                                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                                    {processStep.step}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {processStep.description}
                                  </Typography>
                                </Box>
                              </Box>
                            ))}
                          </CardContent>
                        </Card>
                      )}
                    </Box>
                    
                    {/* Case Studies Tab */}
                    <Box role="tabpanel" hidden={activeTab !== 2} sx={{ minHeight: '600px' }}>
                      {activeTab === 2 && (
                        <Card sx={{ borderRadius: 3, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                          <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                              Success Stories
                            </Typography>
                            
                            {service.caseStudies.map((caseStudy, caseIndex) => (
                              <Box
                                key={caseIndex}
                                sx={{
                                  mb: caseIndex < service.caseStudies.length - 1 ? 3 : 0,
                                }}
                              >
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                                  {caseStudy.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                  {caseStudy.description}
                                </Typography>
                                {caseIndex < service.caseStudies.length - 1 && (
                                  <Divider sx={{ mt: 2 }} />
                                )}
                              </Box>
                            ))}
                            
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                              <Button
                                variant="text"
                                color="primary"
                                component={Link}
                                href="/portfolio"
                                endIcon={<ArrowForwardIcon />}
                              >
                                View More Case Studies
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      )}
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
      
      {/* Call to Action */}
      <CtaSection 
        title="Ready to Transform Your Digital Presence?"
        description="Contact us today to discuss how our services can help your business grow."
        buttonText="Get Started"
        buttonLink="/contact"
        background="gradient"
      />
    </Box>
  );
}