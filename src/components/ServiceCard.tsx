interface ServiceCardProps {
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ title, description, className = '' }: ServiceCardProps) => {
  return (
    <div className={`glass-card glass-hover rounded-lg p-6 transition-all duration-300 w-full md:w-80 min-h-[280px] flex flex-col animate-fade-in ${className}`}>
      <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;