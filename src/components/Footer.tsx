import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-nav border-t border-glass-border py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo and Email */}
          <div className="text-center md:text-left">
            <div className="font-bold text-2xl text-foreground mb-2">MCKH</div>
            <a
              href="mailto:contact@mckh.tech"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              contact@mckh.tech
            </a>
          </div>

          {/* Middle - Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              to="/solutions"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Solutions
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              to="/products"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right - Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.linkedin.com/company/mckhtech/ "
              className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary-lighter/20 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/mckhtech"
              className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary-lighter/20 rounded-lg"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            {/* <a
              href="#"
              className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-primary-lighter/20 rounded-lg"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-glass-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MCKH. All rights reserved. Building the future with AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;