import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'devxaifa@gmail.com',
      action: 'mailto:devxaifa@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Remote Team Worldwide',
      action: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how our AI solutions can accelerate your growth and drive innovation in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-border/50 animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="p-6 hover-lift bg-gradient-card border-border/50">
                  <a href={info.action} className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="p-6 bg-gradient-card border-border/50">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-primary" />
                  </a>
                ))}
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground glow-primary">
              <h4 className="font-semibold mb-2">Ready to Get Started?</h4>
              <p className="text-sm opacity-90 mb-4">
                Schedule a free consultation to discuss your AI project requirements.
              </p>
              <Button variant="secondary" size="sm">
                Book Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;