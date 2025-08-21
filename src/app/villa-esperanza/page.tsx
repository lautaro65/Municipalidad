"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Camera, Building, Utensils, Palette, Music, Mountain, TreePine, Heart, Star, Sparkles, Globe, Users } from "lucide-react"
import AnimatedTimeline from "@/components/animated-timeline"
import { motion } from "framer-motion"
import { 
  AnimatedElement, 
  AnimatedCard, 
  AnimatedIcon,
  AnimatedCounter 
} from "@/components/animation-utils"
import { ScrollProgress } from "@/components/scroll-effects"

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
      <ScrollProgress />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="fadeInLeft" delay={0.2}>
              <div className="relative">
                <motion.div 
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover-lift"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src="/villa-esperanza-aerial-sunset.png"
                    alt="Vista aérea de Villa Esperanza al atardecer"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg border hover-lift"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-3">
                    <AnimatedIcon animation="bounce">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                    </AnimatedIcon>
                    <div>
                      <p className="font-semibold text-foreground">Fundada en 1867</p>
                      <p className="text-sm text-muted-foreground">157 años de historia</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fadeInRight" delay={0.4}>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="w-fit hover-glow">
                    <AnimatedIcon animation="pulse">
                      <Heart className="mr-2 h-4 w-4" />
                    </AnimatedIcon>
                    Patrimonio Cultural
                  </Badge>
                </motion.div>
                <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                  Villa Esperanza:
                  <span className="block text-primary typing-effect">Corazón de la Pampa</span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Un viaje a través de la historia y su gente. Villa Esperanza, fundada en el corazón de la pampa
                  argentina, es una ciudad con una rica herencia que se ha forjado a lo largo de los siglos. Desde sus
                  humildes comienzos como un pequeño asentamiento, ha crecido hasta convertirse en un próspero centro de
                  la región.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="text-base hover-lift shimmer">
                      <AnimatedIcon animation="bounce">
                        <Camera className="mr-2 h-5 w-5" />
                      </AnimatedIcon>
                      Galería de Fotos
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="text-base bg-transparent hover-lift">
                      <AnimatedIcon animation="float">
                        <MapPin className="mr-2 h-5 w-5" />
                      </AnimatedIcon>
                      Mapa Turístico
                    </Button>
                  </motion.div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto">
            <AnimatedElement animation="fadeInUp" delay={0.2}>
              <div className="mb-16">
                <AnimatedTimeline />
              </div>
            </AnimatedElement>

            <div className="space-y-12">
              {/* Modern Development */}
              <AnimatedElement animation="fadeInUp" delay={0.4}>
                <motion.div 
                  className="text-center bg-card p-8 rounded-2xl hover-lift"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatedIcon animation="bounce">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  </AnimatedIcon>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Desarrollo y Consolidación Local</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    Tras la llegada del ferrocarril, Villa Esperanza experimentó un crecimiento sostenido. Se
                    establecieron las primeras escuelas, iglesias y edificios públicos. La agricultura y ganadería
                    florecieron, y prosperaron diversos comercios. La comunidad se organizó en torno a instituciones que
                    aún hoy son pilares de nuestra sociedad. Este período de consolidación fue fundamental para forjar la
                    identidad de nuestra ciudad.
                  </p>
                </motion.div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Culture and Heritage */}
      <section className="py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-28 h-28 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <AnimatedIcon animation="bounce">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              </AnimatedIcon>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Cultura y Patrimonio Local</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Villa Esperanza es rica en tradiciones culturales que reflejan la diversidad de sus habitantes
              </p>
            </div>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalHighlights.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedCard key={index} index={index}>
                  <motion.div
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden hover-lift"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card>
                      <div className="aspect-[4/3] overflow-hidden">
                        <motion.img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-2">
                          <motion.div 
                            className="p-2 rounded-lg bg-primary/10 hover-glow"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <AnimatedIcon animation="bounce">
                              <Icon className="h-5 w-5 text-primary" />
                            </AnimatedIcon>
                          </motion.div>
                          <CardTitle className="text-lg font-serif">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <AnimatedIcon animation="bounce">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              </AnimatedIcon>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Villa Esperanza en Números</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conoce algunos datos interesantes sobre nuestra querida ciudad
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm hover-lift"
            >
              <AnimatedIcon animation="bounce">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
              </AnimatedIcon>
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                <AnimatedCounter end={157} suffix="" />
              </div>
              <p className="text-muted-foreground">Años de Historia</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm hover-lift"
            >
              <AnimatedIcon animation="pulse">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              </AnimatedIcon>
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                <AnimatedCounter end={25000} suffix="+" />
              </div>
              <p className="text-muted-foreground">Habitantes</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm hover-lift"
            >
              <AnimatedIcon animation="float">
                <Building className="h-8 w-8 text-primary mx-auto mb-2" />
              </AnimatedIcon>
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                <AnimatedCounter end={6} suffix="" />
              </div>
              <p className="text-muted-foreground">Atractivos Culturales</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white/50 backdrop-blur-sm hover-lift"
            >
              <AnimatedIcon animation="bounce">
                <Star className="h-8 w-8 text-primary mx-auto mb-2" />
              </AnimatedIcon>
              <div className="text-3xl font-serif font-bold text-primary mb-2">4.8</div>
              <p className="text-muted-foreground">Valoración Turística</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <AnimatedIcon animation="bounce">
              <Sparkles className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            </AnimatedIcon>
            <h2 className="text-3xl font-serif font-bold mb-4">¿Listo para explorar Villa Esperanza?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Descubre todos los atractivos que nuestra ciudad tiene para ofrecerte. Planifica tu visita y vive una
              experiencia inolvidable.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="secondary" className="text-base hover-lift shimmer">
                <AnimatedIcon animation="pulse">
                  <Camera className="mr-2 h-5 w-5" />
                </AnimatedIcon>
                Descubre más Servicios Turísticos
              </Button>
            </motion.div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
