import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Activity, Target } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  typesPageContent,
  assessmentTypes,
  servicesContent,
  services,
  additionalServices,
} from "@/lib/content";

export default function TypesPage() {
  // Map icon names to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Heart":
        return <Heart className="h-6 w-6 text-orange-500" />;
      case "Activity":
        return <Activity className="h-6 w-6 text-orange-500" />;
      case "Target":
        return <Target className="h-6 w-6 text-orange-500" />;
      default:
        return <Heart className="h-6 w-6 text-orange-500" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-8">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {typesPageContent.hero.title}{" "}
                <span className="text-orange-500">
                  {typesPageContent.hero.titleHighlight}
                </span>
              </h1>
              <p className="max-w-[700px] mx-auto text-zinc-400 md:text-xl">
                {typesPageContent.hero.description}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[2fr,1fr] lg:gap-12 items-start">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-03-11%20at%2010.32.04%E2%80%AFPM-OOGruZjvBlvxIdmAd6MrR2Fe8gbe1e.png"
                  alt="Sports Assessment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-zinc-400">{typesPageContent.description1}</p>
                <p className="text-zinc-400">{typesPageContent.description2}</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mt-12">
              {assessmentTypes.map((type, index) => (
                <Card key={index} className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {getIcon(type.iconName)}
                      <CardTitle className="text-white">{type.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {type.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="text-zinc-400 flex items-start gap-2"
                        >
                          <ArrowRight className="h-5 w-5 text-orange-500 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Types Section */}
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

            <div className="text-center mt-12">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  {typesPageContent.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
