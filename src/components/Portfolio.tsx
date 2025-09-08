import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce AI Assistant',
      description: 'Intelligent shopping assistant that increased conversions by 150% for a major retailer.',
      image: '/api/placeholder/400/250',
      tags: ['AI Chatbot', 'E-commerce', 'Machine Learning'],
      stats: { conversion: '+150%', satisfaction: '98%' },
      category: 'AI Chatbot'
    },
    {
      title: 'Healthcare Analytics Platform',
      description: 'Real-time patient data analysis system serving 50+ medical facilities.',
      image: '/api/placeholder/400/250',
      tags: ['Healthcare', 'Analytics', 'React'],
      stats: { facilities: '50+', efficiency: '+85%' },
      category: 'Web App'
    },
    {
      title: 'Social Media Campaign Optimizer',
      description: 'AI-powered platform that optimizes ad spend and targeting for maximum ROI.',
      image: '/api/placeholder/400/250',
      tags: ['Marketing', 'AI Optimization', 'Analytics'],
      stats: { roi: '+300%', reach: '2M+' },
      category: 'Marketing'
    },
    {
      title: 'Financial Advisory Chatbot',
      description: 'Intelligent financial advisor providing personalized investment recommendations.',
      image: '/api/placeholder/400/250',
      tags: ['Fintech', 'AI Advisor', 'Machine Learning'],
      stats: { users: '10K+', accuracy: '94%' },
      category: 'AI Chatbot'
    },
    {
      title: 'Smart Inventory Management',
      description: 'AI-driven inventory optimization reducing costs by 40% for logistics companies.',
      image: '/api/placeholder/400/250',
      tags: ['Logistics', 'AI Optimization', 'IoT'],
      stats: { savings: '40%', accuracy: '99%' },
      category: 'AI Integration'
    },
    {
      title: 'Voice Assistant Integration',
      description: 'Custom voice AI integration for smart home automation systems.',
      image: '/api/placeholder/400/250',
      tags: ['Voice AI', 'IoT', 'Smart Home'],
      stats: { devices: '1K+', response: '0.3s' },
      category: 'AI Integration'
    }
  ];

  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how we've helped businesses across industries leverage AI to achieve remarkable results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden hover-lift bg-gradient-card border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-muted/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-semibold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-2">Ready to Join Our Success Stories?</h3>
            <p className="text-muted-foreground">
              Let's create something amazing together and achieve outstanding results.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              View More Cases
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;