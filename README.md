# Prueba Técnica SunDevs

## Clonar el repositorio

```bash
git clone https://github.com/soric91/PruebaTecnicaSunDevs.git
cd PruebaTecnicaSunDevs
cp .env.example .env
cp frontendPrT/.env.example frontendPrT/.env
```

## Levantar el proyecto (rápido con Docker)

```bash
docker compose up --build -d
```

Abrir:

- Frontend: `http://localhost:3010`
- Backend: `http://localhost:4000/api/videos`

Para detener:

```bash
docker compose down
```
