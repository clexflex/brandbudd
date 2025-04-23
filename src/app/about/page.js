
'use client';
import { Box, Container, Grid, Typography, Card, CardContent, Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle';
import CtaSection from '@/components/common/CtaSection';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import CodeIcon from '@mui/icons-material/Code';

export default function AboutPage() {
    const theme = useTheme();

    const team = [
        {
            name: 'Yashraj Ghosalkar',
            position: 'Founder & Lead Developer',
            avatar: '/images/team/yashraj.jpg',
            bio: 'Experienced full-stack developer specializing in React, Node.js, and MongoDB. Passionate about creating innovative digital solutions that solve real business problems.',
        },
        {
            name: 'Sarah Wilson',
            position: 'Digital Marketing Specialist',
            avatar: '/images/team/sarah.jpg',
            bio: 'With over 7 years of experience in digital marketing, Sarah brings expertise in SEO, content strategy, and social media marketing to deliver exceptional results for clients.',
        },
        {
            name: 'Michael Chen',
            position: 'UI/UX Designer',
            avatar: '/images/team/michael.jpg',
            bio: 'Award-winning designer focused on creating intuitive, engaging user experiences. Combines aesthetics with functionality to deliver exceptional digital experiences.',
        },
        {
            name: 'Emily Rodriguez',
            position: 'Project Manager',
            avatar: '/images/team/emily.jpg',
            bio: 'Certified project manager with a track record of delivering complex web and software projects on time and within budget while exceeding client expectations.',
        },
    ];

    const values = [
        {
            icon: <PeopleIcon color="primary" fontSize="large" />,
            title: 'Client-Centered',
            description: 'We put our clients at the center of everything we do, ensuring solutions are tailored to their specific needs and goals.',
        },
        {
            icon: <LightbulbIcon color="primary" fontSize="large" />,
            title: 'Innovation',
            description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions that give our clients a competitive edge.',
        },
        {
            icon: <SpeedIcon color="primary" fontSize="large" />,
            title: 'Efficiency',
            description: 'We value streamlined processes and efficient solutions that save time, reduce costs, and deliver maximum impact.',
        },
        {
            icon: <SecurityIcon color="primary" fontSize="large" />,
            title: 'Reliability',
            description: 'We build robust, secure, and scalable solutions that our clients can depend on for their critical business operations.',
        },
        {
            icon: <SupportIcon color="primary" fontSize="large" />,
            title: 'Support',
            description: 'We provide ongoing support and guidance, serving as a trusted partner in our clients\' long-term digital journey.',
        },
        {
            icon: <CodeIcon color="primary" fontSize="large" />,
            title: 'Quality',
            description: 'We maintain the highest standards of quality in every line of code written and every strategy developed.',
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
                        <Grid item xs={12} md={10} textAlign="center">
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
                                    About BrandBudd
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
                                    Your partner for innovative digital marketing and custom software solutions
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Our Story Section */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
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
                                    Our Story
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    BrandBudd was founded in 2023 with a clear mission: to help businesses harness the power of digital technology to grow and thrive in an increasingly connected world.
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    What started as a small web development studio has grown into a full-service digital agency, offering comprehensive services across web development, digital marketing, and custom software solutions.
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    Our journey has been defined by a relentless pursuit of excellence, a commitment to staying at the forefront of technological innovation, and a deep understanding of the business challenges our clients face.
                                </Typography>

                                <Typography variant="body1">
                                    Today, we're proud to serve clients across diverse industries, helping them transform their digital presence and achieve measurable business results through strategic, data-driven approaches and cutting-edge technology solutions.
                                </Typography>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
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
                                    {/* Placeholder for about image - replace with actual image in production */}
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
                                            BrandBudd Team Image
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Our Values */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Container maxWidth="lg">
                    <SectionTitle
                        title="Our Values"
                        subtitle="The core principles that guide our work and define our approach to every project."
                    />

                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid item size={{ xs: 12, sm: 12 }} key={index}>
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
                                                {value.icon}
                                            </Box>
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                sx={{
                                                    mb: 1.5,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {value.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                            >
                                                {value.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Our Expertise */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <SectionTitle
                        title="Our Expertise"
                        subtitle="We combine technical expertise with strategic thinking to deliver comprehensive digital solutions."
                    />

                    <Grid container spacing={6}>
                        <Grid item size={{ xs: 12, sm: 6 }} >
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        borderRadius: 3,
                                        border: `1px solid ${theme.palette.divider}`,
                                        height: '100%',
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        sx={{
                                            mb: 3,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Technical Skills
                                    </Typography>

                                    <List>
                                        {[
                                            'React & Next.js Development',
                                            'MERN Stack (MongoDB, Express, React, Node.js)',
                                            'UI/UX Design with Material UI & Framer Motion',
                                            'API Development & Integration',
                                            'Database Design & Optimization',
                                            'Mobile-Responsive Web Applications',
                                            'Performance Optimization & SEO',
                                            'DevOps & Deployment',
                                        ].map((skill, index) => (
                                            <ListItem key={index} sx={{ px: 0, py: 1 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircleIcon color="primary" />
                                                </ListItemIcon>
                                                <ListItemText primary={skill} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </motion.div>
                        </Grid>

                        <Grid item size={{ xs: 12, sm: 6 }} >
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 4,
                                        borderRadius: 3,
                                        border: `1px solid ${theme.palette.divider}`,
                                        height: '100%',
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        sx={{
                                            mb: 3,
                                            fontWeight: 600,
                                        }}
                                    >
                                        Marketing Expertise
                                    </Typography>

                                    <List>
                                        {[
                                            'Search Engine Optimization (SEO)',
                                            'Content Marketing Strategy',
                                            'Social Media Marketing',
                                            'Email Marketing Campaigns',
                                            'Pay-Per-Click (PPC) Advertising',
                                            'Conversion Rate Optimization',
                                            'Digital Marketing Analytics',
                                            'Brand Strategy & Development',
                                        ].map((skill, index) => (
                                            <ListItem key={index} sx={{ px: 0, py: 1 }}>
                                                <ListItemIcon sx={{ minWidth: 36 }}>
                                                    <CheckCircleIcon color="primary" />
                                                </ListItemIcon>
                                                <ListItemText primary={skill} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Paper>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Team Section */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <Container maxWidth="lg">
                    <SectionTitle
                        title="Meet Our Team"
                        subtitle="The talented professionals behind our success, bringing expertise across development, design, and marketing."
                    />

                    <Grid container spacing={4}>
                        {team.map((member, index) => (
                            <Grid item size={{ xs: 12, sm: 6 }} key={index}>
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
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                            transition: 'transform 0.3s, box-shadow 0.3s',
                                            '&:hover': {
                                                transform: 'translateY(-8px)',
                                                boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                pt: 4,
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: 120,
                                                    height: 120,
                                                    backgroundColor: theme.palette.primary.main,
                                                    fontSize: '3rem',
                                                }}
                                            >
                                                {member.name.charAt(0)}
                                            </Avatar>
                                        </Box>

                                        <CardContent>
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                sx={{
                                                    mt: 1,
                                                    mb: 0.5,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {member.name}
                                            </Typography>

                                            <Typography
                                                variant="subtitle1"
                                                color="primary"
                                                sx={{
                                                    mb: 2,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                {member.position}
                                            </Typography>

                                            <Divider sx={{ mb: 2 }} />

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                {member.bio}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Why Choose Us */}
            <Box sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    variant="h2"
                                    component="h2"
                                    sx={{
                                        mb: 4,
                                        fontWeight: 700,
                                    }}
                                >
                                    Why Choose BrandBudd?
                                </Typography>

                                <List>
                                    {[
                                        {
                                            title: 'End-to-End Solutions',
                                            description: 'From strategy and design to development and ongoing support, we provide comprehensive services under one roof.',
                                        },
                                        {
                                            title: 'Tailored Approach',
                                            description: 'We develop custom solutions designed specifically for your unique business needs and objectives.',
                                        },
                                        {
                                            title: 'Results-Driven',
                                            description: 'Our focus is on delivering measurable results that contribute to your business growth and success.',
                                        },
                                        {
                                            title: 'Technical Excellence',
                                            description: 'We maintain the highest standards of technical quality in every project we undertake.',
                                        },
                                        {
                                            title: 'Ongoing Support',
                                            description: 'Our relationship doesn\'t end at launch—we provide continuous support and optimization.',
                                        },
                                    ].map((item, index) => (
                                        <ListItem key={index} alignItems="flex-start" sx={{ px: 0, py: 2 }}>
                                            <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                                                <CheckCircleIcon color="primary" />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={
                                                    <Typography variant="h6" component="span" sx={{ fontWeight: 600, mb: 0.5, display: 'block' }}>
                                                        {item.title}
                                                    </Typography>
                                                }
                                                secondary={item.description}
                                                secondaryTypographyProps={{ color: 'text.secondary' }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </motion.div>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: { xs: '300px', sm: '400px', md: '500px' },
                                        width: '100%',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                                    }}
                                >
                                    {/* Placeholder for image - replace with actual image in production */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Typography variant="h5" align="center" sx={{ px: 3, color: 'white' }}>
                                            Why Choose Us Image
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Call to Action */}
            <CtaSection
                title="Ready to Partner with BrandBudd?"
                description="Let's discuss how our expertise can help transform your digital presence and achieve your business goals."
                buttonText="Get in Touch"
                buttonLink="/contact"
                background="gradient"
            />
        </Box>
    );
}