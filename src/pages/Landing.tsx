import { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle, AlertCircle, X } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://rtdgyhmkrynptopdplme.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0ZGd5aG1rcnlucHRvcGRwbG1lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE3NzMsImV4cCI6MjA2OTAwNzc3M30.2k07jolqQ-IqgV1vVgMCrE4tBTMYi8l0c6IK7Iz4dtA';
const supabase = createClient(supabaseUrl, supabaseKey);

const Landing = () => {
  // Form state management
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    // Check required fields
    if (!formData.fullName.trim()) {
      throw new Error('Full name is required');
    }
    if (!formData.email.trim()) {
      throw new Error('Email is required');
    }
    if (!formData.message.trim()) {
      throw new Error('Message is required');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      throw new Error('Please enter a valid email address');
    }

    // Name validation (no numbers or special characters)
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(formData.fullName.trim())) {
      throw new Error('Full name should only contain letters and spaces');
    }

    // Message length validation
    if (formData.message.trim().length < 10) {
      throw new Error('Message should be at least 10 characters long');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    console.log('🚀 Form submission started');
    console.log('📝 Form data:', formData);
    
    try {
      // Validate form data
      validateForm();

      const insertData = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        company: formData.company.trim() || null,
        message: formData.message.trim(),
        created_at: new Date().toISOString()
      };

      console.log('📤 Sending to Supabase:', insertData);
      
      // Insert data into Supabase
      const { data, error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([insertData])
        .select();

      console.log('📥 Supabase response:', { data, error: supabaseError });

      if (supabaseError) {
        console.error('❌ Supabase error details:', {
          message: supabaseError.message,
          details: supabaseError.details,
          hint: supabaseError.hint,
          code: supabaseError.code
        });
        
        // Handle specific Supabase errors
        if (supabaseError.code === '23505') {
          throw new Error('This email has already been used to submit a form recently');
        } else if (supabaseError.code === '42501') {
          throw new Error('Database permission error. Please contact support.');
        } else {
          throw new Error(`Database error: ${supabaseError.message}`);
        }
      }

      console.log('✅ Data inserted successfully:', data);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          company: '',
          message: ''
        });
      }, 5000);

    } catch (err) {
      console.error('💥 Error saving contact form:', err);
      const errorMessage = err.message || 'Unknown error occurred';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
      console.log('🏁 Form submission ended');
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      message: ''
    });
    setError('');
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
      description: "Custom-built AI to your team, goals, and services."
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
              className="h-48"
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

      {/* Contact Section - Enhanced with Supabase Integration */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your journey to AI excellence starts here.
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            At MCKH, we blend research, design, and cutting-edge AI technology to solve real business challenges. Whether you're starting or scaling, we're ready to help you create your next AI breakthrough.
          </p>
          
          <div className="glass-card rounded-lg p-8 max-w-lg mx-auto relative overflow-hidden">
            {/* Floating glass bubbles background */}
            <div className="absolute inset-0 -z-10 opacity-30">
              <div className="absolute top-4 right-8 w-16 h-16 bg-white/10 rounded-full blur-sm float-slow"></div>
              <div className="absolute bottom-8 left-6 w-12 h-12 bg-primary/10 rounded-full blur-sm float-medium delay-500"></div>
              <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-primary-light/10 rounded-full blur-sm float-slow delay-1000"></div>
            </div>

            {/* Success Overlay */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                <div className="text-center animate-scale-in">
                  <CheckCircle size={64} className="text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </div>
              </div>
            )}

            {/* Form Header with Reset Button */}
            {Object.values(formData).some(value => value.trim() !== '') && (
              <div className="flex items-center justify-end mb-4">
                <button
                  onClick={resetForm}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  title="Clear form"
                >
                  <X size={20} className="text-muted-foreground" />
                </button>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
                {formData.message && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {formData.message.length}/500 characters (minimum 10)
                  </div>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="btn-pill btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Sent Successfully!
                  </>
                ) : (
                  'Start your AI journey'
                )}
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-glass-border text-center">
              <p className="text-muted-foreground mb-2">Or reach us directly:</p>
              <a
                href="mailto:contact@mckhtech.com"
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