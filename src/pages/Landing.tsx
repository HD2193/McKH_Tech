import { ArrowRight, ChevronDown } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import SuccessStoryCard from '../components/SuccessStoryCard';

const Landing = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "Multi Modal AI Agents",
      description: "Intelligent workflows that help you adopt AI in your business to increase productivity, cut costs, and boost revenue."
    },
    {
      title: "Context-Aware RAG Systems", 
      description: "Retrieval-Augmented Generation systems trained on your knowledge-base for precise answers."
    },
    {
      title: "Workflow Automation",
      description: "Integrate agent-based systems that act, learn, and evolve with your business processes."
    },
    {
      title: "AI at the Core of Your Product",
      description: "Build next-gen web & mobile apps with AI deeply embedded from Day 1."
    },
    {
      title: "Design's For Future",
      description: "UI/UX systems that complement and elevate AI-based product workflows."
    },
    {
      title: "Solutions Built Around You",
      description: "Custom-built AI  to your team, goals, and services."
    }
  ];

  const successStories = [
    {
      company: "UNI 360",
      outcome: "Accelerated onboarding and smarter student journey powered by AI."
    },
    {
      company: "KBGP", 
      outcome: "Transformed dealer dashboard with real-time AI layout suggestions and smart actions."
    }
  ];

  return (
    <div className="min-h-screen bg-hexgrid">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 min-h-screen flex items-center justify-center relative bg-hexgrid">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            We are the solution to your{' '}
            <span className="text-primary">AI transformation</span>.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            From custom software to real-time AI agents, we've got you covered.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-pill btn-primary text-lg px-8 py-4 inline-flex items-center gap-3 group"
          >
           Get Free AI Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-lighter/20 rounded-full blur-3xl animate-pulse float-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl animate-pulse delay-1000 float-medium"></div>
          <div className="absolute top-1/2 right-1/6 w-32 h-32 bg-primary/10 rounded-full blur-2xl pulse-glow"></div>
          <div className="absolute bottom-1/3 left-1/6 w-24 h-24 bg-primary-light/15 rounded-full blur-xl float-slow delay-500"></div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-muted-foreground" />
        </div>
      </section>
      {/* Recognised By */}
<section className="py-16 px-6 bg-secondary/30">
  <div className="max-w-4xl mx-auto text-center animate-fade-in">
    <p className="text-xl text-muted-foreground mb-8">
      Recognised By
    </p>
    <div className="flex items-center justify-center">
      <img 
        src="public/RecongnisedBy.png" 
        alt="Recognition Logo" 
        className="h-60"
      />
    </div>
  </div>
</section>

      {/* Trusted Companies */}
      <section className="py-16 px-6 bg-secondary/30">
  <div className="max-w-4xl mx-auto text-center animate-fade-in">
    <p className="text-xl text-muted-foreground mb-8">
      Trusted by forward-thinking companies
    </p>
    <div className="flex items-center justify-between max-w-4xl mx-auto">
      <div className="text-4xl md:text-5xl font-bold text-gunmetal ml-8">
        UNI 360°
      </div>
      <img 
        src="public/kgbp.jpeg" 
        alt="Kitchen and Bath Global Partners" 
        className="h-20 md:h-24 ml-32"
      />
    </div>
  </div>
</section>

      {/* What We Do */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Do
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                className={`delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your journey to AI excellence starts here.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            At MCKH, we blend research, design, and cutting-edge AI technology to solve real business challenges. Whether you're starting or scaling, we're ready to help you create your next AI breakthrough.
          </p>
          
          <div className="glass-card rounded-lg p-8 max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-pill btn-primary w-full text-lg py-4"
              >
                Start your AI journey
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-glass-border text-center">
              <p className="text-muted-foreground mb-2">Or reach us directly:</p>
              <a
                href="mailto:contact@mckh.tech"
                className="text-primary hover:text-primary-light transition-colors"
              >
                contact@mckhtech.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;