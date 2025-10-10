"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const facts = [
  {
    question: "What does emotional wellbeing actually mean?",
    answer:
      "Emotional wellbeing is about feeling balanced, connected, and capable of navigating life's ups and downs. It's not about being happy all the time—it's about having the tools to process your emotions, maintain healthy relationships, and find meaning in your experiences. It's the foundation that helps you weather storms and celebrate joys.",
  },
  {
    question: "How do I know if I need support?",
    answer:
      "If you're asking this question, it's worth exploring. Common signs include feeling overwhelmed, disconnected, or stuck; changes in sleep or appetite; difficulty concentrating; or simply feeling like something is \"off.\" You don't need to be in crisis to seek support. Therapy is for anyone who wants to understand themselves better and live more fully.",
  },
  {
    question: "What is anxiety, really?",
    answer:
      "Anxiety is your mind's way of trying to protect you from perceived threats. It's a natural response, but sometimes it becomes overactive, creating worry about things that may never happen. About 1 in 4 people experience anxiety at some point. It's not weakness—it's your nervous system working overtime, and it can be gently recalibrated.",
  },
  {
    question: "Why is it so hard to ask for help?",
    answer:
      "We're often taught to be self-sufficient, to \"handle it\" on our own. Asking for help can feel like admitting defeat or being a burden. But seeking support is actually one of the bravest things you can do. It takes strength to be vulnerable, to acknowledge you don't have all the answers, and to trust someone else with your story.",
  },
  {
    question: "What's the difference between sadness and depression?",
    answer:
      "Sadness is a natural emotion that comes and goes in response to life events. Depression is more persistent—it's a heavy fog that doesn't lift, affecting your energy, motivation, sleep, and sense of self-worth. If sadness lasts for weeks, interferes with daily life, or feels overwhelming, it may be depression, and professional support can help.",
  },
  {
    question: "How long does healing take?",
    answer:
      "Healing isn't linear, and there's no set timeline. Some people feel relief after a few sessions; others need months or years. What matters is that you're moving forward, even if progress feels slow. Small shifts compound over time. The goal isn't to \"fix\" yourself quickly—it's to build lasting understanding and resilience.",
  },
];

export function FactsTips() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Understanding Yourself
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-pretty">
            Questions you might be asking
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors"
              >
                <span className="font-medium text-foreground pr-4 text-pretty">
                  {fact.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-foreground/60 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 md:px-8 pb-5 md:pb-6 pt-2">
                  <p className="text-foreground/70 leading-relaxed text-pretty border-l-2 border-primary pl-4">
                    {fact.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
