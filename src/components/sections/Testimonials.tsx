import SectionTitle from '../ui/SectionTitle'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Professional Athlete',
    content:
      'The team at KineSphere transformed my recovery journey. Their expertise in sports rehabilitation got me back to peak performance faster than I expected.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'IT Professional',
    content:
      'After months of desk-related back pain, their comprehensive treatment plan and ergonomic advice made a huge difference in my daily comfort.',
    rating: 5,
  },
  {
    name: 'Dr. Arun Kumar',
    role: 'Surgeon',
    content:
      'I recommend KineSphere to all my patients. Their evidence-based approach and dedicated team consistently deliver excellent results.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-dark-100">
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Don't just take our word for it - hear from the people we've helped on their journey to
            better movement and health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark-200 rounded-xl p-6 md:p-8">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex text-primary">{'★'.repeat(testimonial.rating)}</div>
                </div>
                <p className="text-gray-300 text-sm md:text-base mb-6 flex-grow">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
