"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Camera, Building, Utensils, Palette, Music, Mountain, TreePine } from "lucide-react"
import AnimatedTimeline from "@/components/animated-timeline"

export default function VillaEsperanzaPage() {
  const culturalHighlights = [
    {
      icon: Palette,
      title: "Artesanía Tradicional",
      description:
        "Nuestros artesanos locales preservan técnicas ancestrales, creando piezas únicas que reflejan la rica herencia cultural.",
      image: "/argentine-handicrafts-artisans.png",
    },
    {
      icon: Utensils,
      title: "Gastronomía Regional",
      description:
        "La cocina de Villa Esperanza es un reflejo de su historia y mestizaje cultural. Disfruta de platos típicos con ingredientes locales.",
      image: "/argentine-regional-cuisine.png",
    },
    {
      icon: Building,
      title: "Arquitectura Histórica",
      description:
        "Pasea por nuestro centro histórico y descubre la belleza de una arquitectura que cuenta la historia de nuestra ciudad.",
      image: "/argentine-colonial-architecture.png",
    },
    {
      icon: Music,
      title: "Festividades Populares",
      description:
        "A lo largo del año, Villa Esperanza celebra diversas festividades que reúnen a toda la comunidad en alegría y tradición.",
      image: "/argentine-folk-festival.png",
    },
    {
      icon: Mountain,
      title: "Naturaleza y Paisajes",
      description:
        "Rodeada de paisajes naturales únicos, nuestra ciudad ofrece espacios ideales para el descanso y la contemplación.",
      image: "/argentine-pampas.png",
    },
    {
      icon: TreePine,
      title: "Museo Municipal",
      description:
        "Explora el Museo Municipal, que alberga importantes obras de arte y objetos históricos que narran nuestra identidad.",
      image: "/municipal-museum-interior.png",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/villa-esperanza-aerial-sunset.png"
                  alt="Vista aérea de Villa Esperanza al atardecer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Fundada en 1867</p>
                    <p className="text-sm text-muted-foreground">157 años de historia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Patrimonio Cultural
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Villa Esperanza:
                <span className="block text-primary">Corazón de la Pampa</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Un viaje a través de la historia y su gente. Villa Esperanza, fundada en el corazón de la pampa
                argentina, es una ciudad con una rica herencia que se ha forjado a lo largo de los siglos. Desde sus
                humildes comienzos como un pequeño asentamiento, ha crecido hasta convertirse en un próspero centro de
                la región.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base">
                  <Camera className="mr-2 h-5 w-5" />
                  Galería de Fotos
                </Button>
                <Button variant="outline" size="lg" className="text-base bg-transparent">
                  <MapPin className="mr-2 h-5 w-5" />
                  Mapa Turístico
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className=" mx-auto">
            <div className="mb-16">
              <AnimatedTimeline />
            </div>

            <div className="space-y-12">
              {/* Modern Development */}
              <div className="text-center bg-card p-8 rounded-2xl">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Desarrollo y Consolidación Local</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Tras la llegada del ferrocarril, Villa Esperanza experimentó un crecimiento sostenido. Se
                  establecieron las primeras escuelas, iglesias y edificios públicos. La agricultura y ganadería
                  florecieron, y prosperaron diversos comercios. La comunidad se organizó en torno a instituciones que
                  aún hoy son pilares de nuestra sociedad. Este período de consolidación fue fundamental para forjar la
                  identidad de nuestra ciudad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture and Heritage */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Cultura y Patrimonio Local</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Villa Esperanza es rica en tradiciones culturales que reflejan la diversidad de sus habitantes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalHighlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-serif">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">¿Listo para explorar Villa Esperanza?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubre todos los atractivos que nuestra ciudad tiene para ofrecerte. Planifica tu visita y vive una
            experiencia inolvidable.
          </p>
          <Button size="lg" variant="secondary" className="text-base">
            <Camera className="mr-2 h-5 w-5" />
            Descubre más Servicios Turísticos
          </Button>
        </div>
      </section>
    </div>
  )
}
