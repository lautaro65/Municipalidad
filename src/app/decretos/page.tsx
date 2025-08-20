"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Download, Search, Calendar, ChevronDown, ChevronRight } from "lucide-react"

export default function DecretosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedYears, setExpandedYears] = useState<string[]>(["2024"]) // 2024 expandido por defecto

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
  const filterDecretos = (decretos: any[]) => {
    if (!searchTerm) return decretos
    
    return decretos.filter(decreto => 
      decreto.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decreto.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decreto.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      decreto.description.toLowerCase().includes(searchTerm.toLowerCase())
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

  // Obtener decretos filtrados por año
  const getFilteredDecretosByYear = () => {
    const filtered: { [key: string]: any[] } = {}
    
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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Decretos Municipales</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Consulta y descarga los decretos municipales organizados por año. Todos los documentos están disponibles en
          formato PDF para su descarga.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Buscar por número, título o categoría..." 
            className="pl-10" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {searchTerm && (
          <p className="text-sm text-muted-foreground mt-2">
            {totalFilteredDecretos} decreto{totalFilteredDecretos !== 1 ? 's' : ''} encontrado{totalFilteredDecretos !== 1 ? 's' : ''} para "{searchTerm}"
          </p>
        )}
      </div>

      {/* Decretos by Year with Collapsible */}
      <div className="space-y-6">
        {Object.entries(filteredDecretosByYear).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No se encontraron decretos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          Object.entries(filteredDecretosByYear).map(([year, decretos]) => (
            <div key={year} className="border rounded-lg overflow-hidden bg-card">
              {/* Year Header - Clickable */}
              <button
                onClick={() => toggleYear(year)}
                className="w-full flex items-center justify-between p-6 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    {shouldExpandYear(year) ? (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    )}
                    <h2 className="text-2xl font-serif font-bold text-primary">{year}</h2>
                  </div>
                  <Badge variant="secondary">
                    {decretos.length} decreto{decretos.length !== 1 ? 's' : ''}
                  </Badge>
                </div>
                <div className="h-px bg-border flex-1 mx-4"></div>
              </button>

              {/* Decretos Grid - Collapsible */}
              {shouldExpandYear(year) && (
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {decretos.map((decreto, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-2">
                            <Badge className={getCategoryColor(decreto.category)}>{decreto.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="mr-1 h-4 w-4" />
                              {decreto.date}
                            </div>
                          </div>
                          <CardTitle className="text-lg font-serif leading-tight">Decreto N° {decreto.number}</CardTitle>
                          <CardDescription className="font-medium text-foreground">{decreto.title}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{decreto.description}</p>
                          <Button className="w-full" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Descargar PDF
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      {!searchTerm && (
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">
                {Object.values(decretosByYear).flat().length}
              </div>
              <p className="text-muted-foreground">Total de Decretos</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">{Object.keys(decretosByYear).length}</div>
              <p className="text-muted-foreground">Años Disponibles</p>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Disponibles en PDF</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}