
import { useState } from "react";
import { Send, Mail, Github, Linkedin, MessageCircle, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_6zao7o9',
        'template_rkjfuri',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Tusharkanta Behera',
        },
        'jmvv5dISNrnxNo-Cb'
      );
      
      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300">Let's discuss your next project</p>
        </div>

        {/* New Funky Layout - Mobile First */}
        <div className="space-y-8">
          {/* Contact Form Card */}
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/20 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-2xl text-green-400 text-center">
                ✨ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-2xl text-red-400 text-center">
                ❌ Failed to send message. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Email Card */}
            <div className="group bg-gradient-to-br from-red-500/10 to-pink-500/10 backdrop-blur-lg border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 hover:bg-red-500/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <a 
                href="mailto:tusharkantabehera85@gmail.com?subject=Portfolio%20Contact&body=Hi%20Tusharkanta,%0D%0A%0D%0AI%20would%20like%20to%20discuss..." 
                className="block text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">Email</h4>
                <p className="text-gray-300 text-sm break-all">
                  tusharkantabehera85@gmail.com
                </p>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="group bg-gradient-to-br from-gray-600/10 to-gray-800/10 backdrop-blur-lg border border-gray-600/20 rounded-2xl p-6 hover:border-gray-500/40 hover:bg-gray-600/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <a 
                href="https://github.com/tusharkanta-behera" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">GitHub</h4>
                <p className="text-gray-300 text-sm break-all">
                  github.com/tusharkanta-behera
                </p>
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="group bg-gradient-to-br from-blue-600/10 to-blue-800/10 backdrop-blur-lg border border-blue-600/20 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-blue-600/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <a 
                href="https://linkedin.com/in/tusharkanta-behera/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">LinkedIn</h4>
                <p className="text-gray-300 text-sm break-all">
                  linkedin.com/in/tusharkanta-behera/
                </p>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-500/40 hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/40 hover:bg-cyan-500/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm sm:text-base">Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
