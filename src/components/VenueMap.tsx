import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Globe, ExternalLink } from "lucide-react";

const VenueMap: React.FC = () => {
  const gmapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Balakrishna%20Residency%2C%20Guruvayur%2C%20Trissur%2C%20Kerala";

  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Venue Details</h2>
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border bg-card p-6 md:p-8 shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="mt-1 text-[hsl(var(--primary))]">
              <MapPin className="h-6 w-6" aria-hidden />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-medium leading-tight">Balakrishna Residency</h3>
              <p className="text-sm md:text-base text-muted-foreground">Guruvayur, Trissur, Kerala</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 text-[hsl(var(--primary))]" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Ceremony Time</div>
                <div className="font-medium">10:00 AM</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 mt-0.5 text-[hsl(var(--primary))]" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Venue Contact</div>
                <a href="tel:04872550088" className="font-medium underline-offset-4 hover:underline">
                  0487 255 0088
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 mt-0.5 text-[hsl(var(--primary))]" aria-hidden />
              <div>
                <div className="text-sm text-muted-foreground">Website</div>
                <a
                  href="http://balakrishnarecidency.com"
                  target="_blank"
                  rel="nofollow noopener"
                  className="font-medium underline-offset-4 hover:underline"
                >
                  balakrishnarecidency.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button asChild variant="secondary" size="sm" className="hover-scale">
              <a href={gmapsUrl} target="_blank" rel="nofollow noopener" aria-label="Open Google Maps to view venue location">
                View on Google Maps
                <ExternalLink className="ml-2 h-4 w-4" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;
