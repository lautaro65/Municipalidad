"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Search, Calendar, Filter, ChevronDown, ChevronRight, FileText, TrendingUp, Clock, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  AnimatedElement, 
  AnimatedCard, 
  AnimatedIcon,
  AnimatedCounter 
} from "@/components/animation-utils"
import { ScrollProgress } from "@/components/scroll-effects"
type Ordenanza = {
  title: string
  date: string
  category: string
  description: string
}

export default function OrdenanzasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [expandedYears, setExpandedYears] = useState<string[]>(["2023"]) // 2023 expandido por defecto

  const ordenanzasByYear = {
    2023: [
      {
        title: "Ordenanza General de Urbanismo",
        date: "15 de Marzo, 2023",
        category: "Urbanismo",
        description: "Establece las normas generales para el desarrollo urbano y construcción en el municipio.",
      },
      {
        title: "Reglamento de Tránsito Municipal",
        date: "22 de Abril, 2023",
        category: "Tránsito",
        description: "Regula el tránsito vehicular y peatonal en el ámbito municipal.",
      },
      {
        title: "Presupuesto Anual del Ejercicio 2023",
        date: "10 de Diciembre, 2022",
        category: "Presupuesto",
        description: "Aprueba el presupuesto municipal para el ejercicio fiscal 2023.",
      },
    ],
    2022: [
      {
        title: "Ordenanza de Tasas y Licencias 2022",
        date: "20 de Enero, 2022",
        category: "Tributario",
        description: "Establece las tasas municipales y procedimientos para licencias comerciales.",
      },
      {
        title: "Normativa de Residuos Urbanos",
        date: "15 de Marzo, 2022",
        category: "Medio Ambiente",
        description: "Regula la gestión integral de residuos sólidos urbanos en el municipio.",
      },
      {
        title: "Código de Edificación y Uso de Suelo",
        date: "10 de Junio, 2022",
        category: "Urbanismo",
        description: "Establece las normas de edificación y uso del suelo urbano y rural.",
      },
    ],
    2021: [
      {
        title: "Ordenanza de Publicidad Exterior",
        date: "05 de Febrero, 2021",
        category: "Comercial",
        description: "Regula la instalación y mantenimiento de publicidad en espacios públicos.",
      },
      {
        title: "Reglamento de Protección Ambiental",
        date: "18 de Mayo, 2021",
        category: "Medio Ambiente",
        description: "Establece medidas de protección del medio ambiente y recursos naturales.",
      },
      {
        title: "Ordenanza Fiscal y Tarifaria 2021",
        date: "15 de Diciembre, 2020",
        category: "Tributario",
        description: "Aprueba el régimen fiscal y tarifario para el ejercicio 2021.",
      },
    ],
    2020: [
      {
        title: "Reglamento de Cementerios Municipales",
        date: "12 de Agosto, 2020",
        category: "Servicios",
        description: "Regula el funcionamiento y administración de cementerios municipales.",
      },
      {
        title: "Ordenanza de Espacios Verdes",
        date: "25 de Septiembre, 2020",
        category: "Medio Ambiente",
        description: "Establece normas para la creación y mantenimiento de espacios verdes públicos.",
      },
      {
        title: "Reglamento de Concesiones y Permisos",
        date: "30 de Noviembre, 2020",
        category: "Administrativo",
        description: "Regula el otorgamiento de concesiones y permisos municipales.",
      },
    ],
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Urbanismo: "bg-blue-100 text-blue-800",
      Tránsito: "bg-yellow-100 text-yellow-800",
      Presupuesto: "bg-green-100 text-green-800",
      Tributario: "bg-purple-100 text-purple-800",
      "Medio Ambiente": "bg-emerald-100 text-emerald-800",
      Comercial: "bg-orange-100 text-orange-800",
      Servicios: "bg-gray-100 text-gray-800",
      Administrativo: "bg-slate-100 text-slate-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  // Función para filtrar ordenanzas por término de búsqueda
  const filterOrdenanzas = (ordenanzas: Ordenanza[]) => {
    let filtered = ordenanzas
    
    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(ordenanza => 
        ordenanza.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ordenanza.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ordenanza.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    // Filtrar por categoría
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(ordenanza => 
        ordenanza.category === selectedCategory
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

  // Obtener ordenanzas filtradas por año y término de búsqueda
  const getFilteredOrdenanzasByYear = () => {
    const filtered: { [key: string]: Ordenanza[] } = {}
    
    Object.entries(ordenanzasByYear).forEach(([year, ordenanzas]) => {
      // Filtrar por año si se seleccionó uno específico
      if (yearFilter !== "all" && year !== yearFilter) return
      
      // Filtrar por término de búsqueda
      const filteredOrdenanzas = filterOrdenanzas(ordenanzas)
      if (filteredOrdenanzas.length > 0) {
        filtered[year] = filteredOrdenanzas
      }
    })
    
    return filtered
  }

  const filteredOrdenanzasByYear = getFilteredOrdenanzasByYear()
  const totalFilteredOrdenanzas = Object.values(filteredOrdenanzasByYear).flat().length

  // Si hay búsqueda activa o filtro de año, expandir todos los años que tienen resultados
  const shouldExpandYear = (year: string) => {
    if ((searchTerm || yearFilter !== "all" || selectedCategory !== "all") && filteredOrdenanzasByYear[year]) {
      return true
    }
    return expandedYears.includes(year)
  }

  // Obtener todas las categorías únicas para stats
  const uniqueCategories = new Set(
    Object.values(ordenanzasByYear).flat().map(ordenanza => ordenanza.category)
  ).size

  return (
    <div className="container mx-auto px-4 py-8">
      <ScrollProgress />
      {/* Header */}
      <AnimatedElement animation="fadeInUp" delay={0.2}>
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <AnimatedIcon animation="bounce">
              <Shield className="h-12 w-12 text-primary mr-4" />
            </AnimatedIcon>
            <h1 className="text-4xl font-serif font-bold text-foreground">Ordenanzas Municipales</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Accede a las ordenanzas municipales vigentes, organizadas por año y categoría. Encuentra fácilmente la
            normativa que necesitas consultar.
          </p>
        </div>
      </AnimatedElement>

      {/* Filters */}
      <AnimatedElement animation="fadeInUp" delay={0.4}>
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <AnimatedIcon animation="pulse">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              </AnimatedIcon>
              <Input 
                placeholder="Buscar por título, categoría o descripción..." 
                className="pl-10 hover-lift" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-full sm:w-[200px] hover-lift">
                <AnimatedIcon animation="float">
                  <Filter className="mr-2 h-4 w-4" />
                </AnimatedIcon>
                <SelectValue placeholder="Filtrar por año" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los años</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2020">2020</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[200px] hover-lift">
                <AnimatedIcon animation="bounce">
                  <FileText className="mr-2 h-4 w-4" />
                </AnimatedIcon>
                <SelectValue placeholder="Filtrar por categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                <SelectItem value="Urbanismo">Urbanismo</SelectItem>
                <SelectItem value="Tránsito">Tránsito</SelectItem>
                <SelectItem value="Presupuesto">Presupuesto</SelectItem>
                <SelectItem value="Tributario">Tributario</SelectItem>
                <SelectItem value="Medio Ambiente">Medio Ambiente</SelectItem>
                <SelectItem value="Comercial">Comercial</SelectItem>
                <SelectItem value="Servicios">Servicios</SelectItem>
                <SelectItem value="Administrativo">Administrativo</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Clear Filters Button */}
          {(searchTerm || selectedCategory !== "all" || yearFilter !== "all") && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setYearFilter("all")
              }}
              className="mt-4 px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors hover-lift mx-auto block"
            >
              Limpiar filtros
            </motion.button>
          )}
        </div>
      </AnimatedElement>

      {/* Results Info */}
      <AnimatePresence>
        {(searchTerm || yearFilter !== "all" || selectedCategory !== "all") && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 text-center"
          >
            <p className="text-sm text-muted-foreground">
              {totalFilteredOrdenanzas} ordenanza{totalFilteredOrdenanzas !== 1 ? 's' : ''} encontrada{totalFilteredOrdenanzas !== 1 ? 's' : ''}
              {searchTerm && ` para "${searchTerm}"`}
              {yearFilter !== "all" && ` en ${yearFilter}`}
              {selectedCategory !== "all" && ` en categoría "${selectedCategory}"`}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ordenanzas by Year with Collapsible */}
      <div className="space-y-6">
        <AnimatePresence>
          {Object.entries(filteredOrdenanzasByYear).length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-12"
            >
              <AnimatedIcon animation="float">
                <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              </AnimatedIcon>
              <p className="text-muted-foreground text-lg">No se encontraron ordenanzas que coincidan con los filtros aplicados.</p>
            </motion.div>
          ) : (
            Object.entries(filteredOrdenanzasByYear).map(([year, ordenanzas], yearIndex) => (
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
                      {ordenanzas.length} ordenanza{ordenanzas.length !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  <div className="h-px bg-border flex-1 mx-4"></div>
                </motion.button>

                {/* Ordenanzas List - Collapsible with Animation */}
                <AnimatePresence>
                  {shouldExpandYear(year) && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 space-y-4">
                        {ordenanzas.map((ordenanza, index) => (
                          <AnimatedCard key={index} index={index}>
                            <Card className="hover:shadow-md transition-all duration-300 hover:border-primary/20 hover-lift">
                              <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <Badge className={`${getCategoryColor(ordenanza.category)} hover-glow`}>
                                        {ordenanza.category}
                                      </Badge>
                                      <div className="flex items-center text-sm text-muted-foreground">
                                        <AnimatedIcon animation="pulse">
                                          <Calendar className="mr-1 h-4 w-4" />
                                        </AnimatedIcon>
                                        {ordenanza.date}
                                      </div>
                                    </div>
                                    <CardTitle className="text-xl font-serif leading-tight mb-2">
                                      {ordenanza.title}
                                    </CardTitle>
                                    <CardDescription className="text-base leading-relaxed">
                                      {ordenanza.description}
                                    </CardDescription>
                                  </div>
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button  className="w-full hover-lift bg-green-500 text-white hover:bg-green-700 " size="sm">
                                      <AnimatedIcon animation="bounce">
                                        <Download className="mr-2 h-4 w-4" />
                                      </AnimatedIcon>
                                      Descargar PDF
                                    </Button>
                                  </motion.div>
                                </div>
                              </CardHeader>
                            </Card>
                          </AnimatedCard>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Quick Stats - Solo mostrar cuando no hay filtros activos */}
      <AnimatePresence>
        {!searchTerm && yearFilter === "all" && selectedCategory === "all" && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ delay: 0.5 }}
            className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-24 h-24 bg-primary rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 right-4 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
            </div>
            
            <div className="text-center mb-8 relative z-10">
              <AnimatedIcon animation="bounce">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              </AnimatedIcon>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Marco Normativo Municipal</h3>
              <p className="text-muted-foreground">Nuestro compromiso con la transparencia y el acceso a la información</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
              >
                <AnimatedIcon animation="bounce">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                </AnimatedIcon>
                <div className="text-3xl font-serif font-bold text-primary mb-2">
                  <AnimatedCounter end={Object.values(ordenanzasByYear).flat().length} suffix="" />
                </div>
                <p className="text-muted-foreground">Ordenanzas Vigentes</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
              >
                <AnimatedIcon animation="pulse">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                </AnimatedIcon>
                <div className="text-3xl font-serif font-bold text-primary mb-2">
                  <AnimatedCounter end={Object.keys(ordenanzasByYear).length} suffix="" />
                </div>
                <p className="text-muted-foreground">Años de Registro</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
              >
                <AnimatedIcon animation="float">
                  <Filter className="h-8 w-8 text-primary mx-auto mb-2" />
                </AnimatedIcon>
                <div className="text-3xl font-serif font-bold text-primary mb-2">
                  <AnimatedCounter end={uniqueCategories} suffix="" />
                </div>
                <p className="text-muted-foreground">Categorías</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
              >
                <AnimatedIcon animation="bounce">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                </AnimatedIcon>
                <div className="text-3xl font-serif font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Acceso Online</p>
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
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              </AnimatedIcon>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">Información sobre Ordenanzas</h2>
              <p className="text-muted-foreground">
                Las ordenanzas municipales son normas jurídicas que regulan la convivencia ciudadana
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-lift"
              >
                <h3 className="font-serif font-bold text-foreground mb-2">¿Qué son las Ordenanzas?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Las ordenanzas son normas jurídicas de carácter general dictadas por el Concejo Municipal 
                  que regulan la convivencia ciudadana y establecen las reglas para el funcionamiento de la ciudad.
                </p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover-lift"
              >
                <h3 className="font-serif font-bold text-foreground mb-2">¿Cómo consultarlas?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Puedes buscar por título, categoría o descripción. Las ordenanzas están organizadas por año 
                  y todas están disponibles para descarga en formato PDF.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </div>
  )
}