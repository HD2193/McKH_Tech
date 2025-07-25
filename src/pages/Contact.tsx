import { useState } from 'react';
import { Mail, Calendar, MessageSquare, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: ''
      });
    }, 3000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-grid">
      {/* Header */}
      <section className="py-16 px-6 text-center relative">
        <div className="max-w-4xl mx-auto animate-fade-in relative z-10">
          {/* Subtle background glow */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-3xl"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Your journey to AI excellence starts here.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At MCKH, we blend research, design, and cutting-edge AI technology to solve real business challenges. Whether you're starting or scaling, we're ready to help you create your next AI breakthrough.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="w-full lg:w-1/2">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="glass-card rounded-lg p-8 relative overflow-hidden">
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
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Let's Connect</h2>
                {Object.values(formData).some(value => value.trim() !== '') && (
                  <button
                    onClick={resetForm}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    title="Clear form"
                  >
                    <X size={20} className="text-muted-foreground" />
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-glass-border focus:border-primary focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-primary/20 resize-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pill btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Start your AI journey'
                  )}
                </button>
              </form>
              </div>
            </div>
          </div>

          {/* Contact Info & Additional Options */}
          <div className="space-y-8 animate-slide-up">

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;