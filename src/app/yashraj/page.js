// src/app/yashraj/page.js
'use client';
import { Box, Container, Grid, Typography, Paper, Chip, Divider, List, ListItem, ListItemIcon, ListItemText, Button, Card, CardContent, Link as MuiLink, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

export default function ResumePage() {
    const theme = useTheme();

    const skills = [
        {
            category: 'Frontend Development',
            items: ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Material UI', 'Framer Motion', 'Tailwind CSS']
        },
        {
            category: 'Backend Development',
            items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL', 'Firebase']
        },
        {
            category: 'Tools & Workflow',
            items: ['Git', 'GitHub', 'VS Code', 'npm/Yarn', 'Webpack', 'Docker', 'Vercel', 'Render']
        },
        {
            category: 'Digital Marketing',
            items: ['SEO', 'Content Marketing', 'Google Analytics', 'Email Marketing', 'Social Media Marketing']
        },
    ];

    const experience = [
        {
            company: 'BrandBudd',
            position: 'Founder & Lead Developer',
            period: '2023 - Present',
            location: 'New York, NY',
            description: [
                'Founded and lead a digital marketing and software development agency specializing in web development and custom software solutions.',
                'Developed TeamSync, a comprehensive employee management system with attendance tracking, leave management, and payroll processing.',
                'Created ExcelFlow360, a MERN stack application for managing employee data with Excel file uploads and EOD status tracking.',
                'Implemented SEO strategies resulting in 150%+ organic traffic growth for clients.',
                'Manage client relationships and ensure timely delivery of high-quality projects.',
            ],
        },
        {
            company: 'TechInnovate Solutions',
            position: 'Senior Web Developer',
            period: '2020 - 2023',
            location: 'San Francisco, CA',
            description: [
                'Led development of responsive, performant web applications using React, Node.js, and MongoDB.',
                'Implemented CI/CD pipelines using GitHub Actions, improving deployment efficiency by 40%.',
                'Optimized application performance, reducing load times by 60% through code splitting and lazy loading.',
                'Mentored junior developers and conducted code reviews to ensure high quality standards.',
                'Collaborated with design and marketing teams to create seamless user experiences.',
            ],
        },
        {
            company: 'Digital Growth Partners',
            position: 'Web Developer & Digital Marketing Specialist',
            period: '2018 - 2020',
            location: 'Chicago, IL',
            description: [
                'Developed custom WordPress themes and plugins for clients across various industries.',
                'Implemented SEO best practices, resulting in first-page rankings for targeted keywords.',
                'Created and executed content marketing strategies, increasing client traffic by an average of 75%.',
                'Managed social media campaigns across multiple platforms, achieving 2-3x engagement rates.',
                'Utilized Google Analytics to track performance and optimize marketing strategies.',
            ],
        },
    ];

    const education = [
        {
            institution: 'University of California, Berkeley',
            degree: 'Bachelor of Science in Computer Science',
            period: '2014 - 2018',
            description: 'Focused on web development, algorithms, and software engineering. Graduated with honors.',
        },
        {
            institution: 'Digital Marketing Institute',
            degree: 'Professional Diploma in Digital Marketing',
            period: '2019',
            description: 'Comprehensive training in SEO, content marketing, social media, and digital strategy.',
        },
    ];

    const projects = [
        {
            title: 'TeamSync',
            description: 'Comprehensive employee management system with attendance tracking, leave management, and payroll processing.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Material UI'],
            link: '/products/teamsync',
        },
        {
            title: 'ExcelFlow360',
            description: 'MERN stack application for managing employee data with Excel file uploads and EOD status tracking.',
            technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Material UI', 'Tailwind CSS'],
            link: '/products/excelflow360',
        },
        {
            title: 'E-Commerce Platform',
            description: 'Custom e-commerce solution with integrated payment processing and inventory management.',
            technologies: ['React', 'Next.js', 'Stripe', 'MongoDB', 'AWS'],
            link: '/portfolio/ecommerce-platform',
        },
    ];

    return (
        <Box component="div" sx={{ py: { xs: 10, md: 12 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Header / Profile Section */}
                    <Grid item  size={{ xs: 12 }} >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 3,
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    alignItems: { xs: 'center', sm: 'flex-start' },
                                    textAlign: { xs: 'center', sm: 'left' },
                                    gap: 3,
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: { xs: 120, sm: 150 },
                                        height: { xs: 120, sm: 150 },
                                        backgroundColor: theme.palette.primary.main,
                                        fontSize: '4rem',
                                    }}
                                >
                                    Y
                                </Avatar>

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h2" component="h1" sx={{ mb: 1, fontWeight: 700 }}>
                                        Yashraj Ghosalkar
                                    </Typography>

                                    <Typography variant="h5" component="h2" color="primary" sx={{ mb: 2, fontWeight: 500 }}>
                                        Full Stack Developer & Digital Marketing Specialist
                                    </Typography>

                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 700 }}>
                                        Experienced developer and digital marketing specialist with 5+ years of expertise building web applications and digital strategies. Passionate about creating intuitive digital experiences that solve real business problems.
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <EmailIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                yashraj@brandbudd.com
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PhoneIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                (555) 123-4567
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <LinkedInIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                linkedin.com/in/yashraj
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <GitHubIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                github.com/yashraj
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<DownloadIcon />}
                                        href="/yashraj-resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download Resume
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Skills Section */}
                    <Grid item  size={{ xs: 12, md: 6 }} >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 3,
                                    height: '100%',
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <CodeIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                                        Skills & Expertise
                                    </Typography>
                                </Box>

                                <Box>
                                    {skills.map((skillGroup, index) => (
                                        <Box key={index} sx={{ mb: index < skills.length - 1 ? 4 : 0 }}>
                                            <Typography variant="h6" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                                                {skillGroup.category}
                                            </Typography>

                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {skillGroup.items.map((skill) => (
                                                    <Chip
                                                        key={skill}
                                                        label={skill}
                                                        color="primary"
                                                        variant="outlined"
                                                        size="medium"
                                                        sx={{ mb: 1 }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Projects Section */}
                    <Grid item  size={{ xs: 12, md: 6 }} >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 3,
                                    height: '100%',
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <LanguageIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                                        Featured Projects
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                    {projects.map((project, index) => (
                                        <Box key={index}>
                                            <MuiLink
                                                component={Link}
                                                href={project.link}
                                                underline="none"
                                                color="inherit"
                                            >
                                                <Card
                                                    sx={{
                                                        boxShadow: 'none',
                                                        border: `1px solid ${theme.palette.divider}`,
                                                        borderRadius: 2,
                                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                                        '&:hover': {
                                                            transform: 'translateY(-4px)',
                                                            boxShadow: '0 6px 12px rgba(0,0,0,0.1)',
                                                        },
                                                    }}
                                                >
                                                    <CardContent sx={{ p: 3 }}>
                                                        <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                                                            {project.title}
                                                        </Typography>

                                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                            {project.description}
                                                        </Typography>

                                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                            {project.technologies.slice(0, 3).map((tech) => (
                                                                <Chip key={tech} label={tech} size="small" />
                                                            ))}
                                                            {project.technologies.length > 3 && (
                                                                <Chip label={`+${project.technologies.length - 3}`} size="small" variant="outlined" />
                                                            )}
                                                        </Box>
                                                    </CardContent>
                                                </Card>
                                            </MuiLink>
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Experience Section */}
                    <Grid item  size={{ xs: 12 }} >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 3,
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <WorkIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                                        Work Experience
                                    </Typography>
                                </Box>

                                <Box>
                                    {experience.map((job, index) => (
                                        <Box key={index} sx={{ mb: index < experience.length - 1 ? 4 : 0 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={4} md={3}>
                                                    <Typography variant="subtitle1" fontWeight={500} color="primary">
                                                        {job.period}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {job.location}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={8} md={9}>
                                                    <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                                                        {job.position}
                                                    </Typography>

                                                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                                                        {job.company}
                                                    </Typography>

                                                    <List sx={{ pl: 2, '& .MuiListItem-root': { px: 0, py: 0.5 } }}>
                                                        {job.description.map((item, i) => (
                                                            <ListItem key={i}>
                                                                <ListItemIcon sx={{ minWidth: 28 }}>
                                                                    <CheckCircleIcon color="primary" fontSize="small" />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>
                                                        ))}
                                                    </List>
                                                </Grid>
                                            </Grid>

                                            {index < experience.length - 1 && (
                                                <Divider sx={{ mt: 4 }} />
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Education Section */}
                    <Grid item size={{ xs: 12}} >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 3,
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <SchoolIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                                        Education
                                    </Typography>
                                </Box>

                                <Box>
                                    {education.map((edu, index) => (
                                        <Box key={index} sx={{ mb: index < education.length - 1 ? 4 : 0 }}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} sm={4} md={3}>
                                                    <Typography variant="subtitle1" fontWeight={500} color="primary">
                                                        {edu.period}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={12} sm={8} md={9}>
                                                    <Typography variant="h5" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
                                                        {edu.degree}
                                                    </Typography>

                                                    <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                                                        {edu.institution}
                                                    </Typography>

                                                    <Typography variant="body1">
                                                        {edu.description}
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                            {index < education.length - 1 && (
                                                <Divider sx={{ mt: 4 }} />
                                            )}
                                        </Box>
                                    ))}
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* CTA - Contact Section */}
                    <Grid >
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    borderRadius: 3,
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    textAlign: 'center',
                                }}
                            >
                                <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
                                    Interested in Working Together?
                                </Typography>

                                <Typography variant="body1" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
                                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    component={Link}
                                    href="/contact"
                                    sx={{ px: 4, py: 1.5 }}
                                >
                                    Get In Touch
                                </Button>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}