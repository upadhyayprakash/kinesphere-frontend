import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  heroContent,
  servicesContent,
  services,
  additionalServices,
  potentialContent,
  sportsAssessmentContent,
  testimonialContent,
  testimonials,
  valuesContent,
  values,
  scienceContent,
  galleryImages,
} from "@/lib/content";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Hero Background"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 to-zinc-900/90" />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center space-y-4 mb-8">
              <div className="inline-block px-3 py-1 text-sm bg-zinc-800 rounded-full">
                {heroContent.badge}
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {heroContent.title} <br />
                <span className="text-orange-500">
                  {heroContent.titleHighlight}
                </span>
              </h1>
              <p className="max-w-[700px] mx-auto text-zinc-400 md:text-xl">
                {heroContent.description}
              </p>
              <div className="flex justify-center mt-6">
                <Link href="./#book-appointment">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    {heroContent.buttonText}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 text-center">
              {heroContent.stats.map((stat, index) => (
                <div key={index} className="p-4">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-zinc-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <div className="inline-flex items-center gap-2 text-sm text-zinc-400 overflow-x-auto whitespace-nowrap py-2 px-4">
                <div className="flex items-center gap-2">
                  {heroContent.locations.map((location, index) => (
                    <Fragment key={index}>
                      <span>{location}</span>
                      {index < heroContent.locations.length - 1 && (
                        <span>/</span>
                      )}
                    </Fragment>
                  ))}
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
                {servicesContent.title}
              </h2>
              <p className="text-2xl font-semibold text-orange-500">
                {servicesContent.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer relative overflow-hidden rounded-lg group h-[300px]"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/40" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 text-sm line-clamp-3">
                      {service.description}
                    </p>
                    {/* <Button
                      variant="link"
                      className="text-orange-500 p-0 mt-4 self-start"
                    >
                      {servicesContent.learnMoreText}{" "}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="group cursor-pointer relative overflow-hidden rounded-lg group h-[300px]"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/40" />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500">
                      {service.title}
                    </h3>
                    <p className="text-zinc-300 text-sm line-clamp-3">
                      {service.description}
                    </p>
                    {/* <Button
                      variant="link"
                      className="text-orange-500 p-0 mt-4 self-start"
                    >
                      {servicesContent.learnMoreText}{" "}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unlock Potential Section */}
        <section
          id="book-appointment"
          className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {potentialContent.title}
                </h2>
                <p className="text-zinc-400 mb-4">
                  {potentialContent.description1}
                </p>
                <p className="text-zinc-400 mb-4">
                  {potentialContent.description2}
                </p>
              </div>

              <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white">
                    {potentialContent.formTitle}
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    {potentialContent.formSubtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        className="bg-zinc-700 border-zinc-600 focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        placeholder="Your phone number"
                        className="bg-zinc-700 border-zinc-600 focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email <span className="text-gray-500">(Optional)</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="bg-zinc-700 border-zinc-600 focus:border-orange-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Message{" "}
                        <span className="text-gray-500">(Optional)</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your condition or requirements"
                        className="bg-zinc-700 border-zinc-600 focus:border-orange-500 transition-colors min-h-[100px]"
                      />
                    </div>

                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      {potentialContent.buttonText}
                    </Button>

                    <p className="text-xs text-zinc-400 text-center">
                      {potentialContent.privacyText.split(" and ")[0]}{" "}
                      <Link
                        href="#"
                        className="text-orange-500 hover:underline"
                      >
                        privacy policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        className="text-orange-500 hover:underline"
                      >
                        terms of service
                      </Link>
                      .
                    </p>
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
                src="./images/sports-assessment-section.jpg"
                width={500}
                height={300}
                alt="Sports Assessment"
                className="rounded-lg object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {sportsAssessmentContent.title}
                </h2>
                <p className="text-zinc-400 mb-4">
                  {sportsAssessmentContent.description1}
                </p>
                <p className="text-zinc-400 mb-4">
                  {sportsAssessmentContent.description2}
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {sportsAssessmentContent.steps.map((step, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="text-orange-500 text-xl">
                        {step.number}
                      </div>
                      <p className="text-sm">{step.title}</p>
                      <ul className="text-xs text-zinc-400 space-y-1 text-left">
                        {step.points.map((point, idx) => (
                          <li key={idx}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">
                {testimonialContent.title}
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                {testimonialContent.subtitle}
              </p>
            </div>

            <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      <Card className="bg-zinc-800 border-zinc-700 overflow-hidden">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row gap-6 items-center">
                            <div className="md:w-1/3 flex-shrink-0">
                              <Image
                                src={testimonial.avatar || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={200}
                                height={200}
                                className="rounded-lg object-cover mx-auto"
                              />
                            </div>
                            <div className="md:w-2/3 space-y-4">
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
                              <blockquote className="text-lg italic">
                                "{testimonial.quote}"
                              </blockquote>
                              <div>
                                <p className="font-semibold">
                                  {testimonial.name}
                                </p>
                                <p className="text-sm text-zinc-400">
                                  {testimonial.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative inset-0 translate-y-0 bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:text-white" />
                <CarouselNext className="relative inset-0 translate-y-0 bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 hover:text-white" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold text-orange-500">
                {valuesContent.title}
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
              {scienceContent.title}
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              {scienceContent.description}
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              {scienceContent.buttonText}
            </Button>

            <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="break-inside-avoid">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    width={image.width}
                    height={image.height}
                    alt={`Gallery image ${index + 1}`}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
