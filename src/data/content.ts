import { 
  Shield, 
  Lock, 
  Cloud, 
  Activity, 
  Network, 
  Database,
  Smartphone,
  Server
} from 'lucide-react';

export const products = [
  {
    id: 's-chat',
    name: 'S-Chat AI',
    subtitle: 'SECURE MESSENGER',
    description: 'A next-generation secure communication platform powered by artificial intelligence.',
    features: [
      'End-to-End Encryption',
      'Secure Voice & Video Calls',
      'Screenshot Protection',
      'Screen Recording Protection',
      'AI Threat Detection',
      'Self-Destruct Messages',
      'Secure File Sharing',
      'Device Security Monitoring'
    ],
    theme: 'green' as const,
  },
  {
    id: 'outfit-ai',
    name: 'Outfit AI',
    subtitle: 'AI FASHION STUDIO',
    description: 'AI-powered fashion intelligence that helps users discover, visualize, and personalize their style.',
    features: [
      'AI Outfit Recommendation',
      'Virtual Try-On',
      'Body Measurement Detection',
      'Size Prediction',
      'Fashion Trend Analysis',
      'Personalized Styling',
      'Wardrobe Management',
      'AI Color Matching'
    ],
    theme: 'purple' as const,
  },
  {
    id: 'ai-build',
    name: 'AI Build Security Portal',
    subtitle: 'ENTERPRISE AI SECURITY PLATFORM',
    description: 'An intelligent security platform designed to protect AI applications, APIs, data, infrastructure, and users.',
    features: [
      'AI Threat Detection',
      'Zero Trust Architecture',
      'Multi-Factor Authentication',
      'Biometric Authentication',
      'Device Integrity Check',
      'Secure Cloud Encryption',
      'Malware Detection',
      'Real-Time Security Monitoring'
    ],
    theme: 'cyan' as const,
  }
];

export const securityFeaturesLeft = [
  'AI Threat Detection',
  'Zero Trust Architecture',
  'Multi-Factor Authentication',
  'Biometric Authentication',
  'Face Authentication',
  'Device Integrity Check',
  'Secure Cloud Encryption',
  'Malware Detection',
  'Anti-Phishing Protection'
];

export const securityFeaturesRight = [
  'Ransomware Protection',
  'Secure API Gateway',
  'Role-Based Access Control',
  'Real-Time Security Monitoring',
  'AI Behavioral Analysis',
  'Data Loss Prevention',
  'Security Audit Logs',
  'Secure Backup',
  'Compliance Monitoring'
];

export const services = [
  { title: 'AI Applications', icon: Network, desc: 'Intelligent AI-driven products.' },
  { title: 'Enterprise Software', icon: Server, desc: 'Scalable corporate solutions.' },
  { title: 'Secure Chat Platforms', icon: Lock, desc: 'Encrypted communication apps.' },
  { title: 'Mobile Applications', icon: Smartphone, desc: 'Native iOS and Android.' },
  { title: 'Web Applications', icon: Cloud, desc: 'Responsive web platforms.' },
  { title: 'AI Automation', icon: Activity, desc: 'Process automation via AI.' },
  { title: 'Cyber Security Solutions', icon: Shield, desc: 'Comprehensive threat protection.' },
  { title: 'Cloud Solutions', icon: Database, desc: 'Secure cloud infrastructure.' },
];
