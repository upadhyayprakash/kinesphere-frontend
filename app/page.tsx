import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-8">
              <div className="inline-block px-3 py-1 text-sm bg-zinc-800 rounded-full">
                More than 250 lives changed
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Advanced Physiotherapy for <br />
                <span className="text-orange-500">Lasting Wellness</span>
              </h1>
              <p className="max-w-[700px] mx-auto text-zinc-400 md:text-xl">
                Discover the joy of a pain-free, active life and reclaim
                movement through cutting-edge medical treatments. Bring back
                relief from joint pain, muscle aches.
              </p>
              <div className="flex justify-center mt-6">
                <Link href="/contact">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Book an appointment
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 text-center">
              <div className="p-4">
                <p className="text-3xl font-bold">7+</p>
                <p className="text-zinc-400 text-sm">Years of Experience</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold">6+</p>
                <p className="text-zinc-400 text-sm">Locations</p>
              </div>
              <div className="p-4">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-zinc-400 text-sm">Therapists</p>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <div className="inline-flex items-center gap-2 text-sm text-zinc-400 overflow-x-auto whitespace-nowrap py-2 px-4">
                <div className="flex items-center gap-2">
                  <span>JP NAGAR</span>
                  <span>/</span>
                  <span>HENNUR</span>
                  <span>/</span>
                  <span>DOMLUR</span>
                  <span>/</span>
                  <span>WHITEFIELD</span>
                  <span>/</span>
                  <span>JP NAGAR</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                Welcome to our
              </h2>
              <p className="text-2xl font-semibold text-orange-500">
                Complete wellness solution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zinc-400">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Unlock Potential Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Unlocking Your Body's Potential
                </h2>
                <p className="text-zinc-400 mb-4">
                  More than a simple health massage, manual therapy is all about
                  unlocking and harmonizing your body's true capabilities
                  through tailored interventions.
                </p>
                <p className="text-zinc-400 mb-4">
                  Our physiotherapists don't just address your symptoms; they'll
                  conduct a careful range of neurological evaluation, joint
                  examination and mobilization techniques used to encourage
                  range of motion and function, often with those functional
                  exercises mentioned above.
                </p>
              </div>

              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-white">
                    Unlock your body's potential with skilled hands on care —
                    book your appointment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input
                      placeholder="Name"
                      className="bg-zinc-700 border-zinc-600"
                    />
                    <Input
                      placeholder="Phone"
                      className="bg-zinc-700 border-zinc-600"
                    />
                    <Input
                      placeholder="Email"
                      className="bg-zinc-700 border-zinc-600"
                    />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      Contact Us
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sports Assessment Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <Image
                src="https://media.istockphoto.com/id/1325276033/photo/athlete-riding-an-exercise-bike-in-a-lab-during-biometric-testing.jpg?s=612x612&w=0&k=20&c=8IIeoeLV26NI-byRx_Q9vBLyPq-yI1-54H4uynfQ7FQ="
                width={500}
                height={300}
                alt="Sports Assessment"
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Sports specific Assessment
                </h2>
                <p className="text-zinc-400 mb-4">
                  Our Sports specific Assessment examines the role of body
                  mechanics and movement patterns in your chosen sport to
                  identify areas for improvement and potential injury risk.
                </p>
                <p className="text-zinc-400 mb-4">
                  By analyzing how your body functions during sport-specific
                  movements, we can pinpoint inefficiencies, muscle imbalances,
                  and joint restrictions that might be limiting your performance
                  or predisposing you to injury.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center space-y-2">
                    <div className="text-orange-500 text-xl">01</div>
                    <p className="text-sm">Comprehensive Pre-Assessment</p>
                    <ul className="text-xs text-zinc-400 space-y-1 text-left">
                      <li>• Detailed health history</li>
                      <li>• Previous injuries assessment</li>
                      <li>• Sport demands analysis</li>
                    </ul>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-orange-500 text-xl">02</div>
                    <p className="text-sm">Biomechanical Analysis</p>
                    <ul className="text-xs text-zinc-400 space-y-1 text-left">
                      <li>• Joint range of motion tests</li>
                      <li>• Muscle strength evaluation</li>
                      <li>• Movement pattern screening</li>
                    </ul>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-orange-500 text-xl">03</div>
                    <p className="text-sm">Training Plan Development</p>
                    <ul className="text-xs text-zinc-400 space-y-1 text-left">
                      <li>• Custom exercise program</li>
                      <li>• Corrective strategies</li>
                      <li>• Performance enhancement plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                </div>
                <blockquote className="text-xl font-semibold">
                  "I have been working with Peak Performance for a few years
                  now, and they have been an integral part of my training and
                  recovery routine. Their expertise has been extremely helpful
                  in helping me back to peak performance after injuries. It's
                  been amazing to have a center I can trust. Very professional
                  and caring approach at all levels. Thanks to their care my
                  recovery has been quick. Thank for their support."
                </blockquote>
                <p className="font-semibold">JOSHUA CONRADIE</p>
                <div className="text-sm text-zinc-400">
                  <p>
                    • National cricketer for the South African Emerging team
                  </p>
                  <p>• Played in multiple state teams in Australia</p>
                  <p>• Represented Gauteng and CSA Colts</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Testimonial"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-orange-500">
                Our non-negotiable values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <div className="text-orange-500 text-2xl">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Backed by Science */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white border-t border-zinc-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">
              Designed for you, backed by science
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Our team combines years of expertise with the latest research to
              deliver the best care possible.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Learn More
            </Button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Image
                  key={item}
                  src={`/placeholder.svg?height=150&width=${
                    item % 2 === 0 ? "300" : "150"
                  }`}
                  width={item % 2 === 0 ? 300 : 150}
                  height={150}
                  alt={`Team photo ${item}`}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const services = [
  {
    title: "Orthopedic Physiotherapy",
    description:
      "Treat musculoskeletal pain disorders, whether through surgical procedures or non-surgical. We practice evidence-based medicine with a result-oriented approach to ensure your experience is an excellent one.",
  },
  {
    title: "Sports Injury Management",
    description:
      "Our specialized approach integrates science and performance through balanced conditioning for both prevention and performance enhancement, utilizing skilled manual techniques and targeted exercises.",
  },
  {
    title: "Pre & Post Operative Rehabilitation",
    description:
      "Strengthen your body, regain range of motion with custom pre-op and post-operative rehab. Skip rehab, and you run the risk of developing long-term issues & worsening symptoms.",
  },
  {
    title: "Biomechanical & Fitness Assessment",
    description:
      "Our comprehensive biomechanical evaluation identifies dysfunctional movement patterns and muscle imbalances to develop personalized corrective exercise programs that enhance mobility and provide preventive solutions.",
  },
];

