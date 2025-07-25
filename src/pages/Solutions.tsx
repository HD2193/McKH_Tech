import { useState, useEffect } from 'react';
import { Bot, Database, Workflow, Code } from 'lucide-react';

const Solutions = () => {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const secondSection = document.getElementById('second-section');
      if (secondSection) {
        const secondSectionTop = secondSection.offsetTop;
        setStickyVisible(scrolled > secondSectionTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  const solutions = [
    {
      id: 'conversational-ai',
      icon: <Bot size={48} className="text-primary" />,
      title: 'Conversational AI',
      subtitle: 'Boost customer interaction with real-time conversational agents.',
      description: 'Transform your customer experience with intelligent chatbots and virtual assistants that understand context, maintain conversation flow, and provide personalized responses. Our AI agents learn from every interaction to continuously improve their performance.',
      features: [
        'Natural language processing and understanding',
        'Multi-channel deployment (web, mobile, voice)',
        'Integration with existing CRM and business systems',
        'Real-time analytics and conversation insights',
        'Customizable personality and brand voice'
      ]
    },
    {
      id: 'rag-systems',
      icon: <Database size={48} className="text-primary" />,
      title: 'Data-Aware RAG Systems',
      subtitle: 'Let your AI learn from your documents, past interactions, and product data.',
      description: 'Harness the power of your organization\'s knowledge with Retrieval-Augmented Generation systems that provide accurate, contextual answers based on your specific data sources. Perfect for internal knowledge management and customer support.',
      features: [
        'Document ingestion and vectorization',
        'Real-time data synchronization',
        'Multi-source knowledge integration',
        'Contextual answer generation',
        'Source attribution and transparency'
      ]
    },
    {
      id: 'workflow-automation',
      icon: <Workflow size={48} className="text-primary" />,
      title: 'Agentic Workflow Automation',
      subtitle: 'Set up autonomous systems that intelligently manage business tasks.',
      description: 'Create intelligent workflows that can make decisions, adapt to changing conditions, and execute complex business processes autonomously. Our agentic systems learn from patterns and optimize themselves over time.',
      features: [
        'Intelligent decision-making capabilities',
        'Dynamic workflow adaptation',
        'Multi-system integration and orchestration',
        'Performance monitoring and optimization',
        'Exception handling and escalation'
      ]
    },
    {
      id: 'ai-development',
      icon: <Code size={48} className="text-primary" />,
      title: 'AI-Powered Development',
      subtitle: 'Web and mobile applications built to think like your best employee.',
      description: 'Develop applications with AI intelligence baked in from the ground up. From predictive interfaces to automated content generation, we create software that anticipates user needs and streamlines workflows.',
      features: [
        'AI-first architecture and design',
        'Predictive user interfaces',
        'Automated content and code generation',
        'Smart data processing and insights',
        'Scalable cloud-native deployment'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-neural">
      {/* Sticky CTA */}
      {stickyVisible && (
        <div className="fixed bottom-6 right-6 z-40 animate-slide-up">
          <div className="glass-card rounded-lg p-4 shadow-lg">
            <p className="text-sm text-foreground mb-3 font-medium">
              Let's build your AI future together.
            </p>
            <button
              onClick={scrollToContact}
              className="btn-pill btn-primary w-full text-sm"
            >
              Start your AI journey
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="py-16 px-6 text-center relative">
        <div className="max-w-4xl mx-auto animate-fade-in relative z-10">
          {/* Background tech elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl float-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary-light/5 rounded-full blur-2xl float-medium delay-1000"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Tailored AI solutions that fit your workflow.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't just build AI tools – we create intelligent systems that integrate seamlessly with your existing processes and grow with your business.
          </p>
        </div>
      </section>

      {/* Solutions Sections */}
      <div className="space-y-0">
        {solutions.map((solution, index) => (
          <section
            key={solution.id}
            id={index === 1 ? 'second-section' : undefined}
            className={`py-20 px-6 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/20'}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className="flex-1 animate-fade-in">
                  <div className="mb-6">
                    {solution.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-xl text-primary mb-6 font-medium">
                    {solution.subtitle}
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 flex justify-center animate-slide-up">
                  <div className="glass-card rounded-lg p-12 w-full max-w-md text-center">
                    <div className="mb-6">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {solution.title}
                    </h3>
                    <div className="space-y-3">
                      {solution.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-primary-lighter/20 rounded-lg p-3">
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-primary-lighter/10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to transform your business with AI?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every great AI transformation starts with a conversation. Let's discuss how our solutions can work for you.
          </p>
          <button
            onClick={scrollToContact}
            className="btn-pill btn-primary text-lg px-8 py-4"
          >
            Start your AI journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;