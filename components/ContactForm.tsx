import React, { useState } from 'react';
import { MailIcon } from './Icons';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, just open email client with pre-filled data
      const mailtoLink = `mailto:yossishor30@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="Yossi Shor"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                placeholder="Project Inquiry / Collaboration"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-400 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">✗ Something went wrong. Please try again.</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-600 rounded-lg hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <MailIcon className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <a 
                href="mailto:yossishor30@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all duration-200 glass-panel rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 focus:ring-offset-dark-900"
              >
                <MailIcon className="w-5 h-5" />
                Direct Email
              </a>
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-slate-400 text-sm mb-4">Or connect with me on:</p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/yossishor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/yosshor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

