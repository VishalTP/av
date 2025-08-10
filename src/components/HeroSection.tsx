import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import heroImage from "@/assets/av-2.jpeg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Fireflies from "@/components/Fireflies";

const weddingDate = new Date("2025-08-31T00:00:00+05:30");

const HeroSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-[88vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Romantic portrait of Arya and Vishal, wedding couple"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      <Fireflies />

      <div className="relative z-10 container max-w-4xl mx-auto text-center space-y-8 px-4 animate-enter">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Arya & Vishal
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Are Getting Married
        </p>
        <div className="max-w-2xl mx-auto">
          <Countdown target={weddingDate} />
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="hero" size="xl" className="hover-scale">
              View Invitation
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="sr-only">Wedding Invitation</DialogTitle>
            </DialogHeader>
            <Card className="bg-card/80 backdrop-blur border border-[hsl(var(--primary))/0.2] shadow-[var(--shadow-elegant)]">
              <CardHeader className="text-center">
                <CardDescription className="uppercase tracking-wide">YOU'RE INVITED TO</CardDescription>
                <CardTitle className="text-3xl md:text-4xl">The Wedding</CardTitle>
                <div className="text-sm text-muted-foreground">of</div>
                <div className="text-2xl md:text-3xl font-semibold mt-1">Arya & Vishal</div>
              </CardHeader>
              <CardContent className="space-y-2 text-center">
                <div className="text-lg">Saturday, August 31, 2025</div>
                <div className="text-lg">10:00 AM</div>
                <div className="text-base">Balakrishna Auditorium</div>
                <div className="text-base">Guruvayur, Trissur, Kerala</div>
                <p className="pt-2 text-sm italic text-muted-foreground">"Two souls, one heart, joined together in love"</p>
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default HeroSection;
