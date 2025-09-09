import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface BookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceTitle?: string;
}

const BookingForm = ({ open, onOpenChange, serviceTitle }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    meetingTime: '',
    service: serviceTitle || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you'll need to set up your EmailJS account)
      await emailjs.send(
        'service_fourbits', // Service ID (to be configured)
        'template_booking', // Template ID (to be configured)
        {
          to_email: 'devxaifa@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          service: formData.service,
          meeting_time: formData.meetingTime,
          message: `New booking request for ${formData.service}\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPreferred Meeting Time: ${formData.meetingTime}`
        },
        'your_public_key' // Public key (to be configured)
      );

      toast({
        title: "Booking Request Sent!",
        description: "We'll contact you shortly to confirm your meeting time.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        meetingTime: '',
        service: serviceTitle || ''
      });
      onOpenChange(false);
    } catch (error) {
      console.error('Failed to send booking request:', error);
      toast({
        title: "Error",
        description: "Failed to send booking request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-card border-border/50">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Book a Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {serviceTitle && (
            <div className="bg-primary/10 rounded-lg p-3 mb-4">
              <p className="text-sm text-primary font-medium">Service: {serviceTitle}</p>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="meetingTime" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Preferred Meeting Time
            </Label>
            <Input
              id="meetingTime"
              name="meetingTime"
              type="datetime-local"
              value={formData.meetingTime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="gradient" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Request
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;