import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-white to-indigo-50 w-full">
      <div className="container-custom">
        <div className="text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-opacity duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            News that finally makes sense.
          </h1>
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-8 transition-opacity duration-700 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Swipe through today's headlines. Ask questions. Actually get it.
          </p>
          <div 
            className={`transition-opacity duration-700 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <a href="#waitlist" className="btn btn-primary text-lg">
              Get Early Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 