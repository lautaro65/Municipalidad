"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Filter,
  Search,
  Music,
  Palette,
  Utensils,
  Trophy,
  Heart,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export default function EventosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedMonth, setSelectedMonth] = useState("todos")
  const [expandedCards, setExpandedCards] = useState<number[]>([])

  const toggleCard = (eventId: number) => {
    setExpandedCards(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    )
  }

  const eventCategories = [
    { value: "todos", label: "Todos los eventos" },
    { value: "cultural", label: "Cultural", icon: Palette, color: "bg-green-100 text-green-800" },
    { value: "deportivo", label: "Deportivo", icon: Trophy, color: "bg-green-100 text-green-800" },
    { value: "musical", label: "Musical", icon: Music, color: "bg-green-100 text-green-800" },
    { value: "gastronomico", label: "Gastronómico", icon: Utensils, color: "bg-green-100 text-green-800" },
    { value: "social", label: "Social", icon: Heart, color: "bg-green-100 text-green-800" },
    { value: "educativo", label: "Educativo", icon: BookOpen, color: "bg-green-100 text-green-800" },
  ]

  const months = [
    { value: "todos", label: "Todos los meses" },
    { value: "enero", label: "Enero" },
    { value: "febrero", label: "Febrero" },
    { value: "marzo", label: "Marzo" },
    { value: "abril", label: "Abril" },
    { value: "mayo", label: "Mayo" },
    { value: "junio", label: "Junio" },
    { value: "julio", label: "Julio" },
    { value: "agosto", label: "Agosto" },
    { value: "septiembre", label: "Septiembre" },
    { value: "octubre", label: "Octubre" },
    { value: "noviembre", label: "Noviembre" },
    { value: "diciembre", label: "Diciembre" },
  ]

  const eventos = [
    {
      id: 1,
      titulo: "Festival de Música Folklórica",
      descripcion: "Celebración de la música tradicional argentina con artistas locales y nacionales.",
      fecha: "15 de Marzo, 2024",
      hora: "19:00",
      lugar: "Plaza Central",
      categoria: "musical",
      capacidad: "500 personas",
      precio: "Entrada libre",
      imagen: "./folk-music-festival.png",
    },
    {
      id: 2,
      titulo: "Maratón Villa Esperanza",
      descripcion: "Competencia atlética de 10K y 21K por las calles principales de la ciudad.",
      fecha: "22 de Marzo, 2024",
      hora: "07:00",
      lugar: "Estadio Municipal",
      categoria: "deportivo",
      capacidad: "300 corredores",
      precio: "$2,500",
      imagen: "/marathon-runners.png",
    },
    {
      id: 3,
      titulo: "Exposición de Arte Local",
      descripcion: "Muestra de obras de artistas locales en diferentes técnicas y estilos.",
      fecha: "5 de Abril, 2024",
      hora: "10:00",
      lugar: "Centro Cultural",
      categoria: "cultural",
      capacidad: "200 visitantes",
      precio: "Entrada libre",
      imagen: "/local-art-exhibition.png",
    },
    {
      id: 4,
      titulo: "Feria Gastronómica Regional",
      descripcion: "Degustación de platos típicos y productos regionales de la zona.",
      fecha: "12 de Abril, 2024",
      hora: "11:00",
      lugar: "Parque Municipal",
      categoria: "gastronomico",
      capacidad: "1000 visitantes",
      precio: "Entrada libre",
      imagen: "/regional-food-fair.png",
    },
    {
      id: 5,
      titulo: "Taller de Educación Ambiental",
      descripcion: "Actividades educativas sobre cuidado del medio ambiente para toda la familia.",
      fecha: "18 de Abril, 2024",
      hora: "14:00",
      lugar: "Biblioteca Municipal",
      categoria: "educativo",
      capacidad: "50 participantes",
      precio: "Entrada libre",
      imagen: "/taller-educacion-ambiental-ninos.png",
    },
    {
      id: 6,
      titulo: "Encuentro de Adultos Mayores",
      descripcion: "Actividades recreativas y de integración para la tercera edad.",
      fecha: "25 de Abril, 2024",
      hora: "15:00",
      lugar: "Centro de Jubilados",
      categoria: "social",
      capacidad: "100 personas",
      precio: "Entrada libre",
      imagen: "/senior-recreational-activities.png",
    },
  ]

  const filteredEvents = eventos.filter((evento) => {
    const matchesSearch =
      evento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      evento.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "todos" || evento.categoria === selectedCategory
    const matchesMonth = selectedMonth === "todos" || evento.fecha.toLowerCase().includes(selectedMonth)

    return matchesSearch && matchesCategory && matchesMonth
  })

  const getCategoryInfo = (categoria: string) => {
    return eventCategories.find((cat) => cat.value === categoria) || eventCategories[0]
  }

  const getDateParts = (fecha: string) => {
    const parts = fecha.split(' ')
    const day = parts[0]
    const month = parts[2]?.substring(0, 3).toUpperCase()
    return { day, month }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Eventos Municipales</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubre todas las actividades, eventos y celebraciones que Villa Esperanza tiene para ofrecer. Participa y
          forma parte de nuestra comunidad.
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Filter className="mr-2 h-5 w-5" />
            Filtros de Búsqueda
          </CardTitle>
          <CardDescription>Encuentra eventos por categoría, fecha o palabra clave</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buscar evento</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre o descripción..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Categoría</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar categoría" />
                </SelectTrigger>
                <SelectContent>
                  {eventCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Mes</label>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar mes" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month.value} value={month.value}>
                      {month.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {filteredEvents.map((evento) => {
          const categoryInfo = getCategoryInfo(evento.categoria)
          const CategoryIcon = categoryInfo.icon || Calendar
          const isExpanded = expandedCards.includes(evento.id)
          const { day, month } = getDateParts(evento.fecha)

          return (
            <div
              key={evento.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              {/* Imagen del evento */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={evento.imagen || "/placeholder.svg"}
                  alt={evento.titulo}
                  className="w-full h-full object-cover"

                />
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 items-center justify-center hidden">
                  <span className="text-gray-500 text-sm">Imagen del evento</span>
                </div>
                
                {/* Badge de fecha estilo calendario */}
                <div className="absolute top-4 left-4 bg-green-600 text-white rounded-lg p-2 text-center shadow-lg">
                  <div className="text-xs font-medium">{month}</div>
                  <div className="text-lg font-bold leading-none">{day}</div>
                </div>
              </div>

              {/* Contenido básico siempre visible */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {evento.titulo}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {evento.descripcion}
                </p>

                {/* Botón Ver más */}
                <Button
                  variant="ghost"
                  onClick={() => toggleCard(evento.id)}
                  className=" justify-between  h-auto font-medium text-green-600 hover:text-white w-auto py-2"
                >
                  <span>Ver más</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>

                {/* Contenido expandible */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pt-4 border-t border-gray-100 space-y-3">
                    {/* Badge de categoría */}
                    <div className="flex justify-start">
                      <Badge className={categoryInfo.color}>
                        <CategoryIcon className="mr-1 h-3 w-3" />
                        {categoryInfo.label}
                      </Badge>
                    </div>

                    {/* Detalles del evento */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                        {evento.fecha}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="mr-2 h-4 w-4 text-gray-400" />
                        {evento.hora}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="mr-2 h-4 w-4 text-gray-400" />
                        {evento.lugar}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="mr-2 h-4 w-4 text-gray-400" />
                        {evento.capacidad}
                      </div>
                    </div>

                    {/* Precio y botón de acción */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-lg font-bold text-emerald-600">{evento.precio}</div>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Más Información
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* No results */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-serif font-bold text-foreground mb-2">No se encontraron eventos</h3>
          <p className="text-muted-foreground">Intenta ajustar los filtros de búsqueda para encontrar más eventos.</p>
        </div>
      )}

      {/* Call to Action */}
      <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardContent className="text-center py-8">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">¿Quieres organizar un evento?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Si tienes una propuesta de evento para la comunidad, no dudes en contactarnos. Estamos siempre abiertos a
            nuevas ideas que enriquezcan la vida cultural y social de Villa Esperanza.
          </p>
          <Button size="lg">Proponer Evento</Button>
        </CardContent>
      </Card>
    </div>
  )
}