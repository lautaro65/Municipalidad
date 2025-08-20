import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, Search, Calendar, Filter } from "lucide-react"

export default function OrdenanzasPage() {
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
          <Input placeholder="Buscar ordenanzas..." className="pl-10" />
        </div>
        <Select>
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

      {/* Ordenanzas by Year */}
      <div className="space-y-12">
        {Object.entries(ordenanzasByYear).map(([year, ordenanzas]) => (
          <div key={year}>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-primary mr-4">{year}</h2>
              <div className="flex-1 h-px bg-border"></div>
              <Badge variant="secondary" className="ml-4">
                {ordenanzas.length} ordenanzas
              </Badge>
            </div>

            <div className="space-y-4">
              {ordenanzas.map((ordenanza, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={getCategoryColor(ordenanza.category)}>{ordenanza.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            {ordenanza.date}
                          </div>
                        </div>
                        <CardTitle className="text-xl font-serif leading-tight mb-2">{ordenanza.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">{ordenanza.description}</CardDescription>
                      </div>
                      <Button className="sm:w-auto w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Descargar PDF
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
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
            <div className="text-3xl font-serif font-bold text-primary mb-2">8</div>
            <p className="text-muted-foreground">Categorías</p>
          </div>
          <div>
            <div className="text-3xl font-serif font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground">Acceso Online</p>
          </div>
        </div>
      </div>
    </div>
  )
}
