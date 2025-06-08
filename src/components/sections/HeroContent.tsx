'use client'

type HeroContentProps = {
  stats: Array<{
    value: string
    label: string
    stars?: boolean
  }>
  locations: string[]
}

export default function HeroContent({ stats, locations }: HeroContentProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 lg:px-0">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
          <span className="hidden md:inline">
            More Than Recovery -<br />A Movement for Life
          </span>
          <span className="md:hidden">
            Expert Physio Care
            <br />
            For Better Movement
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-3 md:mb-4">
          <span className="hidden md:inline">
            We do more than just treat injuries—we cultivate confidence, resilience, and longevity
            in movement.
          </span>
          <span className="md:hidden">
            Professional physiotherapy and rehabilitation services in Bangalore.
          </span>
        </p>
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 hidden md:block">
          <span className="text-gray-300">
            As your trusted guide, we fast-track your journey to{' '}
            <span className="text-primary">fitness, vitality, and pain-free movement</span>,
            ensuring you move better, feel stronger, and thrive at every stage of life.
          </span>
        </p>
        <button
          onClick={scrollToContact}
          className="w-full sm:w-auto bg-primary text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg text-sm sm:text-base lg:text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Book Appointment
        </button>

        {/* Locations */}
        <div className="mt-6 sm:mt-8 lg:mt-12">
          <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 md:mb-3">
            Our Locations in Bangalore:
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
            {locations.map(location => (
              <div key={location} className="location-tag">
                {location}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Content - Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 h-fit">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stats-card p-3 sm:p-4 lg:p-6 rounded-lg text-center transition-all duration-300"
          >
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 md:mb-2">
              {stat.value}
              {stat.stars && (
                <div className="flex justify-center text-primary text-lg sm:text-xl lg:text-2xl mt-1">
                  {'★'.repeat(5)}
                </div>
              )}
            </div>
            <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
