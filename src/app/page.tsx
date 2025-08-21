import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Users,
  Building,
  Phone,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  Clock,
  Shield,
  Smartphone,
} from "lucide-react"
import { 
  AnimatedElement, 
  AnimatedCard, 
  AnimatedCounter, 
  AnimatedIcon,
} from "@/components/animation-utils"
import { ScrollProgress } from "@/components/scroll-effects"

export default function HomePage() {
  const quickServices = [
    {
      icon: FileText,
      title: "Decretos",
      description: "Consulta los decretos municipales vigentes",
      href: "/decretos",
      color: "bg-primary",
    },
    {
      icon: Building,
      title: "Ordenanzas",
      description: "Revisa las ordenanzas municipales",
      href: "/ordenanzas",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "La Ciudad",
      description: "Conoce más sobre Villa Esperanza",
      href: "/villa-esperanza",
      color: "bg-accent",
    },
    {
      icon: Phone,
      title: "Contacto",
      description: "Ponte en contacto con nosotros",
      href: "/contacto",
      color: "bg-muted-foreground",
    },
  ]

  const featuredNews = [
    {
      title: "Nueva ordenanza de espacios verdes aprobada",
      date: "15 de Enero, 2024",
      category: "Ordenanzas",
      excerpt: "Se aprobó la nueva ordenanza para la protección y mantenimiento de espacios verdes públicos.",
    },
    {
      title: "Programa de digitalización municipal",
      date: "12 de Enero, 2024",
      category: "Tecnología",
      excerpt: "Iniciamos el programa de digitalización para mejorar los servicios ciudadanos.",
    },
    {
      title: "Obras de infraestructura en el centro",
      date: "10 de Enero, 2024",
      category: "Obras Públicas",
      excerpt: "Comenzaron las obras de mejoramiento de la infraestructura en el centro de la ciudad.",
    },
  ]

  return (
    <div className="flex flex-col">
      <ScrollProgress />
      {/* Hero Section with Video-style Background */}
      <section className="relative min-h-screen flex flex-col">
        {/* Video-style background */}
        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="https://documentos.cordoba.gob.ar/MUNCBA/VIDEO/homeweb25.mp4" type="video/mp4" />
              {/* Fallback image in case video doesn't load */}
              <Image
                src="/placeholder-csese.png"
                alt="Funcionarios municipales atendiendo ciudadanos"
                className="w-full h-full object-cover"
                fill
                sizes="100vw"
                priority={true}
              />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Animated particles overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            </div>
          </div>

          {/* Content overlay */}
          <div className="relative z-10 flex items-center justify-center min-h-screen">
            <div className="container mx-auto px-4 text-center text-white">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Badge */}
                <AnimatedElement animation="slideInTop" delay={0.2}>
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 mt-2 text-base font-medium bg-white/20 text-white border-white/30 backdrop-blur-sm hover-glow"
                  >
                    <AnimatedIcon animation="pulse">
                      <Sparkles className="w-5 h-5 mr-2" />
                    </AnimatedIcon>
                    Gobierno Municipal
                  </Badge>
                </AnimatedElement>

                {/* Main title */}
                <AnimatedElement animation="fadeInUp" delay={0.4}>
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight typing-effect">Villa Esperanza</h1>
                    <h2 className="text-3xl lg:text-5xl font-serif font-semibold text-primary-foreground/90 animate-fade-in-up animate-delay-300">
                      Corazón de la Pampa
                    </h2>
                  </div>
                </AnimatedElement>

                {/* Description */}
                <AnimatedElement animation="fadeInUp" delay={0.6}>
                  <p className="text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-medium text-white/90">
                    Un viaje a través de la historia y su gente. Villa Esperanza, fundada en el corazón de la pampa, es
                    una ciudad con una rica herencia que se ha forjado a lo largo de los siglos.
                  </p>
                </AnimatedElement>

                {/* Action buttons */}
                <AnimatedElement animation="fadeInUp" delay={0.8}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                    <Button size="lg" className="text-lg px-10 py-4 bg-primary hover:bg-primary/90 shadow-xl hover-lift shimmer">
                      <AnimatedIcon animation="bounce">
                        <Users className="mr-3 h-6 w-6" />
                      </AnimatedIcon>
                      Servicios Ciudadanos
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-10 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm hover-lift"
                    >
                      <AnimatedIcon animation="float">
                        <MapPin className="mr-3 h-6 w-6" />
                      </AnimatedIcon>
                      Conoce la Ciudad
                    </Button>
                  </div>
                </AnimatedElement>

                {/* Stats */}
                <AnimatedElement animation="fadeInUp" delay={1.0}>
                  <div className="flex flex-wrap justify-center gap-8 lg:gap-16 pt-12">
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover-lift">
                      <div className="flex items-center justify-center mb-2">
                        <AnimatedIcon animation="pulse">
                          <Clock className="w-6 h-6 mr-2 text-primary" />
                        </AnimatedIcon>
                        <div className="text-3xl font-bold">
                          <AnimatedCounter end={157} suffix="" />
                        </div>
                      </div>
                      <div className="text-sm text-white/80">Años de Historia</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover-lift">
                      <div className="flex items-center justify-center mb-2">
                        <AnimatedIcon animation="bounce">
                          <Shield className="w-6 h-6 mr-2 text-primary" />
                        </AnimatedIcon>
                        <div className="text-3xl font-bold">24/7</div>
                      </div>
                      <div className="text-sm text-white/80">Servicios</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20 hover-lift">
                      <div className="flex items-center justify-center mb-2">
                        <AnimatedIcon animation="float">
                          <Smartphone className="w-6 h-6 mr-2 text-primary" />
                        </AnimatedIcon>
                        <div className="text-3xl font-bold">100%</div>
                      </div>
                      <div className="text-sm text-white/80">Digital</div>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-secondary rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Servicios Principales</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Accede rápidamente a los servicios más utilizados por nuestros ciudadanos
              </p>
            </div>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => {
              const Icon = service.icon
              return (
                <AnimatedCard key={index} index={index}>
                  <Link href={service.href}>
                    <Card className="h-full  group hover-lift">
                      <CardHeader className="text-center pb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 hover-glow`}
                        >
                          <AnimatedIcon animation="bounce">
                            <Icon className="h-8 w-8 text-white" />
                          </AnimatedIcon>
                        </div>
                        <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-28 h-28 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Noticias Destacadas</h2>
                <p className="text-muted-foreground">Mantente informado sobre las últimas novedades municipales</p>
              </div>
              <Button variant="outline" className="hover-lift">
                Ver todas las noticias
                <AnimatedIcon animation="float">
                  <ArrowRight className="ml-2 h-4 w-4" />
                </AnimatedIcon>
              </Button>
            </div>
          </AnimatedElement>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => (
              <AnimatedCard key={index} index={index}>
                <Card className="hover:shadow-lg transition-shadow duration-300 hover-lift h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{news.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <AnimatedIcon animation="pulse">
                          <Calendar className="mr-1 h-4 w-4" />
                        </AnimatedIcon>
                        {news.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-serif leading-tight">{news.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{news.excerpt}</CardDescription>
                    <Button variant="ghost" className="mt-4 p-0 h-auto font-medium text-primary hover-lift">
                      Leer más
                      <AnimatedIcon animation="bounce">
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </AnimatedIcon>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fadeInUp" delay={0.2}>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-4">¿Necesitas Ayuda Inmediata?</h2>
              <p className="text-xl mb-8 opacity-90">
                Nuestros servicios de emergencia están disponibles las 24 horas del día
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-base hover-lift shimmer">
                  <AnimatedIcon animation="bounce">
                    <Phone className="mr-2 h-5 w-5" />
                  </AnimatedIcon>
                  (123) 987-6543 - Emergencias
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent hover-lift"
                >
                  <AnimatedIcon animation="pulse">
                    <Phone className="mr-2 h-5 w-5" />
                  </AnimatedIcon>
                  (123) 456-7890 - General
                </Button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  )
}
