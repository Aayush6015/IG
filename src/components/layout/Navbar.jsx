// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, Rocket } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Register Idea', path: '/ideas' },
//     { name: 'Events', path: '/events' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-50 bg-brand-white/80 backdrop-blur-md border-b border-brand-grey shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
//         {/* Logo Section */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white group-hover:bg-brand-yellow transition-colors duration-300">
//             {/* Placeholder for actual Logo */}
//             <Rocket size={24} />
//           </div>
//           <span className="text-xl font-bold tracking-tight text-brand-black">
//             Innovation <span className="text-brand-blue">Garage</span>
//           </span>
//         </Link>

//         {/* Menu Button */}
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="p-2 hover:bg-brand-grey rounded-full transition-colors"
//         >
//           <Menu size={28} className="text-brand-black" />
//         </button>

//         {/* Sidebar Overlay */}
//         <AnimatePresence>
//           {isOpen && (
//             <>
//               {/* Darkened Backdrop */}
//               <motion.div 
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setIsOpen(false)}
//                 className="fixed inset-0 bg-brand-black/40 z-[60]"
//               />
              
//               {/* Sidebar Content */}
//               <motion.div 
//                 initial={{ x: '100%' }}
//                 animate={{ x: 0 }}
//                 exit={{ x: '100%' }}
//                 transition={{ type: 'spring', damping: 25, stiffness: 200 }}
//                 className="fixed right-0 top-0 h-full w-80 bg-white z-[70] shadow-2xl p-8"
//               >
//                 <div className="flex justify-end mb-12">
//                   <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-brand-grey rounded-full">
//                     <X size={28} />
//                   </button>
//                 </div>

//                 <div className="flex flex-col gap-6">
//                   {navLinks.map((link) => (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={() => setIsOpen(false)}
//                       className="text-2xl font-semibold text-brand-black hover:text-brand-blue transition-colors flex items-center justify-between group"
//                     >
//                       {link.name}
//                       <span className="w-0 h-1 bg-brand-yellow group-hover:w-8 transition-all duration-300" />
//                     </Link>
//                   ))}
//                 </div>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, Rocket } from 'lucide-react';
// import Sidebar from './Sidebar'; // Importing the new component

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-0 w-full z-50 bg-brand-white/80 backdrop-blur-xl border-b border-brand-grey shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          
//           {/* 1. Menu Button on the LEFT */}
//           <div className="flex-1">
//             <button 
//               onClick={() => setIsOpen(true)}
//               className="p-2 hover:bg-brand-grey rounded-full transition-colors cursor-pointer flex items-center justify-center"
//             >
//               <Menu size={32} className="text-brand-black" />
//             </button>
//           </div>

//           {/* 2. Logo Section in the CENTER */}
//           <Link to="/" className="flex items-center gap-2 group">
//             <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white group-hover:bg-brand-yellow transition-colors duration-300 shadow-sm">
//               <Rocket size={24} />
//             </div>
//             <span className="text-xl font-black tracking-tighter text-brand-black">
//               INNOVATION <span className="text-brand-blue font-light">GARAGE</span>
//             </span>
//           </Link>

//           {/* 3. Empty spacer for alignment balance */}
//           <div className="flex-1" />

//         </div>
//       </nav>

//       {/* Sidebar Component */}
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Rocket } from 'lucide-react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Register Idea', path: '/ideas' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-brand-white/80 backdrop-blur-xl border-b border-brand-grey shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* LEFT SECTION: Logo and Horizontal Links */}
          <div className="flex items-center gap-10">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white ">
                <img src='src\assets\logos\iglogo_shubhama_git.png'/>
              </div>
              <span className="text-xl font-black tracking-tighter text-brand-black">
                INNOVATION <span className="text-brand-blue font-light">GARAGE</span>
              </span>
            </Link>

            {/* Desktop Links: Visible above lg breakpoint (~1024px / roughly 60%+) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-l font-semibold text-brand-black hover:text-brand-blue transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-350 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION: Menu Button (Hidden on wide screens) */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 hover:bg-brand-grey rounded-full transition-colors cursor-pointer flex items-center justify-center"
            >
              <Menu size={32} className="text-brand-black" />
            </button>
          </div>

        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;