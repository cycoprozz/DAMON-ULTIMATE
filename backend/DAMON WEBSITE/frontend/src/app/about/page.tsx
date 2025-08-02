import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us - Carib Life Media",
  description: "Learn about Carib Life Media, founded by Damon 'Bware' Vanzant, and our mission to showcase Black cultural programming.",
};

const teamMembers = [
  {
    name: "Damon \"Bware\" Vanzant",
    role: "CEO & Executive Producer",
    bio: "Scion of the esteemed Iyanla Vanzant, renowned best-selling author, speaker, and producer. With an illustrious career spanning over 15 years, Damon has honed his craft as a versatile digital, television, and music producer, boasting an impressive repertoire of projects with industry titans including Essence Music Fest, BET, OWN, A&E, Bravo, and WeTV. Notably, Damon's trailblazing vision birthed the groundbreaking reality television series, 'Carib Life ATL,' heralded as the first authentic portrayal of Black culture on screen.",
    image: "/images/team/damion.svg"
  },
  {
    name: "Carib Life Media Team",
    role: "Production & Marketing Professionals",
    bio: "Our team features highly qualified and experienced marketing, publicity, social media, and production professionals of Caribbean descent that deliver the best quality services in our market. At Carib Life Media, we value teamwork, integrity, creativity, continuous improvement, and pride to represent the culture!",
    image: "/images/team/sarah.svg"
  }
];

const values = [
  {
    title: "Cultural Authenticity",
    description: "We are dedicated to curating a rich tapestry of Black cultural programming that showcases the vibrant narratives of the diverse peoples of the African diaspora.",
    icon: "🌍"
  },
  {
    title: "Innovation & Integrity",
    description: "Our portfolio exemplifies a fusion of innovation, integrity, and cultural resonance that sets the standard for high-quality, impactful content creation.",
    icon: "✨"
  },
  {
    title: "Storytelling Excellence",
    description: "We focus on storytelling that transcends boundaries and resonates with audiences worldwide in the ever-evolving landscape of film and media production.",
    icon: "📖"
  },
  {
    title: "Caribbean Pride",
    description: "We take pride in representing the culture and featuring world-class talent from throughout the Caribbean diaspora.",
    icon: "🏝️"
  }
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero section with Caribbean gradient */}
      <div className="relative pattern-overlay">
        <div className="absolute inset-0 caribbean-gradient opacity-10"></div>
        <div className="container mx-auto py-16 px-4 relative z-10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg">
            🏝️ Founded in 2019 • Authentic Caribbean Culture
          </span>
        </div>
        <h1 className="hero-text bg-gradient-to-r from-yellow-500 via-red-500 to-green-600 bg-clip-text text-transparent mb-8">
          Who We Are
        </h1>
        <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
          Founded in 2019 by visionary producer <span className="text-red-600 font-bold">Damon "Bware" Vanzant</span>, Carib Life Media™ stands as a premier full-service television production and media company dedicated to curating a rich tapestry of <span className="text-green-600 font-bold">Black cultural programming</span>.
        </p>
      </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            With an unwavering commitment to authenticity and excellence, Carib Life Media™ serves as a dynamic platform for showcasing the vibrant narratives of the diverse peoples of the African diaspora.
          </p>
          <p className="text-lg text-gray-600">
            From captivating documentaries to groundbreaking reality television series, our portfolio exemplifies a fusion of innovation, integrity, and cultural resonance. With a keen focus on storytelling that transcends boundaries and resonates with audiences worldwide, Carib Life Media™ sets the standard for high-quality, impactful content creation in the ever-evolving landscape of film and media production.
          </p>
        </div>
        <div className="relative h-96">
          <Image
            src="/images/about/mission.svg"
            alt="Our mission"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* CEO Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our CEO & Executive Producer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-lg font-medium text-gray-700">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">{value.icon}</div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Clients Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Clients & Cast Members</h2>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            At Carib Life Media, we work with artists, businesses, media networks, promoters, and celebrities throughout the Diaspora.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We take pride in featuring world-class talent such as Morgan Heritage Family, Spice, D'Angel, Edley Shine, Pressure Buss Pipe, Bachannal Boys, media personalities such as Red Carpet Shelly, and local artists in our content.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">2019</div>
            <div className="text-gray-600">Founded</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">3</div>
            <div className="text-gray-600">Major Productions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-black mb-2">100%</div>
            <div className="text-gray-600">Cultural Authenticity</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help bring your vision to life with our professional video production and media services that showcase Caribbean culture and Black excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Get Started Today
          </a>
          <a
            href="/portfolio"
            className="border border-black text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  );
} 