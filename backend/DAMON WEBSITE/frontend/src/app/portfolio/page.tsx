import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Productions - Carib Life Media",
  description: "Explore our portfolio of authentic Caribbean cultural programming and Black cultural content.",
};

const portfolioItems = [
  {
    id: 1,
    title: "Carib Life ATL",
    category: "Reality TV Series",
    description: "Brings Caribbean culture to life by capturing annual Caribbean Carnival planning, band launches, special performances of Atlanta's annual Caribbean Carnival.",
    image: "/images/portfolio/carib-life-atl-logo.webp",
    duration: "Series",
    client: "Carib Life Media"
  },
  {
    id: 2,
    title: "Countdown",
    category: "Documentary Series",
    description: "Highlights amazing stories of win and defeat from dancehall reggae sound clash competitions.",
    image: "/images/portfolio/countdown-logo.webp",
    duration: "Series",
    client: "Carib Life Media"
  },
  {
    id: 3,
    title: "Exclusives",
    category: "News Features",
    description: "You don't want to miss these news features of exclusive Caribbean events! Tune in to follow the stories of some of your favorite Caribbean artists & influencers.",
    image: "/images/portfolio/exclusives-logo.webp",
    duration: "Ongoing",
    client: "Carib Life Media"
  },
  {
    id: 4,
    title: "Band Launch on Carib Life ATL",
    category: "Reality TV",
    description: "Take quick peek to what's coming up next on Episode 3 of Carib Life ATL!",
    image: "/images/portfolio/carib-life-atl-logo.webp",
    duration: "Episode 3",
    client: "Carib Life ATL"
  },
  {
    id: 5,
    title: "CountDown DC vs VA Teaser (DC Shoot out series)",
    category: "Documentary",
    description: "Which sound has what it takes to win at sound clash?",
    image: "/images/portfolio/countdown-logo.webp",
    duration: "Teaser",
    client: "Countdown Series"
  },
  {
    id: 6,
    title: "Caribbean Artist Features",
    category: "Artist Promotion",
    description: "Featuring world-class talent such as Morgan Heritage Family, Spice, D'Angel, Edley Shine, Pressure Buss Pipe, Bachannal Boys, and media personalities like Red Carpet Shelly.",
    image: "/images/portfolio/exclusives-logo.webp",
    duration: "Various",
    client: "Caribbean Artists"
  }
];

// Function to get the learn more URL for each portfolio item
const getLearnMoreUrl = (item: typeof portfolioItems[0]) => {
  switch (item.title) {
    case "Carib Life ATL":
    case "Band Launch on Carib Life ATL":
      return "/productions/carib-life-atl";
    case "Countdown":
    case "CountDown DC vs VA Teaser (DC Shoot out series)":
      return "/productions/countdown";
    case "Exclusives":
    case "Caribbean Artist Features":
      return "/productions/exclusives";
    default:
      return "/portfolio";
  }
};

export default function PortfolioPage() {
  return (
    <div className="relative isolate">
      {/* Caribbean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-red-50 to-green-50 opacity-60"></div>
      
      <div className="relative z-10 container mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg">
              🎬 Our Award-Winning Productions
            </span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent mb-6">
            Our Productions
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            From captivating documentaries to groundbreaking reality television series, our portfolio exemplifies a fusion of <span className="text-red-600 font-bold">innovation</span>, <span className="text-yellow-600 font-bold">integrity</span>, and <span className="text-green-600 font-bold">cultural resonance</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-gradient-to-r hover:from-yellow-400 hover:via-red-500 hover:to-green-500">
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {item.duration}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">{item.title}</CardTitle>
                  <span className="text-xs bg-gradient-to-r from-yellow-100 via-red-100 to-green-100 text-gray-800 px-3 py-1 rounded-full font-semibold">
                    {item.category}
                  </span>
                </div>
                <CardDescription className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-xs text-gray-500 font-medium">
                    <strong>Production:</strong> {item.client}
                  </p>
                  <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 rounded-full"></div>
                </div>
                
                {/* Learn More Button */}
                <Link
                  href={getLearnMoreUrl(item)}
                  className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 px-6 py-3 text-sm font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <span className="relative z-10">Learn More</span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-red-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Distribution Channels */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent mb-4">
              Where to Watch Us
            </h2>
            <p className="text-lg text-gray-600">Experience authentic Caribbean programming across multiple platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 hover:border-yellow-400">
              <CardHeader>
                <div className="text-4xl mb-3">📺</div>
                <CardTitle className="text-xl text-gray-900">Roku TV, FireStick, Apple TV</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Coming soon to all major streaming platforms...</p>
                <div className="mt-3 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full"></div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 hover:border-red-400">
              <CardHeader>
                <div className="text-4xl mb-3">📱</div>
                <CardTitle className="text-xl text-gray-900">Carib Life Media App</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Exclusive mobile experience launching soon...</p>
                <div className="mt-3 w-full h-1 bg-gradient-to-r from-red-400 to-green-400 rounded-full"></div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 hover:border-green-400">
              <CardHeader>
                <div className="text-4xl mb-3">🎬</div>
                <CardTitle className="text-xl text-gray-900">Carib Life Media YouTube</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Subscribe now for exclusive content and behind-the-scenes footage!</p>
                <div className="mt-3 w-full h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-20 bg-gradient-to-br from-yellow-50 via-red-50 to-green-50 rounded-2xl p-12 border-2 border-gradient-to-r from-yellow-200 via-red-200 to-green-200">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Let's discuss how we can help bring your vision to life with our professional video production and media services that showcase <span className="text-green-600 font-bold">Caribbean culture</span> and <span className="text-red-600 font-bold">Black excellence</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🎬 Get in Touch
            </a>
            <a
              href="/services"
              className="border-2 border-gradient-to-r from-yellow-400 via-red-500 to-green-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:via-red-50 hover:to-green-50 transition-all duration-300"
            >
              📋 View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 