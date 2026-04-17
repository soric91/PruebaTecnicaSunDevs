# Enfoque General

La idea fue hacer algo simple, claro y que funcione bien. Separe las cosas para que cada parte haga una sola cosa y sea facil de leer.

---

# Backend (NestJS)

Organice el backend en partes con responsabilidades claras:

- **Controller:** recibe la peticion HTTP y devuelve la respuesta.
- **Service:** tiene la logica principal (ordenar los videos por hype).
- **Mapper:** transforma los datos crudos del JSON en un formato limpio que el frontend entiende.
- **Repository:** se encarga de leer el archivo JSON. Guarda los datos en memoria la primera vez para no leer el archivo en cada peticion.
- **Utils:** funciones sueltas que hacen una sola cosa: calcular el hype, formatear la fecha y normalizar las URLs de imagenes.

Tambien agregue Swagger para que la API quede documentada automaticamente en `/docs`. Asi cualquiera puede ver que devuelve el endpoint sin leer el codigo.

Defini tipos para los datos de entrada (`RawVideo`) y de salida (`VideoClean`) para evitar errores y que quede claro que forma tienen los datos en cada paso.

---

# Frontend (React)

Organice el frontend en carpetas por responsabilidad:

- `Components/` — los componentes visuales, cada uno hace una sola cosa.
- `Context/` — el estado global (videos, loading, error) usando Context API de React.
- `Api/` — la llamada HTTP al backend, separada de los componentes.
- `Page/` — la pagina principal que junta todo.

Los componentes son:

| Componente | Que hace |
|------------|----------|
| `TopVideo` | Muestra el video con mas hype como destacado |
| `VideoCard` | Tarjeta individual de un video |
| `VideoGrid` | La grilla con el resto de videos |
| `HypeBar` | Barra visual que muestra el nivel de hype (se usa en TopVideo y en VideoCard) |
| `LoadingSkeleton` | Lo que se ve mientras cargan los datos |
| `Navbar` | La barra de arriba con el titulo y el conteo de videos |

Use Context API porque para este proyecto es suficiente. No necesitaba algo mas pesado como Redux.

---

# Testing

Agregue tests para verificar que la logica funciona bien:

**Backend:**
- Tests para cada funcion util (calculo de hype, fechas, imagenes) cubriendo casos normales y casos raros (valores en cero, textos invalidos, etc.)
- Tests para el mapper, el service y el controller verificando que cada capa hace lo que le toca
- Un test e2e que prueba el endpoint real (`GET /api/videos`) y valida que los videos vuelvan ordenados y con la forma correcta

**Frontend:**
- Tests de componentes con Testing Library para verificar que renderizan bien, que los badges aparecen cuando deben y que las imagenes tienen lazy loading

---

# Formula de Hype

```
hype = (comentarios + likes) / vistas
```

Si el titulo del video tiene la palabra "tutorial", el hype se multiplica por 2.

Si las vistas son 0, el hype es 0 (para evitar division por cero).

---

# Docker

Use Docker y Docker Compose para que cualquiera pueda levantar el proyecto sin configurar nada.

- Ambos servicios usan builds en dos etapas: una para compilar y otra solo con lo necesario para correr. Esto hace que las imagenes sean mas livianas.
- El backend tiene un healthcheck que verifica que el endpoint responde antes de que el frontend arranque.
- Los recursos (memoria y CPU) estan limitados por servicio.

---

# Problemas que encontre y como los resolvi

## Las imagenes no cargaban

Algunas URLs del mock usaban `via.placeholder.com` que no renderizaba bien en el navegador. Las converti a `placehold.co` que funciona igual pero sin problemas. Tambien agregue `encodeURIComponent` para que caracteres especiales en los titulos no rompan la URL.

## Rutas del JSON en Docker

Dentro del contenedor las rutas eran distintas a las de desarrollo local. Ajuste las rutas para que funcionen en ambos casos y agregue un volumen de solo lectura en Docker Compose para los datos.

---

# Uso de IA

Use IA como apoyo, no como generador completo:

- Para validar decisiones de como organizar el codigo.
- Para detectar errores de integracion (rutas, llamadas HTTP, formato del JSON).
- Para sugerencias de mejora en la estructura.

Tambien use Lovable como referencia visual para la UI.

---

# Nota Final

Mi enfoque fue mantener todo lo mas claro posible. Preferi una solucion simple y bien organizada en vez de agregar cosas que no se necesitan para la prueba.
