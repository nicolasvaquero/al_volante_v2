'use client'

import { useState, useEffect } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { CheckCircle, Award, Calendar, ChevronLeft, ChevronRight, Book, Shield, Home, Car, BookOpen, ParkingCircle, Menu, X } from "lucide-react"

export function PaginaInicioAcademiaConduccionComponent() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const testimonials = [
    {
      text: "Estaba nerviosa por aprender a conducir, pero los instructore me hicieron sentir cómoda y segura. ¡Aprobé mi examen al primer intento!",
      author: "Ailen",
      image: "/my-app/public/Alumnos (1).jpg"
    },
    {
      text: "Los horarios flexibles fueron perfectos para mi vida laboral ocupada. Aprecié lo paciente y minucioso que fue mi instructor. ¡Lo recomiendo ampliamente!",
      author: "Micaela",
      image: "/Alumnos (4).jpg"
    },
    {
      text: "Gracias a al volante, me siento confiado al volante. Sus métodos de enseñanza son excelentes.",
      author: "Raul",
      image: "/Alumnos (5).jpg"
    }
  ]


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="px-4 lg:px-6 h-14 bg-yellow-400">
        <div className="container mx-auto h-full flex items-center justify-between">
          <Link legacyBehavior href="/">
            <a className="flex items-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 46.875 46.875"
              >
                <path
                  d="M23.25 16.875c-1.087 0.87 -1.061 1.639 -1.882 1.95 -0.834 0.315 -2.773 -0.467 -3.551 -0.861 -0.424 -0.216 -0.772 -0.403 -0.864 -0.911C16.841 16.444 17.494 15.049 17.737 14.437l1.549 -3.75c0.221 -0.499 0.609 -1.389 1.037 -1.716 0.454 -0.343 1.072 -0.339 1.614 -0.347h2.625c0.456 0.009 0.864 -0.004 1.239 0.3 0.604 0.486 1.841 3.684 2.214 4.575l4.684 11.437c0.799 1.997 1.967 4.207 1.987 6.375 -1.794 -0.084 -3.386 -0.928 -5.062 -1.5l-10.875 -3.562c-0.157 0.673 -0.814 2.625 -1.256 3.092 -0.369 0.392 -1.226 0.611 -1.744 0.784 -1.464 0.487 -2.94 1.151 -4.5 1.187 0.047 -1.903 1.774 -5.134 2.625 -6.937 -0.78 -0.141 -1.862 -0.532 -2.625 -0.816 -0.347 -0.129 -0.872 -0.307 -0.988 -0.709 -0.161 -0.559 0.602 -0.994 0.988 -1.23 0.924 -0.564 3.097 -1.702 4.125 -1.871 1.031 -0.169 2.542 0.384 3.562 0.66l6.375 1.528zm-6.375 6c-0.542 -0.988 -2.248 -1.753 -3.187 -0.937 1.054 0.54 2.006 0.838 3.187 0.937Zm4.312 1.5c-0.549 -1.031 -1.736 -1.254 -2.812 -1.5l-0.187 0.75zm4.5 1.5c-0.819 -0.926 -1.644 -1.076 -2.812 -1.312l-0.187 0.75c1.037 0.345 1.89 0.727 3 0.562Zm4.312 1.125c-0.934 -0.431 -1.959 -0.885 -3 -0.75 0.832 1.003 1.594 1.082 2.812 1.312l0.187 -0.187z"
                  stroke-width="0.187499765625293"
                />
              </svg>
              <span className="ml-2 text-xl font-medium">Al volante</span>
            </a>
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`md:flex items-center ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-14 left-0 right-0 bg-yellow-400 md:bg-transparent`}>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-black px-2 py-2 md:py-0" href="#caracteristicas">
              Características
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-black px-2 py-2 md:py-0" href="#paquetes">
              Paquetes
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-black px-2 py-2 md:py-0" href="#testimonios">
              Testimonios
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-black px-2 py-2 md:py-0" href="#contacto">
              Contacto
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-yellow-400">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  Aprende a Conducir con Confianza
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Únete a la Al Volante Escuela de Manejo y ponte en camino hacia el éxito. Instructores expertos, horarios flexibles y cursos completos.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary" className="bg-black text-white hover:bg-gray-800">Comenza ahora</Button>

              </div>
            </div>
          </div>
        </section>
        <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">¿Por Qué Elegirnos?</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="border-yellow-400">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <CheckCircle className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-xl font-bold">Instructores Expertos</h3>
                  <p className="text-center text-gray-600">Nuestros instructores certificados tienen años de experiencia y pasión por la enseñanza.</p>
                </CardContent>
              </Card>
              <Card className="border-yellow-400">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Calendar className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-xl font-bold">Horarios Flexibles</h3>
                  <p className="text-center text-gray-600">Elige entre una variedad de horarios que se adapten a tu estilo de vida ocupado.</p>
                </CardContent>
              </Card>
              <Card className="border-yellow-400">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Award className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-xl font-bold">Altas Tasas de Aprobación</h3>
                  <p className="text-center text-gray-600">Nuestros estudiantes logran consistentemente altas tasas de aprobación en sus exámenes de conducir.</p>
                </CardContent>
              </Card>
              <Card className="border-yellow-400">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Book className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-xl font-bold">Material Didáctico</h3>
                  <p className="text-center text-gray-600">Brindamos modelos de exámenes para que te puedas enfocar en lo que te van a tomar.</p>
                </CardContent>
              </Card>
              <Card className="border-yellow-400">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Shield className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-xl font-bold">Seguro</h3>
                  <p className="text-center text-gray-600">Contamos con vehículos equipados con doble comando y seguro especial para coche escuela.</p>
                </CardContent>
              </Card>
              <Card className="border-yellow-400">
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Home className="h-12 w-12 text-yellow-400" />
                  <h3 className="text-xl font-bold">Servicio Puerta a Puerta</h3>
                  <p className="text-center text-gray-600">Te pasamos a buscar y te dejamos en tu domicilio para que no tengas que moverte.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
