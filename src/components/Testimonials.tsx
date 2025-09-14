import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CEO, TechStart Inc.",
      image: "/assests/1.jpg",
      rating: 5,
      testimonial: "Greeshmanth delivered an exceptional full-stack web application that transformed our business operations. The attention to detail and performance optimization was outstanding.",
      workType: "Full-Stack Web Development",
      proof: [
        "40% increase in user engagement",
        "99.9% uptime achieved",
        "3-week delivery timeline met"
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "CTO, DataFlow Solutions",
      image: "/assests/2.jpg",
      rating: 5,
      testimonial: "The React application built by Greeshmanth exceeded our expectations. Clean code, responsive design, and seamless user experience across all devices.",
      workType: "React Frontend Development",
      proof: [
        "50% faster load times",
        "Mobile-responsive design",
        "100% client satisfaction"
      ]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      title: "Product Manager, InnovateLab",
      image: "/assests/3.jpg",
      rating: 5,
      testimonial: "Greeshmanth's expertise in modern web technologies helped us launch our product ahead of schedule. The API integration was flawless and the dashboard is intuitive.",
      workType: "API Integration & Dashboard",
      proof: [
        "2 weeks ahead of deadline",
        "Zero post-launch bugs",
        "Real-time data visualization"
      ]
    },
    {
      id: 4,
      name: "David Kim",
      title: "Founder, EcommerceHub",
      image: "/assests/4.jpg",
      rating: 5,
      testimonial: "The e-commerce platform built by Greeshmanth has been a game-changer for our business. Secure payment integration and smooth checkout process.",
      workType: "E-commerce Development",
      proof: [
        "30% increase in conversions",
        "PCI DSS compliant payments",
        "Multi-currency support"
      ]
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What clients say about my work and the results we've achieved together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Header with image and basic info */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Work Type Badge */}
                <Badge variant="secondary" className="mb-4">
                  {testimonial.workType}
                </Badge>

                {/* Testimonial Text */}
                <blockquote className="text-foreground/90 italic mb-4 leading-relaxed">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Proof Section */}
                <div className="space-y-2">
                  <h5 className="font-medium text-sm text-foreground">Results Achieved:</h5>
                  <ul className="space-y-1">
                    {testimonial.proof.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;