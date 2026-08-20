import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Server, Smartphone, Layers } from 'lucide-react';
import { useNavigation } from '../utils/router';
import { GlowButton } from '../components/common/GlowButton';
import { StickyProductNav } from '../components/common/StickyProductNav';
import { SChatLogo } from '../components/products/schat/SChatLogo';

// Phone Components
import { SChatPhone } from '../components/products/schat/SChatPhone';
import { SecureChatScreen } from '../components/products/schat/screens/SecureChatScreen';
import { SecureCallScreen } from '../components/products/schat/screens/SecureCallScreen';
import { SecureVideoCallScreen } from '../components/products/schat/screens/SecureVideoCallScreen';
import { SecureFileScreen } from '../components/products/schat/screens/SecureFileScreen';
import { PrivacyProtectionScreen } from '../components/products/schat/screens/PrivacyProtectionScreen';
import { SmartMessagingScreen } from '../components/products/schat/screens/SmartMessagingScreen';
import { PersonalizationScreen } from '../components/products/schat/screens/PersonalizationScreen';
import { DeviceSecurityScreen } from '../components/products/schat/screens/DeviceSecurityScreen';
import { SecureLocationScreen } from '../components/products/schat/screens/SecureLocationScreen';
import { ChatTransferScreen } from '../components/products/schat/screens/ChatTransferScreen';
import { EmergencyHelpScreen } from '../components/products/schat/screens/EmergencyHelpScreen';

