"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Star } from "lucide-react"

interface Client {
  _id: string
  name: string
  description: string
  designation: string
  image: string
}

export default function ClientsSection() {
  const [clients, setClients] = useState<Client[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      const response = await fetch("/api/clients")
      const data = await response.json()
      setClients(data)
    } catch (error) {
      console.error("Error fetching clients:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Happy Clients</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded mb-4"></div>
                  <div className="h-3 bg-gray-300 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-2">Happy Clients</h2>
          <p className="text-gray-700 mt-2 max-w-3xl mx-auto text-lg">What our clients say about working with us</p>
        </div>

        {clients.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No client testimonials available at the moment.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {clients.map((client) => (
              <Card key={client._id} className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
                <CardContent className="p-6 text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                    <Image
                      src={client.image || "/placeholder.jpg"}
                      alt={client.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">"{client.description}"</p>
                  <h4 className="font-semibold text-blue-700 text-lg">{client.name}</h4>
                  <p className="text-sm text-orange-500">{client.designation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
