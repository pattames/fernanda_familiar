- Referencia

  - https://fernandafamiliar.soy/
  - Descargué y utilicé archivos de la referencia

- API

  - Utilicé el endpoint que mostraba los posts y el endpoint de los autores
  - Algunos valores de tipo “string” incluían tags y elementos de código, usé el paquete “html-react-parser” para poder renderizar correctamente dichos valores

- Estructura de la página

  - Hasta arriba puse un banner basado en la referencia
  - Debajo puse una tarjeta por cada post (renderizadas de forma dinámica)
  - Al hacer click en cualquier post → Vista a detalle (también renderizada de forma dinámica)

- Estilos

  - Mobile first: Trabajé desde el inicio con una ventana responsiva para asegurar compatibilidad móvil
  - Usé Tailwind CSS para mayor eficiencia
  - Incluí animaciones fade-in para cuando se monta la página
  - Cada post aumenta su tamaño a la hora de pasar el cursor por encima del mismo

- Google Tag Manager
  - Instalado en toda la página
  - Agregué una propiedad “sendGTME” en las tarjetas, que indica cada que alguien hace click en alguna de ellas
  - Me parece que desde mi cuenta de GTM logré hacer cierto tipo de configuración para que los datos se vean reflejados en Google Analytics, pero no estoy familiarizado con la plataforma
