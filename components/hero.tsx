import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-6 leading-tight">
              Consultation, Design, & Marketing
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We provide expert consultation and innovative design solutions to help you market your properties effectively.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="/get-started">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                  Get Started
                </Button>
              </Link>
              <Link href="/learn-more">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.jpg"
              alt="Consultation, Design & Marketing"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
