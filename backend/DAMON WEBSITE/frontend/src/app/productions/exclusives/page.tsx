import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Exclusives - Caribbean News Features | Carib Life Media",
  description: "Don't miss our Exclusives - behind-the-scenes news features of exclusive Caribbean events, artist interviews, and cultural stories.",
};

export default function ExclusivesPage() {
  return (
    <div className="relative isolate">
      {/* News/exclusive themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-yellow-900 to-green-900 opacity-10"></div>
      
      <div className="relative z-10 container mx-auto py-12 px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/portfolio" className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors duration-300">
            <span className="mr-2">←</span> Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg">
              ⭐ Exclusive Features
            </span>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 bg-clip-text text-transparent mb-6">
            Exclusives
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            You don't want to miss these <span className="text-red-600 font-bold">exclusive news features</span> of Caribbean events! Follow the stories of your favorite <span className="text-green-600 font-bold">Caribbean artists & influencers</span> with unprecedented access.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/portfolio/exclusives-logo.webp"
                alt="Exclusives - Caribbean News Features"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 text-white px-6 py-3 rounded-full font-bold shadow-xl">
              📺 Breaking News
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  📰 Show Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong className="text-gray-800">Genre:</strong>
                  <span className="ml-2 text-gray-600">News Features, Artist Interviews</span>
                </div>
                <div>
                  <strong className="text-gray-800">Status:</strong>
                  <span className="ml-2 text-green-600 font-semibold">Ongoing Coverage</span>
                </div>
                <div>
                  <strong className="text-gray-800">Production:</strong>
                  <span className="ml-2 text-gray-600">Carib Life Media</span>
                </div>
                <div>
                  <strong className="text-gray-800">Focus:</strong>
                  <span className="ml-2 text-gray-600">Caribbean Artists & Events</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  🎬 What We Cover
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🌟</span>
                    <span>Exclusive Caribbean events and premieres</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3">🎤</span>
                    <span>In-depth artist interviews and profiles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">📸</span>
                    <span>Behind-the-scenes access to cultural events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">🏆</span>
                    <span>Award shows and industry celebrations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Artists Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 bg-clip-text text-transparent text-center mb-12">
            Featured Artists & Personalities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-lg">World-Class Musicians</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Morgan Heritage Family</li>
                  <li>• Spice</li>
                  <li>• D'Angel</li>
                  <li>• Edley Shine</li>
                  <li>• Pressure Buss Pipe</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-lg">Performance Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Bachannal Boys</li>
                  <li>• Cultural Dance Troupes</li>
                  <li>• Steel Pan Orchestras</li>
                  <li>• Carnival Bands</li>
                  <li>• Local Sound Systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-l-green-500">
              <CardHeader>
                <CardTitle className="text-lg">Media Personalities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Red Carpet Shelly</li>
                  <li>• Industry Insiders</li>
                  <li>• Cultural Ambassadors</li>
                  <li>• Event Organizers</li>
                  <li>• Community Leaders</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recent Exclusive Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Caribbean Artist Spotlight</CardTitle>
                <CardDescription>Exclusive interviews and performances</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get up close and personal with the biggest names in Caribbean music as we bring you exclusive interviews, behind-the-scenes footage, and intimate performances.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-gradient-to-r from-red-100 to-yellow-100 px-3 py-1 rounded-full">
                    Latest Feature
                  </span>
                  <div className="w-8 h-1 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Event Coverage</CardTitle>
                <CardDescription>Premium access to exclusive events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  From red carpet premieres to intimate album launch parties, we provide comprehensive coverage of the Caribbean entertainment industry's most important events.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-gradient-to-r from-green-100 to-yellow-100 px-3 py-1 rounded-full">
                    Ongoing
                  </span>
                  <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Breaking News Section */}
        <div className="mb-16 bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 rounded-2xl p-1">
          <div className="bg-white rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 bg-clip-text text-transparent mb-4">
                Stay Updated with Breaking News
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Never miss the latest developments in Caribbean entertainment. Our team provides real-time coverage of breaking news, exclusive scoops, and insider information.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">⚡</div>
                  <strong className="text-gray-800">Real-Time Updates</strong>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🔍</div>
                  <strong className="text-gray-800">Investigative Reporting</strong>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">📱</div>
                  <strong className="text-gray-800">Multi-Platform Coverage</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-red-50 via-yellow-50 to-green-50 rounded-2xl p-12 border-2 border-gradient-to-r from-red-200 via-yellow-200 to-green-200">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 bg-clip-text text-transparent mb-6">
            Get Exclusive Access to Caribbean Entertainment
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Join us for unprecedented access to the stories, artists, and events that shape Caribbean culture and entertainment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.youtube.com/@cariblifemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              📺 Watch Exclusives
            </a>
            <Link
              href="/contact"
              className="border-2 border-gradient-to-r from-red-600 via-yellow-500 to-green-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-red-50 hover:via-yellow-50 hover:to-green-50 transition-all duration-300"
            >
              📞 Submit Story Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}