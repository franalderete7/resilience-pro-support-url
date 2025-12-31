import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaApple } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground font-sans dark">
      {/* Hero Section */}
      <main className="flex-1 w-full max-w-3xl px-6 py-12 flex flex-col items-center text-center gap-8">
        
        {/* App Icon */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 shadow-xl rounded-[22%] overflow-hidden bg-black/5">
          <Image
            src="/icon.png"
            alt="Icono de la App ResiliencePro"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            ResiliencePro
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Entrená de forma inteligente con ResilienceAI.
          </p>
        </div>

        {/* App Store Badge - CSS Version */}
        <Link href="#" className="inline-block transition-transform hover:scale-105 active:scale-95">
          <div className="bg-white text-black rounded-xl px-4 py-2 flex items-center gap-3 pr-5">
            <FaApple className="w-8 h-8" />
            <div className="flex flex-col items-start leading-none">
              <span className="text-[10px] font-medium tracking-wide">Consíguelo en el</span>
              <span className="text-xl font-bold -mt-0.5">App Store</span>
            </div>
          </div>
        </Link>

        <div className="w-full h-px bg-border my-8" />

        {/* Support Section */}
        <section className="w-full space-y-6">
          <h2 className="text-2xl font-bold">Soporte de la App</h2>
          <p className="text-muted-foreground leading-relaxed">
            ¿Necesitás ayuda con tu plan de entrenamiento o tenés dudas sobre tu suscripción? 
            Nuestro equipo de soporte está acá para ayudarte.
          </p>
          
          <div className="flex justify-center">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 bg-[#007AFF] hover:bg-[#0066CC] text-white rounded-full px-8 text-lg shadow-lg shadow-blue-500/20"
            >
              <a href="mailto:support@resiliencepro.app">
                <Mail className="w-5 h-5" />
                Contactar a Soporte
              </a>
            </Button>
          </div>
        </section>

        <div className="w-full h-px bg-border my-8" />

        {/* FAQ Section */}
        <section className="w-full text-left space-y-6">
          <h2 className="text-2xl font-bold text-center md:text-left">Preguntas Frecuentes</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>¿Cómo cancelo mi suscripción?</AccordionTrigger>
              <AccordionContent>
                Las suscripciones son administradas directamente por Apple. Andá a la Configuración de tu iPhone {'>'} Apple ID {'>'} Suscripciones para administrar o cancelar tu suscripción a ResiliencePro.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>¿Cómo funciona la personalización con IA?</AccordionTrigger>
              <AccordionContent>
                ResilienceAI analiza tu historial de entrenamiento, métricas de recuperación y comentarios para ajustar tu plan de entrenamiento diariamente, asegurando un progreso óptimo sin agotamiento.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>¿Puedo sincronizar con Apple Health?</AccordionTrigger>
              <AccordionContent>
                ¡Sí! ResiliencePro se integra perfectamente con Apple Health para registrar tus entrenamientos y leer datos de recuperación como VFC (Variabilidad de la Frecuencia Cardíaca) y Sueño.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Perdí mis datos, ¿qué hago?</AccordionTrigger>
              <AccordionContent>
                Si iniciaste sesión con iCloud o una cuenta de correo, simplemente volvé a iniciar sesión para restaurar tus datos. Si usaste una cuenta de invitado, por favor contactá a soporte para recibir asistencia.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-sm text-muted-foreground border-t bg-muted/30">
        <div className="flex justify-center gap-6 mb-4">
          <Link href="#" className="hover:text-foreground transition-colors">Política de Privacidad</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Términos de Servicio</Link>
        </div>
        <p>&copy; 2025 ResiliencePro. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
