'use client';
import { Box } from '@mui/material';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CtaSection from '@/components/common/CtaSection';
import { motion } from 'framer-motion';

// SEO Metadata
export const Metadata = {
  title: 'BrandBudd | Digital Marketing & Software Development Agency',
  description: 'BrandBudd is a full-service digital marketing and software development agency specializing in web development, SEO, content creation, and custom software solutions.',
  keywords: 'digital marketing, web development, SEO, software development, agency, digital solutions',
};

export default function Home() {
  return (
    <Box component="div">
      <HeroSection />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ServicesOverview />
      </motion.div>
      
      <PortfolioPreview />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection 
        title="Ready to Transform Your Digital Presence?"
        description="Contact us today to discuss how our tailored solutions can help your business grow."
        buttonText="Get Started"
        buttonLink="/contact"
        background="gradient"
      />
    </Box>
  );
}