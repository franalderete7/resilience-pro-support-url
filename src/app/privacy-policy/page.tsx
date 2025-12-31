import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans dark py-12 px-6 flex justify-center">
      <div className="w-full max-w-3xl space-y-8">
        
        {/* Header with Back Button */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="p-0 hover:bg-transparent">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Volver al Inicio
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight">Política de Privacidad</h1>
        <p className="text-muted-foreground">Última actualización: 31 de Diciembre de 2025</p>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introducción</h2>
            <p>
              Bienvenido a <strong>ResiliencePro</strong>. Nos comprometemos a proteger tu privacidad y asegurar que tus datos personales sean manejados de manera segura y responsable. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando utilizás nuestra aplicación móvil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Datos que Recopilamos</h2>
            <p>
              ResiliencePro está diseñada para respetar tu privacidad. Principalmente, recopilamos los siguientes tipos de datos:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Datos de Salud (HealthKit):</strong> Con tu permiso explícito, leemos datos de Apple Health (como entrenamientos, frecuencia cardíaca, sueño, y variabilidad de la frecuencia cardíaca) para personalizar tus planes de entrenamiento. Estos datos se procesan en tu dispositivo y no se venden a terceros.</li>
              <li><strong>Información de Uso:</strong> Recopilamos datos anónimos sobre cómo interactuás con la app para mejorar la experiencia del usuario y corregir errores.</li>
              <li><strong>Datos de la Cuenta:</strong> Si creás una cuenta, almacenamos tu correo electrónico y nombre para gestionar tu suscripción y preferencias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Cómo Usamos tus Datos</h2>
            <p>
              Utilizamos la información recopilada exclusivamente para:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Personalizar tus rutinas de entrenamiento mediante nuestros algoritmos de IA (ResilienceAI).</li>
              <li>Proporcionar análisis de tu progreso y recuperación.</li>
              <li>Mantener y mejorar la funcionalidad de la aplicación.</li>
              <li>Comunicarnos con vos sobre actualizaciones importantes o soporte.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Compartir Información</h2>
            <p>
              <strong>No vendemos ni alquilamos tus datos personales a terceros.</strong> Podemos compartir información únicamente en las siguientes circunstancias:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Proveedores de Servicios:</strong> Con terceros que nos ayudan a operar la app (como servicios de alojamiento en la nube), bajo estrictos acuerdos de confidencialidad.</li>
              <li><strong>Cumplimiento Legal:</strong> Si es requerido por ley o para proteger nuestros derechos legales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, ninguna transmisión por internet es 100% segura, por lo que no podemos garantizar seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Tus Derechos</h2>
            <p>
              Tenés derecho a acceder, corregir o eliminar tus datos personales en cualquier momento. Podés gestionar tus datos directamente desde la configuración de la app o contactándonos a través de nuestro soporte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Cambios a esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cualquier cambio significativo a través de la app o por correo electrónico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
            <p>
              Si tenés preguntas sobre esta Política de Privacidad, por favor contactanos en:
              <br />
              <a href="mailto:support@resiliencepro.app" className="text-primary hover:underline">support@resiliencepro.app</a>
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}

