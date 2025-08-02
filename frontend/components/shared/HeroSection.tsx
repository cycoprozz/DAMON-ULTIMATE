import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        src="https://cdn.coverr.co/videos/coverr-a-dj-at-a-party-with-a-smoke-machine-304/1080p.mp4" 
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10"></div>
      <div className="z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Your Vision, Captured.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          Streamlined video production and digital content management for creators and brands. We are a premier full-service television production and media company dedicated to curating a rich tapestry of Black cultural programming.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/portal/projects">Start Your Project</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/portal">Client Login</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
