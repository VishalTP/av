import React, { useEffect, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Wish {
  id: string;
  name: string;
  message: string;
  at: number;
}

const Wishes: React.FC = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>([]);

useEffect(() => {
  const raw = localStorage.getItem("wishes");
  if (raw) {
    setWishes(JSON.parse(raw));
  } else {
    const presets = [
      { name: "Jain", message: "Wishing you both a lifetime of love and happiness! Can't wait to celebrate with you." },
      { name: "Farheen", message: "So excited for your special day! You two are perfect for each other." },
      { name: "Aysha", message: "Congratulations! May your marriage be filled with endless joy and beautiful moments." },
      { name: "Ishu", message: "Best wishes for a wonderful wedding and an even more wonderful marriage!" },
      { name: "Shanu", message: "May your love story continue to inspire everyone around you. Congratulations!" },
      { name: "Philip", message: "Wishing you both all the happiness in the world on your special day!" },
    ].map((p) => ({
      id: crypto.randomUUID(),
      name: p.name,
      message: p.message,
      at: Date.now(),
    }));
    setWishes(presets);
  }
}, []);

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const newWish: Wish = { id: crypto.randomUUID(), name: name.trim(), message: message.trim(), at: Date.now() };
    setWishes((prev) => [newWish, ...prev]);
    setName("");
    setMessage("");
    toast({ title: "Thank you!", description: "Your wish has been sent." });
  };

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Send Your Wishes</h2>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Share your blessings</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Your name"
              />
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Your message"
                rows={5}
              />
              <Button type="submit" variant="hero" className="hover-scale">Send Wish</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {wishes.length === 0 ? (
            <div className="rounded-lg border bg-card p-6 text-center text-muted-foreground">
              Be the first to send your wishes to Arya and Vishal!
            </div>
          ) : (
            wishes.map((w) => (
              <Card key={w.id} className="shadow-sm animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex items-baseline justify-between">
                    <div className="font-medium">{w.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(w.at).toLocaleString()}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-foreground/90">{w.message}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Wishes;
