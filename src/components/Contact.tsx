
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    // This would be replaced with actual form submission
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="h-1 w-12 bg-neon-purple mt-4"></div>
          <p className="text-lg text-foreground/70 mt-6 max-w-2xl">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 text-foreground"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 text-foreground resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full button-primary"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="glass-card p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6 text-gradient">Contact Info</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-foreground/60">Email</p>
                <a 
                  href="mailto:raj@example.com" 
                  className="text-lg font-medium text-neon-purple hover:text-neon-blue transition-colors"
                >
                  raj@example.com
                </a>
              </div>
              
              <div>
                <p className="text-sm text-foreground/60">Based in</p>
                <p className="text-lg font-medium">San Francisco, CA</p>
              </div>
              
              <div>
                <p className="text-sm text-foreground/60">Follow me</p>
                <div className="flex gap-4 mt-2">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-neon-purple transition-colors"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-neon-purple transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-neon-purple transition-colors"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-neon-purple/10 to-transparent border border-neon-purple/20">
              <p className="text-foreground/80">
                "I'm currently available for freelance projects and collaborations. Let's create something amazing together!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
