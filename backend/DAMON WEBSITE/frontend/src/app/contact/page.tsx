import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const metadata: Metadata = {
  title: "Contact Us - Carib Life Media",
  description: "Get in touch with Carib Life Media for professional video production and media services.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ready to start your next project? We'd love to hear from you. 
          Let's discuss how we can help bring your vision to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>

                <div>
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video-production">Top Quality Video, Film, & Digital Content Production</SelectItem>
                      <SelectItem value="artist-promotion">Artist & Event Promotion</SelectItem>
                      <SelectItem value="product-advertisement">Product Advertisement</SelectItem>
                      <SelectItem value="carib-life-atl">Carib Life ATL Production</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1000">Under $1,000</SelectItem>
                      <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                      <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                      <SelectItem value="over-10000">Over $10,000</SelectItem>
                      <SelectItem value="discuss">Let's discuss</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Reach out to us through any of these channels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📧</span>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">info@cariblifemedia.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">240-244-9427</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📍</span>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">1445 Woodmont Ln NW #537<br />Atlanta, GA 30318-2866</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
              <CardDescription>
                Stay connected with us on social media
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <span className="sr-only">Facebook</span>
                  📘 Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <span className="sr-only">Instagram</span>
                  📷 Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors">
                  <span className="sr-only">YouTube</span>
                  📺 YouTube
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>What makes Carib Life Media unique?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Founded by Damon "Bware" Vanzant, we specialize in authentic Black cultural programming and Caribbean content. Our productions like "Carib Life ATL" and "Countdown" showcase the vibrant narratives of the African diaspora with innovation, integrity, and cultural resonance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What services do you offer?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We provide top-quality video, film, and digital content production, artist and event promotion for reggae, soca, dancehall, and afrobeats artists, and product advertisement for Caribbean-owned businesses through our internationally aired TV programs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Where can I watch your content?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our content is available on Roku TV, FireStick, Apple TV (coming soon), our Carib Life Media App (coming soon), and our YouTube channel "Carib Life Media" for uploaded content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Do you work with Caribbean artists?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Absolutely! We take pride in featuring world-class talent such as Morgan Heritage Family, Spice, D'Angel, Edley Shine, Pressure Buss Pipe, Bachannal Boys, and media personalities like Red Carpet Shelly in our content.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 