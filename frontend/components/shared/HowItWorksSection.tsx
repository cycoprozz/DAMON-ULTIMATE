import { FileCheck, Handshake, Send } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Effortless From Start to Finish</h2>
          <p className="text-muted-foreground mt-2">A simple, streamlined process to bring your vision to life.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-6 bg-primary/10 rounded-full">
              <Handshake className="w-10 h-10 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">1. Select Your Service</h3>
            <p className="mt-2 text-muted-foreground">Browse our production packages and choose the one that fits your needs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 bg-primary/10 rounded-full">
              <FileCheck className="w-10 h-10 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">2. Manage Your Project</h3>
            <p className="mt-2 text-muted-foreground">Use your client portal to track progress, share files, and communicate with our team.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 bg-primary/10 rounded-full">
              <Send className="w-10 h-10 text-primary" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">3. Receive Your Content</h3>
            <p className="mt-2 text-muted-foreground">Get your final, high-quality digital assets delivered on time, every time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
