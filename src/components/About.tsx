import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Target, Zap, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We believe AI should empower businesses to reach their full potential.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Staying at the forefront of AI technology to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to meet your unique business needs and goals.'
    }
  ];

  const achievements = [
    '5+ Years of AI Expertise',
    'Certified AI Specialists',
    'Enterprise-Grade Security',
    'Global Client Base',
    'Award-Winning Solutions',
    '24/7 Technical Support'
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-medium text-accent">About Fourbits</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading the <span className="text-gradient">AI Revolution</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              At Fourbits, we're passionate about transforming businesses through the power of artificial intelligence. 
              Our team of expert developers and AI specialists work tirelessly to create innovative solutions that 
              drive growth, efficiency, and success.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              From smart chatbots that enhance customer experience to advanced analytics that unlock business 
              insights, we're your trusted partner in the digital transformation journey.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{achievement}</span>
                </div>
              ))}
            </div>

            <Button variant="gradient" size="lg">
              Partner With Us
            </Button>
          </div>

          {/* Values Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="p-6 hover-lift bg-gradient-card border-border/50"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Stats Card */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground glow-primary">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm opacity-90">AI Solutions Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">150+</div>
                  <div className="text-sm opacity-90">Happy Clients</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;