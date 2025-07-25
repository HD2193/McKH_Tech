import ProductCard from '../components/ProductCard';
import { Sparkles } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'TradeFather',
      description: 'AI-powered trading decisions that analyze market patterns, risk factors, and historical data to provide intelligent trading recommendations for both novice and experienced traders.',
      isComingSoon: false
    },
    {
      title: 'OpenLove AI',
      description: 'Emotional intelligence platform for relationships that helps couples communicate better, understand emotional patterns, and build stronger connections through AI-guided insights.',
      isComingSoon: false
    },
    {
      title: 'Avatar-Based Content Creator',
      description: 'AI-generated avatars that make content creation instant. Create professional videos, presentations, and social media content with realistic AI avatars in minutes.',
      isComingSoon: false
    },
    {
      title: 'Salesly AI',
      description: 'Sales automation using AI prompts and agents that handle lead qualification, follow-ups, and customer engagement to supercharge your sales pipeline.',
      isComingSoon: false
    },
    {
      title: 'Kisan AI',
      description: 'Agricultural assistant with AI-based crop and disease detection, weather insights, and farming recommendations to help farmers maximize their yield and profits.',
      isComingSoon: false
    },
    {
      title: 'MCP Server',
      description: 'Advanced AI infrastructure platform that provides seamless model deployment, scaling, and management for enterprise AI applications with built-in monitoring and optimization.',
      isComingSoon: true
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-dots">
      {/* Header */}
      <section className="py-16 px-6 text-center relative">
        <div className="max-w-4xl mx-auto animate-fade-in relative z-10">
          {/* Background gradients */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl float-slow"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary-light/5 to-transparent rounded-full blur-2xl float-medium delay-1000"></div>
          </div>
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-primary" size={32} />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our AI-first innovations
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            are already shaping industries.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From trading algorithms to agricultural insights, discover how our AI products are solving real-world problems across diverse sectors. Each solution is built with cutting-edge technology and deep industry expertise.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                isComingSoon={product.isComingSoon}
                className={`delay-${index * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

           

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to experience the future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Whether you're interested in one of our existing products or need something custom-built, we're here to help you harness the power of AI for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/contact'}
              className="btn-pill btn-primary text-lg px-8 py-4"
            >
              Start your AI journey
            </button>
            <button
              onClick={() => window.location.href = '/solutions'}
              className="btn-pill btn-outline text-lg px-8 py-4"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;