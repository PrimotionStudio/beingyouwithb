"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Lock } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactMethod: "email",
    bestTime: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/peaceful-water-ripples-calm-abstract.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Let's Begin This Journey Together
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Taking the first step is often the hardest. Whether you're ready to
            book a session or just have questions, I'm here to listen.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">What should I call you?</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="First name"
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your email address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="email@example.com"
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number (optional)</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="If you prefer a call back"
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">What brought you here today?</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Share as much or as little as you're comfortable with..."
                rows={5}
                className="resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactMethod">Preferred contact method</Label>
                <Select
                  value={formData.contactMethod}
                  onValueChange={(value) =>
                    setFormData({ ...formData, contactMethod: value })
                  }
                >
                  <SelectTrigger className="w-full px-3 h-12 rounded-lg border border-input">
                    <SelectValue placeholder="Select contact method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                    <SelectItem value="either">Either is fine</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bestTime">Best time to reach you</Label>
                <Select
                  value={formData.bestTime}
                  onValueChange={(value) =>
                    setFormData({ ...formData, bestTime: value })
                  }
                >
                  <SelectTrigger className="w-full px-3 h-12 rounded-lg border border-input">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg rounded-full"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-8 p-6 bg-secondary/30 rounded-xl border border-border/50">
            <div className="flex items-start gap-3 mb-4">
              <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground/70 leading-relaxed">
                Your information is confidential and safe. I typically respond
                within 24-48 hours. If you need immediate support, please use
                the crisis resources above.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center space-y-4">
            <p className="text-foreground/70">Or reach out directly:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:hello@beingyouwithb.com"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@beingyouwithb.com</span>
              </a>
              <a
                href="tel:+2348012345678"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+234 801 234 5678</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
