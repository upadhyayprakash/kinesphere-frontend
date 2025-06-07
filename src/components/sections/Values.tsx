import SectionTitle from '../ui/SectionTitle'

const values = [
  {
    icon: '💪',
    title: 'Every Patient & Health Journey',
    description: 'Personalized care for your unique needs',
  },
  {
    icon: '🎯',
    title: 'Purpose',
    description: 'Dedicated to your health and wellness goals',
  },
  {
    icon: '⚕️',
    title: 'Ethics in Practice',
    description: 'Highest standards of professional care',
  },
  {
    icon: '🌟',
    title: 'Service Excellence',
    description: 'Committed to exceptional patient experience',
  },
]

export default function Values() {
  return (
    <section className="py-20 bg-dark">
      <div className="container">
        <SectionTitle title="We Stand For" centered />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-dark-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {value.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
