import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  isComingSoon?: boolean;
  className?: string;
  onDemoClick?: () => void;
}

const ProductCard = ({ title, description, isComingSoon = false, className = '', onDemoClick }: ProductCardProps) => {
  const handleCTA = () => {
    if (isComingSoon) {
      // Handle "Notify Me" logic here
      alert('Thank you for your interest! We\'ll notify you when it\'s ready.');
    } else {
      // Use the passed onDemoClick function if available, otherwise fallback to original logic
      if (onDemoClick) {
        onDemoClick();
      } else {
        // Fallback: Scroll to contact or redirect
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.href = '/contact';
        }
      }
    }
  };

  return (
    <div className={`glass-card glass-hover rounded-lg p-6 transition-all duration-300 w-full md:w-[360px] min-h-[280px] flex flex-col group animate-fade-in relative overflow-hidden ${className}`}>
      {/* Pulse animation for featured products */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-lighter/10 to-primary-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
          {title}
          {isComingSoon && (
            <span className="ml-2 text-xs bg-primary-lighter text-primary px-2 py-1 rounded-full font-medium">
              Coming Soon
            </span>
          )}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
          {description}
        </p>
        
        <button
          onClick={handleCTA}
          className="btn-pill btn-primary flex items-center justify-center gap-2 w-full group-hover:gap-3 transition-all duration-300"
        >
          {isComingSoon ? 'Notify Me' : 'Book Your Demo'}
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;