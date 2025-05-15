export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-900 text-white w-full">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-2xl font-bold text-white">
              QuickScope
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Simplifying news consumption for the busy modern reader.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#mission" className="text-gray-400 hover:text-white transition-colors">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#waitlist" className="text-gray-400 hover:text-white transition-colors">
                    Join Waitlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex justify-center md:justify-start">
          <p className="text-gray-400">
            © {currentYear} QuickScope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 