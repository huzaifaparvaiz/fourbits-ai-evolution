import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bot, Globe, Smartphone, TrendingUp, Share2, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Learning Algorithms']
    },
    {
      icon: Globe,
      title: 'AI Website Integrations',
      description: 'Seamlessly integrate AI capabilities into your existing website infrastructure.',
      features: ['Custom API Development', 'Real-time Analytics', 'Smart Automation']
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Build powerful mobile and web applications with AI-driven features.',
      features: ['Cross-platform Apps', 'AI-powered Features', 'Scalable Architecture']
    },
    {
      icon: TrendingUp,
      title: 'Digital Advertising',
      description: 'Optimize your Facebook and Google Ads campaigns with AI-driven strategies.',
      features: ['Performance Analytics', 'Automated Bidding', 'Conversion Optimization']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Enhance your social media presence with AI-powered content and strategy.',
      features: ['Content Generation', 'Audience Analysis', 'Engagement Optimization']
    },
    {
      icon: Palette,
      title: 'Design & Branding',
      description: 'Create stunning visuals and brand identity with AI-assisted design tools.',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intelligent chatbots to advanced analytics, we deliver cutting-edge technology that transforms your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="p-8 hover-lift bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="sm" className="w-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gradient" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;