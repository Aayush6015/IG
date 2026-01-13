import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const Events = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  const years = [...new Set(eventsData.map(event => event.year))].sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-brand-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-extrabold text-brand-black mb-4">
            Our <span className="text-brand-blue">Chronicles</span>
          </h1>
          <p className="text-brand-darkGrey text-lg max-w-2xl">
            From late-night builds to global summits. Explore the milestones of 
            Innovation Garage through the years.
          </p>
        </div>

        {/* Year-wise Sections */}
        {years.map((year) => (
          <div key={year} className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold text-brand-black">{year}</h2>
              <div className="h-[2px] flex-grow bg-brand-blue"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventsData
                .filter((event) => event.year === year)
                .map((event) => (
                  <motion.div
                    key={event.id}
                    id={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`group relative bg-white rounded-3xl overflow-hidden border-2 flex flex-col transition-all duration-300 
                      ${hash === `#${event.id}` ? 'border-brand-yellow shadow-2xl scale-[1.02]' : 'border-brand-grey shadow-lg hover:border-brand-blue/50'}`}
                  >
                    {/* Event Image */}
                    <div className="h-52 relative overflow-hidden shrink-0">
                      <img 
                        src={event.image} 
                        alt={event.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white 
                          ${event.status === 'upcoming' ? 'bg-green-500 animate-pulse' : 'bg-brand-black'}`}>
                          {event.status}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-brand-blue mb-3">
                        <Calendar size={16} />
                        <span className="text-sm font-semibold">{event.year}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-brand-black mb-4">{event.name}</h3>
                      
                      <div className="space-y-4 flex-grow">
                        <div className="flex gap-3 items-start bg-brand-grey/50 p-4 rounded-2xl">
                          <div>
                            <p className="text-xs font-bold text-brand-darkGrey uppercase tracking-wide">Highlights</p>
                            <p className="text-sm text-brand-black leading-snug">{event.highlights}</p>
                          </div>
                        </div>
                        
                        <p className="text-brand-darkGrey text-sm leading-relaxed mb-6">
                          {event.description}
                        </p>
                      </div>

                      {/* CONDITIONAL REGISTRATION BUTTON */}
                      {event.status === 'upcoming' && event.registrationLink && (
                        <div className="mt-6">
                          <a 
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-black transition-all duration-300 group/btn"
                          >
                            Register Now
                            <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;