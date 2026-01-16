import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Send, Lightbulb, Loader2 } from 'lucide-react';

const Ideas = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    degree: '',
    department: '',
    year: '',
    rollNumber: '',
    collegeEmail: '',
    personalEmail: '',
    phone: '+91 ', // Default prefix with a space for clarity
    idea: ''
  });

  // const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxxvT9GmA9baFpjnVYEwbDGeOxR9_RlTfiz7r1DZBUswB6462OAn1SqcE64XXs791g9bw/exec";
  // const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;
  const SCRIPT_URL =" https://script.google.com/macros/s/AKfycbwu5xvd0iexJ1wv_d8Ekv1Bfjjkdf3XErI9g2pH7ufEPrYekpNtW1BJ7JfLeVa-F6NkwA/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate College Email Domain
    if (!formData.collegeEmail.endsWith('@student.nitw.ac.in')) {
      alert("Please use your official college email ending with @student.nitw.ac.in");
      return;
    }

    // 2. Validate Phone Number Length (10 digits excluding +91)
    const rawPhone = formData.phone.replace('+91 ', '').replace(/\s/g, '');
    if (rawPhone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
      setFormData({
        name: '', degree: '', department: '', year: '', 
        rollNumber: '', collegeEmail: '', personalEmail: '', 
        phone: '+91 ', // Reset to default prefix
        idea: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Prevent user from deleting the +91 prefix
      if (!value.startsWith('+91 ')) {
        setFormData({ ...formData, phone: '+91 ' });
      } else {
        // Only allow numbers after the prefix and limit to 10 digits
        const numberPart = value.slice(4).replace(/\D/g, '');
        if (numberPart.length <= 10) {
          setFormData({ ...formData, phone: `+91 ${numberPart}` });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen bg-brand-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          {/* <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-block p-3 bg-brand-yellow rounded-2xl mb-4">
            <Lightbulb size={32} className="text-brand-black" />
          </motion.div> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4"> Pitch Your <span className="text-brand-blue">Startup Idea</span></h1>
          <p className="text-brand-darkGrey text-lg">Submit your vision. If it has potential, we'll provide the garage to build it.</p>
        </div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-brand-grey">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">Full Name</label>
                <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">Degree Type</label>
                <select required name="degree" value={formData.degree} onChange={handleChange} className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none">
                  <option value="">Select Degree</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                  <option value="PhD">Ph.D</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">Department</label>
                <select required name="department" value={formData.department} onChange={handleChange} className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none">
                  <option value="">Select Department</option>
                  <option value="CSE">Computer Science</option>
                  <option value="ECE">Electronics</option>
                  <option value="ME">Mechanical</option>
                  <option value="IT">Information Technology</option>
                  <option value="MGMT">Management</option>
                </select>
              </div>

              {/* Year Field: Min 1, Max 5 */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">Year (1-5)</label>
                <input required name="year" value={formData.year} onChange={handleChange} type="number" placeholder="e.g. 3" min="1" max="5" className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">Roll Number</label>
                <input required name="rollNumber" value={formData.rollNumber} onChange={handleChange} type="text" placeholder="21BCE001" className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none" />
              </div>

              {/* Phone Number Field with +91 logic */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">Phone Number</label>
                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none font-mono" />
              </div>

              {/* College Email with native pattern validation */}
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">College Email ID</label>
                <input required name="collegeEmail" value={formData.collegeEmail} onChange={handleChange} type="email" placeholder="roll_no@student.nitw.ac.in" pattern=".+@student\.nitw\.ac\.in" title="Please use @student.nitw.ac.in domain" className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm text-brand-black text-left">Personal Email ID</label>
                <input required name="personalEmail" value={formData.personalEmail} onChange={handleChange} type="email" placeholder="john.doe@gmail.com" className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-brand-black text-left">Your Idea (Detailed)</label>
              <textarea required name="idea" value={formData.idea} onChange={handleChange} rows="5" placeholder="Explain the problem you're solving..." className="p-3 bg-brand-grey rounded-xl focus:ring-2 focus:ring-brand-blue outline-none border-none resize-none"></textarea>
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-brand-black text-brand-white py-4 rounded-xl font-bold text-lg hover:bg-brand-blue transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70">
              {isLoading ? <Loader2 className="animate-spin" /> : <>Submit Idea <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
            </button>
          </form>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsSubmitted(false)} className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-brand-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border-t-8 border-brand-yellow">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"> <CheckCircle size={48} /> </div>
              <h3 className="text-2xl font-bold text-brand-black mb-2">Submitted Successfully</h3>
              <p className="text-brand-darkGrey mb-8">Your idea and contact details are now in our Google Sheet. We'll reach out soon!</p>
              <button onClick={() => setIsSubmitted(false)} className="w-full bg-brand-blue text-white py-3 rounded-xl font-bold hover:bg-brand-black transition-colors">Close</button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Ideas;