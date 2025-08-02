import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary">Carib Life Media™</h3>
            <p className="mt-2 text-muted-foreground">
              Founded by Damon "Bware" Vanzant, we are a premier production company dedicated to Black cultural programming.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link href="/#portfolio" className="text-muted-foreground hover:text-primary">Our Work</Link></li>
              <li><Link href="/portal" className="text-muted-foreground hover:text-primary">Client Portal</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex mt-2 space-x-4">
              <Link href="https://www.facebook.com/CariblifeMedia-109094338383101" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/cariblifemedia/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCc4brQmhoP6OECcxMStFKLA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              1445 Woodmont Ln NW #537<br />
              Atlanta, GA 30318-2866<br />
              <a href="mailto:info@cariblifemedia.com" className="hover:text-primary">info@cariblifemedia.com</a><br/>
              <a href="tel:240-244-9427" className="hover:text-primary">240-244-9427</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>Copyright © {new Date().getFullYear()} Carib Life Media™ - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
