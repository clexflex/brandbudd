'use client';
import { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Avatar, 
  Card, 
  CardContent, 
  IconButton, 
  useMediaQuery,
  Rating,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    avatar: '/images/team/avatar1.jpg',
    quote: 'BrandBudd transformed our online presence completely. Their strategic approach to digital marketing increased our traffic by 150% and conversion rates by 75% within just three months.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Marketing Director, GrowthPoint',
    avatar: '/images/team/avatar2.jpg',
    quote: 'The team at BrandBudd delivered a website that exceeded our expectations. Their attention to detail and focus on user experience has resulted in a 40% decrease in bounce rate and a 60% increase in time on site.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Product Manager, InnovateCorp',
    avatar: '/images/team/avatar3.jpg',
    quote: 'Implementing TeamSync has revolutionized our internal processes. We\'ve saved countless hours on attendance tracking and payroll management, allowing our team to focus on what truly matters.',
    rating: 5,
  },
  {
    id: 4,
    name: 'David Wilson',
    position: 'Operations Manager, GlobalTech',
    avatar: '/images/team/avatar4.jpg',
    quote: 'ExcelFlow360 has streamlined our data management processes significantly. The intuitive interface and powerful features have made it an essential tool for our day-to-day operations.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const containerRef = useRef(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  
  const handlePrev = () => {
    setSlideDirection('left');
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setSlideDirection('right');
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    
    return () => clearInterval(timer);
  }, [activeIndex]);
  
  return (
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
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }} ref={containerRef}>
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Hear from businesses that have experienced growth and transformation through our digital solutions."
          color="light"
        />
        
        <Box sx={{ position: 'relative', mt: 6 }}>
          <Box 
            sx={{ 
              position: 'relative',
              overflow: 'hidden',
              minHeight: { xs: '380px', sm: '320px', md: '280px' },
            }}
          >
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: slideDirection === 'right' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection === 'right' ? -100 : 100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                }}
              >
                <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <FormatQuoteIcon 
                      sx={{ 
                        fontSize: 40, 
                        color: theme.palette.primary.light,
                        mr: 2,
                      }} 
                    />
                    <Rating 
                      value={testimonials[activeIndex].rating}
                      readOnly
                      sx={{ color: theme.palette.primary.light }}
                    />
                  </Box>
                  
                  <Typography
                    variant="h5"
                    component="p"
                    sx={{
                      mb: 4,
                      fontStyle: 'italic',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.6,
                    }}
                  >
                    &quot;{testimonials[activeIndex].quote}&quot;
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{ 
                        width: 60, 
                        height: 60,
                        mr: 2,
                        backgroundColor: theme.palette.primary.main,
                      }}
                    >
                      {testimonials[activeIndex].name[0]}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        component="p"
                        sx={{
                          fontWeight: 600,
                          color: 'white',
                        }}
                      >
                        {testimonials[activeIndex].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                        }}
                      >
                        {testimonials[activeIndex].position}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Box>
          
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2,
              mt: 4,
            }}
          >
            <IconButton
              onClick={handlePrev}
              aria-label="previous testimonial"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            
            <IconButton
              onClick={handleNext}
              aria-label="next testimonial"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              mt: 2,
              gap: 1
            }}
          >
            {testimonials.map((_, index) => (
              <Box
                key={index}
                onClick={() => {
                  setSlideDirection(index > activeIndex ? 'right' : 'left');
                  setActiveIndex(index);
                }}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: index === activeIndex ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;