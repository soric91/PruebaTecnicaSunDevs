# Enfoque General de la Solución
La solución la planteé pensando en que fuera fácil de entender, mantener y escalar si se necesitara agregar más lógica después.

Me enfoqué en separar responsabilidades tanto en backend como en frontend para evitar mezclar lógica de negocio con UI o acceso a datos.

---

# Decisiones Técnicas

## Backend (NestJS)
Separé en capas simples:

- **Controller:** expone el endpoint.
- **Service:** maneja la lógica.
- **Data (mock):** fuente de datos en JSON.

No compliqué más porque era una prueba técnica y el objetivo era claridad.

---

## Frontend (React)
Organicé el frontend en componentes pequeños y reutilizables:

- `TopVideo`: video con más hype.
- `VideoCard`: tarjeta individual.
- `VideoGrid`: lista de videos.
- `HypeBar`: indicador visual.
- `LoadingSkeleton`: estado de carga.
- `Navbar`: navegación.

Para el estado global usé **Context API**, manejando:
- `videos`
- `loading`
- `error`

Separé también la capa de API con **axios**, para no mezclar llamadas HTTP con componentes.

---

# Diseño basado en el requerimiento

Me enfoqué en cumplir lo principal:

- Mostrar el video con más hype como destacado.
- Renderizar el resto en grilla.
- Manejar estados de loading y error visibles.

No agregué features extra (filtros, etc.) porque no eran necesarios para la prueba.

---

# Infraestructura

- Monorepo (frontend + backend).
- Docker y Docker Compose para levantar todo fácil.

La idea era que cualquier persona pudiera correr el proyecto sin configurar nada manual.

---

# Organización del Proyecto

## Backend
- `src/`: lógica (controllers, services).
- `data/`: JSON mock.

## Frontend
- `Api/`: consumo HTTP.
- `Context/`: estado global.
- `Components/`: UI desacoplada.
- `Page/`: composición de la vista.

Todo separado para que cada parte tenga una sola responsabilidad.

---

# Problemas y Soluciones

## Problema: imágenes no renderizaban
Algunas URLs no funcionaban directamente en el navegador.

**Solución:** normalicé las URLs para que fueran compatibles con el render del frontend.

---

## Problema: rutas en Docker
El backend no encontraba el JSON en algunos casos.

**Solución:** ajusté rutas relativas y verifiqué el contexto de ejecución dentro del contenedor.

---

# Uso de IA

Usé IA como apoyo, no como generador completo:

- Validar decisiones de arquitectura.
- Detectar errores de integración (Axios, rutas, JSON).
- Sugerencias de mejora en estructura.

También usé Lovable como referencia visual para UI.

---

# Nota Final
Mi enfoque fue mantener todo lo más claro posible.

Preferí una solución simple, bien estructurada y fácil de seguir, en lugar de sobre-ingeniería.