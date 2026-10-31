# CLAUDE.md · Nuestro proyecto — prototipo del LAB (sesión 2)

## Proyecto
- Qué es: Una aplicación de recompensas para los corerdeores por cada km que hacen.
- Cliente objetivo: Los corredores habituales: sirve como una motivación extra para su entrenamiento rutinario. Los potenciales corredores que no tienen motivación.
- Problema (POV): Corredores esporádicos o irregulares, sin horario fijo, que dejan de salir cuando falla su rutina necesitan arrancar a salir a correr los días en que no tienen ganas, porque el esfuerzo que frena no es correr sino empezar: las ganas llegan una vez fuera, pero antes de salir el calor, el trabajo o la pereza pesan más.

Corredores que salen por su cuenta cuando el clima y el trabajo acompañan necesitan mantener la rutina en los días difíciles, porque su constancia depende de condiciones externas, no de un hábito que resista.

Corredores esporádicos que ya miden lo que hacen necesitan sentir que cada salida cuenta, porque ver lo hecho motiva pero no basta para salir los días sin ganas.
- Concepto: RecoRun — Ganar recompensas por correr. — El cliente gana recompensas en productos por cada kilometro que corre. Estas recompensas son tokens que se pueden gastar en diferentes tiendas y locales.
- Equipo: Raquel Guia Silva (PO), María Amelia Burgos (SM), Diana Moreira Mendes, Nicolás Gago
- Qué construimos: un prototipo clicable de app en un único index.html (una sección por pantalla, solo una visible a la vez, navegación con botones, marco de móvil de 375 px, sin backend).

## Brief
- Objetivo: Validar: Nuestro cliente es: Los corredores habituales: sirve como una motivación extra para su entrenamiento rutinario. (acertamos si > 35%)
- Público: Los corredores habituales: sirve como una motivación extra para su entrenamiento rutinario. Los potenciales corredores que no tienen motivación.
- Mensaje clave: Recompensas por correr
- Tono: Informal pero motivacional a la vez.
- Colores y estilo: Color verde lima principalmente. Estilo mas ligado a lo deportivo.
- Llamada a la acción (CTA): Accede a tus recompensas
- Qué mediremos: % de corredores habituales que descargarían la app

## Wireframe aprobado
Wireframe de baja fidelidad · app de 4 pantallas · formato móvil

Pantalla 1 — Inicio
1. Hero (titular + CTA): «Recompensas por correr»; «¿Ya saliste a correr hoy?»; botón «Accede a tus recompensas»
2. Imagen: «Producto de próxima recompensa + tokens necesarios para conseguirla»
3. Cómo funciona (pasos): «Pasos para obtener recompensa»; «1-Elegir tienda» / «2-Ver productos disponibles de acuerdo a la cantidad de tokens recibidos» / «3-Canjear tokens» / «4-Mostrar QR en tienda»

Pantalla 2 — Tienda de canjes
1. Hero (titular + CTA): «Canjea tus Tokens»; «¡Es hora de obtener tu recompensa!»; botón «Canjear»
2. Tarjetas / listado: «Comercios asociados a Recorun»; «1. Tiendas deportivas» / «2.Cafeterías» / «3.Locales fisioterapia» / «4. Restaurantes» / «5.Experiencias deportivas»
3. Imagen: «Producto más solicitado»

Pantalla 3 — Rankings
1. Hero (titular + CTA): «Rankings»; «- Ranking - Madrid» / «- Ranking - Grupo de amigos»; botón «Ver rankings»
2. Tarjetas / listado: «Listado de rankings»; «1.Ranking comunidad de Madrid» / «2.Ranking grupo de amigos» / «3.Ranking por categorías (Principiante,intermedio, avanzado)»

Pantalla 4 — Evolución personal
1. Hero (titular + CTA): «Evolución Personal»; «Mira tu evolución en el tiempo»; botón «Ver historial»
2. Tarjetas / listado: «EVOLUCIÓN»

Bocetos elegidos por el equipo (7), todos en la imagen ed-bocetos.jpg, numerados: 1)  (Diana Moreira Mendes) [Crazy 8s · ELEGIDO] · 2) Boceto 1 [Crazy 8s · móvil de Diana Moreira Mendes] · 3) Prêmios  [Crazy 8s · móvil de Diana Moreira Mendes] · 4) Ranking [Crazy 8s · móvil de Nicolás Gago] · 5) Boceto 1 [Crazy 8s · móvil de Diana Moreira Mendes] · 6) rutas ya hechas  [Crazy 8s · móvil de Raquel Guia Silva] · 7) Tienda [Crazy 8s · móvil de Nicolás Gago]. Respetad su estructura; si se contradicen con la lista de bloques, manda la lista.

## Reglas de trabajo
- Todo en castellano de España: los textos de la página y tus explicaciones.
- Un único archivo HTML autocontenido: HTML, CSS y JavaScript en el mismo archivo, sin frameworks ni servicios externos (sin Google Analytics, Tally, Clarity, cookies ni fuentes de terceros). Para medir usamos solo el medidor del curso que te daremos. Única excepción aprobada por el equipo: el mapa de la pantalla Mapa usa Leaflet (unpkg, versión fija con integrity) y las teselas de OpenStreetMap, con su atribución visible.
- Responsive y mobile-first: tiene que verse bien a 375 px de ancho sin scroll horizontal.
- Accesible: HTML semántico, contraste suficiente, texto alternativo en imágenes, labels en los formularios y navegable con teclado.
- Sin datos personales reales: nombres y fotos ficticios o marcadores. En formularios, pide solo los datos imprescindibles.
- No inventes cifras, testimonios, logos ni premios. Si hace falta un dato, deja [DATO PENDIENTE] y avísanos.
- Respeta el orden de bloques y los textos del wireframe; si propones cambios, explícalos antes de aplicarlos.
- Pide confirmación antes de borrar o sobrescribir cualquier archivo.
- Publicas tú en GitHub Pages cuando te lo pidamos (bloque PUBLICAR): repositorio público ed-equipo-3 en la cuenta nicolasgagof, URL https://nicolasgagof.github.io/ed-equipo-3/. No subas datos/, CSV de encuestas, transcripciones, .env, contraseñas ni claves; pide confirmación antes de cada comando que cambie algo en GitHub y nunca uses --force ni borres repositorios.
- Trabaja por pasos (plan → construir → revisar) y, tras cada paso, resume en 3 líneas qué has hecho y qué falta.
