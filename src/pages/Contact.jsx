import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadership, clubTeams } from '../data/teamMembers';
import { Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';

const Contact = () => {
  const [activeTeam, setActiveTeam] = useState("Startup Facilities");
  const teams = Object.keys(clubTeams);

  return (
    <div className="min-h-screen bg-brand-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-brand-black mb-4">Meet the <span className="text-brand-blue">Force</span></h1>
          <p className="text-brand-darkGrey text-lg">The minds behind the innovation ecosystem.</p>
        </div>

        {/* Leadership Section */}
        <section className="mb-32">
          <h2 className="text-2xl font-bold text-brand-black mb-12 text-center flex items-center justify-center gap-3">
            <span className="h-[2px] w-12 bg-brand-yellow"></span>
            Leadership
            <span className="h-[2px] w-12 bg-brand-yellow"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-[2rem] shadow-xl border border-brand-grey flex items-center gap-6"
              >
                <img src={leader.image} alt={leader.name} className="w-32 h-32 rounded-2xl object-cover shadow-inner" />
                <div>
                  <h3 className="text-xl font-bold text-brand-black">{leader.name}</h3>
                  <p className="text-brand-blue font-semibold text-sm mb-1">{leader.role}</p>
                  <p className="text-brand-darkGrey text-xs mb-4">{leader.dept}</p>
                  <a href={leader.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-brand-black text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-brand-blue transition-colors">
                    <Linkedin size={14} /> Profile
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Strip Navigation */}
        <section>
          <div className="bg-brand-black rounded-2xl p-2 mb-12 flex flex-wrap justify-center gap-2 shadow-2xl overflow-hidden">
            {teams.map((team) => (
              <button
                key={team}
                onClick={() => setActiveTeam(team)}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 cursor-pointer ${
                  activeTeam === team 
                  ? "bg-brand-yellow text-brand-black scale-105" 
                  : "text-brand-white hover:bg-white/10"
                }`}
              >
                {team}
              </button>
            ))}
          </div>

          {/* Dynamic Team Members Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="wait">
              {clubTeams[activeTeam].map((member, idx) => (
                <motion.div
                  key={`${activeTeam}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-brand-grey rounded-3xl p-5 shadow-md hover:shadow-2xl transition-all group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img src={member.image} alt={member.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <a href={member.linkedin} className="bg-brand-white p-2 rounded-lg text-brand-blue hover:bg-brand-yellow hover:text-brand-black transition-colors">
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-brand-black leading-tight">{member.name}</h4>
                  <p className="text-brand-blue text-xs font-bold uppercase tracking-wider mt-1">{member.position}</p>
                  <div className="mt-4 pt-4 border-t border-brand-grey flex items-center gap-2 text-brand-darkGrey text-xs font-medium">
                    <Briefcase size={14} /> {member.dept}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact;