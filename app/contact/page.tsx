"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Have a question or want to work with us? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
                  <p className="text-muted-foreground md:text-xl">
                    Fill out the form and we'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Our Office</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Business Ave, Suite 100, San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-sm text-muted-foreground">hello@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>We'll respond to your inquiry as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[150px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Find Us</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Visit our office or reach out to us online.
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 aspect-video w-full max-w-5xl overflow-hidden rounded-xl border bg-muted">
              {/* This would be replaced with an actual map component in production */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="text-muted-foreground">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

