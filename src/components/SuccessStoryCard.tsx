import { TrendingUp, Rocket } from 'lucide-react';

interface SuccessStoryCardProps {
  company: string;
  outcome: string;
  className?: string;
}

const SuccessStoryCard = ({ company, outcome, className = '' }: SuccessStoryCardProps) => {
  const getIcon = (company: string) => {
    switch (company) {
      case 'UNI 360':
        return <Rocket size={20} className="text-primary" />;
      case 'KBGP':
        return <TrendingUp size={20} className="text-primary" />;
      default:
        return <Rocket size={20} className="text-primary" />;
    }
  };

  return (
    <div className={`glass-card glass-hover rounded-lg p-6 transition-all duration-300 w-80 md:w-96 min-h-[200px] flex flex-col animate-slide-up ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {getIcon(company)}
        <span className="bg-primary-lighter text-primary px-3 py-1 rounded-full text-sm font-medium">
          {company}
        </span>
      </div>
      
      <p className="text-foreground leading-relaxed flex-grow text-lg">
        "{outcome}"
      </p>
    </div>
  );
};

export default SuccessStoryCard;