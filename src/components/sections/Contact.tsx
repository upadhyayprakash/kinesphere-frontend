'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 lg:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">Get in Touch</h2>
          <p className="text-base md:text-lg text-gray-300">
            Ready to start your journey to better movement and health? Book your appointment today
            or reach out with any questions.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-dark-200 border border-dark-300 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
                placeholder="Tell us about your needs"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
