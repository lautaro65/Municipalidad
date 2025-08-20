"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Search, Calendar, Filter, ChevronDown, ChevronRight } from "lucide-react"

export default function OrdenanzasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [yearFilter, setYearFilter] = useState("all")
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
  const filterOrdenanzas = (ordenanzas: any[]) => {
    if (!searchTerm) return ordenanzas
    
    return ordenanzas.filter(ordenanza => 
      ordenanza.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ordenanza.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ordenanza.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
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
    const filtered: { [key: string]: any[] } = {}
    
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
    if ((searchTerm || yearFilter !== "all") && filteredOrdenanzasByYear[year]) {
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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Ordenanzas Municipales</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Accede a las ordenanzas municipales vigentes, organizadas por año y categoría. Encuentra fácilmente la
          normativa que necesitas consultar.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Buscar por título, categoría o descripción..." 
            className="pl-10" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={yearFilter} onValueChange={setYearFilter}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <Filter className="mr-2 h-4 w-4" />
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
      </div>

      {/* Results Info */}
      {(searchTerm || yearFilter !== "all") && (
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            {totalFilteredOrdenanzas} ordenanza{totalFilteredOrdenanzas !== 1 ? 's' : ''} encontrada{totalFilteredOrdenanzas !== 1 ? 's' : ''}
            {searchTerm && ` para "${searchTerm}"`}
            {yearFilter !== "all" && ` en ${yearFilter}`}
          </p>
        </div>
      )}

      {/* Ordenanzas by Year with Collapsible */}
      <div className="space-y-6">
        {Object.entries(filteredOrdenanzasByYear).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No se encontraron ordenanzas que coincidan con los filtros aplicados.</p>
          </div>
        ) : (
          Object.entries(filteredOrdenanzasByYear).map(([year, ordenanzas]) => (
            <div key={year} className="border rounded-lg overflow-hidden bg-card">
              {/* Year Header - Clickable */}
              <button
                onClick={() => toggleYear(year)}
                className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {shouldExpandYear(year) ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                    )}
                    <h2 className="text-2xl font-serif font-bold text-primary">{year}</h2>
                  </div>
                  <Badge variant="secondary">
                    {ordenanzas.length} ordenanza{ordenanzas.length !== 1 ? 's' : ''}
                  </Badge>
                </div>
                <div className="h-px bg-border flex-1 mx-4"></div>
              </button>

              {/* Ordenanzas List - Collapsible with Animation */}
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                shouldExpandYear(year) ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {shouldExpandYear(year) && (
                  <div className="p-6 pt-0 space-y-4">
                    {ordenanzas.map((ordenanza, index) => (
                      <Card 
                        key={index} 
                        className="hover:shadow-md transition-all duration-300 hover:border-primary/20"
                      >
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge className={getCategoryColor(ordenanza.category)}>
                                  {ordenanza.category}
                                </Badge>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="mr-1 h-4 w-4" />
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
                            <Button className="sm:w-auto w-full hover:bg-primary/90 transition-colors">
                              <Download className="mr-2 h-4 w-4" />
                              Descargar PDF
                            </Button>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Quick Stats - Solo mostrar cuando no hay filtros activos */}
      {!searchTerm && yearFilter === "all" && (
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Marco Normativo Municipal</h3>
            <p className="text-muted-foreground">Nuestro compromiso con la transparencia y el acceso a la información</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                {Object.values(ordenanzasByYear).flat().length}
              </div>
              <p className="text-muted-foreground">Ordenanzas Vigentes</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                {Object.keys(ordenanzasByYear).length}
              </div>
              <p className="text-muted-foreground">Años de Registro</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">{uniqueCategories}</div>
              <p className="text-muted-foreground">Categorías</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Acceso Online</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}