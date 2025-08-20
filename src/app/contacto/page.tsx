"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Shield,
  Heart,
  Users,
  Headphones,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const emergencyServices = [
    {
      title: "Atención al Ciudadano",
      number: "0800-888-0404",
      icon: Users,
      gradient: "from-blue-500 to-blue-700",
      shadowColor: "shadow-blue-500/25",
      description: "Consultas generales y trámites",
    },
    {
      title: "Mesa de Ayuda en Sistemas",
      number: "+54 9 351-428-5656",
      icon: Headphones,
      gradient: "from-red-500 to-red-700",
      shadowColor: "shadow-red-500/25",
      description: "Soporte técnico y sistemas",
    },
    {
      title: "Emergencias Médicas",
      number: "107",
      icon: Heart,
      gradient: "from-orange-500 to-orange-700",
      shadowColor: "shadow-orange-500/25",
      description: "Atención médica de emergencia",
    },
    {
      title: "Defensa Civil",
      number: "103",
      icon: Shield,
      gradient: "from-emerald-500 to-emerald-700",
      shadowColor: "shadow-emerald-500/25",
      description: "Emergencias y protección civil",
    },
    {
      title: "Salud Mental y Adicciones",
      number: "0800-888-5555",
      icon: Heart,
      gradient: "from-purple-500 to-purple-700",
      shadowColor: "shadow-purple-500/25",
      description: "Apoyo psicológico y adicciones",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content: "Edificio Municipal, Calle Principal 123\nCiudad Ejemplo, País",
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Teléfonos de Contacto",
      content: "(123) 456-7890 (General)\n(123) 987-6543 (Emergencias)",
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      content: "contacto@municipalidad.ejemplo.com",
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Horarios de Atención",
      content: "Lunes a Viernes: 8:00 - 16:00\nSábados: 9:00 - 13:00",
      color: "text-orange-600",
    },
  ];

  const faqData = [
    {
      question: "¿Qué servicios ofrece la municipalidad?",
      answer:
        "Ofrecemos una amplia gama de servicios incluyendo gestión de trámites, servicios de salud, educación, obras públicas, recolección de residuos, mantenimiento de espacios verdes, y atención ciudadana las 24 horas.",
    },
    {
      question: "¿Cómo puedo pagar mis impuestos municipales de forma segura?",
      answer:
        "Puede pagar sus impuestos a través de nuestro portal web seguro, en las oficinas municipales, bancos adheridos, o mediante débito automático. Aceptamos tarjetas de crédito, débito y transferencias bancarias.",
    },
    {
      question:
        "¿Dónde puedo encontrar información sobre eventos locales y programas comunitarios?",
      answer:
        "Toda la información sobre eventos y programas está disponible en nuestra página de Eventos, redes sociales oficiales, carteleras municipales y nuestro boletín informativo mensual.",
    },
    {
      question:
        "¿Cómo reporto un problema como un bache o alumbrado público dañado?",
      answer:
        "Puede reportar problemas a través de nuestro formulario web, llamando al 0800-888-0404, enviando un email, o usando nuestra app móvil 'Villa Esperanza Conecta' disponible en todas las plataformas.",
    },
    {
      question:
        "¿Cómo solicito un permiso de construcción o licencia comercial?",
      answer:
        "Debe presentar la documentación requerida en la Oficina de Habilitaciones, completar el formulario correspondiente y abonar las tasas municipales. El proceso puede iniciarse online a través de nuestro portal de trámites.",
    },
    {
      question: "¿Dónde encuentro las actas del Concejo Deliberante?",
      answer:
        "Las actas y órdenes del día están disponibles en la sección 'Transparencia' de nuestro sitio web, en la biblioteca municipal y pueden solicitarse presencialmente en la Secretaría del Concejo Deliberante.",
    },
    {
      question:
        "¿Cómo solicito reparación de calles o servicios de mantenimiento?",
      answer:
        "Puede solicitar reparaciones completando el formulario de reclamos online, llamando a nuestra línea directa, o acercándose personalmente a la Secretaría de Obras Públicas con la documentación correspondiente.",
    },
    {
      question:
        "¿Cómo puedo participar o ser voluntario en proyectos comunitarios?",
      answer:
        "Contamos con diversos programas de voluntariado. Puede inscribirse en la Secretaría de Desarrollo Social, completar el formulario online, o participar en nuestras reuniones comunitarias mensuales los primeros viernes de cada mes.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
          Contáctenos
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Estamos aquí para servirle. No dude en ponerse en contacto con
          nosotros para cualquier consulta, sugerencia o comentario. Su opinión
          es importante.
        </p>
      </div>

      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Servicios de Emergencia y Contacto
          </h2>
          <p className="text-muted-foreground">
            Números importantes para diferentes tipos de consultas y emergencias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {emergencyServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} p-1 hover:scale-105 transition-all duration-500 ${service.shadowColor} hover:shadow-2xl`}
              >
                {/* Glassmorphism background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

                {/* Animated background elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>

                <div className="relative bg-white/95 backdrop-blur-sm rounded-[22px] p-6 h-full flex flex-col">
                  {/* Icon and alert indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600 font-medium">
                        Activo
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-800 mb-3 leading-tight group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>

                  {/* Phone number with modern styling */}
                  <div
                    className={`relative mb-4 p-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-inner`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-2xl"></div>
                    <div className="relative flex items-center justify-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-lg font-bold tracking-wide">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Action button with modern design */}
                  <button
                    className={`w-full py-3 px-4 rounded-2xl bg-gradient-to-r ${service.gradient} text-white font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}
                  >
                    <Phone className="h-4 w-4" />
                    <span>Llamar Ahora</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick access floating bar - FIXED RESPONSIVE */}
        <div className="mt-12 flex justify-center px-4">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl md:rounded-full p-2 shadow-2xl border border-white/20 w-full max-w-lg md:max-w-none md:w-auto">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-red-500 text-white w-full md:w-auto justify-center whitespace-nowrap">
                <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium text-sm">Emergencia:</span>
                <span className="font-bold">911</span>
              </div>
              <div className="flex items-center space-x-1 px-4 py-2 rounded-full bg-blue-500 text-white w-full md:w-auto justify-center whitespace-nowrap">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="font-medium text-sm">General:</span>
                <span className="font-bold">0800-888-0404</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
            Información de Contacto
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-muted ${info.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg font-serif">
                        {info.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Map Placeholder - FIXED RESPONSIVE */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg font-serif flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Ubicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54481.110975700234!2d-64.49973669999999!3d-31.412212949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d6640d6777c71%3A0x75c24ab6cb121bed!2sVilla%20Carlos%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1755649306474!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formulario de Contacto - Hacemos este div "sticky" */}
        <div className="sticky top-20 h-fit">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif flex items-center">
                <MessageCircle className="mr-2 h-6 w-6 text-primary" />
                Envíanos un Mail
              </CardTitle>
              <CardDescription className="text-base">
                Complete el formulario y nos pondremos en contacto con usted a la brevedad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-sm font-medium">
                    Nombre Completo
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu.correo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-sm font-medium">
                    Mensaje
                  </Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full h-11 text-base">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="mt-6 bg-destructive/5 border-destructive/20">
            <CardHeader>
              <CardTitle className="text-lg font-serif text-destructive flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Contacto de Emergencia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Para situaciones de emergencia, comuníquese directamente:
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-destructive" />
                  <span className="font-medium">(123) 987-6543</span>
                  <span className="text-sm text-muted-foreground">
                    - Emergencias 24/7
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-destructive" />
                  <span className="font-medium">
                    emergencias@municipalidad.ejemplo.com
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Preguntas Frecuentes
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los ciudadanos suelen preguntar sobre estos temas. Encuentra
            respuestas rápidas a las consultas más comunes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.slice(0, 4).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 py-2 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.slice(4, 8).map((faq, index) => (
                <AccordionItem
                  key={index + 4}
                  value={`item-${index + 4}`}
                  className="border rounded-lg px-6 py-2 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div className="text-left">
                  <p className="font-medium text-foreground">
                    ¿No encontraste lo que buscabas?
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contáctanos directamente y te ayudaremos
                  </p>
                </div>
                <Button variant="default" size="sm">
                  Contactar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}