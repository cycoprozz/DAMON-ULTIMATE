import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Carib Life ATL",
    description: "Capturing the vibrant energy of Atlanta's annual Caribbean Carnival.",
    imageUrl: "/images/portfolio-carib-life-atl.jpg",
    link: "/productions/carib-life-atl",
  },
  {
    title: "Countdown",
    description: "Highlighting the intense drama of dancehall sound clash competitions.",
    imageUrl: "/images/portfolio-countdown.jpg",
    link: "/productions/countdown",
  },
  {
    title: "Artist Exclusives",
    description: "Intimate interviews and features with your favorite Caribbean artists.",
    imageUrl: "/images/portfolio-exclusives.jpg",
    link: "/productions/exclusives",
  },
];

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Work</h2>
          <p className="text-muted-foreground mt-2">A glimpse into the stories we've brought to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link href={project.link} key={project.title}>
              <Card className="overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-colors" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground mt-1">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
