import { useEffect, useState, useRef } from 'react';

export default function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const missionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (missionRef.current) {
      observer.observe(missionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="mission" className="py-16 md:py-24 bg-white w-full" ref={missionRef}>
      <div className="container-custom">
        <div 
          className={`w-full text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-primary rounded-full text-sm font-medium mb-4">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make news simple, personal, and clear.
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Built for Gen Z. Designed for clarity. We believe everyone deserves to understand 
            what's happening in the world without feeling overwhelmed or confused.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-16 text-left mt-12 w-full">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Why we built QuickScope</h3>
              <p className="text-gray-600">
                We were tired of doom-scrolling through headlines and feeling anxious without 
                actually understanding what matters. So we built an app that cuts through 
                the noise and explains the news in a way that's personalized to you.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Who we're building for</h3>
              <p className="text-gray-600">
                For people who want to stay informed but don't have time to read multiple 
                articles or watch hour-long news segments. For those who want to understand 
                not just what happened, but why it matters to them personally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 