export const SChatPage: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [activeStoryStep, setActiveStoryStep] = useState(0);

  const storySteps = [
    {
      id: 'secure-chat',
      title: 'End-to-End Encrypted Messaging',
      subtitle: 'NIST Post-Quantum Standard',
      desc: 'All messages are secured with military-grade encryption. Not even S-Chat can read your data. Every message uses a unique ephemeral key.',
      component: <SecureChatScreen />
    },
    {
      id: 'secure-call',
      title: 'Encrypted Voice Calls',
      subtitle: 'Zero-Latency Secure VoIP',
      desc: 'Crystal clear voice calls protected by end-to-end encryption, ensuring your conversations remain entirely private.',
      component: <SecureCallScreen />
    },
    {
      id: 'secure-video',
      title: 'Encrypted Video Calls',
      subtitle: 'High-Fidelity Secure Video',
      desc: 'Face-to-face communication over secure tunnels. Video data is encrypted on your device before it ever hits the network.',
      component: <SecureVideoCallScreen />
    },
    {
      id: 'secure-file',
      title: 'Complete File Control',
      subtitle: 'One-Time View & Shared Logs',
      desc: 'Share sensitive documents with confidence. Restrict access, set view-once policies, and audit detailed access logs.',
      component: <SecureFileScreen />
    },
    {
      id: 'privacy',
      title: 'Privacy Protection',
      subtitle: 'Hardware Screen Shield',
      desc: 'Prevent unauthorized captures. OS-level hooks detect screen recording and screenshot attempts, blacking out the secure viewport instantly.',
      component: <PrivacyProtectionScreen />
    },
    {
      id: 'smart-msg',
      title: 'Smart Messaging',
      subtitle: 'Scheduled & Expiring',
      desc: 'Schedule messages for later, set automated follow-up reminders, or configure self-destruct timers for maximum operational security.',
      component: <SmartMessagingScreen />
    },
    {
      id: 'personalization',
      title: 'Discreet Personalization',
      subtitle: 'Themes, Colors & Icons',
      desc: 'Customize the appearance of your secure enclave. Use stealth app icons to disguise the app on your home screen.',
      component: <PersonalizationScreen />
    },
    {
      id: 'device-sec',
      title: 'Device Security Check',
      subtitle: 'Continuous Threat Scanning',
      desc: 'Active monitoring of your device integrity. Detects suspicious activity, third-party keyboards, and OS vulnerabilities in real-time.',
      component: <DeviceSecurityScreen />
    },
    {
      id: 'location',
      title: 'Secure Location Sharing',
      subtitle: 'Encrypted Live Tracking',
      desc: 'Share your live location with trusted contacts over an encrypted channel. Automatically revokes access when the timer expires.',
      component: <SecureLocationScreen />
    },
    {
      id: 'transfer',
      title: 'Encrypted Chat Transfer',
      subtitle: 'Local P2P Migration',
      desc: 'Migrate your chat history to a new device over an encrypted local Wi-Fi connection. Zero cloud backups required.',
      component: <ChatTransferScreen />
    },
    {
      id: 'emergency',
      title: 'Emergency SOS Protocol',
      subtitle: 'Instant Trusted Alert',
      desc: 'In critical situations, trigger an SOS alert to instantly notify trusted contacts with your live location and status.',
      component: <EmergencyHelpScreen />
    }
  ];

  const navSections = [
    { id: 'schat-hero', label: 'Overview' },
    { id: 'schat-story', label: 'Features' },
    { id: 'schat-deployment', label: 'Deployment' },
  ];

  return (
    <div className="min-h-screen bg-[#020712] text-[#F5F7FA] pt-24 pb-20">
      
      {/* Sticky Sub-Navigation */}
      <StickyProductNav 
        productName="S-CHAT"
        productBadge="SECURE MESSAGING"
        badgeColor="green"
        sections={navSections}
        ctaLabel="Explore Features"
        onCtaClick={() => {
          const el = document.getElementById('schat-story');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button 
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A8B4C3] hover:text-[#8CC63F] transition-colors py-2 px-3.5 rounded-xl bg-[#071625]/80 border border-[#8CC63F]/20 hover:border-[#8CC63F]/50 group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>&larr; Return to AI Universe</span>
        </button>
      </div>

      {/* Hero Section */}
      <div id="schat-hero" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-left max-w-4xl">
          <SChatLogo className="mb-10" />

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#F5F7FA] tracking-tight leading-[1.02] mb-6">
            SECURE COMMUNICATION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] via-[#A3D63C] to-[#00D9FF]">
              WITHOUT COMPROMISE
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8B4C3] max-w-2xl leading-relaxed">
            The premium secure messaging product designed for absolute privacy. E2E encrypted chats, calls, and files backed by uncompromising device security.
          </p>
        </div>
      </div>

      {/* Pinned Split-Screen Storytelling Section */}
      <section id="schat-story" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Feature List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="pb-4 border-b border-[#1A2E44] sticky top-28 bg-[#020712] z-10 pt-4">
              <span className="text-xs font-mono font-bold text-[#8CC63F] uppercase tracking-wider block">
                Product Capabilities
              </span>
              <p className="text-xs text-[#A8B4C3] mt-1">
                Select a feature to see it in action on the right.
              </p>
            </div>

            <div className="flex flex-col gap-4 pb-20">
              {storySteps.map((s, idx) => {
                const isCurrent = activeStoryStep === idx;

                return (
                  <motion.div
                    key={s.id}
                    onClick={() => setActiveStoryStep(idx)}
                    whileHover={{ x: 4 }}
                    className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? 'bg-[#071625] border-[#8CC63F] shadow-[0_0_30px_rgba(140,198,63,0.15)] scale-[1.02]'
                        : 'bg-[#05101A] border-[#1A2E44] hover:border-[#8CC63F]/40'
                    }`}
                  >
                    <h3 className={`text-lg font-bold mb-1 ${isCurrent ? 'text-[#8CC63F]' : 'text-[#F5F7FA]'}`}>
                      {s.title}
                    </h3>
                    <h4 className="text-[10px] font-mono font-bold text-[#A8B4C3] mb-2 uppercase tracking-wider">
                      {s.subtitle}
                    </h4>
                    <p className="text-sm text-[#A8B4C3] leading-relaxed">
                      {s.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Pinned Phone UI */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 order-first lg:order-last mb-10 lg:mb-0">
            <div className="flex items-center justify-center p-4">
              <SChatPhone>
                {storySteps[activeStoryStep].component}
              </SChatPhone>
            </div>
          </div>

        </div>
      </section>

      {/* Enterprise Deployment Options */}
      <section id="schat-deployment" className="py-20 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1A2E44]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#F5F7FA] mb-2">Enterprise Deployment</h2>
          <p className="text-xs sm:text-sm text-[#A8B4C3]">Host on-premise in sovereign air-gapped clusters or dedicated VPC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#05101A] border border-[#1A2E44] rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <Server size={24} className="text-[#8CC63F] mb-4" />
              <h3 className="text-lg font-bold text-[#F5F7FA] mb-2">Air-Gapped Sovereign On-Prem</h3>
              <p className="text-xs text-[#A8B4C3] leading-relaxed mb-6">
                Host the complete S-Chat encryption cluster on physical hardware with zero external internet routing.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#8CC63F]">&check; Kubernetes Operator Included</span>
          </div>

          <div className="bg-[#071625] border border-[#8CC63F]/40 rounded-3xl p-8 flex flex-col justify-between shadow-[0_0_30px_rgba(140,198,63,0.1)]">
            <div>
              <Layers size={24} className="text-[#8CC63F] mb-4" />
              <h3 className="text-lg font-bold text-[#F5F7FA] mb-2">Dedicated Private Cloud (VPC)</h3>
              <p className="text-xs text-[#A8B4C3] leading-relaxed mb-6">
                Single-tenant dedicated cluster deployed inside AWS, GCP, or Azure with customer-managed HSM keys (BYOK).
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#8CC63F]">&check; 99.999% SLA Guarantee</span>
          </div>

          <div className="bg-[#05101A] border border-[#1A2E44] rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <Smartphone size={24} className="text-[#8CC63F] mb-4" />
              <h3 className="text-lg font-bold text-[#F5F7FA] mb-2">Enterprise Zero-Touch SaaS</h3>
              <p className="text-xs text-[#A8B4C3] leading-relaxed mb-6">
                Instant rollout across iOS, Android, macOS, and Windows with Okta, Azure AD SSO, and SCIM provisioning.
              </p>
            </div>
            <span className="text-[10px] font-mono text-[#8CC63F]">&check; Instant MDM Enrollment</span>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-16 p-10 bg-gradient-to-r from-[#071625] via-[#05101A] to-[#071625] border border-[#8CC63F]/30 rounded-3xl text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-black text-[#F5F7FA] mb-3">
            Ready to Fortify Your High-Stakes Communications?
          </h3>
          <p className="text-xs sm:text-sm text-[#A8B4C3] max-w-xl mb-8">
            Deploy an S-Chat pilot cluster with sovereign cryptographic verification in under 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GlowButton variant="green" className="px-8 py-3.5">
              Deploy S-Chat Pilot
            </GlowButton>
            <button 
              onClick={() => navigateTo('home')}
              className="px-6 py-3.5 text-xs font-mono font-bold rounded-xl bg-[#020712] border border-[#1A2E44] text-[#A8B4C3] hover:text-[#8CC63F] cursor-pointer"
            >
              Explore Other AI Products
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
