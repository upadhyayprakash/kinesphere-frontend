import SectionTitle from '../ui/SectionTitle'

const steps = [
  {
    icon: '🏥',
    title: 'In-Clinic Care',
    description: 'Visit our state-of-the-art facility for personalized treatment',
  },
  {
    icon: '🏠',
    title: 'Home Visits',
    description: 'Convenient care in the comfort of your home',
  },
  {
    icon: '💼',
    title: 'Corporate Wellness',
    description: 'On-site programs for workplace wellness',
  },
  {
    icon: '🌐',
    title: 'Virtual Care',
    description: 'Remote consultations and guided therapy sessions',
  },
]

export default function HowWeHelp() {
  return (
    <section className="py-20 bg-dark-100">
      <div className="container">
        <SectionTitle
          title="HOW WE HELP YOU"
          subtitle={'"Wherever you are, we\'re there" - Expert care at Home or Corporate Wellness.'}
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-dark-200 p-8 rounded-lg text-center border border-gray-800 hover:border-primary/50 transition-colors"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
