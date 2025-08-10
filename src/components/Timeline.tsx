import React from "react";
import { Heart, CalendarCheck, PartyPopper, Sparkles } from "lucide-react";

const events = [
  {
    title: "First Chat",
    description:
      "Arya and Vishal started chatting online, beginning their beautiful journey together with endless conversations and shared dreams.",
    icon: Sparkles,
    when: "June 30, 2024",
  },
  {
    title: "First Met",
    description:
      "They met for the first time at Lulu Mall, Lucknow. It was a magical moment that marked the beginning of their love story.",
    icon: CalendarCheck,
    when: "July 14, 2024",
  },
  {
    title: "First Date",
    description:
      "Their first official date was filled with laughter, joy, and the realization that they had found something truly special in each other.",
    icon: Heart,
    when: "September 13, 2024",
  },
  {
    title: "The Engagement",
    description:
      "Vishal proposed to Arya in a beautiful ceremony surrounded by family and friends. They said YES to forever!",
    icon: PartyPopper,
    when: "December 22, 2024",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Our Journey</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
        <ol className="space-y-10">
          {events.map((e, idx) => {
            const Icon = e.icon;
            return (
              <li key={e.title} className="relative grid md:grid-cols-2 gap-6 items-start animate-fade-in">
                <div className="hidden md:block" />
                <div className="flex items-start gap-4">
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 mt-2 h-3 w-3 rounded-full bg-[hsl(var(--primary))] shadow-[var(--shadow-glow)]" />
                  <div className="rounded-lg border bg-card p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-1">
                      <Icon className="text-[hsl(var(--primary))]" />
                      <h3 className="text-xl font-medium">{e.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{e.description}</p>
                    <div className="mt-2 text-xs text-muted-foreground">{e.when}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
