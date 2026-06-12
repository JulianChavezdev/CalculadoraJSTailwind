Interactive Dynamic Calculator
==============================

Una calculadora web moderna, minimalista y completamente responsive construida utilizando tecnologías nativas frontend. Cuenta con animaciones fluidas basadas en físicas de deformación elástica al interactuar con la interfaz y un sistema dinámico de secretos (_Easter Eggs_) basados en resultados numéricos específicos.

Despliegue oficial en producción: [**calculadora-js-tailwind.vercel.app**](https://calculadora-js-tailwind.vercel.app/)

🚀 Características Clave
------------------------

*   **Diseño 100% Fluid Responsive:** Optimizado con Tailwind CSS bajo enfoque _Mobile-First_. Adaptable a resoluciones móviles mediante layouts elásticos basados en aspect-ratio y tipografías dinámicas.
    
*   **Animaciones Avanzadas (GSAP):**
    
    *   Efecto de entrada secuencial (_stagger_) en la rejilla de botones y contenedores principales al cargar el DOM.
        
    *   Físicas elásticas interactivas (scaleX y scaleY) con timelines dedicados en cada evento de clic.
        
*   **Motor de Operaciones Nativo:** Procesamiento de expresiones matemáticas mediante evaluación funcional controlada. Soporte automático para notación científica exponencial en resultados que superen el límite de desbordamiento visual de 12 dígitos.
    
*   **Easter Eggs Inmersivos:** Capa de visualización modal inyectada dinámicamente con animaciones de rotación y escalado elástico cuando el cálculo coincide con valores clave de activación (ej. 7, 13, 69, 67, 1991, 3.14).
    

🛠️ Stack Tecnológico
---------------------

*   **Core:** Vanilla JavaScript (ES6+)
    
*   **Estilos y Layout:** Tailwind CSS v4 (@import "tailwindcss" architecture)
    
*   **Motor de Animación:** GSAP (GreenSock Animation Platform)
    
*   **Compilador y Entorno:** Vite
    
*   **Hosting:** Vercel
    



📦 Instalación y Despliegue Local
---------------------------------

1.  Bashgit clone https://github.com/tu-usuario/nombre-del-repositorio.git
    
2.  Bashcd nombre-del-repositorio
    
3.  Bashnpm install
    
4.  Bashnpm run dev
    
5.  Bashnpm run build
    

🌐 Configuración para Producción (Vercel / Linux)
-------------------------------------------------

Para asegurar la correcta resolución de dependencias y renderizado de assets en entornos de integración continua basados en sistemas Unix:

*   Las referencias a archivos estáticos del sistema de archivos local (/src/assets/...) se gestionan mediante rutas absolutas con separadores web normalizados (/).
    
*   Los scripts principales se inicializan bajo la especificación type="module" para delegar el control de empaquetado optimizado al pipeline de Vite.
    
*   Las dependencias críticas de UI como GSAP se compilan e inyectan de forma nativa desde node\_modules para mitigar bloqueos de carrera o asincronía en hilos de ejecución en producción globales.
