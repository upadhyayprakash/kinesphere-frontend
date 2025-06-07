import SectionTitle from '../ui/SectionTitle'

const steps = [
  {
    number: 1,
    title: 'Initial Assessment',
    description: 'Comprehensive evaluation of your condition and goals',
  },
  {
    number: 2,
    title: 'Custom Plan',
    description: 'Tailored treatment strategy for optimal results',
  },
  {
    number: 3,
    title: 'Active Treatment',
    description: 'Expert care with continuous progress monitoring',
  },
  {
    number: 4,
    title: 'Home Program',
    description: 'Guided exercises for continued improvement',
  },
]

export default function Process() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Your Journey to Recovery
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            We follow a structured, evidence-based approach to ensure the best possible outcomes for
            every client.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute hidden md:block w-[calc(100%-120px)] h-0.5 bg-primary/20 left-[60px] top-[27px] lg:top-[31px]" />
          <div className="absolute hidden md:block w-[calc(100%-120px)] h-2 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent left-[60px] top-[25px] lg:top-[29px] blur-sm" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-semibold mb-4 md:mb-6 relative z-10 shadow-lg shadow-primary/20">
                    {step.number}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
