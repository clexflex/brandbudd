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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import CardMembershipIcon from '@mui/icons-material/CardMembership';

export default function SparshResumePage() {
    const theme = useTheme();
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Sparsh_Prajapati_Resume';
        link.download = 'Sparsh_Prajapati_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const skills = [
        {
            category: 'Programming Languages',
            items: ['Java', 'C++']
        },
        {
            category: 'Development',
            items: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Node.js', 'Express.js', 'Servlets', 'JSP', 'Hibernate/JPA', 'Spring MVC', 'RESTful APIs', 'Microservices']
        },
        {
            category: 'Frameworks',
            items: ['Spring Boot', 'Hibernate/JPA', 'RESTful APIs', 'Angular', 'JUnit']
        },
        {
            category: 'Tools',
            items: ['Git', 'Command Line', 'VS Code', 'Docker', 'Jenkins', 'Maven']
        },
        {
            category: 'Cloud/Databases',
            items: ['MySQL', 'MongoDB', 'RDBMS']
        },
        {
            category: 'Design',
            items: ['Design Patterns', 'Microservices Architecture']
        },
        {
            category: 'Soft Skills',
            items: ['Synergetic', 'Result-driven', 'Well Scheduled', 'Team collaboration']
        },
    ];

    const experience = [
        {
            company: 'Defence Research and Development Organisation (DRDO)',
            position: 'Summer Intern',
            period: 'Feb 2024 - June 2024',
            location: 'Delhi, India',
            description: [
                'Engineered a Python-based link budget calculator, optimizing computational time by 92% (from 45 to 3 minutes)',
                'Orchestrated satellite communication analysis with 99.8% computational accuracy across diverse scenarios',
                'Implemented satellite communication analysis tool with 99.8% computational accuracy across multiple scenarios',
            ],
        },
        {
            company: 'National Council of Educational Research and Training (NCERT)',
            position: 'Summer Intern',
            period: 'Feb 2022 - Mar 2022',
            location: 'New Delhi, India',
            description: [
                'Redesigned and enhanced 5 NCERT textbooks for Class 11th and 12th using HTML and CSS, boosting readability and content accuracy by 25%',
                'Coordinated closely with editors and subject matter experts to maintain rigorous quality standards for 5 NCERT textbooks, achieving on-time delivery that met all project milestones',
            ],
        },
    ];

    const education = [
        {
            institution: 'CDAC ACTS',
            degree: 'Diploma in Advance Computing',
            period: 'Feb 2025',
            description: 'Comprehensive advanced computing course. Percentage: 72.63%',
            location: 'Pune, India'
        },
        {
            institution: 'Manipal University Jaipur',
            degree: 'B.Tech Computer Science and Engineering',
            period: 'June 2024',
            description: 'Focus on computer science fundamentals and software engineering. GPA: 7.35/10.00',
            location: 'Jaipur, India'
        },
        {
            institution: 'Lions Public School',
            degree: 'Senior Secondary Schooling (XII)',
            period: 'June 2020',
            description: 'Science stream with Computer Science. Percentage: 85.6%',
            location: 'Gurugram, India'
        },
    ];

    const certifications = [
        {
            title: 'The Complete Web Development Bootcamp',
            issuer: 'Dr. Angela Yu',
            credential: 'UC-f9523256-d741-4ecd-8b09-bbaf00a48724',
            link: 'http://ude.my/UC-f9523256-d741-4ecd-8b09-bbaf00a48724',
            description: 'Comprehensive web development course covering frontend and backend technologies.',
        },
        {
            title: 'SOAP Web Services with JAX-WS',
            issuer: 'Learn Quest',
            credential: '5A4UJMVFJ5YZ',
            link: 'https://coursera.org/verify/5A4UJMVFJ5YZ',
            description: 'Specialized course in SOAP web services using JAX-WS technology.',
        },
        {
            title: 'Enterprise Java Beans (EJBs) and the Jakarta Persistence API (JPA)',
            issuer: 'Learn Quest',
            credential: '875DYBST4ZU6',
            link: 'https://coursera.org/verify/875DYBST4ZU6',
            description: 'Advanced course covering Enterprise Java Beans and JPA for enterprise applications.',
        },
    ];

    const projects = [
        {
            title: 'Enterprise E-commerce Application',
            description: 'Full-stack e-commerce platform with secure transaction processing, inventory management, and real-time analytics dashboard.',
            features: [
                'Customers can browse products, add items to cart, and securely complete transactions',
                'Admins manage inventory, process orders, and generate sales analytics with real-time dashboards',
                'Integrated payment gateway ensures seamless checkout experience',
                'Implemented role-based access control and JWT authentication for secure user sessions',
                'Adopted microservices architecture with modular code structure and Docker-based deployment',
                'Improved deployment efficiency by 50%',
            ],
            technologies: ['Spring Boot', 'Angular', 'Microservices', 'Docker', 'MongoDB', 'JWT'],
            link: '/projects/e-commerce-enterprise',
        },
        {
            title: 'Link Budget Calculator',
            description: 'Python-based application for satellite communication analysis with significant performance optimization.',
            features: [
                'Reduced computational time by 92% (from 45 to 3 minutes)',
                'Achieved 99.8% computational accuracy across diverse scenarios',
                'Developed for DRDO to optimize satellite communication calculations',
            ],
            technologies: ['Python', 'Data Analysis', 'Communication Systems'],
            link: '/projects/link-budget-calculator',
        },
    ];

    return (
        <Box component="div" sx={{ py: { xs: 10, md: 12 } }}>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '80px',
                    background: theme.palette.background.dark,
                    zIndex: theme.zIndex.drawer - 1,
                    pointerEvents: 'none'
                }}
            />
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Header / Profile Section */}
                    <Grid item size={{ xs: 12 }}>
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
                                    src="/images/team/sparsh1.png"
                                    alt="Sparsh Prajapati"
                                    sx={{
                                        width: { xs: 120, sm: 150 },
                                        height: { xs: 120, sm: 150 },
                                        backgroundColor: theme.palette.primary.main,
                                        fontSize: '4rem',
                                    }}
                                >
                                    S
                                </Avatar>

                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="h2" component="h1" sx={{ mb: 1, fontWeight: 700 }}>
                                        Sparsh Prajapati
                                    </Typography>

                                    <Typography variant="h5" component="h2" color="primary" sx={{ mb: 2, fontWeight: 500 }}>
                                        Software Developer
                                    </Typography>

                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 700 }}>
                                        Aspiring Software Developer with a robust technical foundation, proficient in Java, web technologies (JavaScript, Angular, Spring Boot, Microservices, .NET), back-end development (Node.js, Express.js), and databases (MySQL, MongoDB). Equipped with strong academic credentials and practical experience in software development, project management, and collaborative teamwork. Skilled in Git version control, committed to continuous learning, and enthusiastic about leveraging technical expertise to drive innovative technological solutions in the rapidly evolving computer science landscape.
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <EmailIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                sparshprajapati2002@gmail.com
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <LocationOnIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                Gurugram, Haryana
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<DownloadIcon />}
                                        onClick={handleDownloadResume}
                                    >
                                        Download Resume
                                    </Button>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* Skills Section */}
                    <Grid item size={{ xs: 12, md: 6 }}>
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
                    <Grid item size={{ xs: 12, md: 6 }}>
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
                    <Grid item size={{ xs: 12 }}>
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
                                        Internship Experience
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
                    <Grid item size={{ xs: 12 }}>
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
                                                    <Typography variant="body2" color="text.secondary">
                                                        {edu.location}
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

                    {/* Certifications Section */}
                    <Grid item size={{ xs: 12 }}>
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
                                    border: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                    <CardMembershipIcon color="primary" sx={{ mr: 2, fontSize: 28 }} />
                                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                                        Certifications
                                    </Typography>
                                </Box>

                                <Grid container spacing={3}>
                                    {certifications.map((cert, index) => (
                                        <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                            <Card
                                                sx={{
                                                    height: '100%',
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
                                                        {cert.title}
                                                    </Typography>

                                                    <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                                                        {cert.issuer}
                                                    </Typography>

                                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                                        {cert.description}
                                                    </Typography>

                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                        <Typography variant="caption" color="text.secondary">
                                                            ID: {cert.credential}
                                                        </Typography>
                                                        <Button
                                                            variant="outlined"
                                                            size="small"
                                                            href={cert.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            View
                                                        </Button>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* CTA - Contact Section */}
                    <Grid item size={{ xs: 12 }}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
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
                                    Let's Work Together
                                </Typography>

                                <Typography variant="body1" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
                                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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