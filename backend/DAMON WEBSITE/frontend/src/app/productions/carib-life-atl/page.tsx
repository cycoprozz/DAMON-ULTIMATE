import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Carib Life ATL - Caribbean Reality TV Series | Carib Life Media",
  description: "Explore Carib Life ATL, our flagship Caribbean reality TV series capturing annual Caribbean Carnival planning, band launches, and Atlanta's vibrant Caribbean culture.",
};

export default function CaribLifeATLPage() {
  return (
    <div className="relative isolate">
      {/* Caribbean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-red-50 to-green-50 opacity-60"></div>
      
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
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 px-6 py-3 text-sm font-semibold text-white shadow-lg">
              🏝️ Reality TV Series
            </span>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent mb-6">
            Carib Life ATL
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Experience the vibrant world of <span className="text-red-600 font-bold">Caribbean culture</span> in Atlanta through our groundbreaking reality TV series that captures the heart and soul of carnival planning, band launches, and community celebrations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/portfolio/carib-life-atl-logo.webp"
                alt="Carib Life ATL - Caribbean Reality TV Series"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 text-white px-6 py-3 rounded-full font-bold shadow-xl">
              🎬 Currently Airing
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  📺 Show Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong className="text-gray-800">Genre:</strong>
                  <span className="ml-2 text-gray-600">Reality TV, Cultural Documentary</span>
                </div>
                <div>
                  <strong className="text-gray-800">Status:</strong>
                  <span className="ml-2 text-green-600 font-semibold">Active Series</span>
                </div>
                <div>
                  <strong className="text-gray-800">Production:</strong>
                  <span className="ml-2 text-gray-600">Carib Life Media</span>
                </div>
                <div>
                  <strong className="text-gray-800">Location:</strong>
                  <span className="ml-2 text-gray-600">Atlanta, Georgia</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  🎭 What We Cover
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3">🎪</span>
                    <span>Annual Caribbean Carnival planning and preparation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🎵</span>
                    <span>Band launches and music productions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">💃</span>
                    <span>Special performances and cultural showcases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3">🏝️</span>
                    <span>Behind-the-scenes of Atlanta's Caribbean community</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Episodes Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent text-center mb-12">
            Featured Episodes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Episode 3: Band Launch</CardTitle>
                <CardDescription>Take a quick peek at what's coming up next!</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Follow the excitement as new bands prepare for their official launch, featuring exclusive interviews with artists and behind-the-scenes footage of the creative process.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-gradient-to-r from-yellow-100 to-red-100 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                  <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Carnival Special</CardTitle>
                <CardDescription>The biggest celebration of the year</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Experience the vibrant energy of Atlanta's Caribbean Carnival through the eyes of the organizers, performers, and community members who make it happen.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-gradient-to-r from-green-100 to-yellow-100 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <div className="w-8 h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-yellow-50 via-red-50 to-green-50 rounded-2xl p-12 border-2 border-gradient-to-r from-yellow-200 via-red-200 to-green-200">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-green-600 bg-clip-text text-transparent mb-6">
            Experience Caribbean Culture Like Never Before
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Join us as we showcase the authentic spirit of Caribbean life in Atlanta, celebrating tradition, music, and community.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.youtube.com/@cariblifemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🎬 Watch on YouTube
            </a>
            <Link
              href="/contact"
              className="border-2 border-gradient-to-r from-yellow-400 via-red-500 to-green-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:via-red-50 hover:to-green-50 transition-all duration-300"
            >
              📞 Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}