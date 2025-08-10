import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import VenueMap from "@/components/VenueMap";
import Wishes from "@/components/Wishes";

const Index = () => {
  useEffect(() => {
    const title = "Arya & Vishal | Romantic Wedding Invitation – 31 Aug 2025";
    const desc = "Celebrate Arya & Vishal's wedding on 31 Aug 2025 in Guruvayur, Kerala. View invitation, timeline, gallery, venue map, and send your wishes.";
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", desc);
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Arya & Vishal Wedding',
    startDate: '2025-08-31T00:00:00+05:30',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: 'Balakrishna Residency',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Guruvayur',
        addressRegion: 'Thrissur',
        addressCountry: 'IN'
      }
    },
    image: [window.location.origin + '/og-wedding.jpg'],
    description: "Celebrate Arya & Vishal's wedding in Guruvayur, Kerala.",
  };

  return (
    <>
      <main>
        <HeroSection />
        <Timeline />
        <Gallery />
        <VenueMap />
        <Wishes />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
};

export default Index;
