'use client';
import { Box, Container, Grid, Typography, Button, Card, CardContent, Divider, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import CtaSection from '@/components/common/CtaSection';
import Link from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PaymentIcon from '@mui/icons-material/Payment';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FolderIcon from '@mui/icons-material/Folder';

// SEO Metadata
export const Metadata = {
    title: 'TeamSync - Employee Management Solution | BrandBudd',
    description: 'TeamSync is a comprehensive employee management system with attendance tracking, leave management, and payroll processing capabilities.',
    keywords: 'TeamSync, employee management, attendance tracking, leave management, payroll processing, HR software',
};

export default function TeamSyncPage() {
    const theme = useTheme();

    const features = [
        {
            icon: <PeopleIcon color="primary" fontSize="large" />,
            title: 'Team Management',
            description: 'Centralized employee database with role-based access control and comprehensive profile management.',
        },
        {
            icon: <EventNoteIcon color="primary" fontSize="large" />,
            title: 'Attendance Tracking',
            description: 'Real-time attendance tracking with multiple check-in options, approval workflows, and detailed reporting.',
        },
        {
            icon: <NotificationsActiveIcon color="primary" fontSize="large" />,
            title: 'Leave Management',
            description: 'Streamlined leave request process with policy configuration, balance tracking, and automated approvals.',
        },
        {
            icon: <PaymentIcon color="primary" fontSize="large" />,
            title: 'Payroll Processing',
            description: 'Automated payroll calculations based on attendance data, with customizable components and payslip generation.',
        },
        {
            icon: <FolderIcon color="primary" fontSize="large" />,
            title: 'Document Center',
            description: 'Centralized storage for important documents with version control and access permissions.',
        },
        {
            icon: <SecurityIcon color="primary" fontSize="large" />,
            title: 'Data Security',
            description: 'Enterprise-grade security with data encryption, audit trails, and regular backups to protect sensitive information.',
        },
    ];

    const pricingPlans = [
        {
            title: 'Basic',
            price: '$99',
            period: '/month',
            description: 'Perfect for small teams up to 25 employees',
            features: [
                'Attendance Management',
                'Leave Management',
                'Basic Reporting',
                'Employee Profiles',
                'Email Support',
                '5GB Document Storage',
            ],
            buttonText: 'Get Started',
            buttonVariant: 'outlined',
        },
        {
            title: 'Pro',
            price: '$249',
            period: '/month',
            description: 'Ideal for growing businesses up to 100 employees',
            features: [
                'Everything in Basic',
                'Payroll Processing',
                'Advanced Reporting',
                'Document Management',
                'API Access',
                'Priority Support',
                '20GB Document Storage',
            ],
            buttonText: 'Get Started',
            buttonVariant: 'contained',
            highlighted: true,
        },
        {
            title: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'Tailored solutions for large organizations',
            features: [
                'Everything in Pro',
                'Custom Integrations',
                'Dedicated Account Manager',
                'White-labeling Options',
                'On-premise Deployment',
                'Custom Workflow Builder',
                'Unlimited Document Storage',
            ],
            buttonText: 'Contact Us',
            buttonVariant: 'outlined',
        },
    ];

    const faqs = [
        {
            question: 'How long does it take to implement TeamSync?',
            answer: 'Implementation typically takes 2-4 weeks depending on your requirements and data migration needs. Our team provides full support throughout the process to ensure a smooth transition.',
        },
        {
            question: 'Can TeamSync integrate with existing HR systems?',
            answer: 'Yes, TeamSync offers API access that allows for integration with popular HR and payroll systems. Our Enterprise plan includes custom integrations with your existing software ecosystem.',
        },
        {
            question: 'Is it possible to customize TeamSync for our specific workflows?',
            answer: 'Absolutely. TeamSync is designed to be flexible and adaptable to your business processes. The Pro plan allows for configuration of workflows, while the Enterprise plan offers complete customization options.',
        },
        {
            question: 'What kind of support is included?',
            answer: 'All plans include technical support. Basic plan offers email support with 24-hour response time, Pro includes priority support with 8-hour response, and Enterprise comes with a dedicated account manager for immediate assistance.',
        },
        {
            question: 'How secure is our employee data in TeamSync?',
            answer: 'TeamSync employs enterprise-grade security measures including data encryption, regular backups, role-based access control, and audit logs. We comply with data protection regulations to ensure your employee data remains secure.',
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
                    <Grid container spacing={6} alignItems="center">
                        <Grid item  size={{ xs: 12, md: 6 }}  >
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
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
                                    TeamSync
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
                                    Streamline your team management with our comprehensive solution
                                </Typography>

                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        mb: 4,
                                        color: 'rgba(255, 255, 255, 0.7)',
                                    }}
                                >
                                    TeamSync is a powerful employee management platform that streamlines attendance tracking, leave management, and payroll processing. Designed to save time and reduce errors, it's the all-in-one solution for modern HR departments.
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        component={Link}
                                        href="/contact"
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        Request Demo
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
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

                        <Grid item  size={{ xs: 12, md: 6 }}  >
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
                  {/* Placeholder for product image - replace with actual image in production */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: theme.palette.background.paper,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h4" align="center" sx={{ px: 3, color: theme.palette.text.primary }}>
                      TeamSync Dashboard Preview
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Key Benefits Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <SectionTitle
                        title="Key Benefits"
                        subtitle="See how TeamSync transforms your HR operations and improves team productivity."
                    />

                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item  size={{ xs: 12, sm: 6, md: 12 }}  key={index}>
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

            {/* Technical Features Section */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item  size={{ xs: 12, md: 6 }}  >
                            <SectionTitle
                                title="Technical Features"
                                subtitle="Built with modern technology to ensure reliability, security, and excellent performance."
                                align="left"
                            />

                            <List>
                                {[
                                    'Cloud-based architecture for anywhere, anytime access',
                                    'Mobile responsive design works seamlessly on all devices',
                                    'Real-time updates and notifications',
                                    'Advanced data security with encryption and regular backups',
                                    'Customizable workflows and automation',
                                    'Comprehensive reporting and analytics',
                                    'API access for integration with other systems',
                                    'Regular updates and feature enhancements',
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <ListItem sx={{ px: 0, py: 1 }}>
                                            <ListItemIcon sx={{ minWidth: 36 }}>
                                                <CheckCircleIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText primary={feature} />
                                        </ListItem>
                                    </motion.div>
                                ))}
                            </List>
                        </Grid>

                        <Grid item  size={{ xs: 12, md: 6 }}  >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: { xs: '300px', sm: '400px', md: '450px' },
                                        width: '100%',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    {/* Placeholder for technical feature image - replace with actual image in production */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography variant="h5" align="center" sx={{ px: 3, color: 'white' }}>
                                            Technical Features Illustration
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Pricing Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <SectionTitle
                        title="Pricing Plans"
                        subtitle="Choose the perfect plan for your team size and business needs."
                    />

                    <Grid container spacing={4} sx={{ mt: 2 }}>
                        {pricingPlans.map((plan, index) => (
                            <Grid item  size={{ xs: 12, md: 4 }}   key={index}>
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
                                            border: plan.highlighted ? `2px solid ${theme.palette.primary.main}` : 'none',
                                        }}
                                    >
                                        {plan.highlighted && (
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 20,
                                                    right: -30,
                                                    transform: 'rotate(45deg)',
                                                    backgroundColor: theme.palette.primary.main,
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
                                                backgroundColor: plan.highlighted ? 'rgba(37, 99, 235, 0.05)' : 'transparent',
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                sx={{
                                                    mb: 2,
                                                    fontWeight: 700,
                                                    color: plan.highlighted ? theme.palette.primary.main : 'inherit',
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
                                                            <CheckCircleIcon color={plan.highlighted ? "primary" : "success"} />
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
                                                color="primary"
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

            {/* FAQ Section */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Container maxWidth="lg">
                    <SectionTitle
                        title="Frequently Asked Questions"
                        subtitle="Find answers to common questions about TeamSync implementation, features, and support."
                    />

                    <Box sx={{ mt: 4, maxWidth: 800, mx: 'auto' }}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Accordion
                                    sx={{
                                        mb: 2,
                                        boxShadow: 'none',
                                        '&:before': {
                                            display: 'none',
                                        },
                                        borderRadius: '8px !important',
                                        overflow: 'hidden',
                                        border: `1px solid ${theme.palette.divider}`,
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        sx={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.01)',
                                        }}
                                    >
                                        <Typography variant="subtitle1" fontWeight={600}>
                                            {faq.question}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography variant="body1" color="text.secondary">
                                            {faq.answer}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </motion.div>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Call to Action */}
            <CtaSection
                title="Ready to Streamline Your Team Management?"
                description="Get started with TeamSync today and transform how you manage your workforce."
                buttonText="Request a Demo"
                buttonLink="/contact"
                background="primary"
            />
        </Box>
    );
}