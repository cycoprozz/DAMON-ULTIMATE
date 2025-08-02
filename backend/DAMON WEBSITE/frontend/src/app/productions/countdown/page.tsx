import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Countdown - Sound Clash Documentary Series | Carib Life Media",
  description: "Discover Countdown, our compelling documentary series highlighting amazing stories of win and defeat from dancehall reggae sound clash competitions.",
};

export default function CountdownPage() {
  return (
    <div className="relative isolate">
      {/* Sound clash themed background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-yellow-900 opacity-10"></div>
      
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
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-gray-800 via-red-600 to-yellow-500 px-6 py-3 text-sm font-semibold text-white shadow-lg">
              🎵 Documentary Series
            </span>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-yellow-500 bg-clip-text text-transparent mb-6">
            Countdown
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Dive deep into the electrifying world of <span className="text-red-600 font-bold">dancehall reggae sound clash</span> competitions, where musical titans battle for supremacy and legendary stories of triumph and defeat unfold.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Image */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/portfolio/countdown-logo.webp"
                alt="Countdown - Sound Clash Documentary Series"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-gray-800 via-red-600 to-yellow-500 text-white px-6 py-3 rounded-full font-bold shadow-xl">
              🎧 Sound Clash
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <Card className="bg-white/90 backdrop-blur-sm border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  🎙️ Show Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <strong className="text-gray-800">Genre:</strong>
                  <span className="ml-2 text-gray-600">Music Documentary, Sound Clash</span>
                </div>
                <div>
                  <strong className="text-gray-800">Status:</strong>
                  <span className="ml-2 text-yellow-600 font-semibold">Active Series</span>
                </div>
                <div>
                  <strong className="text-gray-800">Production:</strong>
                  <span className="ml-2 text-gray-600">Carib Life Media</span>
                </div>
                <div>
                  <strong className="text-gray-800">Focus:</strong>
                  <span className="ml-2 text-gray-600">Dancehall Reggae Competitions</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-2 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  🔥 What We Capture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🎵</span>
                    <span>Epic sound clash battles and competitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-3">🏆</span>
                    <span>Stories of victory and defeat from legendary DJs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 mr-3">🎧</span>
                    <span>Behind-the-scenes preparation and strategy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3">🌟</span>
                    <span>The culture and history of dancehall reggae</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured Battles Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-yellow-500 bg-clip-text text-transparent text-center mb-12">
            Featured Sound Clashes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="text-xl">DC vs VA Teaser</CardTitle>
                <CardDescription>The DC Shoot Out Series</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Which sound has what it takes to win at sound clash? Witness the intense rivalry between DC and Virginia's finest sound systems in this explosive showdown.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-gradient-to-r from-red-100 to-yellow-100 px-3 py-1 rounded-full">
                    Teaser Available
                  </span>
                  <div className="w-8 h-1 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-l-4 border-l-yellow-500">
              <CardHeader>
                <CardTitle className="text-xl">Championship Finals</CardTitle>
                <CardDescription>The ultimate sound clash battle</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Experience the raw energy and passion as top sound systems compete for the ultimate title, featuring exclusive interviews and never-before-seen footage.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold bg-gradient-to-r from-yellow-100 to-gray-100 px-3 py-1 rounded-full">
                    Coming Soon
                  </span>
                  <div className="w-8 h-1 bg-gradient-to-r from-yellow-400 to-gray-400 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Sound Clash Culture Section */}
        <div className="mb-16 bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Art of Sound Clash</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎛️</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Technical Mastery</h4>
              <p className="text-gray-600">Precision mixing, dubplate exclusives, and sound system expertise</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🗣️</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Lyrical Warfare</h4>
              <p className="text-gray-600">Clever wordplay, crowd engagement, and microphone skills</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Community Spirit</h4>
              <p className="text-gray-600">Cultural preservation and competitive entertainment</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-gray-50 via-red-50 to-yellow-50 rounded-2xl p-12 border-2 border-gradient-to-r from-gray-200 via-red-200 to-yellow-200">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-red-600 to-yellow-500 bg-clip-text text-transparent mb-6">
            Feel the Beat of Sound Clash Culture
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Immerse yourself in the competitive world of dancehall reggae where legends are made and musical history is written.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.youtube.com/@cariblifemedia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-800 via-red-600 to-yellow-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              🎵 Watch Episodes
            </a>
            <Link
              href="/contact"
              className="border-2 border-gradient-to-r from-gray-800 via-red-600 to-yellow-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gradient-to-r hover:from-gray-50 hover:via-red-50 hover:to-yellow-50 transition-all duration-300"
            >
              📞 Get Featured
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}