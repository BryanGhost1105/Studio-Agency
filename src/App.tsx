import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "motion/react";
import {
  ArrowUpRight,
  Play,
  Menu,
  Sparkle,
  Heart,
  ShoppingBag,
  User,
  Volume2,
  Sliders,
  Cpu,
  Film,
  Layers,
  Camera,
  Compass,
  Maximize2,
  Activity,
  Eye,
} from "lucide-react";

const FadeIn: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-8 md:px-12 pointer-events-none mix-blend-difference">
      {/* Left side: Hamburger */}
      <div className="flex items-center pointer-events-auto">
        <button className="text-[#eaeaea] hover:opacity-70 transition-opacity">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
        </button>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
        <a href="#" className="flex hover:opacity-80 transition-opacity">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10C6 7.79086 7.79086 6 10 6H14C16.2091 6 18 7.79086 18 10V14C18 16.2091 16.2091 18 14 18H10C7.79086 18 6 16.2091 6 14V10Z"
              fill="white"
            />
            <path
              d="M10 6C10 3.79086 11.7908 2 14 2H18C20.2091 2 22 3.79086 22 6V10C22 12.2091 20.2091 14 18 14"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Right side spacer to keep logo perfectly centered */}
      <div className="w-[28px]"></div>
    </nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Use a single cinematic video
  const heroVideo =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4";
  const showcaseImage = "/456b7f9d6623c22311f97d2e86e4574564f6371e.png";

  return (
    <div className="w-full h-[100dvh] bg-[#050505] relative font-sans flex items-center justify-center md:p-4">
      <section
        ref={ref}
        className="relative w-full h-full max-h-[100dvh] overflow-hidden flex flex-col justify-end pb-8 sm:pb-12 px-6 md:px-12 bg-black/90 md:rounded-[2rem] border-0 md:border-[4px] border-[#151515] ring-1 ring-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(0,0,0,0.5)]"
      >
        {/* Subtle TV Screen Glass Reflection */}
        <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />

        {/* Subtle inner shadow for tube depth */}
        <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] rounded-[inherit]" />

        <motion.div
          style={{ y, scale, opacity }}
          className="absolute inset-0 z-0 bg-black"
        >
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[120%] object-cover -top-[10%] relative filter brightness-[0.6] contrast-[1.1] saturate-[0.8] sepia-[0.1]"
          />

          {/* Subtle noise and gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/80 via-[#050505]/20 to-[#050505]/10 z-10 pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* Very subtle CRT effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_120%)] pointer-events-none z-10" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px] pointer-events-none z-10 mix-blend-overlay opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:3px_100%] pointer-events-none z-10 mix-blend-screen opacity-10" />
        </motion.div>

        <div className="relative z-20 w-full flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-8 pb-4">
          <FadeIn delay={0.2} className="w-full max-w-2xl flex flex-col gap-3">
            <div className="flex items-start gap-4">
              <span className="text-[#eaeaea] text-lg mt-[6px] font-sans opacity-70">
                ©
              </span>
              <h1 className="text-4xl md:text-[3.25rem] lg:text-[4.25rem] text-[#eaeaea] font-medium tracking-tight leading-[1.05] drop-shadow-lg">
                Cinematic Vision.
                <br />
                Flawless Directing.
              </h1>
            </div>
            <div className="pl-10 sm:pl-12">
              <p className="text-[#ececec]/85 text-[15px] leading-relaxed font-light max-w-md drop-shadow-md">
                We design premier cinematic campaigns and commercial video
                assets shot on world-class camera systems. Carefully crafted to
                capture attention, amplify brand authority, and leave an
                unforgettable visual signature.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4} className="flex z-30 items-end">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-2 flex items-stretch gap-6 pr-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] overflow-hidden shrink-0 relative bg-[#0a0a0a]">
                <img
                  src={showcaseImage}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col justify-center py-2 min-w-[130px]">
                <span className="text-[10px] text-white/50 uppercase tracking-[0.1em] font-medium mb-1">
                  Director's Reel
                </span>
                <h3 className="text-white font-semibold text-sm md:text-[15px] leading-snug tracking-wide mb-4 drop-shadow-md">
                  Live Videography &<br />
                  Cinematic Campaigns
                </h3>
                <button className="bg-white text-black text-[11px] font-semibold px-5 py-2 rounded-full hover:bg-white/90 transition-all w-fit active:scale-95 shadow-[0_4px_12px_rgba(255,255,255,0.1)]">
                  Watch Showreel
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function Clients() {
  const clients = [
    "Sony",
    "Nike",
    "Vogue",
    "Porsche",
    "Apple",
    "A24",
    "HBO",
    "Netflix",
  ];
  return (
    <section
      id="clients"
      className="py-12 md:py-20 w-full bg-[#050505] border-b border-white/[0.05]"
    >
      <div className="w-full flex flex-col items-center">
        <FadeIn>
          <h2 className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/30 mb-8 md:mb-12 font-medium">
            Trusted by Industry Authorities
          </h2>
        </FadeIn>
        <div className="w-full overflow-hidden flex relative px-8">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
          <div className="flex w-full overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, ease: "linear", repeat: Infinity }}
              className="flex items-center gap-16 md:gap-24 pl-8 md:pl-12 whitespace-nowrap opacity-60"
            >
              {[...clients, ...clients, ...clients].map((c, i) => (
                <span
                  key={i}
                  className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white/70 hover:text-white transition-colors select-none"
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Statement() {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      title: "Cinematic Gravity",
      subtitle: "ORGANIC CAMERA INTEGRITY",
      desc: "Commercial-grade camera production shot on RED V-Raptor and Arri Alexa LF systems with anamorphic lenses. We preserve organic optical integrity, mechanical focal gradients, and authentic cinema motion physics designed to capture prestige.",
      specTitle: "Camera Rig Specifications",
      specs: [
        { label: "Lens Suite", val: "Anamorphic Cooke / Arri Signature" },
        { label: "Sensor Mode", val: "8K Full Frame / VistaVision" },
        { label: "Color Science", val: "RED IPP2 / Arri REVEAL" },
        { label: "Target Quality", val: "Uncompressed ProRes 4444 XQ" },
      ],
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      viewfinderTag: "CAM_A // ARRI_LF // 24FPS",
    },
    {
      num: "02",
      title: "Art Direction & Lighting",
      subtitle: "INTENTIONAL SCENE GEOMETRY",
      desc: "Sculpting visual mood through meticulous light architecture, high-end set design, and rigorous color harmony. Every shadow, glow, and camera framing is directed to foster an immersive atmosphere of luxury and prestige.",
      specTitle: "Lighting & Set Configuration",
      specs: [
        { label: "Lighting Array", val: "Arri Skypanel / Orbiter Systems" },
        { label: "Color Profile", val: "Fully Tunable RGBWW Matching" },
        { label: "Composition", val: "Golden Ratio Spatial Alignment" },
        { label: "Atmosphere", val: "Calibrated Diffusion & Haze" },
      ],
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      viewfinderTag: "LIGHT_B // ARRI_SKYPT // CAL_SET",
    },
    {
      num: "03",
      title: "Hook Rate Pacing",
      subtitle: "TACTICAL COGNITIVE TRIGGERS",
      desc: "Designing commercial sequences mapped perfectly to human visual retention curves. Precision rhythm editorial cuts and psychoacoustic master soundscapes trigger instant focus, boosting retention duration up to 400%.",
      specTitle: "Retention Analytics",
      specs: [
        { label: "Hook Window", val: "First 1.8 Seconds" },
        { label: "Audio Mastering", val: "Dolby Atmos Binaural 3D" },
        { label: "Audience Lift", val: "+400% Retention Duration" },
        { label: "Sound Mix", val: "96kHz Psychoacoustic Grade" },
      ],
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
      viewfinderTag: "EDIT_C // PREM_PRO // SPECT_ANLYS",
    },
  ];

  return (
    <section
      id="philosophy"
      className="w-full bg-[#050505] text-[#DEDBC8] relative py-20 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Visual background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-gradient-to-br from-[#DEDBC8]/5 via-transparent to-transparent blur-[140px] pointer-events-none" />

      {/* Camera Viewfinder Corners (Visual Framing) */}
      <div className="max-w-[85rem] mx-auto w-full relative">
        <div className="absolute -top-10 -left-6 md:-top-16 md:-left-10 text-[#DEDBC8]/15 font-mono text-[11px] pointer-events-none select-none">
          [ FOCAL_SYS_V2 ]
        </div>
        <div className="absolute -top-10 -right-6 md:-top-16 md:-right-10 text-[#DEDBC8]/15 font-mono text-[11px] pointer-events-none select-none">
          [ REC_STDBY ]
        </div>

        {/* Subtle grid indicators */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#DEDBC8]/10 pb-12 mb-16 md:mb-24 relative z-10 gap-8">
          <div>
            <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#DEDBC8]/40 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#DEDBC8]/20"></span>
              <Sparkle className="w-3.5 h-3.5 text-[#DEDBC8]/60 animate-pulse" />
              Core Thesis & Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-white mb-2">
              Where mechanical lenses
              <br />
              Meet{" "}
              <span className="font-serif italic text-[#DEDBC8]/90">
                masterful lighting.
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[#DEDBC8]/50 text-sm md:text-base leading-relaxed">
              We master the art of raw camera capture, creative set composition, and high-dynamics editing, crafting commercial video assets that command absolute focus.
            </p>
          </div>
        </div>

        {/* Dynamic Interactive Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* Left Column: Interactive Pillar Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-4 w-full">
            {pillars.map((pillar, i) => (
              <button
                key={i}
                onClick={() => setActivePillar(i)}
                className={`w-full text-left p-6 md:p-8 rounded-2xl border transition-all duration-500 flex flex-col items-start gap-4 relative group cursor-pointer ${
                  activePillar === i
                    ? "bg-[#111111]/80 border-[#DEDBC8]/35 shadow-[0_4px_30px_rgba(222,219,200,0.05)]"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                {/* Active highlight dot */}
                {activePillar === i && (
                  <div className="absolute top-6 right-6 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono tracking-widest text-[#DEDBC8]/60 uppercase">
                      ACTIVE_SYS
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-mono px-2 py-1 rounded border tracking-widest ${
                      activePillar === i
                        ? "border-[#DEDBC8]/30 text-[#DEDBC8]"
                        : "border-white/5 text-white/30"
                    }`}
                  >
                    {pillar.num}
                  </span>
                  <span className="text-[10px] tracking-[0.2em] font-mono text-white/40 uppercase">
                    {pillar.subtitle}
                  </span>
                </div>

                <div>
                  <h3
                    className={`text-xl md:text-2xl font-serif italic font-medium transition-colors duration-300 ${
                      activePillar === i
                        ? "text-white"
                        : "text-white/60 group-hover:text-white/80"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: High-Fidelity Console Metrics & Explanation + Interactive Visual Preview */}
          <div className="lg:col-span-7 bg-[#111111]/40 border border-white/5 rounded-[2.5rem] p-6 md:p-8 relative flex flex-col justify-center shadow-2xl backdrop-blur-md w-full overflow-hidden">
            {/* Corner Decorative Tech Markers */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10 pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/10 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/10 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/10 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-12 gap-8 items-stretch w-full"
              >
                {/* Details Section */}
                <div className="md:col-span-7 flex flex-col justify-between gap-8 h-full">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#DEDBC8]/40">
                        System Overview
                      </span>
                      <span className="text-[10px] font-mono text-[#DEDBC8]/70">
                        [ {pillars[activePillar].num} // CORE_SYS ]
                      </span>
                    </div>

                    <p className="text-sm md:text-base text-white/85 leading-relaxed font-light">
                      {pillars[activePillar].desc}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#DEDBC8]/40 mb-3 pb-2 border-b border-white/5">
                      {pillars[activePillar].specTitle}
                    </div>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {pillars[activePillar].specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex flex-col gap-0.5">
                          <span className="text-[8px] uppercase font-mono tracking-wider text-[#DEDBC8]/50">
                            {spec.label}
                          </span>
                          <span className="text-xs text-white font-medium truncate">
                            {spec.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Imagery Section - Creatively blended viewfinder preview */}
                <div className="md:col-span-5 flex flex-col min-h-[300px] md:min-h-0 h-full">
                  <div className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] flex-grow group/frame flex flex-col">
                    {/* Viewfinder crosshair overlay */}
                    <div className="absolute inset-0 z-20 pointer-events-none border border-dashed border-white/5 m-3 flex items-center justify-center">
                      <div className="w-6 h-6 border-t border-l border-white/20 absolute top-0 left-0" />
                      <div className="w-6 h-6 border-t border-r border-white/20 absolute top-0 right-0" />
                      <div className="w-6 h-6 border-b border-l border-white/20 absolute bottom-0 left-0" />
                      <div className="w-6 h-6 border-b border-r border-white/20 absolute bottom-0 right-0" />

                      {/* Sub-center cross */}
                      <div className="w-3 h-[1px] bg-red-500/40 absolute" />
                      <div className="h-3 w-[1px] bg-red-500/40 absolute" />
                    </div>

                    {/* Viewfinder top-bar display */}
                    <div className="absolute top-5 inset-x-5 z-25 flex justify-between items-center text-[8px] font-mono tracking-wider text-white/55 pointer-events-none uppercase">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>REC</span>
                      </div>
                      <span>{pillars[activePillar].viewfinderTag}</span>
                    </div>

                    {/* Aspect Ratio Guideline mask (makes it look incredibly high end) */}
                    <div className="absolute inset-x-0 top-0 h-4 bg-black/40 z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-black/40 z-10" />

                    {/* Image frame */}
                    <div className="w-full h-full relative overflow-hidden flex-grow flex items-center justify-center">
                      <img
                        src={pillars[activePillar].image}
                        alt={pillars[activePillar].title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] contrast-[1.15] saturate-45 group-hover/frame:scale-105 group-hover/frame:brightness-[0.75] group-hover/frame:saturate-100 transition-all duration-[1s] ease-out select-none"
                      />
                    </div>

                    {/* Viewfinder bottom-bar display */}
                    <div className="absolute bottom-5 inset-x-5 z-25 flex justify-between items-center text-[7px] font-mono tracking-widest text-white/45 pointer-events-none uppercase">
                      <span>TC: 00:04:12:12</span>
                      <span>STDBY</span>
                      <span>ISO 800</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Elegant foot-metrics readout */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center text-[10px] font-mono tracking-widest text-[#DEDBC8]/40 uppercase gap-6">
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 select-none" />
            <span>Dolby mastered psychoacoustic sync</span>
          </div>
          <div className="flex items-center gap-2">
            <Film className="w-3.5 h-3.5 select-none" />
            <span>Optics calibration certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 select-none" />
            <span>Target response limit: 1.8s</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoPortfolio() {
  const [scrubX, setScrubX] = useState<number>(33);
  const [isScrubbing, setIsScrubbing] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setScrubX(Math.max(0, Math.min(100, x)));
  };

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12 max-w-[90rem] mx-auto w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <FadeIn className="max-w-xl">
          <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#DEDBC8]/40 mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#DEDBC8]/20"></span>[
            DIRECTORS_CATALOG // FL_STDBY ]
          </div>
          <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white m-0 leading-tight">
            Selected{" "}
            <span
              className="inline-block w-14 h-6 md:w-20 md:h-8 rounded-full align-middle bg-cover bg-center mx-1.5 border border-white/20"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=300')",
              }}
            ></span>{" "}
            videos &<br />
            <span className="font-serif italic text-[#DEDBC8]/95">
              cinematic processes.
            </span>
          </h2>
        </FadeIn>
        <FadeIn className="max-w-sm" delay={0.1}>
          <p className="text-[#DEDBC8]/50 text-sm leading-relaxed">
            Each sequence is crafted through custom lens pairing, dynamic
            lighting grids, and immaculate art direction to achieve
            uncompromising visual prestige.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full items-stretch">
        {/* TILE 1: Massive 8-Column Cinematic Showcase with tactile scrubber controller */}
        <FadeIn className="md:col-span-12 lg:col-span-8 overflow-hidden rounded-[2.5rem] relative group border border-white/5 bg-[#0a0a0a] flex flex-col justify-between">
          <div
            ref={sliderRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsScrubbing(true)}
            onMouseLeave={() => setIsScrubbing(false)}
            className="w-full h-[400px] md:h-[580px] relative cursor-none flex-grow"
          >
            <video
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-75 group-hover:opacity-90 transition-all duration-1000 filter contrast-[1.1]"
            />

            {/* Dark grid canvas overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_120%)] pointer-events-none z-10" />

            {/* Custom Interactive Floating Glass Cursor Scrubber */}
            <AnimatePresence>
              {isScrubbing && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  style={{ left: `${scrubX}%` }}
                  className="absolute top-0 bottom-0 w-px bg-white/40 z-20 pointer-events-none"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-2 px-3 rounded-full bg-black/80 backdrop-blur-xl border border-white/20 flex flex-col items-center gap-0.5 text-[8px] font-mono uppercase tracking-[0.15em] text-white whitespace-nowrap shadow-xl">
                    <span className="text-white font-bold">FRAME SCRUB</span>
                    <span className="text-[#DEDBC8]/60">
                      TC: 0{Math.floor(scrubX / 24)}:
                      {(scrubX % 24).toFixed(0).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content Details */}
            <div className="absolute bottom-8 left-8 right-8 z-30 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pointer-events-none">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono text-[#DEDBC8]/60 px-2 py-0.5 rounded border border-[#DEDBC8]/20 bg-black/40">
                    8K ULTRA RESOLUTION
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <h3 className="text-2xl md:text-3.5xl font-serif italic text-white mb-2 leading-none">
                  Audi E-Tron: Electrified Kineticism
                </h3>
                <p className="text-[#DEDBC8]/55 text-xs md:text-sm">
                  Integrating 8K high-speed pursuit tracking with precision anamorphic glass, engineered to frame pure, high-performance automotive geometry.
                </p>
              </div>

              {/* Progress and status indicators */}
              <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 shrink-0 self-stretch md:self-auto justify-between md:justify-start">
                <div className="flex items-center gap-2">
                  <Film className="w-3.5 h-3.5 text-white/70" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#DEDBC8]">
                    RED V-RAPTOR 8K
                  </span>
                </div>
                <span className="text-white/20">|</span>
                <span className="text-[10px] font-mono text-white">
                  4:4:4 PRORES / 24FPS
                </span>
              </div>
            </div>

            <div className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </FadeIn>

        {/* TILE 2: Custom Anodized Statistics Card (4-columns) */}
        <FadeIn
          delay={0.1}
          className="md:col-span-12 lg:col-span-4 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 relative overflow-hidden group p-8 md:p-10 flex flex-col justify-between min-h-[500px] lg:min-h-0 lg:h-full"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(222,219,200,0.04)_0%,transparent_50%)] pointer-events-none animate-pulse" />

          <div className="flex justify-between items-start relative z-10">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#DEDBC8]/40 group-hover:text-[#DEDBC8] group-hover:border-white/20 transition-all duration-500 bg-black/25">
              <Sliders className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <span className="text-[10px] font-mono uppercase text-white/30 tracking-widest">
              [ COGNITIVE_DATA_CORE ]
            </span>
          </div>

          <div className="my-6 relative z-10">
            <div className="text-[4rem] md:text-[5rem] font-serif italic text-white leading-none tracking-tight -mb-2">
              400%
            </div>
            <p className="text-[#DEDBC8]/90 text-sm md:text-base font-semibold tracking-wide">
              Retention Velocity Increase
            </p>
          </div>

          {/* Elegant HUD Concentric Focal Ring Selector */}
          <div className="relative w-full h-36 flex items-center justify-center overflow-hidden border border-white/5 rounded-2xl bg-black/40 mb-6 group-hover:border-white/10 transition-colors duration-500">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-28 h-28 rounded-full border border-dashed border-[#DEDBC8]/15 flex items-center justify-center"
            >
              <div className="w-20 h-20 rounded-full border border-[#DEDBC8]/5 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 animate-pulse" />
              </div>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
              <div className="text-[7px] font-mono text-[#DEDBC8]/35 flex flex-col gap-1">
                <span>FOCAL // AF-C</span>
                <span>RANGE // +0.12M</span>
              </div>
              <div className="text-[7px] font-mono text-emerald-500/60 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYS_READY</span>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden mb-3">
              <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "95%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#DEDBC8]/30 to-[#DEDBC8]"
              />
            </div>
            <p className="text-[#DEDBC8]/55 text-xs leading-relaxed">
              We engineer cinema pacing and interactive hooks that hold
              attention, increasing audience retention duration by over 400%
              compared to standard video formats.
            </p>
          </div>
        </FadeIn>

        {/* TILE 3: The Custom Precision Audio Dashboard (6-columns) */}
        <FadeIn
          delay={0.2}
          className="md:col-span-12 lg:col-span-5 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 p-8 flex flex-col justify-between h-[360px] md:h-[400px] overflow-hidden group relative"
        >
          <div className="absolute inset-0 bg-[#000]/60 pointer-events-none z-0" />

          <div className="relative z-10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">
                [ LFE_MASTER_ATMOS_SYSTEM ]
              </span>
            </div>
            <span className="text-[10px] font-mono text-white/30">
              [ STAGE_Z3 ]
            </span>
          </div>

          {/* Oscillating Soundwave Vector Graphics */}
          <div className="relative z-10 h-32 flex items-center justify-center gap-1.5 w-full">
            {[
              0.4, 0.8, 0.5, 0.9, 0.3, 0.7, 1.0, 0.6, 0.8, 0.4, 0.9, 0.5, 0.7,
              0.3, 0.6,
            ].map((mult, id) => (
              <motion.div
                key={id}
                animate={{
                  height: ["24px", `${110 * mult}px`, "24px"],
                }}
                transition={{
                  duration: 1.2 + id * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[3px] md:w-[4px] rounded-full bg-[#DEDBC8] opacity-35 group-hover:opacity-75 transition-opacity"
              />
            ))}
          </div>

          <div className="relative z-10 pt-4 border-t border-white/10 flex justify-between items-end">
            <div>
              <h4 className="text-white text-base font-medium mb-1">
                Dolby Atmos Mastering
              </h4>
              <p className="text-white/45 text-xs font-light">
                Acoustically masterclass psychoacoustic soundscapes engineered
                to maximize brand recall.
              </p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-xs font-mono text-[#DEDBC8] block">
                96kHz MASTER
              </span>
              <span className="text-[9px] font-mono text-white/35">
                3D AUDIO ENG
              </span>
            </div>
          </div>
        </FadeIn>

        {/* TILE 4: Widescreen Cinematic Showcase (7-columns) */}
        <FadeIn
          delay={0.3}
          className="md:col-span-12 lg:col-span-7 rounded-[2.5rem] overflow-hidden relative group border border-white/5 bg-[#0a0a0a] h-[360px] md:h-[400px]"
        >
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154543_d5b83fc1-9cea-44f3-b5e8-8f325935211a.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-transform duration-1000 group-hover:scale-[1.03] filter brightness-[0.95]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none z-10" />

          <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-20">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono px-2 py-1 rounded bg-black/60 border border-white/10 text-white/80">
                [ FOCAL_REFRACTION_LAB_02 ]
              </span>
              <div className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="max-w-md">
              <h3 className="text-2xl font-serif italic text-white mb-2 leading-none">
                Neon Pulse: Anamorphic Retargeting
              </h3>
              <p className="text-[#DEDBC8]/75 text-xs leading-relaxed font-light">
                Shot on bespoke spherical-anamorphic glass paired with customized
                physical neon installation grids. Directed to instantly claim absolute attention across modern channels and devices.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Capabilities() {
  const items = [
    {
      title: "Cinema Videography",
      desc: "Commercial-grade camera production shot on RED V-Raptor and Arri Alexa LF platforms. Outclassing generic content with spectacular high-aspect visual precision.",
    },
    {
      title: "Art Direction & Set Design",
      desc: "Bespoke production geometry. Constructing spectacular physical set environments, custom light fields, and scene compositions with gorgeous material styling.",
    },
    {
      title: "High-Pacing Video Editing",
      desc: "Rhythm-focused editorial pacing, soundscapes, and cinematic hooks crafted to immediately grip the viewer and prevent early bounces.",
    },
    {
      title: "Atmospheric Color Grading",
      desc: "Custom atmospheric LUT curves engineered to capture perfect color contrast, evoking a profound sensory and emotional reaction from target audiences.",
    },
  ];

  return (
    <section
      id="expertise"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full"
    >
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <FadeIn>
            <h2 className="text-xs tracking-[0.25em] uppercase text-[#DEDBC8]/40 font-semibold">
              Studio Expertise
            </h2>
          </FadeIn>
        </div>
        <div className="md:col-span-3 flex flex-col">
          {items.map((item, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="group flex flex-col justify-center py-10 md:py-12 border-b border-[#DEDBC8]/10 cursor-pointer"
            >
              <div className="flex items-end justify-between w-full">
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#DEDBC8]/40 mb-4">
                    0{i + 1}
                  </div>
                  <span className="text-3xl md:text-5xl font-normal tracking-tight text-[#DEDBC8]/70 group-hover:text-[#DEDBC8] transition-colors">
                    {item.title}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 mb-2 text-[#DEDBC8]" />
              </div>
              <div className="mt-4 h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                <p className="text-[#DEDBC8]/60 md:text-lg max-w-lg">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Showreel() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section
      id="showreel"
      ref={ref}
      className="py-24 px-6 md:px-12 flex justify-center items-center overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-7xl aspect-video relative rounded-2xl md:rounded-[2rem] overflow-hidden group cursor-pointer bg-[#111]"
      >
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_153148_d7a3e1dd-e5d0-4ce6-8306-00d7522ecc44.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#050505]/40 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-[#DEDBC8]">
            <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TechGraphic({ imgY }: { imgY: any }) {
  return (
    <div className="absolute inset-0 w-full h-full bg-[#050505] flex flex-col justify-end overflow-hidden">
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <svg
          viewBox="0 0 800 600"
          fill="none"
          className="w-[180%] h-[180%] translate-x-[15%] -translate-y-[5%] opacity-90"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="fade-left" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#050505" />
              <stop offset="40%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="fade-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>

          <g transform="translate(150, 250) scale(1.1)">
            {/* Top blue plane - now neutral/gold */}
            <path
              d="M 0 -160 L 500 -35 L 200 115 L -300 -10 Z"
              stroke="#DEDBC8"
              strokeWidth="1.5"
              strokeDasharray="8 4"
              opacity="0.3"
            />
            <path
              d="M 0 -140 L 500 -15 L 200 135 L -300 10 Z"
              stroke="#DEDBC8"
              strokeWidth="1"
              strokeDasharray="2 4"
              opacity="0.1"
            />

            {/* Middle glowing particle plane */}
            <path
              d="M 0 -80 L 500 45 L 200 195 L -300 70 Z"
              stroke="#ffffff"
              strokeWidth="3"
              strokeDasharray="2 4"
              strokeLinecap="round"
            />
            <path
              d="M 0 -80 L 500 45 L 200 195 L -300 70 Z"
              stroke="#ffffff"
              strokeWidth="6"
              strokeDasharray="1 6"
              strokeLinecap="round"
              opacity="0.5"
              filter="url(#glow)"
            />

            {/* Grey plane */}
            <path
              d="M 0 -20 L 500 105 L 200 255 L -300 130 Z"
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1.5"
            />

            {/* Bottom blue plane - now neutral */}
            <path
              d="M 0 40 L 500 165 L 200 315 L -300 190 Z"
              stroke="#DEDBC8"
              strokeOpacity="0.2"
              strokeWidth="2"
            />

            {/* Vertical lines */}
            <line
              x1="-300"
              y1="-10"
              x2="-300"
              y2="190"
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1.5"
            />
            <line
              x1="200"
              y1="115"
              x2="200"
              y2="315"
              stroke="#ffffff"
              strokeOpacity="0.1"
              strokeWidth="1.5"
            />
            <line
              x1="500"
              y1="-35"
              x2="500"
              y2="165"
              stroke="#ffffff"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="-160"
              x2="0"
              y2="40"
              stroke="#ffffff"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
          </g>

          {/* Fades */}
          <rect x="0" y="0" width="800" height="600" fill="url(#fade-left)" />
          <rect x="0" y="0" width="800" height="600" fill="url(#fade-bottom)" />
        </svg>
      </motion.div>

      {/* Decorative static tech lines */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#DEDBC8]/10 to-transparent mr-16" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#DEDBC8]/5 to-transparent mr-24" />

      <div className="absolute bottom-16 left-8 md:bottom-20 md:left-12 w-48 h-[2px] bg-white/10 rounded overflow-hidden z-10">
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "40%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="h-full bg-[#DEDBC8] shadow-[0_0_10px_#DEDBC8]"
        />
      </div>

      <div className="absolute bottom-6 left-8 md:bottom-8 md:left-12 flex flex-col gap-3 text-[9px] font-mono tracking-widest text-[#DEDBC8]/50 uppercase z-10">
        <div className="flex items-center gap-3">
          <span className="w-6 h-px bg-[#DEDBC8]/50" />
          Optical Focus Guidelines
        </div>
        <div className="flex items-center gap-3">
          <span className="w-6 h-[2px] bg-white/10 border-t border-dashed border-[#050505]" />
          Live production calibration
        </div>
      </div>
    </div>
  );
}

function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden flex flex-col justify-center px-6 md:px-12"
    >
      {/* Background graphics/visuals */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: y1 }}
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#DEDBC8]/5 to-transparent blur-[120px]"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#DEDBC8]/5 to-transparent blur-[120px] opacity-70"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <div className="lg:col-span-5 relative z-20">
          <FadeIn>
            <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#DEDBC8]/40 mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#DEDBC8]/30"></span>
              The Manifesto
            </div>
            <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-normal leading-tight text-[#DEDBC8]">
              We don't create "content".
              <br />
              <span className="font-serif italic text-white/95">
                We direct cinematic blockbusters.
              </span>
            </h2>
          </FadeIn>
          <FadeIn
            delay={0.2}
            className="mt-6 flex flex-col gap-4 text-[#DEDBC8]/60 text-sm md:text-base leading-relaxed max-w-lg"
          >
            <p>
              In a crowded feed, standard videos are ignored. Your brand
              commands premium camera direction, tactical visual pacing, and
              immaculate atmosphere to stand out instantly. We combine raw physical
              lenses with meticulous scene composition to construct video commercials
              that command attention and scale revenue.
            </p>
            <div className="mt-8 flex gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-white">450M+</span>
                <span className="text-[9px] tracking-widest uppercase text-[#DEDBC8]/40 mt-1">
                  Video Streams Delivered
                </span>
              </div>
              <div className="w-[1px] bg-[#DEDBC8]/10 h-10 my-auto"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-white">18</span>
                <span className="text-[9px] tracking-widest uppercase text-[#DEDBC8]/40 mt-1">
                  Best Director Accolades
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 relative h-[45dvh] lg:h-[65dvh] w-full rounded lg:rounded-lg overflow-hidden group ml-auto border border-white/5 bg-[#050505] shadow-2xl">
          <TechGraphic imgY={imgY} />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
      title: "Neon Cinema",
      category: "INCANDESCENT SHADOWS",
      focal: "35mm T/1.2",
      iso: "ISO 320",
      resolution: "8K VistaVision",
      span: "col-span-12 md:col-span-8 h-[400px]",
      tag: "CAM_01 // COOKE_ANAM",
    },
    {
      src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
      title: "Production Slate",
      category: "CLAP_STAGE_PRIMARY",
      focal: "50mm T/1.5",
      iso: "ISO 800",
      resolution: "8K Arri LF RAW",
      span: "col-span-12 md:col-span-4 h-[400px]",
      tag: "LOG_02 // ARRI_AXA",
    },
    {
      src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
      title: "Prism Optics",
      category: "REFRACTION SPECTRUM",
      focal: "85mm Signature",
      iso: "ISO 100",
      resolution: "12K Cinematic Scan",
      span: "col-span-12 md:col-span-4 h-[360px]",
      tag: "OPTIC // REFRACT_SYS",
    },
    {
      src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
      title: "Analog Projection",
      category: "CHRONO_16MM",
      focal: "28mm Vintage",
      iso: "ISO 640",
      resolution: "16mm Physical Scan",
      span: "col-span-12 md:col-span-4 h-[360px]",
      tag: "SHUT // 16MM_ARCHIVE",
    },
    {
      src: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?auto=format&fit=crop&q=80&w=800",
      title: "Studio Lighting Stage",
      category: "LIGHTING DYNAMICS",
      focal: "24mm f/2.8",
      iso: "ISO 400",
      resolution: "Physical Light Staging",
      span: "col-span-12 md:col-span-4 h-[360px]",
      tag: "LIGHT // STUDIO_SET",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      title: "Robotic Camera Rig",
      category: "TRACKING DYNAMICS",
      focal: "18mm f/4.0",
      iso: "ISO 1600",
      resolution: "Motion Control Sync",
      span: "col-span-12 md:col-span-5 h-[420px]",
      tag: "KINETIC // BOLT_DRIVE",
    },
    {
      src: "https://images.unsplash.com/photo-1582126892999-08249f0d015c?auto=format&fit=crop&q=80&w=800",
      title: "Master Prime Lens Suite",
      category: "OPTICS CONFIGURATION",
      focal: "75mm Anamorphic",
      iso: "ISO 200",
      resolution: "Physical Cooke Set",
      span: "col-span-12 md:col-span-7 h-[420px]",
      tag: "GLASS // COOKE_VINT",
    },
    {
      src: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800",
      title: "Interactive Color Engine",
      category: "RGB CHROMATIC SPEC",
      focal: "50mm Master",
      iso: "ISO 500",
      resolution: "DaVinci Wide Color",
      span: "col-span-12 md:col-span-6 h-[380px]",
      tag: "COLOR // HDR_ACES",
    },
    {
      src: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&q=80&w=800",
      title: "Atmospheric Haze Capture",
      category: "PHYSICAL DIFFUSION & HAZE",
      focal: "100mm Focal Macro",
      iso: "ISO 100",
      resolution: "8K Optical Scan",
      span: "col-span-12 md:col-span-6 h-[380px]",
      tag: "OPTIC // ATMOS_HAZE",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-24 px-6 md:px-12 max-w-[90rem] mx-auto w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <FadeIn className="max-w-2xl">
          <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#DEDBC8]/40 mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#DEDBC8]/20"></span>[
            STRATEGIC_VISUAL_REGISTRY // ARCH_9 ]
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white m-0 leading-none">
            Strategic visual{" "}
            <span
              className="inline-block w-14 h-6 md:w-20 md:h-8 rounded-full align-middle bg-cover bg-center mx-1.5 border border-white/20"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=300')",
              }}
            ></span>{" "}
            registry
          </h2>
        </FadeIn>
        <FadeIn className="max-w-xs shrink-0 md:text-right" delay={0.1}>
          <p className="text-[10px] font-mono tracking-widest text-[#DEDBC8]/40 uppercase">
            [ REF_INDEX // V_FILE_ACTIVE ]<br />
            LAST CALIBRATED UTC 2026.05
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full grid-flow-dense pb-12">
        {galleryItems.map((item, i) => (
          <FadeIn key={i} delay={i * 0.05} className={`${item.span}`}>
            <div className="w-full h-full relative group/gallery overflow-hidden rounded-[2rem] border border-white/5 bg-[#080808] flex flex-col justify-between cursor-pointer shadow-xl">
              {/* Aspect Ratio Guides (viewfinder top & bottom crops sliding on frame hover) */}
              <div className="absolute inset-x-0 top-0 h-4 bg-black/60 border-b border-white/5 z-20 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-4 bg-black/60 border-t border-white/5 z-20 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Viewfinder crosshairs on hover */}
              <div className="absolute inset-8 border border-dashed border-white/5 pointer-events-none z-20 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-700 m-3 flex items-center justify-center">
                <div className="w-4 h-4 border-t border-l border-white/10 absolute top-0 left-0" />
                <div className="w-4 h-4 border-t border-r border-white/10 absolute top-0 right-0" />
                <div className="w-4 h-4 border-b border-l border-white/10 absolute bottom-0 left-0" />
                <div className="w-4 h-4 border-b border-r border-white/10 absolute bottom-0 right-0" />

                <div className="w-2.5 h-[1px] bg-[#DEDBC8]/20 absolute" />
                <div className="h-2.5 w-[1px] bg-[#DEDBC8]/20 absolute" />
              </div>

              {/* Image Wrapper */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover/gallery:grayscale-0 brightness-[0.6] group-hover/gallery:brightness-[0.75] contrast-[1.15] scale-100 group-hover/gallery:scale-[1.04] transition-all duration-[1.2s] ease-out-quint select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />
              </div>

              {/* Viewfinder Top Readout (Interactive HUD) */}
              <div className="absolute top-6 inset-x-6 z-30 flex justify-between items-center text-[8px] font-mono tracking-wider text-white/55 pointer-events-none uppercase">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span>STDBY</span>
                </div>
                <span>{item.tag}</span>
              </div>

              {/* Viewfinder Bottom detail cards revealed on Hover */}
              <div className="absolute bottom-6 inset-x-6 z-30 flex flex-col gap-3 pointer-events-none">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[8px] tracking-[0.2em] font-mono text-[#DEDBC8]/50 block uppercase mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-serif italic text-white leading-none">
                      {item.title}
                    </h3>
                  </div>

                  {/* Interactive action ring indicator */}
                  <div className="w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white scale-90 group-hover/gallery:scale-100 group-hover:bg-white/10 transition-all duration-300">
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* High-Fidelity Optics readout tags */}
                <div className="h-0 opacity-0 group-hover/gallery:h-6 group-hover/gallery:opacity-100 transition-all duration-500 overflow-hidden border-t border-white/10 pt-2 flex justify-between text-[8px] font-mono text-[#DEDBC8]/50 uppercase tracking-widest leading-none">
                  <span>FOCAL: {item.focal}</span>
                  <span>GAIN: {item.iso}</span>
                  <span>RES: {item.resolution}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
function Studio() {
  const hqMetrics = [
    { label: "HQ Coordinates", val: "34.0522° N, 118.2437° W" },
    { label: "Atelier Footprint", val: "20,000 SQ FT" },
    { label: "Architectural Style", val: "Brutalist Concrete" },
    { label: "Dedicated Workspace", val: "4 Core Zones" },
  ];
  return (
    <section
      id="studio"
      className="py-24 md:py-36 w-full bg-[#070707] relative overflow-hidden"
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-0 left-1/4 w-[60vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(222,219,200,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[50vw] h-[50vh] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_0%,transparent_60%)] pointer-events-none" />

      {/* Architectural guidelines of the space */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(222,219,200,0.011)_1px,transparent_1px),linear-gradient(90deg,rgba(222,219,200,0.011)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-30 pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Editorial Heading conforming to AIDA wide format */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-10">
          <FadeIn className="max-w-4xl">
            <div className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-[#DEDBC8]/40 mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#DEDBC8]/20"></span>[
              AGENCY_HEADQUARTERS // WORLDWIDE_PRESENCE ]
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-[4.75rem] font-medium tracking-tight text-white leading-[1.08] m-0">
              Designed for boundless{" "}
              <span
                className="inline-block w-14 h-8 md:w-24 md:h-12 rounded-full align-middle bg-cover bg-center mx-2 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=300')",
                }}
              ></span>{" "}
              creation, hosted in{" "}
              <span className="font-serif italic text-[#DEDBC8]/95 font-light">
                physical space.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="max-w-md shrink-0 lg:mb-2">
            <p className="text-white/50 text-sm md:text-base leading-relaxed font-light">
              Our flagship physical spaces are designed to facilitate
              high-concept thought, creative ateliership, and seamless
              collaboration. An architecture of raw concrete, pure natural
              light, and calibrated acoustics.
            </p>
          </FadeIn>
        </div>

        {/* Flawless Gapless 12-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-full items-stretch grid-flow-dense">
          {/* TILE 1: Studio Headquarters Exterior (Col: col-span-12 lg:col-span-8) */}
          <FadeIn className="col-span-12 lg:col-span-8 overflow-hidden rounded-[2.5rem] h-[400px] md:h-[580px] relative group/stage border border-white/5 bg-[#0a0a0a] flex flex-col justify-between">
            {/* Viewfinder Aspect Ratio guideline masks */}
            <div className="absolute inset-x-0 top-0 h-4 bg-black/50 z-20 border-b border-white/5" />
            <div className="absolute inset-x-0 bottom-0 h-4 bg-black/50 z-20 border-t border-white/5" />

            {/* Viewfinder mechanical guides on hover */}
            <div className="absolute inset-8 border border-dashed border-white/5 max-m-4 z-20 pointer-events-none opacity-40 group-hover/stage:opacity-100 transition-opacity duration-700 flex items-center justify-center">
              <div className="w-6 h-6 border-t border-l border-white/30 absolute top-0 left-0" />
              <div className="w-6 h-6 border-t border-r border-white/30 absolute top-0 right-0" />
              <div className="w-6 h-6 border-b border-l border-white/30 absolute bottom-0 left-0" />
              <div className="w-6 h-6 border-b border-r border-white/30 absolute bottom-0 right-0" />
              <div className="w-2.5 h-[1px] bg-white/20 absolute" />
              <div className="h-2.5 w-[1px] bg-white/20 absolute" />
            </div>

            {/* Backdrop camera stream */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
                alt="Flagship Atelier Building"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] contrast-[1.12] saturate-35 group-hover/stage:scale-[1.04] group-hover/stage:brightness-[0.7] group-hover/stage:saturate-[0.5] transition-all duration-[1.5s] ease-out select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none z-10" />
            </div>

            {/* Viewfinder Top-bar telemetry readout info */}
            <div className="absolute top-6 inset-x-8 z-30 flex justify-between items-center text-[8px] font-mono tracking-wider text-white/50 pointer-events-none uppercase">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>EST. 2024 // STABLE</span>
              </div>
              <span className="text-white/40">[ FLAGSHIP_ATELIER_LA ]</span>
              <span>COORD // 34.0522° N</span>
            </div>

            {/* Bottom title frame details */}
            <div className="absolute bottom-8 left-8 right-8 z-30 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pointer-events-none">
              <div className="max-w-md">
                <span className="text-[10px] font-mono tracking-widest text-[#DEDBC8]/50 mb-2 block uppercase">
                  [ ATELIER_ZERO // LOS_ANGELES ]
                </span>
                <h3 className="text-2xl md:text-3.5xl text-white font-serif italic mb-2">
                  The Flagship Los Angeles Atelier
                </h3>
                <p className="text-white/45 text-xs font-light leading-relaxed">
                  A custom-designed architectural space situated in the heart of
                  the artistic district, serving as the central nervous system
                  for our media curation, agency meetings, and private
                  projection reviews.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-2 text-[8px] font-mono tracking-widest text-white/40 uppercase">
                <span>HOURS // 09:00 - 18:00 Local</span>
              </div>
            </div>
          </FadeIn>

          {/* TILE 2: Tech Specs Diagnostics Panel (Col: col-span-12 lg:col-span-4) */}
          <FadeIn
            delay={0.1}
            className="col-span-12 lg:col-span-4 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 relative overflow-hidden p-8 md:p-10 flex flex-col justify-between h-[400px] md:h-auto min-h-[350px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(222,219,200,0.03)_0%,transparent_50%)] pointer-events-none" />

            <div className="flex justify-between items-start relative z-10">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#DEDBC8]/40 bg-black/30">
                <Cpu className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-mono uppercase text-white/30 tracking-widest">
                [ SPACE_METRICS ]
              </span>
            </div>

            {/* Static HUD Graph simulation */}
            <div className="my-6 relative z-10">
              <div className="text-[10px] uppercase font-mono tracking-widest text-[#DEDBC8]/40 mb-3 pb-1.5 border-b border-white/5">
                Physical Dimensions
              </div>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {hqMetrics.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col gap-0.5">
                    <span className="text-[8px] uppercase font-mono tracking-wider text-[#DEDBC8]/50">
                      {spec.label}
                    </span>
                    <span className="text-sm text-white font-semibold">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between text-[8px] font-mono text-[#DEDBC8]/40 uppercase mb-2">
                <span>CLIMATE & ACOUSTICS</span>
                <span>CALIBRATED</span>
              </div>
              <div className="w-full h-[3px] bg-white/5 rounded-full overflow-hidden mb-4">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-[#DEDBC8]"
                />
              </div>
              <p className="text-[#DEDBC8]/50 text-xs leading-relaxed font-light">
                Acoustically isolated and optimized to maintain precise
                environmental criteria, fostering absolute clarity for auditory
                and aesthetic focus.
              </p>
            </div>
          </FadeIn>

          {/* TILE 3: Atelier Curation & Screening Space (Col: col-span-12) */}
          <FadeIn
            delay={0.2}
            className="col-span-12 rounded-[2.5rem] bg-[#0c0c0c] border border-white/5 p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-end relative overflow-hidden min-h-[180px]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(222,219,200,0.02)_0%,transparent_60%)] pointer-events-none" />

            {/* Layout lines / viewfinder indicators */}
            <div className="absolute inset-4 z-20 pointer-events-none border border-dashed border-white/5 opacity-30 flex items-center justify-center">
              <div className="w-2.5 h-[1px] bg-white/20 absolute" />
              <div className="h-2.5 w-[1px] bg-white/20 absolute" />
            </div>

            <div className="relative z-10 max-w-2xl flex flex-col">
              <div className="flex items-center gap-3 text-[8px] font-mono tracking-wider text-white/50 mb-3 uppercase">
                <span>[ ZONE_03 ]</span>
                <span className="w-1 h-1 rounded-full bg-[#DEDBC8]/40" />
                <span>DISCOURSE APARTMENT</span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif italic text-white leading-none mb-2">
                Atelier Curation & Screening Space
              </h3>
              <p className="text-[#DEDBC8]/70 text-xs font-light leading-relaxed">
                A high-end dedicated viewing lounge configured with reference
                projection arrays for strategic creative dialogue and aesthetic
                assessments.
              </p>
            </div>

            <div className="relative z-10 shrink-0 md:text-right mt-6 md:mt-0 flex flex-col gap-1.5 justify-end">
              <span className="text-[10px] font-mono uppercase text-[#DEDBC8]/30 tracking-widest block">
                [ SCREEN_SPECS ]
              </span>
              <span className="text-[8px] font-mono tracking-wider text-[#DEDBC8]/50 uppercase">
                DCI_COLOR_CAL // HDR_REC2020 // 120HZ
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const SectionDivider = () => (
  <div className="w-full h-px bg-white/[0.06] relative max-w-[85rem] mx-auto opacity-80 my-20 md:my-32">
    <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex items-center gap-2 text-[9px] font-mono tracking-widest text-[#DEDBC8]/30 uppercase select-none pointer-events-none">
      <span>[ FP_MARKER_STDBY ]</span>
    </div>
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
      <div className="w-1.5 h-1.5 rounded-full bg-[#DEDBC8]/25" />
      <div className="w-1 h-1 rounded-full bg-[#DEDBC8]/10" />
    </div>
    <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-[9px] font-mono tracking-widest text-[#DEDBC8]/30 uppercase select-none pointer-events-none">
      <span>+ prisma.studio</span>
    </div>
  </div>
);

function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full flex flex-col items-center text-center">
        <FadeIn className="w-full mb-32">
          <h2 className="text-[16vw] md:text-[14vw] font-normal tracking-tighter leading-[0.8] mb-12 text-[#DEDBC8]">
            Ready to{" "}
            <span className="font-serif italic text-white/90 pr-4 pl-[6px] pt-[2px] mt-[2px] mb-[9px] pb-[6px]">
              Film?
            </span>
          </h2>
          <button className="px-8 py-5 bg-[#DEDBC8] text-[#050505] rounded-full uppercase tracking-widest text-[10px] md:text-xs font-bold hover:bg-white hover:scale-105 transition-all duration-300">
            Secure Your Creative Brief Session
          </button>
        </FadeIn>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#DEDBC8]/10 text-[10px] sm:text-xs text-[#DEDBC8]/40 tracking-widest uppercase gap-8">
          <p>© {new Date().getFullYear()} Prisma Studio</p>
          <div className="flex gap-6 sm:gap-10">
            <a href="#" className="hover:text-[#DEDBC8] transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-[#DEDBC8] transition-colors">
              Vimeo
            </a>
            <a href="#" className="hover:text-[#DEDBC8] transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-[#DEDBC8] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="w-full bg-[#050505] text-[#DEDBC8] min-h-[100dvh] font-sans antialiased overflow-x-hidden selection:bg-[#DEDBC8] selection:text-[#050505]">
      <Nav />
      <Hero />
      <SectionDivider />
      <Clients />
      <SectionDivider />
      <Statement />
      <SectionDivider />
      <Manifesto />
      <SectionDivider />
      <BentoPortfolio />
      <SectionDivider />
      <Gallery />
      <SectionDivider />
      <Showreel />
      <SectionDivider />
      <Capabilities />
      <SectionDivider />
      <Studio />
      <SectionDivider />
      <Footer />
    </main>
  );
}
