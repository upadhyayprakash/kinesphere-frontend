import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import { services } from '@/data/services'
import type { Service } from '@/data/services'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.slug)

  if (!service) {
    return (
      <main className="bg-dark min-h-screen">
        <Header />
        <div className="container px-4 pt-32">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Service Not Found</h1>
            <Link href="/services" className="text-primary hover:text-primary/80">
              View All Services
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-dark min-h-screen">
      <Header />

      {/* Hero Section with Split Layout */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Image/Video */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-dark-200">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Column - Content */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-300 mb-8">{service.fullDescription}</p>

              {/* Benefits List */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-white mb-4">Key Benefits</h2>
                <div className="grid gap-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex-none">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <p className="text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-dark-100">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Our Approach
          </h2>

          {/* Scrollable Cards Container */}
          <div className="relative -mx-4 px-4">
            <div className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className="flex-none w-[85%] md:w-[calc(33.333%-1rem)] bg-dark-200 p-6 rounded-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services
              .filter(s => service.relatedServices.includes(s.slug))
              .map((relatedService, index) => (
                <Link
                  key={index}
                  href={`/services/${relatedService.slug}`}
                  className="group bg-dark-200 p-6 rounded-lg hover:bg-dark-300 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-gray-300 line-clamp-2">{relatedService.description}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
