"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

interface TimelineEventData {
  year: number
  title: string
  description: string
  details: string
  image: string
  category: "founding" | "development" | "modernization" | "present"
}

interface TimelineEventProps {
  event: TimelineEventData
  index: number
  isLeft: boolean
  isVisible: boolean
  onVisible: () => void
}

const timelineEvents: TimelineEventData[] = [
  {
    year: 1825,
    title: "Primeros Asentamientos",
    description:
      "Los primeros colonos europeos llegan a la región de la pampa argentina, estableciendo pequeños puestos ganaderos.",
    details:
      "Familias de origen español e italiano se aventuran en estas tierras vírgenes, atraídos por la fertilidad del suelo y las vastas extensiones para el ganado. Los primeros ranchos se construyen cerca de fuentes de agua dulce.",
    image: "/colonial-pampa-1825.png",
    category: "founding",
  },
  {
    year: 1850,
    title: "Establecimiento de Familias",
    description:
      "Familias de diversas procedencias se asientan permanentemente cerca del río, formando la primera comunidad.",
    details:
      "La llegada de inmigrantes alemanes, franceses e irlandeses enriquece la diversidad cultural. Se establecen las primeras pulperías y se inicia el comercio de cueros y lana con Buenos Aires.",
    image: "/immigrant-families-pampa-1850.png",
    category: "founding",
  },
  {
    year: 1867,
    title: "Fundación Oficial",
    description: "Villa Esperanza es fundada oficialmente como ciudad por decreto del gobierno provincial.",
    details:
      "El 15 de agosto de 1867, el gobernador firma el decreto de fundación. Se traza el primer plano urbano con la plaza central y las calles principales. La población alcanza los 500 habitantes.",
    image: "/argentina-town-founding-1867.png",
    category: "founding",
  },
  {
    year: 1867,
    title: "Llegada del Ferrocarril",
    description:
      "Inauguración del ferrocarril bajo la dirección del ingeniero Juan Felipe Rodríguez, conectando la ciudad con Buenos Aires.",
    details:
      "La estación ferroviaria se convierte en el corazón económico de la ciudad. El tren trae nuevos pobladores, mercaderías y conecta Villa Esperanza con los mercados nacionales e internacionales.",
    image: "/argentina-train-1867.png",
    category: "development",
  },
  {
    year: 1880,
    title: "Primeras Instituciones",
    description:
      "Se establecen las primeras escuelas, iglesias y edificios públicos que dan forma a la identidad ciudadana.",
    details:
      "La Escuela Nacional N°1 abre sus puertas con 120 alumnos. Se construye la Iglesia del Sagrado Corazón y el primer hospital. La municipalidad se instala en un edificio de dos plantas frente a la plaza.",
    image: "/historic-school-church-argentina-1880.png",
    category: "development",
  },
  {
    year: 1900,
    title: "Desarrollo Agrícola",
    description: "La agricultura y ganadería florecen, consolidando la identidad productiva de la ciudad.",
    details:
      "Se introducen nuevas técnicas agrícolas y razas de ganado. Los campos de trigo y maíz se extienden por miles de hectáreas. Villa Esperanza se convierte en un importante centro de acopio de granos.",
    image: "/pampa-agriculture-1900.png",
    category: "development",
  },
  {
    year: 1950,
    title: "Modernización",
    description:
      "Período de crecimiento y modernización de la infraestructura urbana con la llegada de servicios básicos.",
    details:
      "Se instala la red eléctrica, el servicio telefónico y el agua corriente. Se pavimentan las calles principales y se construye el primer hospital moderno. La población supera los 15,000 habitantes.",
    image: "/urban-modernization-argentina-1950.png",
    category: "modernization",
  },
  {
    year: 2024,
    title: "Villa Esperanza Hoy",
    description: "Una ciudad próspera con 157 años de rica historia, tradición y proyección hacia el futuro.",
    details:
      "Con más de 50,000 habitantes, Villa Esperanza es un centro regional importante. Cuenta con universidad, centros de salud modernos, parques industriales y una rica vida cultural que honra su patrimonio histórico.",
    image: "/modern-argentine-city-aerial-2024.png",
    category: "present",
  },
]

// Componente individual para cada evento del timeline
function TimelineEvent({ event, index, isLeft, isVisible, onVisible }: TimelineEventProps) {
  const eventRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(eventRef, { once: true, amount: 0.3 })
  console.log(index)
  useEffect(() => {
    if (isInView) {
      onVisible()
    }
  }, [isInView, onVisible])

  return (
    <motion.div
      ref={eventRef}
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* Año: centrado en desktop, pegado a la línea en mobile */}
      <motion.div
        className="absolute left-4 sm:left-1/2 top-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 z-20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{ 
          scale: isVisible ? 1 : 0,
          opacity: isVisible ? 1 : 0 
        }}
      >
        <div className="bg-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-4 border-white">
          <span className="font-bold text-sm">
            {event.year}
          </span>
        </div>
      </motion.div>

      {/* Contenido principal: apilado en mobile, dos columnas en desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center sm:pl-0 pl-20">
        {/* Imagen */}
        <motion.div
          className={
            'order-1 sm:' + (isLeft ? 'order-1' : 'order-2')
          }
          initial={{ x: isLeft ? -80 : 80, opacity: 0 }}
          animate={{ 
            x: isVisible ? 0 : (isLeft ? -80 : 80), 
            opacity: isVisible ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            x: isVisible ? 0 : (isLeft ? -80 : 80), 
            opacity: isVisible ? 1 : 0 
          }}
        >
          <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-medium">
                Imagen {event.year}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Texto */}
        <motion.div
          className={`order-2 sm:${isLeft ? 'order-2' : 'order-1'} text-left sm:${isLeft ? 'pl-8' : 'pr-8'} pl-0 pr-0`}
          initial={{ x: isLeft ? 80 : -80, opacity: 0 }}
          animate={{ 
            x: isVisible ? 0 : (isLeft ? 80 : -80), 
            opacity: isVisible ? 1 : 0 
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ 
            x: isVisible ? 0 : (isLeft ? 80 : -80), 
            opacity: isVisible ? 1 : 0 
          }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {event.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-base">
            {event.description}
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            {event.details}
          </p>
          {/* Categoría */}
          <div>
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                event.category === "founding"
                  ? "bg-amber-100 text-amber-700"
                  : event.category === "development"
                  ? "bg-blue-100 text-blue-700"
                  : event.category === "modernization"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {event.category === "founding"
                ? "Fundación"
                : event.category === "development"
                ? "Desarrollo"
                : event.category === "modernization"
                ? "Modernización"
                : "Actualidad"}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleEvents, setVisibleEvents] = useState<number[]>([])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Función para agregar un evento a la lista de visibles
  const addVisibleEvent = (index: number) => {
    setVisibleEvents(prev => {
      if (!prev.includes(index)) {
        return [...prev, index].sort((a, b) => a - b)
      }
      return prev
    })
  }

  return (
    <div className=" bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Historia de Villa Esperanza</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un recorrido por los momentos más importantes que forjaron nuestra ciudad a lo largo de 157 años
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Línea vertical: centrada en desktop, lateral en mobile */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-px w-px bg-gray-300 h-full">
            <motion.div
              className="w-full bg-emerald-500 origin-top"
              style={{ height: lineProgress }}
            />
          </div>

          <div className="space-y-24">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0
              const isVisible = visibleEvents.includes(index)

              return (
                <TimelineEvent
                  key={index}
                  event={event}
                  index={index}
                  isLeft={isLeft}
                  isVisible={isVisible}
                  onVisible={() => addVisibleEvent(index)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}