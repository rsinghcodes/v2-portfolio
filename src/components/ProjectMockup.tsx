'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiHeart, 
  FiMessageSquare, 
  FiCheck, 
  FiLock, 
  FiTerminal, 
  FiActivity, 
  FiPlay, 
  FiCode, 
  FiUser,
  FiSend,
  FiCheckCircle,
  FiBookOpen,
  FiPlus
} from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

interface ProjectMockupProps {
  title: string;
  tech: string[];
}

export default function ProjectMockup({ title, tech }: ProjectMockupProps) {
  const normalizedTitle = title.toLowerCase();

  // 1. ReadList - Blog App Mockup
  if (normalizedTitle.includes('readlist')) {
    return <ReadListMockup />;
  }

  // 2. Votify - Mobile Voting App Mockup
  if (normalizedTitle.includes('votify')) {
    return <VotifyMockup />;
  }

  // 3. InterCup - Interview Prep App Mockup
  if (normalizedTitle.includes('intercup')) {
    return <InterCupMockup />;
  }

  // 4. Anonymous Message Mockup
  if (normalizedTitle.includes('anonymous')) {
    return <AnonymousMessageMockup />;
  }

  // 5. Portfolio Website Mockup
  if (normalizedTitle.includes('portfolio')) {
    return <PortfolioMockup tech={tech} />;
  }

  // 6. Bulletin Board - Task Management App
  if (normalizedTitle.includes('bulletin') || normalizedTitle.includes('board')) {
    return <BulletinBoardMockup />;
  }

  // Fallback - Developer IDE / Terminal Mockup
  return <FallbackTerminalMockup title={title} tech={tech} />;
}

// ----------------- 1. READLIST BLOG MOCKUP -----------------
function ReadListMockup() {
  const [likes, setLikes] = useState(42);
  const [liked, setLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) {
      setLikes(42);
      setLiked(false);
    } else {
      setLikes(43);
      setLiked(true);
    }
  };

  return (
    <div className="w-full h-full min-h-[140px] flex flex-col bg-slate-900/90 text-slate-200 font-sans select-none relative">
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950/70 border-b border-slate-800/60">
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] text-slate-500 bg-slate-900/60 px-6 py-0.5 rounded border border-slate-800/40 font-mono scale-90">
          readlist.app/article
        </div>
        <div className="w-8" />
      </div>

      {/* Main Blog Post Content */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Featured Gradient Card */}
          <div className="h-10 rounded bg-gradient-to-r from-violet-600/30 to-cyan-500/30 border border-violet-500/10 relative overflow-hidden flex items-center justify-center">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            />
            <span className="text-[10px] tracking-wide font-mono text-cyan-300 flex items-center gap-1">
              <FiBookOpen className="w-3 h-3 text-violet-400 animate-pulse" /> DEV BLOG
            </span>
          </div>
          {/* Blog Title Skeleton */}
          <div className="space-y-1">
            <h4 className="text-[11px] font-bold tracking-tight text-white leading-tight">
              Building SaaS with GraphQL & Apollo
            </h4>
            {/* Post Description Skeleton */}
            <div className="flex flex-col gap-1">
              <span className="w-full h-1 bg-slate-700/50 rounded-full" />
              <span className="w-[85%] h-1 bg-slate-700/50 rounded-full" />
            </div>
          </div>
        </div>

        {/* Footer Meta: Author & Like Button */}
        <div className="flex items-center justify-between border-t border-slate-800/40 pt-2 mt-1">
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center">
              <FiUser className="w-2.5 h-2.5 text-cyan-400" />
            </div>
            <span className="text-[9px] text-slate-400 font-mono">rsingh.codes</span>
          </div>
          
          {/* Like Interaction */}
          <motion.button
            onClick={handleLike}
            className="flex items-center space-x-1 px-1.5 py-0.5 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700/40 text-slate-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {liked ? (
                <motion.div
                  key="liked"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <FaHeart className="w-3 h-3 text-red-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="unliked"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                >
                  <FiHeart className="w-3 h-3 text-slate-400" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="text-[9px] font-mono font-semibold tabular-nums">{likes}</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ----------------- 2. VOTIFY MOBILE VOTING MOCKUP -----------------
