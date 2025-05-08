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
import CardMembershipIcon from '@mui/icons-material/CardMembership';

export default function ResumePage() {
    const theme = useTheme();
    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Yashraj_Resume.pdf';
        link.download = 'Yashraj_Ghosalkar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const skills = [
        {
            category: 'Programming Languages',
            items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'PHP', 'SQL', 'HTML5', 'CSS3', 'C++']
        },
        {
            category: 'Core Competencies',
            items: ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Greedy Algorithms', 'Problem Solving']
        },
        {
            category: 'Frameworks / Libraries',
            items: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Bootstrap', 'jQuery']
        },
        {
            category: 'Database Technologies',
            items: ['MySQL', 'MongoDB', 'PostgreSQL']
        },
        {
            category: 'Tools / Platforms',
            items: ['Git', 'Docker', 'Kubernetes', 'Webpack', 'Babel', 'Postman']
        },
        {
            category: 'Web Development',
            items: ['Front-End Development', 'Responsive Design', 'Web Applications', 'UI/UX Principles']
        },
        {
            category: 'Other Skills',
            items: ['Responsive Design', 'REST APIs', 'Agile Development', 'Cross-Browser Compatibility', 'Testing with Cypress and Jest']
        },
    ];

    const experience = [
        {
            company: 'BrandBudd',
            position: 'Founder & Lead Developer',
            period: '2023 - Present',
            location: 'India',
            description: [
                'Founded and lead a digital marketing and software development agency specializing in web development and custom software solutions.',
                'Developed TeamSync, a comprehensive employee management system with attendance tracking, leave management, and payroll processing.',
                'Created ExcelFlow360, a MERN stack application for managing employee data with Excel file uploads and EOD status tracking.',
                'Implemented SEO strategies resulting in 150%+ organic traffic growth for clients.',
                'Manage client relationships and ensure timely delivery of high-quality projects.',
            ],
        },
        {
            company: 'Maximize Market Research Pvt. Ltd.',
            position: 'Web Developer',
            period: 'Jun 2024 - Present',
            location: 'Pune, India',
            description: [
                'Developed dynamic web applications using React.js, Node.js, and REST APIs, ensuring high performance and scalability.',
                'Enhanced website responsiveness and usability across devices, optimizing the user experience.',
                'Worked closely with cross-functional teams including designers and backend developers to deliver end-to-end solutions.',
            ],
        },
        {
            company: 'Zeetron Networks Pvt. Ltd.',
            position: 'Research Engineer Trainee',
            period: 'Jan 2024 - May 2024',
            location: 'Jaipur, India',
            description: [
                'Developed interactive data visualization tools using React.js and integrated APIs for real-time data updates.',
                'Collaborated with backend teams to integrate and debug RESTful APIs, ensuring seamless communication.',
            ],
        },
        {
            company: 'Freelance Projects',
            position: 'Full Stack Developer',
            period: 'Jul 2022 - Present',
            location: 'Remote',
            description: [
                'Built a full-stack e-commerce application with dynamic product listings, cart management, and secure user authentication using MERN stack.',
                'Developed a personal portfolio website showcasing projects, leveraging React.js and Bootstrap for responsive design.',
            ],
        },
    ];

    const education = [
        {
            institution: 'Manipal University Jaipur',
            degree: 'B.Tech. in Computer Science and Engineering',
            period: 'Aug 2020 - May 2024',
            description: 'Focused on web development, algorithms, and software engineering. CGPA: 7.77/10',
        },
        {
            institution: 'Government Polytechnic Kolhapur',
            degree: 'Diploma in Information Technology',
            period: '2018 - 2021',
            description: 'Comprehensive training in information technology fundamentals. Percentage: 93.56%',
        },
        {
            institution: 'Shrimant Maisaheb Bavdekar School, Kolhapur',
            degree: 'Secondary School Certificate (SSC)',
            period: '2012 - 2018',
            description: 'Percentage: 94%',
        },
    ];

    const certifications = [
        {
            title: 'Full-Stack Web Development',
            issuer: 'Udemy',
            description: 'Comprehensive full-stack web development certification covering MERN stack and modern web technologies.',
        },
        {
            title: 'Front-End Development with React.js',
            issuer: 'Coursera',
            description: 'Specialized certification in React.js development, including hooks, context API, and advanced patterns.',
        },
        {
            title: 'Certified Kubernetes Application Developer (CKAD)',
            issuer: 'Cloud Native Computing Foundation',
            description: 'Professional certification demonstrating expertise in Kubernetes application development and container orchestration.',
        }, {
            title: 'Mastering Data Structures & Algorithms',
            issuer: 'Udemy',
            date: 'October 2023',
            description: 'Advanced course covering complex data structures and algorithmic problem-solving techniques.',
        },
        {
            title: 'Introduction to Front-End Development',
            issuer: 'Coursera',
            date: 'December 2022',
            description: 'Comprehensive introduction to modern front-end development practices and frameworks.',
        },
        {
            title: 'Dynamic Programming and Greedy Algorithms',
            issuer: 'Coursera',
            date: 'November 2022',
            description: 'Specialized course focusing on advanced algorithmic paradigms for optimal problem solving.',
        },
        {
            title: 'HTML, CSS, and Javascript for Web Developers',
            issuer: 'Coursera',
            date: 'November 2022',
            description: 'In-depth coverage of core web technologies and best practices for modern web development.',
        },
        {
            title: 'Introduction to Web Development with HTML, CSS, JavaScript',
            issuer: 'Coursera',
            date: 'September 2022',
            description: 'Foundation course covering essential web development technologies and concepts.',
        },
        {
            title: 'Wireshark for Basic Network Security Analysis',
            issuer: 'Coursera',
            date: 'November 2022',
            description: 'Network analysis and security fundamentals using industry-standard Wireshark tools.',
        },
        {
            title: 'C Course',
            issuer: 'Solo Learn',
            date: 'May 2022',
            description: 'Comprehensive C programming course covering fundamentals to advanced concepts.',
        },
        {
            title: 'Database Programming with SQL',
            issuer: 'Oracle',
            date: 'April 2022',
            description: 'Official Oracle certification in SQL programming and database management.',
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
                    <Grid size={{ xs: 12 }}>
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
                                    src="/images/team/yashraj1.png"
                                    alt="Yashraj Ghosalkar"
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
                                        Yashraj Dagadu Ghosalkar
                                    </Typography>

                                    <Typography variant="h5" component="h2" color="primary" sx={{ mb: 2, fontWeight: 500 }}>
                                        Full Stack Web Developer
                                    </Typography>

                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 700 }}>
                                        Full Stack Web Developer with a passion for building scalable and efficient applications. Skilled in both front-end and back-end technologies, I bring a collaborative and problem-solving approach to software engineering. Seeking to contribute to innovative projects and deliver exceptional user experiences.
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <EmailIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                yashrajjghosalkar@gmail.com
                                            </Typography>
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PhoneIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                            <Typography variant="body2">
                                                +91 8010881394
                                            </Typography>
                                        </Box>
                                        <a href={"https://www.linkedin.com/in/yashrajghosalkar/"} target="_blank" rel="noopener noreferrer">
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <LinkedInIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                                <Typography variant="body2">
                                                    linkedin.com/in/yashrajghosalkar
                                                </Typography>
                                            </Box>
                                        </a>
                                        <a href={"https://github.com/clexflex/"} target="_blank" rel="noopener noreferrer">
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <GitHubIcon color="primary" sx={{ mr: 1, fontSize: 20 }} />
                                                <Typography variant="body2">
                                                    github.com/clexflex
                                                </Typography>
                                            </Box>
                                        </a>
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
                    <Grid size={{ xs: 12, md: 6 }}>
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
                    <Grid size={{ xs: 12, md: 6 }}>
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
                    <Grid size={{ xs: 12 }}>
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
                                                <Grid  size={{ xs: 12,sm:4, md: 3 }}>
                                                    <Typography variant="subtitle1" fontWeight={500} color="primary">
                                                        {job.period}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {job.location}
                                                    </Typography>
                                                </Grid>

                                                <Grid  size={{ xs: 12,sm:8, md: 9 }}>
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
                    <Grid size={{ xs: 12 }}>
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
                                                <Grid size={{ xs: 12,sm:4, md: 3 }}>
                                                    <Typography variant="subtitle1" fontWeight={500} color="primary">
                                                        {edu.period}
                                                    </Typography>
                                                </Grid>

                                                <Grid  size={{ xs: 12,sm:8, md: 9 }}>
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
                    <Grid size={{ xs: 12 }}>
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
                                        <Grid size={{ xs: 12 }} key={index}>
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

                                                    <Typography variant="subtitle2" color="primary" sx={{ mb: 2 }}>
                                                        {cert.issuer}
                                                    </Typography>

                                                    <Typography variant="body2" color="text.secondary">
                                                        {cert.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        </Box>
                    </Grid>

                    {/* CTA - Contact Section */}
                    <Grid size={{ xs: 12 }}>
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