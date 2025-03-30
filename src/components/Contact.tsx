import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);


    // EmailJS configuration
    const serviceId = "service_47hbsxf"; // Replace with your EmailJS service ID
    const templateId = "template_4m32gaz"; // Replace with your EmailJS template ID
    const userId = "ectnI-lq7USleqg_k"; // Replace with your EmailJS user ID

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-foreground/80 mb-8 max-w-md">
              Feel free to reach out to me for collaboration, job opportunities, or just to say hello. I'm always open to discussing new projects or ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple/10 mr-4">
                  <Mail className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/70">Email</h4>
                  <a href="mailto:contact@example.com" className="text-lg font-medium hover:text-purple transition-colors">
                    greeshmanthpokuru@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple/10 mr-4">
                  <Phone className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/70">Phone</h4>
                  <a href="tel:+11234567890" className="text-lg font-medium hover:text-purple transition-colors">
                    +91 8639496493
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple/10 mr-4">
                  <MapPin className="w-5 h-5 text-purple" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground/70">Location</h4>
                  <p className="text-lg font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/greeshmanth27" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-purple/10 hover:bg-purple hover:text-white transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/greeshmanth-pokuru-9774121aa/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-purple/10 hover:bg-purple hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/Greeshmanth27" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-purple/10 hover:bg-purple hover:text-white transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card1 p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="contact-input"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="contact-input"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="contact-input resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full flex justify-center items-center gap-2"
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
