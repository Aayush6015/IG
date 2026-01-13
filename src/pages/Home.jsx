import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import { ArrowRight, Lightbulb, Users, Target } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    // Navigates to events page with the specific event ID as a hash for auto-scroll
    navigate(`/events#${eventId}`);
  };

  return (
    <div className="bg-brand-white pt-20">
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Placeholder for Building Image */}
        <div 
          className="absolute inset-0 bg-brand-black/60 z-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920')", // Replace with IG Building
            // backgroundImage: "url('data:image/jpeg;base64,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')", // Replace with IG Building
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-brand-white mb-6"
          >
            Where Ideas <span className="text-brand-yellow">Fuel</span> Action.
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 italic font-light"
          >
            "The only way to discover the limits of the possible is to go beyond them into the impossible."
          </motion.p>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 border-l-8 border-brand-blue pl-6 text-brand-black">
              Mission & History
            </h2>
            <p className="text-lg text-brand-darkGrey leading-relaxed mb-6">
              Founded in [Year], <strong>Innovation Garage</strong> was established to bridge the gap between academic theory and entrepreneurial reality. We provide a sanctuary for "misfits" and "dreamers" to build something that matters.
            </p>
            <p className="text-lg text-brand-darkGrey leading-relaxed">
              Our mission is to nurture a robust startup ecosystem within the college by providing mentorship, resources, and a network of industry leaders to guide student-led ventures from concept to market.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-8 bg-brand-grey rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="text-brand-yellow mb-4" size={32} />
              <h4 className="font-bold text-xl">Innovate</h4>
            </div>
            <div className="p-8 bg-brand-blue text-white rounded-2xl shadow-sm">
              <Users className="mb-4" size={32} />
              <h4 className="font-bold text-xl">Collaborate</h4>
            </div>
            <div className="col-span-2 p-8 border-2 border-dashed border-brand-blue rounded-2xl flex items-center justify-between">
              <div>
                <Target className="text-brand-blue mb-2" size={32} />
                <h4 className="font-bold text-xl">Incubate</h4>
              </div>
              <ArrowRight className="text-brand-grey" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sliding Event Cards Section */}
      <section className="py-15 bg-brand-grey/90 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold text-brand-black mb-2">Moments at the Garage</h2>
            <p className="text-brand-darkGrey">Slide through our journey of innovation</p>
          </div>
        </div>

        {/* Horizontal Slider container */}
        <div className="flex gap-8 px-6 pb-12 overflow-x-auto no-scrollbar snap-x">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -10 }}
              onClick={() => handleEventClick(event.id)}
              className="min-w-[300px] md:min-w-[400px] bg-brand-white rounded-3xl overflow-hidden shadow-lg cursor-pointer snap-center border border-transparent hover:border-brand-blue/30 transition-all"
            >
              <div className="h-56 relative">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-brand-yellow px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {event.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-brand-black">{event.name}</h3>
                <p className="text-sm text-brand-darkGrey line-clamp-2">{event.highlights}</p>
                <div className="mt-4 flex items-center text-brand-blue font-semibold text-sm">
                  View Details <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;