'use client';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import SectionTitle from '../common/SectionTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'TeamSync',
    description: 'Comprehensive team management solution with attendance tracking, leave management, and payroll processing.',
    image: '/images/portfolio/teamsync.png',
    link: '/products/teamsync',
    features: [
      'Real-time attendance tracking',
      'Leave management system',
      'Automated payroll processing',
      'Team performance analytics'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: '#3B82F6', // Blue theme
    featured: true,
  },
  {
    id: 2,
    title: 'ExcelFlow360',
    description: 'MERN stack application for managing employee data with Excel file uploads and EOD status tracking.',
    image: '/images/portfolio/excelflow360.png',
    link: '/products/excelflow360',
    features: [
      'Excel data import/export',
      'EOD status tracking',
      'Employee data management',
      'Real-time analytics dashboard'
    ],
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    color: '#10B981', // Green theme
    featured: true,
  },
];

const PortfolioPreview = () => {
  const theme = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);
  
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="xl">
        <SectionTitle
          title="Our Portfolio"
          subtitle="Explore our innovative digital solutions and successful projects that have helped businesses grow and transform."
        />
        
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                mb: { xs: 8, md: 12 },
                borderRadius: 4,
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              }}
            >
              <Grid 
                container 
                spacing={0}
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
              >
                {/* Content Side */}
                <Grid item size={{ xs: 12, md: 5 }}>
                  <Box
                    sx={{
                      p: { xs: 4, md: 6 },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      backgroundColor: project.color || theme.palette.primary.main,
                      color: 'white',
                    }}
                  >
                    <Typography 
                      variant="h3" 
                      component="h3" 
                      sx={{ 
                        mb: 3,
                        fontWeight: 700,
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 4,
                        opacity: 0.9,
                        fontWeight: 400,
                      }}
                    >
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                        Key Features:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2 }}>
                        {project.features.map((feature, idx) => (
                          <Typography 
                            component="li" 
                            key={idx}
                            sx={{ 
                              mb: 1,
                              opacity: 0.9,
                            }}
                          >
                            {feature}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
                        Technologies Used:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.tech.map((tech, idx) => (
                          <Typography
                            key={idx}
                            sx={{
                              px: 2,
                              py: 0.5,
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: 20,
                              fontSize: '0.875rem',
                            }}
                          >
                            {tech}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                    
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      component={Link}
                      href={project.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ 
                        alignSelf: 'flex-start',
                        px: 4,
                        py: 1.5,
                        backgroundColor: 'white',
                        color: project.color || theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.9)',
                        }
                      }}
                    >
                      View Project Details
                    </Button>
                  </Box>
                </Grid>
                
                {/* Image Side */}
                <Grid item size={{ xs: 12, md: 7 }}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: { xs: '400px', md: '600px' },
                      overflow: 'hidden',
                      backgroundColor: theme.palette.grey[100],
                    }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        transform: hoveredProject === project.id ? 'translateY(-400%)' : 'translateY(0)',
                        transition: 'transform 8s ease-in-out',
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} - Full page preview`}
                        width={2880}  // Your actual image width
                        height={project.id === 1 ? 4430 : 10678}  // Your actual image heights
                        style={{ 
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                          objectPosition: 'top',
                        }}
                        sizes="(max-width: 768px) 100vw, 60vw"
                        quality={90}
                      />
                    </Box>
                    
                    {/* Shadow overlay at top and bottom */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '50px',
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
                        zIndex: 2,
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50px',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 100%)',
                        zIndex: 2,
                      }}
                    />
                    
                    {/* Scroll indicator */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        color: 'white',
                        px: 2,
                        py: 1,
                        borderRadius: 20,
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        zIndex: 3,
                      }}
                    >
                      <ArrowForwardIcon sx={{ transform: 'rotate(90deg)' }} />
                      Hover to scroll
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        ))}
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={Link}
            href="/portfolio"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 6, py: 2 }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioPreview;