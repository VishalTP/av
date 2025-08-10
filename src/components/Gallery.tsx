import React from "react";
import g1 from "@/assets/g1.jpeg";
import g2 from "@/assets/g2.jpeg";
import g3 from "@/assets/g3.jpeg";
import g4 from "@/assets/g4.jpeg";
import g5 from "@/assets/g5.jpeg";
import g6 from "@/assets/g6.jpeg";
import g7 from "@/assets/g7.jpeg";
import g8 from "@/assets/g8.jpeg";
import g9 from "@/assets/g9.jpeg";

const images = [
  { src: g4, alt: "Candid couple moment at dusk" },
  { src: g1, alt: "Close-up of engagement ring on hands" },
  { src: g2, alt: "Romantic engagement portrait" },
  { src: g3, alt: "Rings on velvet box with petals" },
  { src: g5, alt: "Bride bouquet with ring detail" },
  { src: g6, alt: "Couple silhouette with sunset glow" },
  { src: g7, alt: "Couple silhouette with sunset glow" },
  { src: g8, alt: "Couple silhouette with sunset glow" },
  { src: g9, alt: "Couple silhouette with sunset glow" },
];

const Gallery: React.FC = () => {
  return (
    <section className="container py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">Engagement Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((img, i) => (
          <figure
            key={i}
            className="overflow-hidden rounded-lg border bg-card shadow-sm hover-scale animate-fade-in"
          >
            <img
              src={img.src}
              alt={`${img.alt} — Arya & Vishal engagement photo`}
              className="w-full h-56 md:h-64 object-cover"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
