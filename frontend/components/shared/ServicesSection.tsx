import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Film, Music, Clapperboard, Mic, Tv, PartyPopper } from "lucide-react";

const services = [
  {
    icon: <Film className="w-12 h-12 text-primary" />,
    title: "Reality TV",
    description: "Captivating unscripted series that capture raw, authentic moments.",
  },
  {
    icon: <Clapperboard className="w-12 h-12 text-primary" />,
    title: "Documentaries",
    description: "In-depth, compelling storytelling that informs and inspires.",
  },
  {
    icon: <Music className="w-12 h-12 text-primary" />,
    title: "Music Videos",
    description: "Visually stunning videos that bring your music to life.",
  },
  {
    icon: <Mic className="w-12 h-12 text-primary" />,
    title: "Interviews",
    description: "Professionally produced interviews for artists, brands, and influencers.",
  },
  {
    icon: <Tv className="w-12 h-12 text-primary" />,
    title: "Digital Content",
    description: "Engaging content optimized for social media and digital platforms.",
  },
  {
    icon: <PartyPopper className="w-12 h-12 text-primary" />,
    title: "Event Coverage",
    description: "Comprehensive coverage of your events, from concerts to festivals.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">What We Do</h2>
          <p className="text-muted-foreground mt-2">We develop proprietary content and promotional materials for the Diaspora market.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit">
                  {service.icon}
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
