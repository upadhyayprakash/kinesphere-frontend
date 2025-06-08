import Image from 'next/image'
import Header from '@/components/Header'

const stats = [
  {
    value: '50+',
    label: 'Team of Physios',
  },
  {
    value: '30+',
    label: 'S&C Coaches',
  },
  {
    value: '4.9',
    label: 'Google Rating',
    stars: true,
  },
  {
    value: '15K+',
    label: 'Happy Clients',
  },
  {
    value: '98%',
    label: 'Success Rate',
  },
  {
    value: '10+',
    label: 'Years Experience',
  },
]

const teamValues = [
  {
    title: 'Expert Team',
    description:
      'Our team consists of highly qualified physiotherapists and strength & conditioning coaches with diverse specializations.',
    image: '/images/services/physio.jpg',
    imageAlt: 'Team of physiotherapists discussing patient care',
  },
  {
    title: 'Evidence-Based Approach',
    description:
      'We combine proven therapeutic techniques with the latest research in rehabilitation science.',
    image: '/images/services/sports-rehab.jpg',
    imageAlt: 'Modern rehabilitation equipment and techniques',
  },
  {
    title: 'Personalized Care',
    description:
      'Every treatment plan is tailored to your specific needs, goals, and lifestyle requirements.',
    image: '/images/services/strength.jpg',
    imageAlt: 'Physiotherapist working one-on-one with a patient',
  },
  {
    title: 'Holistic Treatment',
    description:
      'We address not just the symptoms but the root cause of your condition for lasting results.',
    image: '/images/services/physio.jpg',
    imageAlt: 'Various treatment modalities and approaches',
  },
]

const milestones = [
  {
    year: '2013',
    title: 'Foundation',
    description:
      'KineSphere was established with a vision to transform physiotherapy care in Bangalore.',
    icon: '🏥',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Opened our second center to serve more communities in Bangalore.',
    icon: '🌱',
  },
  {
    year: '2018',
    title: 'Innovation',
    description:
      'Introduced advanced rehabilitation technologies and specialized treatment programs.',
    icon: '💡',
  },
  {
    year: '2023',
    title: 'Excellence',
    description: 'Recognized as one of the leading physiotherapy centers in Karnataka.',
    icon: '🏆',
  },
]

export default function About() {
  return (
    <main className="bg-dark min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About KineSphere
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              More than a physiotherapy center, we're a movement for life. Our mission is to empower
              individuals to move better, feel stronger, and live life to the fullest.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - More Compact */}
      <section className="py-12 bg-dark-100">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-dark-200 p-4 rounded-lg text-center transform hover:scale-105 transition-transform"
              >
                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.stars && (
                    <div className="flex justify-center text-primary text-sm mt-0.5">
                      {'★'.repeat(5)}
                    </div>
                  )}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section with Images */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {teamValues.map((value, index) => (
              <div
                key={index}
                className="group bg-dark-200 rounded-lg overflow-hidden hover:bg-dark-300 transition-colors"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={value.image}
                    alt={value.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section with Modern Timeline */}
      <section className="py-16 md:py-24 bg-dark-100">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Content */}
                  <div className="flex-1 md:w-1/2">
                    <div
                      className={`bg-dark-200 p-6 rounded-lg relative
                        ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}
                      `}
                    >
                      {/* Arrow */}
                      <div
                        className={`hidden md:block absolute top-1/2 -mt-2 w-4 h-4 transform rotate-45
                          ${
                            index % 2 === 0 ? 'right-[-8px] bg-dark-200' : 'left-[-8px] bg-dark-200'
                          }
                        `}
                      />
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl">{milestone.icon}</span>
                        <h3 className="text-xl font-semibold text-white">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Year */}
                  <div className="md:w-1/2 flex md:justify-center relative">
                    <div className="absolute md:static left-0 flex items-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-dark-100">
                        <span className="text-lg font-bold text-primary">{milestone.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-gray-300">
              To be the leading force in transforming lives through movement, making expert
              physiotherapy care accessible to all while setting new standards in rehabilitation
              excellence.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
