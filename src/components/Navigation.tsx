import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Solutions', path: '/solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToContact = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-0 h-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
  <img 
    src="/mckh (2).png" 
    alt="MCKH" 
    className="h-24 w-auto object-contain"
  />
</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.path) ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className="btn-pill btn-primary hidden md:block"
        >
          Start your AI journey
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-glass-border">
          <div className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                scrollToContact();
                setIsOpen(false);
              }}
              className="btn-pill btn-primary w-full mt-4"
            >
              Start your AI journey
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;