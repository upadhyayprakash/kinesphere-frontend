import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Award, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { valuesContent, values } from "@/lib/content";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    About Our Clinic
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    With 5 years of expertise, our dedicated physiotherapists
                    are committed to restoring movement and enhancing well-being
                    through personalized care and advanced treatments.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button className="gap-1">
                      Get in Touch <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src="./images/clinic-photo.webp"
                width={550}
                height={550}
                alt="Our Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Our Story"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">
                    Our Story
                  </h2>
                  <p className="text-muted-foreground md:text-xl">
                    Founded in 2019, our journey began with a mission to help
                    people regain mobility and live pain-free. What started as a
                    small physiotherapy practice has grown into a trusted
                    wellness center, helping countless individuals recover and
                    thrive.
                  </p>
                  <p className="text-muted-foreground md:text-xl">
                    Our approach blends evidence-based treatments with
                    personalized care, ensuring every patient receives the best
                    possible recovery plan. We believe in long-term well-being,
                    building lasting relationships with our patients on their
                    path to a healthier life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These fundamental values shape our approach to physiotherapy
                  and guide every treatment
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-center text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Meet Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The talented people behind our success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6"
                >
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Want to work with us?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for new challenges and exciting projects.
                Let's create something amazing together.
              </p>
            </div>
            <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jamie Taylor",
    role: "Lead Designer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Casey Jordan",
    role: "Senior Developer",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Riley Quinn",
    role: "Marketing Specialist",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Taylor Reed",
    role: "Project Manager",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jordan Lee",
    role: "UX Researcher",
    avatar: "/placeholder.svg?height=100&width=100",
  },
];
