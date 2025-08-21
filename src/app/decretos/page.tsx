"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, Search, Calendar, ChevronDown, ChevronRight, FileText, Filter, TrendingUp, Clock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  AnimatedElement, 
  AnimatedCard, 
  AnimatedIcon,
  AnimatedCounter 
} from "@/components/animation-utils"
import { ScrollProgress } from "@/components/scroll-effects"
type Decreto = {
  number: string
  title: string
  date: string
  category: string
  description: string
}

export default function DecretosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedYears, setExpandedYears] = useState<string[]>(["2024"]) // 2024 expandido por defecto
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [sortBy, setSortBy] = useState<"date" | "number" | "title">("date")

  const decretosByYear = {
    2024: [
      {
        number: "001/2024",
        title: "Aprobación del Presupuesto Municipal 2024",
        date: "15 de Enero, 2024",
        category: "Presupuesto",
        description: "Decreto que aprueba el presupuesto municipal para el ejercicio fiscal 2024.",
      },
      {
        number: "002/2024",
        title: "Normativa para la Gestión de Residuos",
        date: "22 de Enero, 2024",
        category: "Medio Ambiente",
        description: "Establece las normas para la correcta gestión y separación de residuos urbanos.",
      },
      {
        number: "003/2024",
        title: "Medidas de Seguridad Vial",
        date: "05 de Febrero, 2024",
        category: "Tránsito",
        description: "Implementa nuevas medidas de seguridad vial en zonas escolares.",
      },
      {
        number: "004/2024",
        title: "Creación de la Mesa de Desarrollo Local",
        date: "12 de Febrero, 2024",
        category: "Desarrollo",
        description: "Crea la mesa de trabajo para el desarrollo económico local.",
      },
      {
        number: "005/2024",
        title: "Regulación de Espacios Públicos",
        date: "20 de Febrero, 2024",
        category: "Urbanismo",
        description: "Regula el uso y mantenimiento de espacios públicos municipales.",
      },
      {
        number: "006/2024",
        title: "Programa de Apoyo a Emprendedores",
        date: "28 de Febrero, 2024",
        category: "Economía",
        description: "Establece el programa municipal de apoyo a emprendedores locales.",
      },
    ],
    2023: [
      {
        number: "015/2023",
        title: "Plan de Obras Públicas 2023",
        date: "10 de Marzo, 2023",
        category: "Obras Públicas",
        description: "Aprueba el plan de obras públicas para el año 2023.",
      },
      {
        number: "016/2023",
        title: "Incentivos Fiscales para PYMES",
        date: "18 de Marzo, 2023",
        category: "Economía",
        description: "Establece incentivos fiscales para pequeñas y medianas empresas.",
      },
      {
        number: "017/2023",
        title: "Declaración de Interés Municipal",
        date: "25 de Marzo, 2023",
        category: "Cultural",
        description: "Declara de interés municipal diversos eventos culturales.",
      },
      {
        number: "018/2023",
        title: "Creación del Consejo de Seguridad",
        date: "02 de Abril, 2023",
        category: "Seguridad",
        description: "Crea el consejo municipal de seguridad ciudadana.",
      },
      {
        number: "019/2023",
        title: "Regulación de Uso de Espacios Verdes",
        date: "15 de Abril, 2023",
        category: "Medio Ambiente",
        description: "Regula el uso y conservación de espacios verdes públicos.",
      },
      {
        number: "020/2023",
        title: "Medidas de Seguridad Sanitaria",
        date: "22 de Abril, 2023",
        category: "Salud",
        description: "Implementa medidas de seguridad sanitaria en establecimientos públicos.",
      },
    ],
    2022: [
      {
        number: "025/2022",
        title: "Protocolo de Atención Ciudadana",
        date: "05 de Mayo, 2022",
        category: "Administración",
        description: "Establece el protocolo de atención al ciudadano en oficinas municipales.",
      },
      {
        number: "026/2022",
        title: "Fomento de la Agricultura Urbana",
        date: "12 de Mayo, 2022",
        category: "Desarrollo",
        description: "Promueve el desarrollo de la agricultura urbana en la ciudad.",
      },
      {
        number: "027/2022",
        title: "Creación de la Mesa de Turismo",
        date: "20 de Mayo, 2022",
        category: "Turismo",
        description: "Crea la mesa de trabajo para el desarrollo turístico local.",
      },
      {
        number: "028/2022",
        title: "Plan de Digitalización Municipal",
        date: "28 de Mayo, 2022",
        category: "Tecnología",
        description: "Aprueba el plan de digitalización de servicios municipales.",
      },
      {
        number: "029/2022",
        title: "Marco Regulatorio para Comercios",
        date: "05 de Junio, 2022",
        category: "Comercio",
        description: "Establece el marco regulatorio para el funcionamiento de comercios.",
      },
    ],
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Presupuesto: "bg-blue-100 text-blue-800",
      "Medio Ambiente": "bg-green-100 text-green-800",
      Tránsito: "bg-yellow-100 text-yellow-800",
      Desarrollo: "bg-purple-100 text-purple-800",
      Urbanismo: "bg-indigo-100 text-indigo-800",
      Economía: "bg-orange-100 text-orange-800",
      "Obras Públicas": "bg-gray-100 text-gray-800",
      Cultural: "bg-pink-100 text-pink-800",
      Seguridad: "bg-red-100 text-red-800",
      Salud: "bg-teal-100 text-teal-800",
      Administración: "bg-slate-100 text-slate-800",
      Turismo: "bg-cyan-100 text-cyan-800",
      Tecnología: "bg-violet-100 text-violet-800",
      Comercio: "bg-amber-100 text-amber-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  // Función para filtrar decretos
  const filterDecretos = (decretos: Decreto[]) => {
    let filtered = decretos
    
    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(decreto => 
        decreto.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        decreto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        decreto.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        decreto.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Filtrar por categoría
    if (selectedCategory) {
      filtered = filtered.filter(decreto => 
        decreto.category === selectedCategory
      )
    }
    
    return filtered
  }

  // Función para expandir/contraer años
  const toggleYear = (year: string) => {
    setExpandedYears(prev => 
      prev.includes(year) 
        ? prev.filter(y => y !== year)
        : [...prev, year]
    )
  }

  // Obtener decretos filtrados por año
  const getFilteredDecretosByYear = () => {
    const filtered: { [key: string]: Decreto[] } = {}
    
    Object.entries(decretosByYear).forEach(([year, decretos]) => {
      const filteredDecretos = filterDecretos(decretos)
      if (filteredDecretos.length > 0) {
        filtered[year] = filteredDecretos
      }
    })
    
    return filtered
  }

  const filteredDecretosByYear = getFilteredDecretosByYear()
  const totalFilteredDecretos = Object.values(filteredDecretosByYear).flat().length

  // Si hay búsqueda activa, expandir todos los años que tienen resultados
  const shouldExpandYear = (year: string) => {
    if (searchTerm && filteredDecretosByYear[year]) {
      return true
    }
    return expandedYears.includes(year)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollProgress />
      {/* Header */}
      <AnimatedElement animation="fadeInUp" delay={0.2}>
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <AnimatedIcon animation="bounce">
              <FileText className="h-12 w-12 text-primary mr-4" />
            </AnimatedIcon>
            <h1 className="text-4xl font-serif font-bold text-foreground">Decretos Municipales</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Consulta y descarga los decretos municipales organizados por año. Todos los documentos están disponibles en
            formato PDF para su descarga.
          </p>
        </div>
      </AnimatedElement>

      {/* Search Bar */}
      <AnimatedElement animation="fadeInUp" delay={0.4}>
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <AnimatedIcon animation="pulse">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            </AnimatedIcon>
            <Input 
              placeholder="Buscar por número, título o categoría..." 
              className="pl-10 hover-lift" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <AnimatePresence>
            {searchTerm && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm text-muted-foreground mt-2 text-center"
              >
                {totalFilteredDecretos} decreto{totalFilteredDecretos !== 1 ? 's' : ''} encontrado{totalFilteredDecretos !== 1 ? 's' : ''} para &quot;{searchTerm}&quot;
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </AnimatedElement>

      {/* Filters Section */}
      <AnimatedElement animation="fadeInUp" delay={0.6}>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <AnimatedIcon animation="pulse">
                <Filter className="h-5 w-5 text-muted-foreground" />
              </AnimatedIcon>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground hover-lift"
              >
                <option value="">Todas las categorías</option>
                <option value="Presupuesto">Presupuesto</option>
                <option value="Medio Ambiente">Medio Ambiente</option>
                <option value="Tránsito">Tránsito</option>
                <option value="Desarrollo">Desarrollo</option>
                <option value="Urbanismo">Urbanismo</option>
                <option value="Economía">Economía</option>
                <option value="Obras Públicas">Obras Públicas</option>
                <option value="Cultural">Cultural</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Salud">Salud</option>
                <option value="Administración">Administración</option>
                <option value="Turismo">Turismo</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Comercio">Comercio</option>
              </select>
            </div>

            {/* Sort Filter */}
            <div className="flex items-center space-x-2">
              <AnimatedIcon animation="float">
                <TrendingUp className="h-5 w-5 text-muted-foreground" />
              </AnimatedIcon>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "number" | "title")}
                className="px-4 py-2 border border-border rounded-lg bg-background text-foreground hover-lift"
              >
                <option value="date">Ordenar por fecha</option>
                <option value="number">Ordenar por número</option>
                <option value="title">Ordenar por título</option>
              </select>
            </div>

            {/* Clear Filters Button */}
            {(searchTerm || selectedCategory) && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("")
                }}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift"
              >
                Limpiar filtros
              </motion.button>
            )}
          </div>
        </div>
      </AnimatedElement>

      {/* Decretos by Year with Collapsible */}
      <div className="space-y-6">
        <AnimatePresence>
          {Object.entries(filteredDecretosByYear).length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12"
            >
              <AnimatedIcon animation="float">
                <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              </AnimatedIcon>
              <p className="text-muted-foreground text-lg">No se encontraron decretos que coincidan con tu búsqueda.</p>
            </motion.div>
          ) : (
            Object.entries(filteredDecretosByYear).map(([year, decretos], yearIndex) => (
              <motion.div 
                key={year} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: yearIndex * 0.1 }}
                className="border rounded-lg overflow-hidden bg-card hover-lift"
              >
                {/* Year Header - Clickable */}
                <motion.button
                  onClick={() => toggleYear(year)}
                  className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <AnimatePresence mode="wait">
                        {shouldExpandYear(year) ? (
                          <motion.div
                            key="down"
                            initial={{ rotate: -90 }}
                            animate={{ rotate: 0 }}
                            exit={{ rotate: 90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-5 w-5 text-muted-foreground" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="right"
                            initial={{ rotate: 90 }}
                            animate={{ rotate: 0 }}
                            exit={{ rotate: -90 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      <h2 className="text-2xl font-serif font-bold text-primary">{year}</h2>
                    </div>
                    <Badge variant="secondary" className="hover-glow">
                      {decretos.length} decreto{decretos.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  <div className="h-px bg-border flex-1 mx-4"></div>
                </motion.button>

                {/* Decretos Grid - Collapsible */}
                <AnimatePresence>
                  {shouldExpandYear(year) && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {decretos.map((decreto, index) => (
                            <AnimatedCard key={index} index={index}>
                              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover-lift">
                                <CardHeader className="pb-4">
                                  <div className="flex items-start justify-between mb-2">
                                    <Badge className={`${getCategoryColor(decreto.category)} hover-glow`}>
                                      {decreto.category}
                                    </Badge>
                                    <div className="flex items-center text-sm text-muted-foreground">
                                      <AnimatedIcon animation="pulse">
                                        <Calendar className="mr-1 h-4 w-4" />
                                      </AnimatedIcon>
                                      {decreto.date}
                                    </div>
                                  </div>
                                  <CardTitle className="text-lg font-serif leading-tight">Decreto N° {decreto.number}</CardTitle>
                                  <CardDescription className="font-medium text-foreground">{decreto.title}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{decreto.description}</p>
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button className="w-full hover-lift bg-green-500 text-white hover:bg-green-700 " size="sm">
                                      <AnimatedIcon animation="bounce">
                                        <Download className="mr-2 h-4 w-4" />
                                      </AnimatedIcon>
                                      Descargar PDF
                                    </Button>
                                  </motion.div>
                                </CardContent>
                              </Card>
                            </AnimatedCard>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Stats */}
      <AnimatePresence>
        {!searchTerm && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-muted/30 rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
              >
                <AnimatedIcon animation="bounce">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                </AnimatedIcon>
                <div className="text-3xl font-serif font-bold text-primary mb-2">
                  <AnimatedCounter end={Object.values(decretosByYear).flat().length} suffix="" />
                </div>
                <p className="text-muted-foreground">Total de Decretos</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
              >
                <AnimatedIcon animation="pulse">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                </AnimatedIcon>
                <div className="text-3xl font-serif font-bold text-primary mb-2">
                  <AnimatedCounter end={Object.keys(decretosByYear).length} suffix="" />
                </div>
                <p className="text-muted-foreground">Años Disponibles</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
              >
                <AnimatedIcon animation="float">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                </AnimatedIcon>
                <div className="text-3xl font-serif font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Disponibles en PDF</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Additional Info Section */}
      <AnimatedElement animation="fadeInUp" delay={0.8}>
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <AnimatedIcon animation="bounce">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              </AnimatedIcon>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Información Importante</h2>
              <p className="text-muted-foreground">
                Los decretos municipales son documentos oficiales que establecen normativas y regulaciones para la ciudad
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-lift"
              >
                <h3 className="font-serif font-bold text-foreground mb-2">¿Qué son los Decretos?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Los decretos son actos administrativos emitidos por el Intendente Municipal que establecen normas, 
                  regulaciones y políticas públicas para el funcionamiento de la ciudad.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-lift"
              >
                <h3 className="font-serif font-bold text-foreground mb-2">¿Cómo consultarlos?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Puedes buscar por número, título, categoría o descripción. Todos los documentos están disponibles 
                  para descarga en formato PDF.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  )
}