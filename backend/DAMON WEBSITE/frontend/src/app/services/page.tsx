import { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Services - Carib Life Media",
  description: "Social media content production packages and mini-documentary services for influencers and brands.",
};

const socialMediaPackages = [
  {
    id: "monthly",
    name: "Monthly Package",
    description: "Access a month of expertly crafted social media content production, tailored to your brand's needs and ready for seamless sharing across platforms.",
    features: [
      "Content Planning - We'll collaborate with you to brainstorm ideas, themes, and strategies for your social media content.",
      "Filming - Our experienced team will shoot high-quality footage based on the agreed-upon plan.",
      "Editing - We'll expertly edit the footage to create engaging and polished content that aligns with your brand's aesthetic.",
      "Delivery - Receive your finalized content ready for upload to your social media platforms."
    ],
    gradient: "from-yellow-400 to-orange-500",
    buttonColor: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
    paymentLabel: "MONTHLY - SOCIAL MEDIA CONTENT PRODUCTION"
  },
  {
    id: "quarterly",
    name: "Quarterly Package",
    description: "Elevate your social media presence with a comprehensive three-month plan, including strategic content production and performance evaluation to ensure continuous growth.",
    features: [
      "Extended Content Planning - We'll delve deeper into content strategy, ensuring a cohesive narrative across multiple posts.",
      "Additional Filming Sessions - Enjoy the flexibility of multiple filming sessions to capture diverse content for your quarterly campaigns.",
      "Priority Editing - Your content will receive priority treatment in our editing process, ensuring timely delivery.",
      "Quarterly Strategy Review - We'll evaluate the performance of your content and make strategic adjustments and recommendations for the next quarter."
    ],
    gradient: "from-red-400 to-pink-500",
    buttonColor: "bg-gradient-to-r from-red-400 via-pink-500 to-purple-500",
    paymentLabel: "QUARTERLY - SOCIAL MEDIA CONTENT PRODUCTION"
  },
  {
    id: "yearly",
    name: "Yearly Package",
    description: "Secure a year-long partnership for unparalleled social media content production, offering a full spectrum of services and personalized support to propel your brand to new heights of success.",
    features: [
      "Comprehensive Content Strategy - Benefit from a full year of meticulously planned content, designed to maximize engagement and growth.",
      "Flexible Filming Sessions - Exclusive access to our filming services throughout the year, allowing for extensive content creation opportunities.",
      "Dedicated Account Manager - Receive personalized attention and support from a dedicated account manager who will oversee all aspects of your content production.",
      "Annual Performance Analysis - At the end of the year, we'll conduct a thorough analysis of your social media performance and provide insights for future growth.",
      "INCLUDES ALL QUARTERLY PACKAGE SERVICES PLUS additional premium benefits"
    ],
    gradient: "from-green-400 to-emerald-500",
    buttonColor: "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500",
    paymentLabel: "YEARLY - SOCIAL MEDIA CONTENT PRODUCTION",
    isPopular: true
  }
];

const miniDocFeatures = [
  {
    title: "Content Planning",
    description: "Our expert team will work closely with you to outline the storyline and key moments to be captured in your mini-documentary. We'll collaborate on the creative vision, ensuring the documentary aligns perfectly with your brand and event objectives.",
    icon: "📋"
  },
  {
    title: "Filming",
    description: "Our skilled videographers will be on-site to capture every special moment, from behind-the-scenes preparations to the highlight reel of your event. We'll conduct exclusive interviews with you and other key figures, adding depth and personalization to your documentary.",
    icon: "🎬"
  },
  {
    title: "Editing",
    description: "Utilizing state-of-the-art editing techniques, we'll weave together footage from your event into a visually stunning and emotionally engaging narrative. Our editing process includes adding music, graphics, and other elements to enhance the storytelling and captivate your audience.",
    icon: "✂️"
  },
  {
    title: "Delivery",
    description: "Once the editing process is complete, we'll deliver the finalized mini-documentary ready for sharing on your social media platforms. You'll receive a high-definition video file optimized for online viewing, ensuring maximum impact and reach.",
    icon: "📤"
  }
];