const additionalServices = [
  {
    title: "Sport-specific Assessment",
    description:
      "Our assessment analyzes body mechanics and movement patterns in your chosen sport, identifying areas for improvement and injury prevention through tailored stabilization exercises focused on your specific requirements.",
  },
  {
    title: "Sports specific Strength & conditioning",
    description:
      "We implement targeted interventions focused on developmental strength and conditioning through Dynamic Movement Training. Our holistic approach enhances mobility, stability, and strength for optimal performance.",
  },
  {
    title: "Postural and Functional Training",
    description:
      "Prevent chronic musculoskeletal injuries and pain conditions through targeted posture correction that addresses everything from daily functional movements to repetitive occupational activities, fostering balanced muscle development.",
  },
  {
    title: "Sports Massage & Recovery",
    description:
      "Enhanced for athletes and active individuals, our techniques target muscle tension, stimulate circulation, and relieve deep-tissue stress. From precompetition warm-up to postcompetition recovery, our specialized approach optimizes performance and healing.",
  },
];

const values = [
  {
    title: "Patient-centered care",
    description:
      "We prioritize your unique needs and goals in every treatment plan.",
    icon: "❤️",
  },
  {
    title: "Excellence in clinical practice",
    description:
      "Our therapists maintain the highest standards of professional care.",
    icon: "🏆",
  },
  {
    title: "Compassion and empathy",
    description:
      "We understand your challenges and provide supportive, empathetic care.",
    icon: "🤝",
  },
  {
    title: "Integrity and transparency",
    description:
      "Honest communication and ethical practice guide all our interactions.",
    icon: "✓",
  },
  {
    title: "Continuous learning",
    description:
      "We stay at the forefront of physiotherapy through ongoing education.",
    icon: "📚",
  },
  {
    title: "Collaboration",
    description:
      "We work together with you and your healthcare team for optimal results.",
    icon: "👥",
  },
];