function VotifyMockup() {
  const [votes, setVotes] = useState({ reactNative: 65, flutter: 35 });
  const [voted, setVoted] = useState<string | null>(null);

  const handleVote = (option: 'reactNative' | 'flutter', e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (voted === option) return;

    if (option === 'reactNative') {
      setVotes({ reactNative: 66, flutter: 34 });
      setVoted('reactNative');
    } else {
      setVotes({ reactNative: 64, flutter: 36 });
      setVoted('flutter');
    }
  };

  return (
    <div className="w-full h-full min-h-[140px] flex items-center justify-center bg-slate-900/90 py-1 select-none overflow-hidden">
      {/* Mobile Device Mockup */}
      <div className="w-[180px] h-[130px] rounded-t-2xl border-x-4 border-t-4 border-slate-800 bg-slate-950 flex flex-col shadow-2xl relative">
        {/* Device Notch/Speaker */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-slate-800 flex items-center justify-center">
          <div className="w-4 h-[1px] bg-slate-900 rounded-full" />
        </div>

        {/* Screen Content */}
        <div className="flex-1 flex flex-col p-2 pt-4 justify-between font-sans">
          <div className="space-y-1.5">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-1">
              <span className="text-[9px] font-bold tracking-wider text-violet-400 flex items-center gap-0.5">
                ⚡ Votify
              </span>
              <span className="text-[7px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1 rounded-full flex items-center gap-0.5 font-mono">
                ● Live
              </span>
            </div>
            {/* Question */}
            <p className="text-[9px] font-semibold text-white leading-tight">
              Best Mobile UI Framework?
            </p>
          </div>

          {/* Voting Options */}
          <div className="space-y-1.5 flex-1 flex flex-col justify-center">
            {/* Option 1: React Native */}
            <div 
              onClick={(e) => handleVote('reactNative', e)}
              className={`group/opt relative h-6 rounded border cursor-pointer overflow-hidden flex items-center px-2 transition-all duration-300 ${
                voted === 'reactNative' 
                  ? 'border-violet-500 bg-violet-950/20' 
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              {/* Progress Background */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-violet-600/20"
                initial={{ width: 0 }}
                animate={{ width: `${votes.reactNative}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              />
              {/* Label & Percent */}
              <div className="z-10 flex w-full justify-between items-center text-[8px] font-mono font-semibold">
                <span className={voted === 'reactNative' ? 'text-violet-300' : 'text-slate-300'}>
                  React Native
                </span>
                <span className="text-white font-bold">{votes.reactNative}%</span>
              </div>
            </div>

            {/* Option 2: Flutter */}
            <div 
              onClick={(e) => handleVote('flutter', e)}
              className={`group/opt relative h-6 rounded border cursor-pointer overflow-hidden flex items-center px-2 transition-all duration-300 ${
                voted === 'flutter' 
                  ? 'border-violet-500 bg-violet-950/20' 
                  : 'border-slate-800 bg-slate-900/40 hover:border-slate-700'
              }`}
            >
              {/* Progress Background */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-slate-700/20"
                initial={{ width: 0 }}
                animate={{ width: `${votes.flutter}%` }}
                transition={{ type: 'spring', stiffness: 80, damping: 15 }}
              />
              {/* Label & Percent */}
              <div className="z-10 flex w-full justify-between items-center text-[8px] font-mono font-semibold">
                <span className={voted === 'flutter' ? 'text-violet-300' : 'text-slate-300'}>
                  Flutter
                </span>
                <span className="text-white font-bold">{votes.flutter}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------- 3. INTERCUP INTERVIEW PREP MOCKUP -----------------
function InterCupMockup() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-full h-full min-h-[140px] flex flex-col bg-slate-900/90 text-slate-200 font-sans select-none relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950/70 border-b border-slate-800/60">
        <div className="flex space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] text-slate-500 bg-slate-900/60 px-6 py-0.5 rounded border border-slate-800/40 font-mono scale-90">
          intercup.dev/dashboard
        </div>
        <div className="w-8" />
      </div>

      {/* Content Widget Layout */}
      <div className="p-3 flex-1 flex items-center justify-between gap-3">
        {/* Left Side: Animated SVG Circular Progress */}
        <div className="flex flex-col items-center justify-center relative w-16 h-16">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="26"
              className="stroke-slate-800 fill-none"
              strokeWidth="5"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="26"
              className="stroke-indigo-500 fill-none"
              strokeWidth="5"
              strokeDasharray="163.3"
              initial={{ strokeDashoffset: 163.3 }}
              animate={{ strokeDashoffset: hovered ? 36 : 46 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-[11px] font-bold text-white font-mono">
              {hovered ? '78%' : '72%'}
            </span>
            <span className="text-[6px] text-slate-400 font-mono uppercase tracking-wider scale-90">
              Prep
            </span>
          </div>
        </div>

        {/* Right Side: Prep Categories List */}
        <div className="flex-1 space-y-1.5">
          <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Focus Modules
          </h5>
          
          <div className="space-y-1 text-[9px] font-mono">
            <div className="flex items-center justify-between border-b border-slate-800/40 pb-0.5">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Data Structures
              </span>
              <span className="text-white font-bold">12/15</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-800/40 pb-0.5">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" /> System Design
              </span>
              <span className="text-white font-bold">8/10</span>
            </div>
            <div className="flex items-center justify-between pb-0.5">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Mock Coding
              </span>
              <span className="text-emerald-400 font-bold">Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------- 4. ANONYMOUS MESSAGE MOCKUP -----------------
function AnonymousMessageMockup() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Your project design is clean! 🔥", isSender: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages([...messages, { id: Date.now(), text: inputValue, isSender: true }]);
    setInputValue("");
  };

  return (
    <div className="w-full h-full min-h-[140px] flex flex-col bg-slate-900/90 text-slate-200 font-sans select-none relative">
      {/* Header with lock icon */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950/70 border-b border-slate-800/60">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono tracking-wide text-slate-300">Incognito Inbox</span>
        </div>
        <div className="text-[8px] text-emerald-400/95 font-mono flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full scale-90">
          <FiLock className="w-2.5 h-2.5" /> encrypted
        </div>
      </div>

      {/* Chat Messages Panel */}
      <div className="p-2 flex-1 flex flex-col justify-between overflow-hidden">
        <div className="space-y-1.5 max-h-[70px] overflow-y-auto pr-0.5">
          {/* Default prompt */}
          <div className="text-center text-[7px] text-slate-500 font-mono py-0.5 border-b border-slate-800/20">
            Anonymous messages are end-to-end encrypted.
          </div>
          
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.isSender ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded px-2 py-1 text-[9px] leading-tight ${
                  msg.isSender 
                    ? 'bg-violet-600 text-white rounded-br-none' 
                    : 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input area */}
        <form onSubmit={handleSend} className="flex gap-1.5 items-center border-t border-slate-800/50 pt-1.5 mt-1">
          <input
            type="text"
            placeholder="Type anonymous reply..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="flex-1 bg-slate-950/80 border border-slate-800 rounded px-2 py-1 text-[8px] font-sans text-slate-300 placeholder-slate-600 focus:outline-none focus:border-violet-500/50"
          />
          <button
            type="submit"
            onClick={(e) => { e.stopPropagation(); handleSend(e); }}
            className="p-1 rounded bg-violet-600 hover:bg-violet-500 text-white cursor-pointer"
          >
            <FiSend className="w-2.5 h-2.5" />
          </button>
        </form>
      </div>
    </div>
  );
}

// ----------------- 5. PORTFOLIO WEBSITE MOCKUP -----------------
function PortfolioMockup({ tech }: { tech: string[] }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div 
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); setToggle(!toggle); }}
      className="w-full h-full min-h-[140px] flex flex-col bg-slate-950 text-slate-200 font-sans select-none relative overflow-hidden cursor-pointer group"
    >
      {/* Background visual abstract code/grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:12px_12px]" />

      {/* Floating particles */}
      <motion.div 
        className="absolute w-8 h-8 rounded-full bg-violet-500/20 blur-xl top-4 left-6"
        animate={{ 
          y: toggle ? [-10, 10, -10] : [0, -15, 0],
          scale: toggle ? [1, 1.2, 1] : [1, 0.9, 1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute w-10 h-10 rounded-full bg-cyan-500/20 blur-xl bottom-4 right-6"
        animate={{ 
          y: toggle ? [10, -10, 10] : [0, 15, 0],
          scale: toggle ? [1.2, 1, 1.2] : [1, 1.1, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Top Navbar Simulation */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-slate-900 relative z-10">
        <span className="text-[9px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-mono">
          rsingh.codes
        </span>
        <div className="flex items-center space-x-1.5 scale-90">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          {/* Custom micro-theme-toggle simulation */}
          <div className={`w-6 h-3 rounded-full border border-slate-700 p-[1px] flex items-center transition-all ${toggle ? 'justify-end bg-violet-950/40 border-violet-500/50' : 'justify-start bg-slate-900'}`}>
            <motion.div layout className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          </div>
        </div>
      </div>

      {/* Landing Page Content Simulation */}
      <div className="p-3 flex-1 flex flex-col justify-between relative z-10">
        <div className="space-y-1 mt-1 text-center">
          <span className="text-[7px] text-slate-500 uppercase tracking-widest font-mono">Portfolio UI</span>
          <h4 className="text-[12px] font-black leading-tight text-white tracking-tight">
            Hi, I'm Raghvendra
          </h4>
          <p className="text-[8px] text-slate-400 max-w-[85%] mx-auto">
            Building premium B2B SaaS apps and interactive web experiences.
          </p>
        </div>

        {/* Tech Badges List */}
        <div className="flex flex-wrap gap-1 justify-center border-t border-slate-900/60 pt-2 scale-90">
          {tech.slice(0, 3).map((item) => (
            <span key={item} className="px-1.5 py-0.5 text-[7px] font-mono rounded bg-slate-900/80 text-violet-400 border border-violet-500/10">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------- 6. BULLETIN BOARD KANBAN MOCKUP -----------------
function BulletinBoardMockup() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="w-full h-full min-h-[140px] flex flex-col bg-slate-900/90 text-slate-200 font-sans select-none relative">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950/70 border-b border-slate-800/60">
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-bold text-slate-300 font-mono">📋 Kanban Board</span>
        </div>
        <div className="flex space-x-1">
          <div className="p-0.5 rounded bg-slate-800 border border-slate-700/50 cursor-pointer">
            <FiPlus className="w-2.5 h-2.5 text-slate-400" />
          </div>
        </div>
      </div>

      {/* Kanban Board columns */}
      <div className="p-2 flex-1 grid grid-cols-3 gap-1.5 bg-slate-950/20">
        {/* Column 1: To Do */}
        <div className="bg-slate-950/40 rounded p-1 flex flex-col gap-1 border border-slate-800/40">
          <span className="text-[7px] font-bold text-slate-500 font-mono uppercase tracking-wider mb-0.5">
            To Do
          </span>
          <motion.div 
            className="bg-slate-900/80 border border-slate-800 rounded p-1 cursor-grab"
            whileHover={{ scale: 1.02, rotate: -0.5, borderColor: 'rgba(139, 92, 246, 0.3)' }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-[8px] font-medium text-slate-200 leading-tight">Write Unit Tests</div>
            <div className="flex items-center gap-0.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[6px] text-slate-500 font-mono">QA</span>
            </div>
          </motion.div>
        </div>

        {/* Column 2: In Progress */}
        <div className="bg-slate-950/40 rounded p-1 flex flex-col gap-1 border border-slate-800/40">
          <span className="text-[7px] font-bold text-slate-500 font-mono uppercase tracking-wider mb-0.5">
            Active
          </span>
          <motion.div 
            className="bg-slate-900/80 border border-slate-800 rounded p-1 cursor-grab"
            whileHover={{ scale: 1.02, rotate: 0.5, borderColor: 'rgba(139, 92, 246, 0.3)' }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-[8px] font-medium text-slate-200 leading-tight">GraphQL API</div>
            <div className="flex items-center gap-0.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-[6px] text-slate-500 font-mono">Backend</span>
            </div>
          </motion.div>
        </div>

        {/* Column 3: Done */}
        <div className="bg-slate-950/40 rounded p-1 flex flex-col gap-1 border border-slate-800/40">
          <span className="text-[7px] font-bold text-slate-500 font-mono uppercase tracking-wider mb-0.5">
            Done
          </span>
          <motion.div 
            className="bg-slate-900/40 border border-slate-800/40 rounded p-1 cursor-grab relative overflow-hidden"
            whileHover={{ scale: 1.02, rotate: -0.5 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Sparkle border simulation */}
            {hoveredCard === 3 && (
              <motion.div 
                className="absolute inset-0 bg-violet-500/5 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
            <div className="text-[8px] font-medium text-slate-500 line-through leading-tight">DB Schema</div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[6px] text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-1 rounded-full flex items-center gap-0.5 font-mono">
                <FiCheck className="w-2 h-2" /> done
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ----------------- FALLBACK TERMINAL MOCKUP -----------------
function FallbackTerminalMockup({ title, tech }: ProjectMockupProps) {
  const cleanTitle = title.split('-')[0].replace(/\s+/g, '');
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-[140px] flex flex-col bg-slate-950 text-slate-200 font-mono select-none relative border border-slate-800/60 rounded overflow-hidden">
      {/* Tab/Editor Header */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900/80 border-b border-slate-800/60">
        <div className="flex space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-slate-700" />
          <span className="w-2 h-2 rounded-full bg-slate-700" />
        </div>
        <div className="text-[9px] text-slate-400 bg-slate-950/80 px-4 py-0.5 rounded border border-slate-850 flex items-center gap-1 font-mono">
          <FiTerminal className="w-2.5 h-2.5 text-cyan-400" /> {cleanTitle.toLowerCase()}.sh
        </div>
        <div className="w-4" />
      </div>

      {/* Terminal shell printing script */}
      <div className="p-3 flex-1 flex flex-col justify-between text-[9px] leading-relaxed text-slate-300">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">$</span>
            <span>npm i <span className="text-cyan-400">{cleanTitle.toLowerCase()}</span></span>
          </div>

          <AnimatePresence mode="popLayout">
            {step >= 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-slate-500 text-[8px]"
              >
                + installing: {tech.slice(0, 3).join(', ').toLowerCase()}...
              </motion.div>
            )}
            
            {step >= 2 && (
              <motion.div 
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-500 font-semibold"
              >
                ✔ success: installed all packages
              </motion.div>
            )}

            {step >= 3 && (
              <motion.div 
                initial={{ opacity: 0, y: 2 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-slate-400 flex items-center gap-1"
              >
                <FiPlay className="w-2.5 h-2.5 text-cyan-400 animate-pulse" /> Running app dashboard...
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic bottom status bar */}
        <div className="flex justify-between items-center border-t border-slate-900 pt-1.5 text-[8px] text-slate-500 font-mono mt-1">
          <div className="flex items-center gap-1">
            <FiActivity className="w-2.5 h-2.5 text-violet-500" />
            <span>sys: active</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiCode className="w-2.5 h-2.5" />
            <span>utf-8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
