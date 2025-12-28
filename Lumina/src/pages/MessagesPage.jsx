import React, { useState } from 'react';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-white px-4 font-sans">
      {/* Brand Header */}
      <div className="flex items-center gap-2 mb-8">
       
      
      </div>

      {/* Main Content */}
      <div className="max-w-xl text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Coming Soon
        </h1>
        
        {/* Yellow Accent Divider */}
        <div className="w-16 h-1.5 bg-[#fdd835] mx-auto rounded-full mb-8"></div>
        
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          We're currently working on something big. Our new Messages feature
          is almost ready. Stay tuned for a better healthcare experience.
        </p>

        

          
        </div>
      </div>

      
      
  
  );
};

export default ComingSoon;