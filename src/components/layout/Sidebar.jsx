// import React from 'react';
// import { Link } from 'react-router-dom';
// import { X, Rocket } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Sidebar = ({ isOpen, setIsOpen }) => {
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Register Idea', path: '/ideas' },
//     { name: 'Events', path: '/events' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop Blur Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-brand-black/40 backdrop-blur-sm z-[60]"
//           />

//           {/* Sidebar Content - Dark Glassmorphism */}
//           <motion.div
//             initial={{ x: '-100%' }} // Slides in from the left
//             animate={{ x: 0 }}
//             exit={{ x: '-100%' }}
//             transition={{ type: 'spring', damping: 25, stiffness: 150}}
//             className="fixed left-0 top-0 h-full w-80 z-[70] p-8 
//                        bg-brand-black/70 backdrop-blur-xl border-r border-white/10 shadow-2xl"
//           >
//             {/* Close Button on Top Left */}
//             <div className="flex justify-start mb-12">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 text-brand-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
//               >
//                 <X size={32} />
//               </button>
//             </div>

//             {/* Navigation Links */}
//             <div className="flex flex-col gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsOpen(false)}
//                   className="text-2xl font-bold text-brand-white hover:text-brand-yellow transition-colors flex items-center justify-between group"
//                 >
//                   {link.name}
//                   <motion.span 
//                     className="w-0 h-1 bg-brand-blue group-hover:w-12 transition-all duration-300" 
//                   />
//                 </Link>
//               ))}
//             </div>

//             {/* Sidebar Footer Accent */}
//             <div className="absolute bottom-10 left-8 border-l-2 border-brand-yellow pl-4">
//               <div className="flex items-center gap-2 text-brand-blue mb-1">
//                 <Rocket size={18} />
//                 <span className="text-xs font-black uppercase tracking-widest text-brand-white">IG Garage</span>
//               </div>
//               <p className="text-[10px] text-gray-400">Innovation through collaboration.</p>
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Register Idea', path: '/ideas' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-brand-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar Content - Right Aligned with Dark Glassmorphism */}
          <motion.div
            initial={{ x: '100%' }} // Now slides in from the RIGHT
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 z-[70] p-8 
                       bg-brand-black/80 backdrop-blur-2xl border-l border-white/10 shadow-2xl"
          >
            {/* Close Button on Top RIGHT */}
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-brand-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-8 text-right">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-brand-white hover:text-brand-yellow transition-colors flex flex-row-reverse items-center justify-between group"
                >
                  {link.name}
                  <motion.span 
                    className="w-0 h-1 bg-brand-blue group-hover:w-12 transition-all duration-300" 
                  />
                </Link>
              ))}
            </div>

            {/* Sidebar Footer Accent */}
            <div className="absolute bottom-10 right-8 border-r-2 border-brand-yellow pr-4 text-right">
              <div className="flex items-center justify-end gap-2 text-brand-blue mb-1">
                <span className="text-xs font-black uppercase tracking-widest text-brand-white">Innovation Garage</span>
                <Rocket size={18} />
              </div>
              <p className="text-[10px] text-gray-400">Innovation through collaboration.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;