import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold">Ready to bring your story to life?</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary. We're here to help you every step of the way, from concept to final delivery.
        </p>
        <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/portal/projects">Create Your Project Now</Link>
        </Button>
      </div>
    </section>
  );
}
