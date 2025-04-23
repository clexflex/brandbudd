'use client';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
    const theme = useTheme();
    
    return (
        <Box component="div">
            {/* Hero Section */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: theme.palette.background.dark,
                    color: theme.palette.text.white,
                    pt: { xs: '120px', md: '140px' },
                    pb: { xs: '40px', md: '60px' },
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                                textAlign: 'center',
                            }}
                        >
                            Privacy Policy
                        </Typography>
                        
                        <Typography
                            variant="subtitle1"
                            sx={{
                                textAlign: 'center',
                                color: 'rgba(255, 255, 255, 0.7)',
                            }}
                        >
                            Last updated: April 23, 2025
                        </Typography>
                    </motion.div>
                </Container>
            </Box>
            
            {/* Content Section */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="md">
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 6 },
                            borderRadius: 3,
                            border: `1px solid ${theme.palette.divider}`,
                        }}
                    >
                        <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            BrandBudd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website brandbudd.com or use our services.
                        </Typography>
                        
                        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
                            1. Information We Collect
                        </Typography>
                        
                        <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
                            Personal Information
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may collect personal information that you provide to us, including but not limited to:
                        </Typography>
                        <ul>
                            <li>Name and contact information (email address, phone number, mailing address)</li>
                            <li>Business information</li>
                            <li>Account credentials</li>
                            <li>Payment information</li>
                        </ul>
                        
                        <Typography variant="h6" component="h3" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
                            Automatically Collected Information
                        </Typography>
                        <Typography variant="body1" paragraph>
                            When you visit our website, we automatically collect certain information about your device, including:
                        </Typography>
                        <ul>
                            <li>Browser type and version</li>
                            <li>IP address</li>
                            <li>Operating system</li>
                            <li>Access times and dates</li>
                            <li>Pages viewed</li>
                        </ul>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            2. How We Use Your Information
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We use the information we collect to:
                        </Typography>
                        <ul>
                            <li>Provide, operate, and maintain our website and services</li>
                            <li>Improve, personalize, and expand our services</li>
                            <li>Understand and analyze how you use our website</li>
                            <li>Develop new products, services, features, and functionality</li>
                            <li>Communicate with you, including for customer service and support</li>
                            <li>Send you emails, updates, and marketing communications</li>
                            <li>Process your transactions and manage your orders</li>
                            <li>Find and prevent fraud</li>
                        </ul>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            3. Cookies and Tracking Technologies
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            4. Data Security
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            5. Your Rights
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Depending on your location, you may have certain rights regarding your personal information, including:
                        </Typography>
                        <ul>
                            <li>The right to access and receive a copy of your personal information</li>
                            <li>The right to rectify or update your personal information</li>
                            <li>The right to erase your personal information</li>
                            <li>The right to restrict processing of your personal information</li>
                            <li>The right to object to processing of your personal information</li>
                            <li>The right to data portability</li>
                        </ul>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            6. Changes to This Privacy Policy
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            7. Contact Us
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you have any questions about this Privacy Policy, please contact us at:
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Email: info@brandbudd.com<br />
                            Phone: +1 (555) 123-4567<br />
                            Address: 123 Innovation Way, Tech District, New York, NY 10001
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
}