<section id="paquetes" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Nuestros Servicios</h2>
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
      <Card className="border-yellow-400">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Home className="h-12 w-12 text-yellow-400" />
          <CardTitle className="text-2xl font-bold text-center">Servicio Puerta a Puerta</CardTitle>
          <p className="text-center text-gray-600">Te recogemos y te dejamos en tu domicilio para mayor comodidad.</p>
        </CardContent>
      </Card>
      <Card className="border-yellow-400">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <BookOpen className="h-12 w-12 text-yellow-400" />
          <CardTitle className="text-2xl font-bold text-center">5 Clases</CardTitle>
          <p className="text-center text-gray-600">Paquete básico de 5 clases prácticas de conducción.</p>
        </CardContent>
      </Card>
      <Card className="border-yellow-400">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <BookOpen className="h-12 w-12 text-yellow-400" />
          <CardTitle className="text-2xl font-bold text-center">10 Clases</CardTitle>
          <p className="text-center text-gray-600">Paquete intermedio de 10 clases prácticas de conducción.</p>
        </CardContent>
      </Card>
      <Card className="border-yellow-400">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <BookOpen className="h-12 w-12 text-yellow-400" />
          <CardTitle className="text-2xl font-bold text-center">15 Clases</CardTitle>
          <p className="text-center text-gray-600">Paquete completo de 15 clases prácticas de conducción.</p>
        </CardContent>
      </Card>
      <Card className="border-yellow-400">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <ParkingCircle className="h-12 w-12 text-yellow-400" />
          <CardTitle className="text-2xl font-bold text-center">Clases de Estacionamiento</CardTitle>
          <p className="text-center text-gray-600">Clases especializadas en técnicas de estacionamiento.</p>
        </CardContent>
      </Card>
      <Card className="border-yellow-400">
        <CardContent className="flex flex-col items-center space-y-4 p-6">
          <Car className="h-12 w-12 text-yellow-400" />
          <CardTitle className="text-2xl font-bold text-center">Alquiler de Auto para Rendir</CardTitle>
          <p className="text-center text-gray-600">Alquila nuestro vehículo para tu examen práctico de conducción.</p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Lo Que Dicen Nuestros Estudiantes</h2>
            <div className="relative">
              <Card className="border-yellow-400">
                <CardContent className="p-6">
                  <div className="text-center px-8">
                    <p className="text-gray-600 mb-4">{testimonials[currentTestimonial].text}</p>
                    <p className="font-semibold">- {testimonials[currentTestimonial].author}</p>
                  </div>
                </CardContent>
              </Card>
              <Button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black hover:bg-yellow-500"
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-black hover:bg-yellow-500"
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">¿Listo para Empezar?</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Contáctanos hoy para programar tu primera lección o conocer más sobre nuestros cursos.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Link href="https://linktr.ee/alvolante">
                  <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Contáctanos</Button>
                </Link>
                {/* <p className="text-xs text-gray-600">
                  O llámanos al <a href="tel:+34912345678" className="underline">912 345 678</a>
                </p> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-yellow-400 bg-yellow-50">
        <p className="text-xs text-gray-600">© 2024 Al Volante Escuela de Manejo. Todos los derechos reservados.</p>
        {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-600" href="#">
            Privacidad
          </Link>
        </nav> */}
      </footer>
    </div>
  )
}