import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          Carib Life Media™
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="/#portfolio" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Our Work
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Contact
          </Link>
          <Button asChild variant="outline">
            <Link href="/portal">Client Login</Link>
          </Button>
          <Button asChild>
            <Link href="/portal/projects">Start a Project</Link>
          </Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 py-6">
              <Link href="/" className="text-lg font-semibold text-primary">
                Carib Life Media™
              </Link>
              <Link href="/#services" className="text-base text-muted-foreground hover:text-primary">
                Services
              </Link>
              <Link href="/#portfolio" className="text-base text-muted-foreground hover:text-primary">
                Our Work
              </Link>
              <Link href="/contact" className="text-base text-muted-foreground hover:text-primary">
                Contact
              </Link>
              <div className="grid gap-2 mt-4">
                <Button asChild>
                  <Link href="/portal">Client Login</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/portal/projects">Start a Project</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
