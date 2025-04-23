'use client';
import { useState, useCallback } from 'react';
import { Box, Container, Grid, Typography, TextField, Button, Card, CardContent, Snackbar, Alert, MenuItem, Paper, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useRecaptcha } from '@/hooks/useRecaptcha';
import SectionTitle from '@/components/common/SectionTitle';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const services = [
  'Digital Marketing',
  'Web Development',
  'SEO Services',
  'UI/UX Design',
  'Content Creation',
  'Software Development',
  'TeamSync Implementation',
  'ExcelFlow360 Implementation',
  'Other',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
  'Not sure yet',
];

export default function ContactPage() {
  const theme = useTheme();
  const { executeRecaptcha, isLoaded } = useRecaptcha(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!isLoaded) {
      setSnackbarMessage('reCAPTCHA not loaded. Please refresh the page and try again.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }
    
    if (validateForm()) {
      setLoading(true);
      
      try {
        // Execute reCAPTCHA
        const recaptchaToken = await executeRecaptcha('contact_form');
        
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            recaptchaToken,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setSnackbarMessage('Your message has been sent successfully! We\'ll get back to you soon.');
          setSnackbarSeverity('success');
          setOpenSnackbar(true);
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: '',
          });
        } else {
          setSnackbarMessage(data.error || 'Failed to send message. Please try again later.');
          setSnackbarSeverity('error');
          setOpenSnackbar(true);
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setSnackbarMessage('An error occurred. Please try again later.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    }
  }, [executeRecaptcha, isLoaded, formData, validateForm]);
  
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  
 
  return (
    <Box component="div">
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.background.dark,
          color: theme.palette.text.white,
          pt: { xs: '120px', md: '160px' },
          pb: { xs: '80px', md: '100px' },
          overflow: 'hidden',
        }}
      >
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
            <Grid item size={{ xs: 12, sm: 10 }}   textAlign="center">
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
                  Get In Touch
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
                  Let&apos;s discuss how we can help your business grow
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Contact Form and Info Section */}
      <Box sx={{ py: { xs: 8, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item size={{ xs: 12, md: 8 }}  >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" component="h2" sx={{ mb: 4, fontWeight: 700 }}>
                  Send Us a Message
                </Typography>
                
                <Card sx={{ borderRadius: 3, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
                  <CardContent sx={{ p: 4 }}>
                    <form onSubmit={handleSubmit}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        {/* Name and Email Row */}
                        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                          <TextField
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={!!errors.name}
                            helperText={errors.name}
                            variant="outlined"
                          />
                          
                          <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            error={!!errors.email}
                            helperText={errors.email}
                            variant="outlined"
                          />
                        </Box>
                        
                        {/* Phone and Company Row */}
                        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                          <TextField
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                          />
                          
                          <TextField
                            label="Company Name"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                          />
                        </Box>
                        
                        {/* Service and Budget Row */}
                        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' } }}>
                          <TextField
                            select
                            label="Service Interested In"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                          >
                            {services.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                          
                          <TextField
                            select
                            label="Budget Range"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            fullWidth
                            variant="outlined"
                          >
                            {budgetRanges.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box>
                        
                        {/* Message */}
                        <TextField
                          label="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          fullWidth
                          required
                          multiline
                          rows={6}
                          error={!!errors.message}
                          helperText={errors.message}
                          variant="outlined"
                        />
                        
                        {/* Submit Button */}
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          fullWidth
                          disabled={loading}
                          sx={{ py: 1.5, mt: 2 }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                        
                        {/* reCAPTCHA badge notice */}
                        <Typography variant="caption" color="text.secondary" align="center">
                          This site is protected by reCAPTCHA and the Google{' '}
                          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                          </a>{' '}
                          and{' '}
                          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                            Terms of Service
                          </a>{' '}
                          apply.
                        </Typography>
                      </Box>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item size={{ xs: 12, md: 4 }}  >
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Typography variant="h3" component="h2" sx={{ mb: 4, fontWeight: 700 }}>
                  Contact Information
                </Typography>
                
                <Card 
                  sx={{ 
                    mb: 4, 
                    borderRadius: 3,
                    background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <MailOutlineIcon sx={{ fontSize: 28, mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>
                          Email Us
                        </Typography>
                        <Typography variant="body1">
                          info@brandbudd.com
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <PhoneIcon sx={{ fontSize: 28, mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>
                          Call Us
                        </Typography>
                        <Typography variant="body1">
                          +1 (555) 123-4567
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOnIcon sx={{ fontSize: 28, mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 600 }}>
                          Visit Our Office
                        </Typography>
                        <Typography variant="body1">
                          123 Innovation Way<br />
                          Tech District<br />
                          New York, NY 10001
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                
                <Paper sx={{ p: 4, borderRadius: 3, mb: 4 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                    Office Hours
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="body1" fontWeight={500}>Monday - Friday</Typography>
                    <Typography variant="body1">9:00 AM - 6:00 PM</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="body1" fontWeight={500}>Saturday</Typography>
                    <Typography variant="body1">10:00 AM - 4:00 PM</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body1" fontWeight={500}>Sunday</Typography>
                    <Typography variant="body1">Closed</Typography>
                  </Box>
                </Paper>
                
                <Paper sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                    Connect With Us
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <IconButton 
                      aria-label="facebook" 
                      sx={{ 
                        backgroundColor: 'rgba(59, 89, 152, 0.1)',
                        color: '#3b5998',
                        '&:hover': {
                          backgroundColor: 'rgba(59, 89, 152, 0.2)',
                        },
                      }}
                    >
                      <FacebookIcon />
                    </IconButton>
                    
                    <IconButton 
                      aria-label="twitter" 
                      sx={{ 
                        backgroundColor: 'rgba(29, 161, 242, 0.1)',
                        color: '#1da1f2',
                        '&:hover': {
                          backgroundColor: 'rgba(29, 161, 242, 0.2)',
                        },
                      }}
                    >
                      <TwitterIcon />
                    </IconButton>
                    
                    <IconButton 
                      aria-label="linkedin" 
                      sx={{ 
                        backgroundColor: 'rgba(0, 119, 181, 0.1)',
                        color: '#0077b5',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 119, 181, 0.2)',
                        },
                      }}
                    >
                      <LinkedInIcon />
                    </IconButton>
                    
                    <IconButton 
                      aria-label="instagram" 
                      sx={{ 
                        backgroundColor: 'rgba(225, 48, 108, 0.1)',
                        color: '#e1306c',
                        '&:hover': {
                          backgroundColor: 'rgba(225, 48, 108, 0.2)',
                        },
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Map Section */}
      <Box sx={{ height: '500px', width: '100%', position: 'relative' }}>
        {/* Placeholder for Google Maps - replace with actual map in production */}
        <Box
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
          <Typography variant="h5" align="center">
            Google Maps Integration
          </Typography>
        </Box>
      </Box>
      
      {/* Snackbar for form submission */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}