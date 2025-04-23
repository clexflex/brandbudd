'use client';
import { Box, Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionTitle from '../common/SectionTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const projects = [
  {
    id: 1,
    title: 'TeamSync',
    description: 'Comprehensive team management solution with attendance tracking, leave management, and payroll processing.',
    image: '/images/portfolio/teamsync.jpg',
    link: '/products/teamsync',
    featured: true,
  },
  {
    id: 2,
    title: 'ExcelFlow360',
    description: 'MERN stack application for managing employee data with Excel file uploads and EOD status tracking.',
    image: '/images/portfolio/excelflow360.jpg',
    link: '/products/excelflow360',
    featured: true,
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Custom e-commerce solution with integrated payment processing and inventory management.',
    image: '/images/portfolio/ecommerce.jpg',
    link: '/portfolio/ecommerce-platform',
  },
];

const PortfolioPreview = () => {
  const theme = useTheme();
  
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
        
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid 
              item 
               size={{ xs: 12, sm: 6, md: 4 }}  
              key={project.id}
            >
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
                    <Box
                      component="div"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: theme.palette.grey[200],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="subtitle1">Project Image</Typography>
                    </Box>
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
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
                        View Project
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
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            component={Link}
            href="/portfolio"
            endIcon={<ArrowForwardIcon />}
            sx={{ px: 4, py: 1.5 }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PortfolioPreview;