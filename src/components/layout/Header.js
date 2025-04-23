// src/components/layout/Header.js
'use client';
import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Services', path: '/services' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'TeamSync', path: '/products/teamsync' },
  { title: 'ExcelFlow360', path: '/products/excelflow360' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          backgroundColor: scrolled ? 'white' : 'transparent',
          boxShadow: scrolled ? 1 : 'none',
          color: scrolled ? theme.palette.text.primary : 'white',
          transition: 'all 0.3s ease-in-out',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Typography
                variant="h6"
                noWrap
                component={Link}
                href="/"
                sx={{
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                BRANDBUDD
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            
            <Typography
              variant="h6"
              noWrap
              component={Link}
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              BRANDBUDD
            </Typography>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={Link}
                  href={page.path}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: 'inherit',
                    display: 'block',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: pathname === page.path ? '100%' : '0%',
                      height: '2px',
                      bottom: '0',
                      left: '0',
                      backgroundColor: theme.palette.primary.main,
                      transition: 'width 0.3s',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {page.title}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                href="/contact"
                sx={{ 
                  ml: 2,
                  px: 3,
                  py: 1
                }}
              >
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%',
            backgroundColor: theme.palette.background.dark,
            color: theme.palette.text.white,
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            onClick={handleDrawerToggle}
          >
            BRANDBUDD
          </Typography>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ pt: 4 }}>
          {pages.map((page) => (
            <ListItem key={page.title} disablePadding>
              <ListItemButton
                component={Link}
                href={page.path}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  borderBottom: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  },
                }}
              >
                <ListItemText 
                  primary={page.title} 
                  primaryTypographyProps={{ 
                    variant: 'h6',
                    sx: { 
                      fontWeight: pathname === page.path ? 700 : 400,
                      color: pathname === page.path ? theme.palette.primary.light : 'inherit',
                    }
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 4 }}>
            <Button 
              variant="contained" 
              color="primary"
              component={Link}
              href="/contact"
              fullWidth
              onClick={handleDrawerToggle}
              sx={{ py: 1.5 }}
            >
              Get Started
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;