import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  EyeOff, 
  ArrowLeft, 
  Send, 
  Server, 
  Smartphone, 
  Layers
} from 'lucide-react';
import { useNavigation } from '../utils/router';
import { GlowButton } from '../components/common/GlowButton';
import { StickyProductNav } from '../components/common/StickyProductNav';

export const SChatPage: React.FC = () => {
  const { navigateTo } = useNavigation();

  // Multi-stage message dispatch animation state
  type DispatchStage = 'idle' | 'sending' | 'encrypting' | 'kyber' | 'threat_scan' | 'delivered';
  const [dispatchStage, setDispatchStage] = useState<DispatchStage>('idle');

  // Active Story Step in Pinned Layout (0: Handshake, 1: Kyber, 2: Threat, 3: Zero Trace, 4: Screen Shield)
  const [activeStoryStep, setActiveStoryStep] = useState(0);

  // Interactive Live Chat Simulator State
  const [messages, setMessages] = useState<Array<{ id: string; sender: 'user' | 'ai'; text: string; encryptedHex: string; time: string; protocol: string }>>([
    {
      id: '1',
      sender: 'user',
      text: 'Initiate quantum-resistant handshake for Project Horizon.',
      encryptedHex: 'e4a899c7f21b0042d38827ab10f99a...9f1e8a',
      time: '10:42:01',
      protocol: 'Kyber-1024 PQ'
    },
    {
      id: '2',
      sender: 'ai',
      text: 'Handshake verified. 256-bit Post-Quantum Kyber-1024 tunnel established. Zero knowledge proof active.',
      encryptedHex: '7b20227365637572697479223a2022...34227d',
      time: '10:42:04',
      protocol: 'Kyber-1024 PQ'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [encryptionMode, setEncryptionMode] = useState<'quantum' | 'military'>('quantum');
  const [screenShieldActive, setScreenShieldActive] = useState(false);
  const showEncryptedStream = true;

  // Live Cipher Stream Generator
  const [liveCipherStream, setLiveCipherStream] = useState('A4 92 7F C3 8A 19 E0 4D B2 F7 C0 91');
  useEffect(() => {
    const interval = setInterval(() => {
      const hex = Array.from({ length: 12 }, () => Math.floor(Math.random() * 256).toString(16).toUpperCase().padStart(2, '0')).join(' ');
      setLiveCipherStream(hex);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const storySteps = [
    {
      step: '01',
      title: 'Post-Quantum Handshake',
      subtitle: 'Kyber-1024 Lattice Key Encapsulation',
      desc: 'Before any message is sent, S-Chat executes a Post-Quantum Kyber-1024 mathematical lattice handshake. Future quantum computers cannot retroactively decrypt past conversations.',
      badge: 'NIST PQ STANDARD',
      color: '#8CC63F'
    },
    {
      step: '02',
      title: 'Double-Ratchet Encryption',
      subtitle: 'Forward Secrecy per Packet',
      desc: 'Every single message generates a unique, single-use ephemeral encryption key that is discarded immediately after decryption. Compromising one key reveals nothing about prior or subsequent messages.',
      badge: 'ZERO RE-USE',
      color: '#00D9FF'
    },
    {
      step: '03',
      title: 'AI Threat Sentinel',
      subtitle: 'On-Device Semantic Sandbox',
      desc: 'An embedded on-device neural network inspects incoming URLs, attachments, and payloads inside an isolated hardware sandbox before they can execute on your operating system.',
      badge: 'SUB-1MS SCAN',
      color: '#A855F7'
    },
    {
      step: '04',
      title: 'Zero-Trace Ephemeral Burn',
      subtitle: 'Cryptographic RAM Overwrite',
      desc: 'Set custom expiration timers from 5 seconds to 24 hours. When a message expires, the memory sector is cryptographically overwritten with random noise and zeroed out.',
      badge: 'FORENSIC CLEAN',
      color: '#8CC63F'
    },
    {
      step: '05',
      title: 'Hardware Screen Shield',
      subtitle: 'Anti-Capture & OS Hook',
      desc: 'Operating system hooks detect screen recording software, screenshot triggers, or display mirroring attempts, instantly replacing the chat viewport with a black security barrier.',
      badge: 'ZERO LEAKS',
      color: '#00D9FF'
    }
  ];

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const messageText = inputText;
    setInputText('');

    setDispatchStage('sending');
    setTimeout(() => setDispatchStage('encrypting'), 350);
    setTimeout(() => setDispatchStage(encryptionMode === 'quantum' ? 'kyber' : 'encrypting'), 700);
    setTimeout(() => setDispatchStage('threat_scan'), 1050);

    setTimeout(() => {
      setDispatchStage('delivered');
      const fakeHex = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
      const timeStr = new Date().toTimeString().split(' ')[0];

      const newMsg = {
        id: Date.now().toString(),
        sender: 'user' as const,
        text: messageText,
        encryptedHex: fakeHex + '...secure',
        time: timeStr,
        protocol: encryptionMode === 'quantum' ? 'Kyber-1024 PQ' : 'Signal AES-GCM'
      };

      setMessages(prev => [...prev, newMsg]);

      setTimeout(() => {
        const replyHex = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0')).join('');
        const replyMsg = {
          id: (Date.now() + 1).toString(),
          sender: 'ai' as const,
          text: `Encrypted payload confirmed via ${encryptionMode === 'quantum' ? 'Post-Quantum Kyber-1024' : 'Signal Protocol'}. Threat verification: 0 threats. Integrity proof verified.`,
          encryptedHex: replyHex + '...verified',
          time: new Date().toTimeString().split(' ')[0],
          protocol: encryptionMode === 'quantum' ? 'Kyber-1024 PQ' : 'Signal AES-GCM'
        };
        setMessages(prev => [...prev, replyMsg]);
        setDispatchStage('idle');
      }, 800);

    }, 1400);
  };

  const navSections = [
    { id: 'schat-hero', label: 'Overview' },
    { id: 'schat-story', label: 'Security Pipeline' },
    { id: 'schat-deployment', label: 'Deployment' },
  ];

  return (
    <div className="min-h-screen bg-[#020712] text-[#F5F7FA] pt-24 pb-20">
      
      {/* Sticky Sub-Navigation */}
      <StickyProductNav 
        productName="S-CHAT AI"
        productBadge="QUANTUM-SAFE ENCLAVE"
        badgeColor="green"
        sections={navSections}
        ctaLabel="Test S-Chat Demo"
        onCtaClick={() => {
          const el = document.getElementById('schat-story');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-6">
        <button 
          onClick={() => navigateTo('home')}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#A8B4C3] hover:text-[#8CC63F] transition-colors py-2 px-3.5 rounded-xl bg-[#071625]/80 border border-[#8CC63F]/20 hover:border-[#8CC63F]/50 group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>&larr; Return to AI Universe</span>
        </button>
      </div>

      {/* Hero Section: Minimal Text, Maximum Punch */}
      <div id="schat-hero" className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-16">
        <div className="text-left max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#8CC63F]/10 border border-[#8CC63F]/30 rounded-full mb-6 shadow-[0_0_20px_rgba(140,198,63,0.2)]">
            <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-pulse"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-[#8CC63F] uppercase">
              Quantum-Safe Communication Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5F7FA] tracking-tight leading-[1.02] mb-6">
            PRIVATE COMMUNICATION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] via-[#A3D63C] to-[#00D9FF]">
              BUILT FOR THE QUANTUM ERA.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#A8B4C3] max-w-2xl leading-relaxed">
            Signal double-ratchet architecture fortified with NIST-standard Post-Quantum Kyber-1024 and hardware anti-screen capture.
          </p>
        </div>
      </div>

      {/* Pinned Split-Screen Storytelling Section (Left: Scrolling Story / Right: Pinned Chat UI) */}
      <section id="schat-story" className="max-w-[1400px] mx-auto px-6 sm:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Scrolling 5-Step Story Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="pb-4 border-b border-[#1A2E44]">
              <span className="text-xs font-mono font-bold text-[#8CC63F] uppercase tracking-wider block">
                Cryptographic Pipeline Journey
              </span>
              <p className="text-xs text-[#A8B4C3] mt-1">
                Select any step to preview how S-Chat secures every packet in real time.
              </p>
            </div>

            {storySteps.map((s, idx) => {
              const isCurrent = activeStoryStep === idx;

              return (
                <motion.div
                  key={s.step}
                  onClick={() => {
                    setActiveStoryStep(idx);
                    if (idx === 4) setScreenShieldActive(true);
                    else setScreenShieldActive(false);
                  }}
                  whileHover={{ x: 4 }}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? 'bg-[#071625] border-[#8CC63F] shadow-[0_0_30px_rgba(140,198,63,0.25)] scale-[1.02]'
                      : 'bg-[#05101A] border-[#1A2E44] hover:border-[#8CC63F]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-[#8CC63F]">STEP {s.step}</span>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10" style={{ color: s.color }}>
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-1">{s.title}</h3>
                  <h4 className="text-xs font-mono font-bold text-[#A8B4C3] mb-3" style={{ color: s.color }}>
                    {s.subtitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A8B4C3] leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Pinned Interactive Live Chat Engine */}
          <div className="lg:col-span-7 sticky top-28 space-y-4">
            
            {/* Chat Sandbox Card */}
            <div className="bg-[#020712] border-2 border-[#8CC63F]/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(140,198,63,0.15)] relative flex flex-col min-h-[580px]">
              
              {/* Screen Shield Blackout Simulation Overlay */}
              {screenShieldActive && (
                <div className="absolute inset-0 bg-[#000000]/98 z-30 flex flex-col items-center justify-center p-6 text-center backdrop-blur-xl">
                  <EyeOff className="w-16 h-16 text-[#8CC63F] mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-[#F5F7FA] mb-2 font-mono">Hardware Screen Shield Active</h4>
                  <p className="text-xs text-[#A8B4C3] max-w-md mb-6">
                    OS-level capture hook has blacked out this buffer. Screen recording, screenshots, and remote mirroring are blocked.
                  </p>
                  <button 
                    onClick={() => setScreenShieldActive(false)}
                    className="px-6 py-2.5 bg-[#8CC63F] text-black text-xs font-bold font-mono rounded-xl hover:bg-[#A3D63C] cursor-pointer transition-colors"
                  >
                    Resume View
                  </button>
                </div>
              )}

              {/* Chat App Header */}
              <div className="p-4 bg-[#071625] border-b border-[#1A2E44] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#8CC63F]/20 border border-[#8CC63F]/40 flex items-center justify-center font-bold text-[#8CC63F] font-mono">
                    S
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F5F7FA] flex items-center gap-2">
                      S-CHAT AI &bull; Secure Channel #001
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#8CC63F]/20 text-[#8CC63F] font-mono">● LIVE</span>
                    </h4>
                    <p className="text-[11px] text-[#A8B4C3] font-mono">
                      Protocol: {encryptionMode === 'quantum' ? 'Kyber-1024 Post-Quantum' : 'Signal Double-Ratchet'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEncryptionMode(encryptionMode === 'quantum' ? 'military' : 'quantum')}
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg bg-[#020712] border border-[#8CC63F]/30 text-[#8CC63F] hover:bg-[#8CC63F]/10 cursor-pointer"
                  >
                    Switch: {encryptionMode === 'quantum' ? 'PQ Kyber' : 'Signal AES'}
                  </button>
                </div>
              </div>

              {/* Live Multi-Stage Dispatch Animation Bar */}
              {dispatchStage !== 'idle' && (
                <div className="bg-[#05101A] border-b border-[#8CC63F]/40 p-3 px-4 flex items-center justify-between text-xs font-mono text-[#8CC63F] animate-in fade-in">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#8CC63F] animate-ping"></span>
                    <span>DISPATCH:</span>
                  </div>
                  <div className="font-bold flex items-center gap-2">
                    {dispatchStage === 'sending' && <span className="text-[#00D9FF]">1. SENDING...</span>}
                    {dispatchStage === 'encrypting' && <span className="text-[#8CC63F]">2. ENCRYPTING...</span>}
                    {dispatchStage === 'kyber' && <span className="text-[#8CC63F]">3. KYBER-1024 PQ RATCHET...</span>}
                    {dispatchStage === 'threat_scan' && <span className="text-[#A855F7]">4. AI THREAT SCAN (0 THREATS)...</span>}
                    {dispatchStage === 'delivered' && <span className="text-[#8CC63F]">5. SECURE DELIVERY &check;</span>}
                  </div>
                </div>
              )}

              {/* Chat Message Scroll Feed */}
              <div className="p-6 flex-1 overflow-y-auto flex flex-col gap-4 bg-[#010308] min-h-[300px] max-h-[360px]">
                <div className="p-2.5 bg-[#8CC63F]/10 border border-[#8CC63F]/20 rounded-xl text-center text-xs text-[#8CC63F] font-mono">
                  🔒 Zero-Knowledge Channel Established. Handshake verified.
                </div>

                {messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className={`p-4 rounded-2xl max-w-[85%] text-sm ${
                      msg.sender === 'user'
                        ? 'bg-[#8CC63F]/20 border border-[#8CC63F]/40 text-[#F5F7FA] rounded-tr-none'
                        : 'bg-[#071625] border border-[#1A2E44] text-[#F5F7FA] rounded-tl-none'
                    }`}>
                      <p className="leading-relaxed">{msg.text}</p>
                      {showEncryptedStream && (
                        <div className="mt-2 pt-2 border-t border-white/10 font-mono text-[10px] text-[#8CC63F] break-all">
                          [{msg.protocol}] CIPHER: 0x{msg.encryptedHex}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-[#667789] mt-1 font-mono">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Live Cipher Stream Bar */}
              <div className="p-3 bg-[#05101A] border-t border-[#1A2E44] flex items-center justify-between text-xs font-mono text-[#A8B4C3]">
                <span className="text-[10px] text-[#667789]">LIVE HEX:</span>
                <span className="text-[#8CC63F] font-bold tracking-widest">{liveCipherStream}</span>
                <span className="text-[10px] text-[#8CC63F]">● PQ-ENCLAVE</span>
              </div>

              {/* Chat Input & Fast Dispatch */}
              <form onSubmit={handleSendMessage} className="p-4 bg-[#071625] border-t border-[#1A2E44] flex items-center gap-3">
                <input 
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type confidential message to dispatch through Kyber tunnel..."
                  className="flex-1 bg-[#020712] border border-[#1A2E44] focus:border-[#8CC63F] rounded-xl px-4 py-3 text-sm text-[#F5F7FA] outline-none transition-colors font-mono"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#8CC63F] hover:bg-[#A3D63C] text-black font-bold rounded-xl flex items-center gap-2 text-xs font-mono transition-all shadow-[0_0_20px_rgba(140,198,63,0.35)] cursor-pointer"
                >
                  <Send size={15} />
                  <span>Dispatch</span>
                </button>
              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Enterprise Deployment Options */}
      <section id="schat-deployment" className="py-20 max-w-[1400px] mx-auto px-6 sm:px-8 border-t border-[#1A2E44]">
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
            Deploy an S-Chat AI pilot cluster with sovereign cryptographic verification in under 48 hours.
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
