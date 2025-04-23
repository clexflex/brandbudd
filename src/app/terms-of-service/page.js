'use client';
import { Box, Container, Typography, Paper, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
                            Terms of Service
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
                            Welcome to BrandBudd. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
                        </Typography>
                        
                        <Typography variant="h4" component="h2" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
                            1. Acceptance of Terms
                        </Typography>
                        <Typography variant="body1" paragraph>
                            By accessing and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            2. Services
                        </Typography>
                        <Typography variant="body1" paragraph>
                            BrandBudd provides digital marketing, web development, and software development services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            3. User Responsibilities
                        </Typography>
                        <Typography variant="body1" paragraph>
                            When using our services, you agree to:
                        </Typography>
                        <ul>
                            <li>Provide accurate and complete information</li>
                            <li>Maintain the security of your account credentials</li>
                            <li>Comply with all applicable laws and regulations</li>
                            <li>Not engage in any activity that interferes with or disrupts our services</li>
                            <li>Not attempt to gain unauthorized access to our systems</li>
                        </ul>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            4. Intellectual Property
                        </Typography>
                        <Typography variant="body1" paragraph>
                            All content on this website, including text, graphics, logos, images, and software, is the property of BrandBudd or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute our content without our written permission.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            5. Payment Terms
                        </Typography>
                        <Typography variant="body1" paragraph>
                            For paid services:
                        </Typography>
                        <ul>
                            <li>All fees are due as specified in your service agreement</li>
                            <li>Payments are non-refundable unless otherwise stated</li>
                            <li>We reserve the right to change our fees with notice</li>
                            <li>You are responsible for all taxes associated with your use of our services</li>
                        </ul>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            6. Limitation of Liability
                        </Typography>
                        <Typography variant="body1" paragraph>
                            To the maximum extent permitted by law, BrandBudd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            7. Indemnification
                        </Typography>
                        <Typography variant="body1" paragraph>
                            You agree to indemnify and hold harmless BrandBudd, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of our services or violation of these terms.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            8. Termination
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms of Service. Upon termination, your right to use our services will immediately cease.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            9. Governing Law
                        </Typography>
                        <Typography variant="body1" paragraph>
                            These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            10. Changes to Terms
                        </Typography>
                        <Typography variant="body1" paragraph>
                            We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
                        </Typography>
                        
                        <Divider sx={{ my: 4 }} />
                        
                        <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                            11. Contact Information
                        </Typography>
                        <Typography variant="body1" paragraph>
                            If you have any questions about these Terms of Service, please contact us at:
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