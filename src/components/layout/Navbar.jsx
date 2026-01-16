import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu on click
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Register Idea', path: '/ideas' },
    { name: 'Events', path: '/events' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/85 backdrop-blur-md border-b border-brand-lavender/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="size-10 bg-brand-magenta rounded-full flex items-center justify-center border border-brand-lavender shadow-[0_0_10px_rgba(224,170,255,0.5)] overflow-hidden">
             {/* Using the ROBUST dynamic path we fixed */}
             <img 
               src={`${import.meta.env.BASE_URL}ig_logo_shubhama._git.png`} 
               alt="IG Logo" 
               className="w-full h-full object-contain p-1"
               onError={(e) => { e.target.style.display = 'none'; }} 
             />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-xl font-bold tracking-tighter font-funky leading-none">
              INNOVATION
            </span>
            <span className="text-brand-orange text-sm font-pixel tracking-widest leading-none">
              GARAGE
            </span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 px-2 py-1 rounded-full border border-brand-lavender/30">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              className="px-5 py-2 rounded-full text-gray-200 hover:bg-brand-lavender hover:text-brand-black text-sm font-bold font-display uppercase tracking-wide transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-lavender p-2">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-brand-black border-b border-brand-lavender/30 p-6 flex flex-col gap-4 shadow-neon">
           {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path}
              onClick={closeMenu}
              className="text-xl font-pixel text-white hover:text-brand-orange uppercase tracking-widest border-l-2 border-transparent hover:border-brand-magenta pl-4 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, Rocket } from 'lucide-react';
// import Sidebar from './Sidebar';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Register Idea', path: '/ideas' },
//     { name: 'Events', path: '/events' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   return (
//     <>
//       <nav className="fixed top-0 w-full z-50 bg-brand-white/80 backdrop-blur-xl border-b border-brand-grey shadow-sm">
//         <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
//           {/* LEFT SECTION: Logo and Horizontal Links */}
//           <div className="flex items-center gap-10">
//             {/* Logo Section */}
//             <Link to="/" className="flex items-center gap-2 group shrink-0">
//               <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white ">
//                 {/* <img src='src\assets\logos\iglogo_shubhama_git.png'/>  ---- remove the comment of this line when the site is on localhost - for on system debugging/development */}
//                 <img src={`${import.meta.env.VITE_SCRIPT_URL}iglogo_shubhama_git.png`} alt="IG logo" className='w-full h-full object-contain'/>  
//                 {/* comment the above line if running the site on localhost */}
//               </div>
//               <span className="text-xl font-black tracking-tighter text-brand-black">
//                 INNOVATION <span className="text-brand-blue font-light">GARAGE</span>
//               </span>
//             </Link>

//             {/* Desktop Links: Visible above lg breakpoint (~1024px / roughly 60%+) */}
//             <div className="hidden lg:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className="text-l font-semibold text-brand-black hover:text-brand-blue transition-colors relative group"
//                 >
//                   {link.name}
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-yellow transition-all duration-350 group-hover:w-full" />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT SECTION: Menu Button (Hidden on wide screens) */}
//           <div className="lg:hidden">
//             <button 
//               onClick={() => setIsOpen(true)}
//               className="p-2 hover:bg-brand-grey rounded-full transition-colors cursor-pointer flex items-center justify-center"
//             >
//               <Menu size={32} className="text-brand-black" />
//             </button>
//           </div>

//         </div>
//       </nav>

//       {/* Sidebar Component */}
//       <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
//     </>
//   );
// };

// export default Navbar;