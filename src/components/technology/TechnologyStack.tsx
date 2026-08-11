import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../common/ScrollReveal';
import { motion } from 'framer-motion';

export const TechnologyStack: React.FC = () => {
  const techCategories = [
    {
      title: 'FRONTEND',
      items: [
        { name: 'React', short: 'Re', color: '#61DAFB' },
        { name: 'Flutter', short: 'Fl', color: '#02569B' },
        { name: 'HTML5', short: 'H5', color: '#E34F26' },
        { name: 'CSS3', short: 'C3', color: '#1572B6' },
        { name: 'JavaScript', short: 'JS', color: '#F7DF1E' }
      ]
    },
    {
      title: 'BACKEND',
      items: [
        { name: 'Python', short: 'Py', color: '#3776AB' },
        { name: 'Node.js', short: 'No', color: '#339933' },
        { name: '.NET', short: '.N', color: '#512BD4' },
        { name: 'FastAPI', short: 'Fa', color: '#009688' }
      ]
    },
    {
      title: 'AI / ML',
      items: [
        { name: 'Machine Learning', short: 'ML', color: '#FF6F00' },
        { name: 'Deep Learning', short: 'DL', color: '#FF6F00' },
        { name: 'NLP', short: 'NL', color: '#FF6F00' },
        { name: 'Computer Vision', short: 'CV', color: '#FF6F00' },
        { name: 'Generative AI', short: 'GA', color: '#FF6F00' }
      ]
    },
    {
      title: 'CLOUD & INFRASTRUCTURE',
      items: [
        { name: 'AWS', short: 'AW', color: '#FF9900' },
        { name: 'Azure', short: 'Az', color: '#0089D6' },
        { name: 'Docker', short: 'Do', color: '#2496ED' },
        { name: 'Kubernetes', short: 'Ku', color: '#326CE5' }
      ]
    },
    {
      title: 'DATABASE',
      items: [
        { name: 'PostgreSQL', short: 'Pg', color: '#336791' },
        { name: 'MongoDB', short: 'Mg', color: '#47A248' }
      ]
    }
  ];

  return (
    <section id="technology" className="py-24 relative bg-[#020712] border-t border-[#00D9FF]/10">
      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <SectionHeader 
            title="TECHNOLOGY STACK" 
            subtitle="Infrastructure"
            align="left"
          />
        </ScrollReveal>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          {techCategories.map((category, idx) => (
            <StaggerItem key={idx} className="flex flex-col">
              <h3 className="text-[#A8B4C3] font-bold text-xs uppercase tracking-widest mb-6 pb-2 border-b border-[#1A2E44]">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-4">
                {category.items.map((tech) => (
                  <motion.div 
                    key={tech.name} 
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <div 
                      className="w-8 h-8 rounded bg-[#05101A] border border-[#1A2E44] flex items-center justify-center group-hover:border-opacity-100 transition-all shrink-0"
                      style={{ borderColor: `${tech.color}50` }}
                    >
                      <span className="text-[10px] font-bold" style={{ color: tech.color }}>
                        {tech.short}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-[#F5F7FA] group-hover:text-[#00D9FF] transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
