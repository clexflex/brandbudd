'use client';
import { Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center', 
  color = 'default', 
  maxWidth = '800px' 
}) => {
  const theme = useTheme();
  
  const textColor = color === 'light' 
    ? theme.palette.text.white 
    : theme.palette.text.primary;
  
  const subtitleColor = color === 'light' 
    ? 'rgba(255, 255, 255, 0.8)' 
    : theme.palette.text.secondary;

  return (
    <Box 
      sx={{
        width: '100%',
        mb: 6,
        mx: 'auto',
        textAlign: align,
        maxWidth: maxWidth,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Typography 
          variant="h2" 
          component="h2"
          color={textColor}
          sx={{ 
            mb: 2,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        
        {align === 'center' && (
          <Divider 
            sx={{ 
              width: '80px', 
              borderColor: theme.palette.primary.main,
              borderWidth: 3,
              mx: 'auto',
              mb: 3,
            }} 
          />
        )}
        
        {subtitle && (
          <Typography 
            variant="subtitle1" 
            color={subtitleColor}
            sx={{ 
              maxWidth: '650px',
              mx: align === 'center' ? 'auto' : 0,
              fontSize: '1.125rem',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </motion.div>
    </Box>
  );
};

export default SectionTitle;