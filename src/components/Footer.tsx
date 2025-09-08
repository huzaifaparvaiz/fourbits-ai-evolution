import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const navigation = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'AI Chatbots', href: '#services' },
      { name: 'Web Integrations', href: '#services' },
      { name: 'App Development', href: '#services' },
      { name: 'Digital Marketing', href: '#services' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Documentation', href: '#docs' },
      { name: 'Support', href: '#support' }
    ]
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-bold text-gradient">Fourbits</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering businesses with cutting-edge AI solutions that drive growth, 
              efficiency, and innovation in the digital age.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:devxaifa@gmail.com" className="hover:text-primary transition-colors">
                  devxaifa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Remote Team Worldwide</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground text-sm">
                Get the latest insights on AI trends and business growth strategies.
              </p>
            </div>
            <div className="flex gap-4 max-w-md lg:ml-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-muted border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gradient" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Fourbits. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;