export default function ServicesPage() {
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
                📱 Try our social media production services!
              </span>
            </div>
            <h1 className="hero-text bg-gradient-to-r from-yellow-500 via-red-500 to-green-600 bg-clip-text text-transparent mb-8">
              Our Services
            </h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 display-font">
              SOCIAL MEDIA CONTENT PRODUCTION PACKAGES
            </h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-8">
              ELEVATE YOUR ONLINE PRESENCE WITH CARIB LIFE MEDIA™
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              Enroll in our exclusive social media content production services today. Our <span className="text-yellow-600 font-bold">monthly</span>, <span className="text-red-600 font-bold">quarterly</span>, and <span className="text-green-600 font-bold">yearly</span> packages tailored to your brand's needs. From strategic planning to polished delivery, our comprehensive packages ensure consistent and compelling content that resonates with your audience, driving engagement and growth throughout the year.
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Packages Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {socialMediaPackages.map((pkg) => (
            <Card key={pkg.id} className={`relative overflow-hidden border-2 ${pkg.isPopular ? 'border-green-400 transform scale-105' : 'border-transparent'} hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2`}>
              {pkg.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-bl-lg font-bold text-sm">
                  🌟 MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${pkg.gradient} shadow-lg flex items-center justify-center floating`}>
                  <span className="text-3xl">📱</span>
                </div>
                <CardTitle className="text-2xl font-bold display-font">{pkg.name}</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600 mt-4">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold text-lg">✓</span>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Button className={`w-full ${pkg.buttonColor} hover:shadow-xl text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105`}>
                    Pay Now - {pkg.paymentLabel}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Service Note */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-yellow-50 via-red-50 to-green-50 rounded-2xl p-8 border-2 border-yellow-200">
            <p className="text-lg font-bold text-gray-800">
              ⭐ <span className="text-red-600">Additionally</span>, for an added cost, we offer <span className="text-green-600">in-person filming services</span> to further enhance the quality and authenticity of your content.
            </p>
          </div>
        </div>

        {/* Reserve Your Package Section */}
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-yellow-500 via-red-500 to-green-600 bg-clip-text text-transparent mb-8">
            Reserve Your Package Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialMediaPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-2xl p-6 shadow-xl border-2 border-gray-200 hover:border-yellow-400 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4 display-font">{pkg.name.toUpperCase()}</h3>
                <Button className={`w-full ${pkg.buttonColor} hover:shadow-xl text-white font-bold py-4 px-6 rounded-full transition-all duration-300 transform hover:scale-105`}>
                  Pay Now
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini-Documentary Services Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title bg-gradient-to-r from-purple-500 via-pink-500 to-red-600 bg-clip-text text-transparent mb-8">
              Social Media Mini-Documentary Production Services
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                Are you an <span className="text-purple-600 font-bold">influencer</span> looking to immortalize your special events in captivating <span className="text-pink-600 font-bold">mini-documentaries</span>? Look no further than <span className="text-red-600 font-bold">Carib Life Media™</span>!
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our specialized service offers comprehensive coverage of your events, delivering stunning documentaries that showcase the essence and excitement of your gatherings.
              </p>
            </div>
          </div>

          {/* Mini-Doc Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {miniDocFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-2 border-transparent hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg flex items-center justify-center">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <CardTitle className="text-xl font-bold display-font text-gray-900">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mini-Doc CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 rounded-2xl p-8 border-2 border-purple-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                Immerse your audience in the magic of your special events with <span className="text-purple-600 font-bold">Carib Life Media™'s</span> Social Media Mini-Documentary Production Service. From intimate gatherings to extravagant celebrations, we'll capture the essence of your events and transform them into unforgettable cinematic experiences.
              </p>
              <Button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-xl text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Contact us today to schedule your consultation and elevate your event coverage to new heights!
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clients Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="text-center">
          <h2 className="section-title bg-gradient-to-r from-yellow-500 via-red-500 to-green-600 bg-clip-text text-transparent mb-8">
            Our Clients
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            We work with <span className="text-yellow-600 font-bold">influencers</span>, <span className="text-red-600 font-bold">artists</span>, <span className="text-green-600 font-bold">businesses</span>, and <span className="text-blue-600 font-bold">event organizers</span> throughout the Caribbean Diaspora to create compelling social media content that resonates with audiences worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}